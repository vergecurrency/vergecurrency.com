

// bitaddress.org code -- though significantly modified for this implementation.
// For the original modified version of this code see
// https://github.com/pointbiz/bitaddress.org

var ninja = { wallets: {} };

ninja.privateKey = {
	isPrivateKey: function (key) {
		return (
			Bitcoin.ECKey.isWalletImportFormat(key) ||
			Bitcoin.ECKey.isCompressedWalletImportFormat(key) ||
			Bitcoin.ECKey.isHexFormat(key) ||
			Bitcoin.ECKey.isBase64Format(key) ||
			Bitcoin.ECKey.isMiniFormat(key)
		);
	},
	getECKeyFromAdding: function (privKey1, privKey2) {
		var n = EllipticCurve.getSECCurveByName("secp256k1").getN();
		var ecKey1 = new Bitcoin.ECKey(privKey1);
		var ecKey2 = new Bitcoin.ECKey(privKey2);
		// if both keys are the same return null
		if (ecKey1.getBitcoinHexFormat() == ecKey2.getBitcoinHexFormat()) return null;
		if (ecKey1 == null || ecKey2 == null) return null;
		var combinedPrivateKey = new Bitcoin.ECKey(ecKey1.priv.add(ecKey2.priv).mod(n));
		// compressed when both keys are compressed
		if (ecKey1.compressed && ecKey2.compressed) combinedPrivateKey.setCompressed(true);
		return combinedPrivateKey;
	},
	getECKeyFromMultiplying: function (privKey1, privKey2) {
		var n = EllipticCurve.getSECCurveByName("secp256k1").getN();
		var ecKey1 = new Bitcoin.ECKey(privKey1);
		var ecKey2 = new Bitcoin.ECKey(privKey2);
		// if both keys are the same return null
		if (ecKey1.getBitcoinHexFormat() == ecKey2.getBitcoinHexFormat()) return null;
		if (ecKey1 == null || ecKey2 == null) return null;
		var combinedPrivateKey = new Bitcoin.ECKey(ecKey1.priv.multiply(ecKey2.priv).mod(n));
		// compressed when both keys are compressed
		if (ecKey1.compressed && ecKey2.compressed) combinedPrivateKey.setCompressed(true);
		return combinedPrivateKey;
	},
	// 58 base58 characters starting with 6P
	isBIP38Format: function (key) {
		key = key.toString();
		return (/^6P[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{56}$/.test(key));
	},
	BIP38EncryptedKeyToByteArrayAsync: function (base58Encrypted, passphrase, callback) {
		var hex;
		try {
			hex = Bitcoin.Base58.decode(base58Encrypted);
		} catch (e) {
			callback(new Error(ninja.translator.get("detailalertnotvalidprivatekey")));
			return;
		}

		// 43 bytes: 2 bytes prefix, 37 bytes payload, 4 bytes checksum
		if (hex.length != 43) {
			callback(new Error(ninja.translator.get("detailalertnotvalidprivatekey")));
			return;
		}
		// first byte is always 0x01 
		else if (hex[0] != 0x01) {
			callback(new Error(ninja.translator.get("detailalertnotvalidprivatekey")));
			return;
		}

		var expChecksum = hex.slice(-4);
		hex = hex.slice(0, -4);
		var checksum = Bitcoin.Util.dsha256(hex);
		if (checksum[0] != expChecksum[0] || checksum[1] != expChecksum[1] || checksum[2] != expChecksum[2] || checksum[3] != expChecksum[3]) {
			callback(new Error(ninja.translator.get("detailalertnotvalidprivatekey")));
			return;
		}

		var isCompPoint = false;
		var isECMult = false;
		var hasLotSeq = false;
		// second byte for non-EC-multiplied key
		if (hex[1] == 0x42) {
			// key should use compression
			if (hex[2] == 0xe0) {
				isCompPoint = true;
			}
			// key should NOT use compression
			else if (hex[2] != 0xc0) {
				callback(new Error(ninja.translator.get("detailalertnotvalidprivatekey")));
				return;
			}
		}
		// second byte for EC-multiplied key 
		else if (hex[1] == 0x43) {
			isECMult = true;
			isCompPoint = (hex[2] & 0x20) != 0;
			hasLotSeq = (hex[2] & 0x04) != 0;
			if ((hex[2] & 0x24) != hex[2]) {
				callback(new Error(ninja.translator.get("detailalertnotvalidprivatekey")));
				return;
			}
		}
		else {
			callback(new Error(ninja.translator.get("detailalertnotvalidprivatekey")));
			return;
		}

		var decrypted;
		var AES_opts = { mode: new Crypto.mode.ECB(Crypto.pad.NoPadding), asBytes: true };

		var verifyHashAndReturn = function () {
			var tmpkey = new Bitcoin.ECKey(decrypted); // decrypted using closure
			var base58AddrText = tmpkey.setCompressed(isCompPoint).getBitcoinAddress(); // isCompPoint using closure
			checksum = Bitcoin.Util.dsha256(base58AddrText); // checksum using closure

			if (checksum[0] != hex[3] || checksum[1] != hex[4] || checksum[2] != hex[5] || checksum[3] != hex[6]) {
				callback(new Error(ninja.translator.get("bip38alertincorrectpassphrase"))); // callback using closure
				return;
			}
			callback(tmpkey.getBitcoinPrivateKeyByteArray()); // callback using closure
		};

		if (!isECMult) {
			var addresshash = hex.slice(3, 7);
			Crypto_scrypt(passphrase, addresshash, 16384, 8, 8, 64, function (derivedBytes) {
				var k = derivedBytes.slice(32, 32 + 32);
				decrypted = Crypto.AES.decrypt(hex.slice(7, 7 + 32), k, AES_opts);
				for (var x = 0; x < 32; x++) decrypted[x] ^= derivedBytes[x];
				verifyHashAndReturn(); //TODO: pass in 'decrypted' as a param
			});
		}
		else {
			var ownerentropy = hex.slice(7, 7 + 8);
			var ownersalt = !hasLotSeq ? ownerentropy : ownerentropy.slice(0, 4);
			Crypto_scrypt(passphrase, ownersalt, 16384, 8, 8, 32, function (prefactorA) {
				var passfactor;
				if (!hasLotSeq) { // hasLotSeq using closure
					passfactor = prefactorA;
				} else {
					var prefactorB = prefactorA.concat(ownerentropy); // ownerentropy using closure
					passfactor = Bitcoin.Util.dsha256(prefactorB);
				}
				var kp = new Bitcoin.ECKey(passfactor);
				var passpoint = kp.setCompressed(true).getPub();

				var encryptedpart2 = hex.slice(23, 23 + 16);

				var addresshashplusownerentropy = hex.slice(3, 3 + 12);
				Crypto_scrypt(passpoint, addresshashplusownerentropy, 1024, 1, 1, 64, function (derived) {
					var k = derived.slice(32);

					var unencryptedpart2 = Crypto.AES.decrypt(encryptedpart2, k, AES_opts);
					for (var i = 0; i < 16; i++) { unencryptedpart2[i] ^= derived[i + 16]; }

					var encryptedpart1 = hex.slice(15, 15 + 8).concat(unencryptedpart2.slice(0, 0 + 8));
					var unencryptedpart1 = Crypto.AES.decrypt(encryptedpart1, k, AES_opts);
					for (var i = 0; i < 16; i++) { unencryptedpart1[i] ^= derived[i]; }

					var seedb = unencryptedpart1.slice(0, 0 + 16).concat(unencryptedpart2.slice(8, 8 + 8));

					var factorb = Bitcoin.Util.dsha256(seedb);

					var ps = EllipticCurve.getSECCurveByName("secp256k1");
					var privateKey = BigInteger.fromByteArrayUnsigned(passfactor).multiply(BigInteger.fromByteArrayUnsigned(factorb)).remainder(ps.getN());

					decrypted = privateKey.toByteArrayUnsigned();
					verifyHashAndReturn();
				});
			});
		}
	},
	BIP38PrivateKeyToEncryptedKeyAsync: function (base58Key, passphrase, compressed, callback) {
		var privKey = new Bitcoin.ECKey(base58Key);
		var privKeyBytes = privKey.getBitcoinPrivateKeyByteArray();
		var address = privKey.setCompressed(compressed).getBitcoinAddress();

		// compute sha256(sha256(address)) and take first 4 bytes
		var salt = Bitcoin.Util.dsha256(address).slice(0, 4);

		// derive key using scrypt
		var AES_opts = { mode: new Crypto.mode.ECB(Crypto.pad.NoPadding), asBytes: true };

		Crypto_scrypt(passphrase, salt, 16384, 8, 8, 64, function (derivedBytes) {
			for (var i = 0; i < 32; ++i) {
				privKeyBytes[i] ^= derivedBytes[i];
			}

			// 0x01 0x42 + flagbyte + salt + encryptedhalf1 + encryptedhalf2
			var flagByte = compressed ? 0xe0 : 0xc0;
			var encryptedKey = [0x01, 0x42, flagByte].concat(salt);
			encryptedKey = encryptedKey.concat(Crypto.AES.encrypt(privKeyBytes, derivedBytes.slice(32), AES_opts));
			encryptedKey = encryptedKey.concat(Bitcoin.Util.dsha256(encryptedKey).slice(0, 4));
			callback(Bitcoin.Base58.encode(encryptedKey));
		});
	},
	BIP38GenerateIntermediatePointAsync: function (passphrase, lotNum, sequenceNum, callback) {
		var noNumbers = lotNum === null || sequenceNum === null;
		var rng = new SecureRandom();
		var ownerEntropy, ownerSalt;

		if (noNumbers) {
			ownerSalt = ownerEntropy = new Array(8);
			rng.nextBytes(ownerEntropy);
		}
		else {
			// 1) generate 4 random bytes
			ownerSalt = new Array(4);

			rng.nextBytes(ownerSalt);

			// 2)  Encode the lot and sequence numbers as a 4 byte quantity (big-endian):
			// lotnumber * 4096 + sequencenumber. Call these four bytes lotsequence.
			var lotSequence = BigInteger(4096 * lotNum + sequenceNum).toByteArrayUnsigned();

			// 3) Concatenate ownersalt + lotsequence and call this ownerentropy.
			var ownerEntropy = ownerSalt.concat(lotSequence);
		}


		// 4) Derive a key from the passphrase using scrypt
		Crypto_scrypt(passphrase, ownerSalt, 16384, 8, 8, 32, function (prefactor) {
			// Take SHA256(SHA256(prefactor + ownerentropy)) and call this passfactor
			var passfactorBytes = noNumbers ? prefactor : Bitcoin.Util.dsha256(prefactor.concat(ownerEntropy));
			var passfactor = BigInteger.fromByteArrayUnsigned(passfactorBytes);

			// 5) Compute the elliptic curve point G * passfactor, and convert the result to compressed notation (33 bytes)
			var ellipticCurve = EllipticCurve.getSECCurveByName("secp256k1");
			var passpoint = ellipticCurve.getG().multiply(passfactor).getEncoded(1);

			// 6) Convey ownersalt and passpoint to the party generating the keys, along with a checksum to ensure integrity.
			// magic bytes "2C E9 B3 E1 FF 39 E2 51" followed by ownerentropy, and then passpoint
			var magicBytes = [0x2C, 0xE9, 0xB3, 0xE1, 0xFF, 0x39, 0xE2, 0x51];
			if (noNumbers) magicBytes[7] = 0x53;

			var intermediate = magicBytes.concat(ownerEntropy).concat(passpoint);

			// base58check encode
			intermediate = intermediate.concat(Bitcoin.Util.dsha256(intermediate).slice(0, 4));
			callback(Bitcoin.Base58.encode(intermediate));
		});
	},
	BIP38GenerateECAddressAsync: function (intermediate, compressed, callback) {
		// decode IPS
		var x = Bitcoin.Base58.decode(intermediate);
		//if(x.slice(49, 4) !== Bitcoin.Util.dsha256(x.slice(0,49)).slice(0,4)) {
		//	callback({error: 'Invalid intermediate passphrase string'});
		//}
		var noNumbers = (x[7] === 0x53);
		var ownerEntropy = x.slice(8, 8 + 8);
		var passpoint = x.slice(16, 16 + 33);

		// 1) Set flagbyte.
		// set bit 0x20 for compressed key
		// set bit 0x04 if ownerentropy contains a value for lotsequence
		var flagByte = (compressed ? 0x20 : 0x00) | (noNumbers ? 0x00 : 0x04);


		// 2) Generate 24 random bytes, call this seedb.
		var seedB = new Array(24);
		var rng = new SecureRandom();
		rng.nextBytes(seedB);

		// Take SHA256(SHA256(seedb)) to yield 32 bytes, call this factorb.
		var factorB = Bitcoin.Util.dsha256(seedB);

		// 3) ECMultiply passpoint by factorb. Use the resulting EC point as a public key and hash it into a Bitcoin
		// address using either compressed or uncompressed public key methodology (specify which methodology is used
		// inside flagbyte). This is the generated Bitcoin address, call it generatedaddress.
		var ec = EllipticCurve.getSECCurveByName("secp256k1").getCurve();
		var generatedPoint = ec.decodePointHex(ninja.publicKey.getHexFromByteArray(passpoint));
		var generatedBytes = generatedPoint.multiply(BigInteger.fromByteArrayUnsigned(factorB)).getEncoded(compressed);
		var generatedAddress = (new Bitcoin.Address(Bitcoin.Util.sha256ripe160(generatedBytes))).toString();

		// 4) Take the first four bytes of SHA256(SHA256(generatedaddress)) and call it addresshash.
		var addressHash = Bitcoin.Util.dsha256(generatedAddress).slice(0, 4);

		// 5) Now we will encrypt seedb. Derive a second key from passpoint using scrypt
		Crypto_scrypt(passpoint, addressHash.concat(ownerEntropy), 1024, 1, 1, 64, function (derivedBytes) {
			// 6) Do AES256Encrypt(seedb[0...15]] xor derivedhalf1[0...15], derivedhalf2), call the 16-byte result encryptedpart1
			for (var i = 0; i < 16; ++i) {
				seedB[i] ^= derivedBytes[i];
			}
			var AES_opts = { mode: new Crypto.mode.ECB(Crypto.pad.NoPadding), asBytes: true };
			var encryptedPart1 = Crypto.AES.encrypt(seedB.slice(0, 16), derivedBytes.slice(32), AES_opts);

			// 7) Do AES256Encrypt((encryptedpart1[8...15] + seedb[16...23]) xor derivedhalf1[16...31], derivedhalf2), call the 16-byte result encryptedseedb.
			var message2 = encryptedPart1.slice(8, 8 + 8).concat(seedB.slice(16, 16 + 8));
			for (var i = 0; i < 16; ++i) {
				message2[i] ^= derivedBytes[i + 16];
			}
			var encryptedSeedB = Crypto.AES.encrypt(message2, derivedBytes.slice(32), AES_opts);

			// 0x01 0x43 + flagbyte + addresshash + ownerentropy + encryptedpart1[0...7] + encryptedpart2
			var encryptedKey = [0x01, 0x43, flagByte].concat(addressHash).concat(ownerEntropy).concat(encryptedPart1.slice(0, 8)).concat(encryptedSeedB);

			// base58check encode
			encryptedKey = encryptedKey.concat(Bitcoin.Util.dsha256(encryptedKey).slice(0, 4));
			callback(generatedAddress, Bitcoin.Base58.encode(encryptedKey));
		});
	}
};

ninja.publicKey = {
	isPublicKeyHexFormat: function (key) {
		key = key.toString();
		return ninja.publicKey.isUncompressedPublicKeyHexFormat(key) || ninja.publicKey.isCompressedPublicKeyHexFormat(key);
	},
	// 130 characters [0-9A-F] starts with 04
	isUncompressedPublicKeyHexFormat: function (key) {
		key = key.toString();
		return /^04[A-Fa-f0-9]{128}$/.test(key);
	},
	// 66 characters [0-9A-F] starts with 02 or 03
	isCompressedPublicKeyHexFormat: function (key) {
		key = key.toString();
		return /^0[2-3][A-Fa-f0-9]{64}$/.test(key);
	},
	getBitcoinAddressFromByteArray: function (pubKeyByteArray) {
		var pubKeyHash = Bitcoin.Util.sha256ripe160(pubKeyByteArray);
		var addr = new Bitcoin.Address(pubKeyHash);
		return addr.toString();
	},
	getHexFromByteArray: function (pubKeyByteArray) {
		return Crypto.util.bytesToHex(pubKeyByteArray).toString().toUpperCase();
	},
	getByteArrayFromAdding: function (pubKeyHex1, pubKeyHex2) {
		var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
		var curve = ecparams.getCurve();
		var ecPoint1 = curve.decodePointHex(pubKeyHex1);
		var ecPoint2 = curve.decodePointHex(pubKeyHex2);
		// if both points are the same return null
		if (ecPoint1.equals(ecPoint2)) return null;
		var compressed = (ecPoint1.compressed && ecPoint2.compressed);
		var pubKey = ecPoint1.add(ecPoint2).getEncoded(compressed);
		return pubKey;
	},
	getByteArrayFromMultiplying: function (pubKeyHex, ecKey) {
		var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
		var ecPoint = ecparams.getCurve().decodePointHex(pubKeyHex);
		var compressed = (ecPoint.compressed && ecKey.compressed);
		// if both points are the same return null
		ecKey.setCompressed(false);
		if(ecPoint.equals(ecKey.getPubPoint())) {
			return null;
		}
		var bigInt = ecKey.priv;
		var pubKey = ecPoint.multiply(bigInt).getEncoded(compressed);
		return pubKey;
	},
	// used by unit test
	getDecompressedPubKeyHex: function (pubKeyHexComp) {
		var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
		var ecPoint = ecparams.getCurve().decodePointHex(pubKeyHexComp);
		var pubByteArray = ecPoint.getEncoded(0);
		var pubHexUncompressed = ninja.publicKey.getHexFromByteArray(pubByteArray);
		return pubHexUncompressed;
	}
};

	ninja.seeder = {
		init: (function () {
			document.getElementById("generatekeyinput").value = "";
		})(),

		// number of mouse movements to wait for
		seedLimit: (function () {
			var num = Crypto.util.randomBytes(12)[11];
			return 200 + Math.floor(num);
		})(),

		seedCount: 0, // counter
		lastInputTime: new Date().getTime(),
		seedPoints: [],

		// seed function exists to wait for mouse movement to add more entropy before generating an address
		seed: function (evt) {
			if (!evt) var evt = window.event;
			var timeStamp = new Date().getTime();

			if (ninja.seeder.seedCount == ninja.seeder.seedLimit) {
				ninja.seeder.seedCount++;
				ninja.wallets.landwallet.open();
				document.getElementById("generate").style.display = "none";
				document.getElementById("menu").style.visibility = "visible";
				ninja.seeder.removePoints();
			}
			// seed mouse position X and Y when mouse movements are greater than 40ms apart.
			else if ((ninja.seeder.seedCount < ninja.seeder.seedLimit) && evt && (timeStamp - ninja.seeder.lastInputTime) > 40) {
				SecureRandom.seedTime();
				SecureRandom.seedInt16((evt.clientX * evt.clientY));
				ninja.seeder.showPoint(evt.clientX, evt.clientY);
				ninja.seeder.seedCount++;
				ninja.seeder.lastInputTime = new Date().getTime();
				ninja.seeder.showPool();
			}
		},

		// seed function exists to wait for mouse movement to add more entropy before generating an address
		seedKeyPress: function (evt) {
			if (!evt) var evt = window.event;
			// seeding is over now we generate and display the address
			if (ninja.seeder.seedCount == ninja.seeder.seedLimit) {
				ninja.seeder.seedCount++;
				ninja.wallets.landwallet.open();
				document.getElementById("generate").style.display = "none";
				document.getElementById("menu").style.visibility = "visible";
				ninja.seeder.removePoints();
			}
			// seed key press character
			else if ((ninja.seeder.seedCount < ninja.seeder.seedLimit) && evt.which) {
				var timeStamp = new Date().getTime();
				// seed a bunch (minimum seedLimit) of times
				SecureRandom.seedTime();
				SecureRandom.seedInt8(evt.which);
				var keyPressTimeDiff = timeStamp - ninja.seeder.lastInputTime;
				SecureRandom.seedInt8(keyPressTimeDiff);
				ninja.seeder.seedCount++;
				ninja.seeder.lastInputTime = new Date().getTime();
				ninja.seeder.showPool();
			}
		},

		showPool: function () {
			var poolHex;
			if (SecureRandom.poolCopyOnInit != null) {
				poolHex = Crypto.util.bytesToHex(SecureRandom.poolCopyOnInit);
				document.getElementById("seedpool").innerHTML = poolHex;
				document.getElementById("seedpooldisplay").innerHTML = poolHex;
			}
			else {
				poolHex = Crypto.util.bytesToHex(SecureRandom.pool);
				document.getElementById("seedpool").innerHTML = poolHex;
				document.getElementById("seedpooldisplay").innerHTML = poolHex;
			}
			document.getElementById("mousemovelimit").innerHTML = (ninja.seeder.seedLimit - ninja.seeder.seedCount);
		},

		showPoint: function (x, y) {
			var div = document.createElement("div");
			div.setAttribute("class", "seedpoint");
			div.style.top = y + "px";
			div.style.left = x + "px";
			
			// let's make the entropy 'points' grow and change color!
			percentageComplete = ninja.seeder.seedCount / ninja.seeder.seedLimit;
			pointSize = 2 + Math.ceil(9*percentageComplete) + 'px'
			pointColor = 255 - Math.ceil(110 * percentageComplete);
			div.style.backgroundColor = '#' + pointColor.toString(16) + 'FF' + pointColor.toString(16);
			div.style.width = pointSize;
			div.style.height = pointSize;
			
			document.getElementById("progress-bar-percentage").style.width=Math.ceil(percentageComplete*100)+"%";

			// for some reason, appending these divs to an IOS device breaks clicking altogether (?)
			if (navigator.platform != 'iPad' && navigator.platform != 'iPhone' && navigator.platform != 'iPod') {
				document.body.appendChild(div);
			}
			ninja.seeder.seedPoints.push(div);

		},

		removePoints: function () {
			for (var i = 0; i < ninja.seeder.seedPoints.length; i++) {
				document.body.removeChild(ninja.seeder.seedPoints[i]);
			}
			ninja.seeder.seedPoints = [];
		}
	};

	ninja.qrCode = {
		// determine which type number is big enough for the input text length
		getTypeNumber: function (text) {
			var lengthCalculation = text.length * 8 + 12; // length as calculated by the QRCode
			if (lengthCalculation < 72) { return 1; }
			else if (lengthCalculation < 128) { return 2; }
			else if (lengthCalculation < 208) { return 3; }
			else if (lengthCalculation < 288) { return 4; }
			else if (lengthCalculation < 368) { return 5; }
			else if (lengthCalculation < 480) { return 6; }
			else if (lengthCalculation < 528) { return 7; }
			else if (lengthCalculation < 688) { return 8; }
			else if (lengthCalculation < 800) { return 9; }
			else if (lengthCalculation < 976) { return 10; }
			return null;
		},

		createCanvas: function (text, sizeMultiplier) {
			sizeMultiplier = (sizeMultiplier == undefined) ? 2 : sizeMultiplier; // default 2
			// create the qrcode itself
			var typeNumber = ninja.qrCode.getTypeNumber(text);
			var qrcode = new QRCode(typeNumber, QRCode.ErrorCorrectLevel.H);
			qrcode.addData(text);
			qrcode.make();
			var width = qrcode.getModuleCount() * sizeMultiplier;
			var height = qrcode.getModuleCount() * sizeMultiplier;
			// create canvas element
			var canvas = document.createElement('canvas');
			var scale = 10.0;
			canvas.width = width * scale;
			canvas.height = height * scale;
			canvas.style.width = '142px';
			canvas.style.height = '142px';
			var ctx = canvas.getContext('2d');
			ctx.scale(scale, scale);
			// compute tileW/tileH based on width/height
			var tileW = width / qrcode.getModuleCount();
			var tileH = height / qrcode.getModuleCount();
			// draw in the canvas
			for (var row = 0; row < qrcode.getModuleCount(); row++) {
				for (var col = 0; col < qrcode.getModuleCount(); col++) {
					ctx.fillStyle = qrcode.isDark(row, col) ? "#000000" : "#ffffff";
					ctx.fillRect(col * tileW, row * tileH, tileW, tileH);
				}
			}
			// return just built canvas
			return canvas;
		},

		// generate a QRCode and return it's representation as an Html table 
		createTableHtml: function (text) {
			var typeNumber = ninja.qrCode.getTypeNumber(text);
			var qr = new QRCode(typeNumber, QRCode.ErrorCorrectLevel.H);
			qr.addData(text);
			qr.make();
			var tableHtml = "<table class='qrcodetable'>";
			for (var r = 0; r < qr.getModuleCount(); r++) {
				tableHtml += "<tr>";
				for (var c = 0; c < qr.getModuleCount(); c++) {
					if (qr.isDark(r, c)) {
						tableHtml += "<td class='qrcodetddark'/>";
					} else {
						tableHtml += "<td class='qrcodetdlight'/>";
					}
				}
				tableHtml += "</tr>";
			}
			tableHtml += "</table>";
			return tableHtml;
		},

		// show QRCodes with canvas OR table (IE8)
		// parameter: keyValuePair 
		// example: { "id1": "string1", "id2": "string2"}
		//		"id1" is the id of a div element where you want a QRCode inserted.
		//		"string1" is the string you want encoded into the QRCode.
		showQrCode: function (keyValuePair, sizeMultiplier) {
			for (var key in keyValuePair) {
				var value = keyValuePair[key];
				try {
					if (document.getElementById(key)) {
						document.getElementById(key).innerHTML = "";
						document.getElementById(key).appendChild(ninja.qrCode.createCanvas(value, sizeMultiplier));
					}
				}
				catch (e) {
					// for browsers that do not support canvas (IE8)
					document.getElementById(key).innerHTML = ninja.qrCode.createTableHtml(value);
				}
			}
		}
	};

	ninja.tabSwitch = function (walletTab) {
		if (walletTab.className.indexOf("selected") == -1) {
			// unselect all tabs
			for (var wType in ninja.wallets) {
				document.getElementById(wType).className = "tab";
				ninja.wallets[wType].close();
			}
			walletTab.className += " selected";
			ninja.wallets[walletTab.getAttribute("id")].open();
		}
	};

	ninja.getQueryString = function () {
		var result = {}, queryString = location.search.substring(1), re = /([^&=]+)=([^&]*)/g, m;
		while (m = re.exec(queryString)) {
			result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}
		return result;
	};
	
	// use when passing an Array of Functions
	ninja.runSerialized = function (functions, onComplete) {
		onComplete = onComplete || function () { };
	
		if (functions.length === 0) onComplete();
		else {
			// run the first function, and make it call this
			// function when finished with the rest of the list
			var f = functions.shift();
			f(function () { ninja.runSerialized(functions, onComplete); });
		}
	};
	
	ninja.forSerialized = function (initial, max, whatToDo, onComplete) {
		onComplete = onComplete || function () { };
	
		if (initial === max) { onComplete(); }
		else {
			// same idea as runSerialized
			whatToDo(initial, function () { ninja.forSerialized(++initial, max, whatToDo, onComplete); });
		}
	};
	
	// use when passing an Object (dictionary) of Functions
	ninja.foreachSerialized = function (collection, whatToDo, onComplete) {
		var keys = [];
		for (var name in collection) {
			keys.push(name);
		}
		ninja.forSerialized(0, keys.length, function (i, callback) {
			whatToDo(keys[i], callback);
		}, onComplete);
	};

	ninja.translator = {
		currentCulture: "en",

		translate: function (culture) {
			var dict = ninja.translator.translations[culture];
			if (dict) {
				// set current culture
				ninja.translator.currentCulture = culture;
				// update menu UI
				for (var cult in ninja.translator.translations) {
					document.getElementById("culture" + cult).setAttribute("class", "");
				}
				document.getElementById("culture" + culture).setAttribute("class", "selected");
				// apply translations
				for (var id in dict) {
					if (document.getElementById(id) && document.getElementById(id).value) {
						document.getElementById(id).value = dict[id];
					}
					else if (document.getElementById(id)) {
						document.getElementById(id).innerHTML = dict[id];
					}
				}
			}
		},

		get: function (id) {
			var translation = ninja.translator.translations[ninja.translator.currentCulture][id];
			return translation;
		},

		translations: {
			"en": {
				// javascript alerts or messages
				"paperlabelbitcoinaddress": "Bitcoin Address:",
				"paperlabelprivatekey": "Private Key (Wallet Import Format):",
				"paperlabelencryptedkey": "Encrypted Private Key (Password required)",
				"bip38alertpassphraserequired": "Passphrase required for BIP38 key",
				"detailalertnotvalidprivatekey": "The text you entered is not a valid private key or passphrase.",
				"detailconfirmsha256": "The text you entered does not appear to be a private " + window.currencyName + " key.\n\nWould you like to use this text as a passphrase and create a private key using its SHA256 hash?\n\nWarning: Choosing an extremely strong passphrase (also known as a \"brain wallet\") is important as all common phrases, words, lyrics etc. are regularly scanned by hackers for bitcoin balances worth stealing.",
				"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.",
			},

			"es": {
				// javascript alerts or messages
				"paperlabelbitcoinaddress": "Dirección Bitcoin:",
				"paperlabelprivatekey": "Clave privada (formato para importar):",

				// header and menu html
				"tagline": "Generador de carteras Bitcoin de código abierto en lado de cliente con Javascript",
				"generatelabelbitcoinaddress": "Generando dirección Bitcoin...",
				"generatelabelmovemouse": "<blink>Mueve un poco el ratón para crear entropía...</blink>",
				"calibratewallet": "Calibrate Printer (es)",
				"paperwallet": "Cartera en papel",
				"landwallet": "Welcome (Es)",

				// footer html
				"footerlabeldonations": "Donaciones:",
				"footerlabeltranslatedby": "Traducción: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
				"footerlabelpgp": "Clave pública PGP",
				"footerlabelversion": "Histórico de versiones",
				"footerlabelgithub": "Repositorio GitHub",
				"footerlabelcopyright1": "&copy; Copyright 2014 Canton Becker and bitaddress.org.",
				"footerlabelcopyright2": "Copyright del código JavaScript: en el fuente.",
				"footerlabelnowarranty": "Sin garantía.",

				// paper wallet html
				"paperlabeladdressesperpage": "Direcciones por página:",
				"paperlabeladdressestogenerate": "Direcciones en total:",
				"papergenerate1": "Generar",
				"paperprint": "Imprimir"
			},
				
			"fr": {
				// javascript alerts or messages
				"paperlabelbitcoinaddress": "Adresse Bitcoin:",
				"paperlabelprivatekey": "Clé Privée (Format d'importation de porte-monnaie):",

				// header and menu html
				"tagline": "Générateur De Porte-Monnaie Bitcoin Javascript Hors-Ligne",
				"generatelabelbitcoinaddress": "Création de l'adresse Bitcoin...",
				"generatelabelmovemouse": "<blink>BOUGEZ votre souris pour ajouter de l'entropie...</blink>",
				"calibratewallet": "Calibrate Printer (fr)",
				"paperwallet": "Porte-Monnaie Papier",
				"landwallet": "Welcome (Fr)",

				// footer html
				"footerlabeldonations": "Dons:",
				"footerlabeltranslatedby": "Traduction: 1Gy7NYSJNUYqUdXTBow5d7bCUEJkUFDFSq",
				"footerlabelpgp": "Clé Publique PGP",
				"footerlabelversion": "Historique De Version Signé",
				"footerlabelgithub": "Dépôt GitHub",
				"footerlabelcopyright1": "&copy; Copyright 2014 Canton Becker and bitaddress.org.",
				"footerlabelcopyright2": "Les droits d'auteurs JavaScript sont inclus dans le code source.",
				"footerlabelnowarranty": "Aucune garantie.",
				"newaddress": "Générer Une Nouvelle Adresse",

				// paper wallet html
				"paperlabeladdressesperpage": "Adresses par page:",
				"paperlabeladdressestogenerate": "Nombre d'adresses à créer:",
				"papergenerate1": "Générer",
				"paperprint": "Imprimer"
			}
		}
	};

	ninja.translator.showEnglishJson = function () {
		var english = ninja.translator.translations["en"];
		var spanish = ninja.translator.translations["es"];
		var spanishClone = {};
		for (var key in spanish) {
			spanishClone[key] = spanish[key];
		}
		var newLang = {};
		for (var key in english) {
			newLang[key] = english[key];
			delete spanishClone[key];
		}
		for (var key in spanishClone) {
			if (document.getElementById(key)) {
				if (document.getElementById(key).value) {
					newLang[key] = document.getElementById(key).value;
				}
				else {
					newLang[key] = document.getElementById(key).innerHTML;
				}
			}
		}
		var div = document.createElement("div");
		div.setAttribute("class", "englishjson");
		div.innerHTML = "<h3>English Json</h3>";
		var elem = document.createElement("textarea");
		elem.setAttribute("rows", "35");
		elem.setAttribute("cols", "110");
		elem.setAttribute("wrap", "off");
		var langJson = "{\n";
		for (var key in newLang) {
			langJson += "\t\"" + key + "\"" + ": " + "\"" + newLang[key].replace(/\"/g, "\\\"").replace(/\n/g, "\\n") + "\",\n";
		}
		langJson = langJson.substr(0, langJson.length - 2);
		langJson += "\n}\n";
		elem.innerHTML = langJson;
		div.appendChild(elem);
		document.body.appendChild(div);
	};

	ninja.wallets.landwallet = {
		open: function () {
			document.getElementById("landarea").style.display = "block";
		},

		close: function () {
			document.getElementById("landarea").style.display = "none";
		}
	};

	ninja.wallets.calibratewallet = {
		open: function () {
			document.getElementById("calibratearea").style.display = "block";
		},

		close: function () {
			document.getElementById("calibratearea").style.display = "none";
		}
	};

	ninja.wallets.backwallet = {
		open: function () {
			document.getElementById("backarea").style.display = "block";
		},

		close: function () {
			document.getElementById("backarea").style.display = "none";
		}
	};



	ninja.wallets.foldwallet = {
		open: function () {
			document.getElementById("foldarea").style.display = "block";
		},

		close: function () {
			document.getElementById("foldarea").style.display = "none";
		}
	};


	ninja.wallets.paperwallet = {
		open: function () {
			document.getElementById("main").setAttribute("class", "paper"); // add 'paper' class to main div
			var paperArea = document.getElementById("paperarea");
			paperArea.style.display = "block";
			var perPageLimitElement = document.getElementById("paperlimitperpage");
			var limitElement = document.getElementById("paperlimit");
			var pageBreakAt = (ninja.wallets.paperwallet.useArtisticWallet) ? ninja.wallets.paperwallet.pageBreakAtArtisticDefault : ninja.wallets.paperwallet.pageBreakAtDefault;
			if (perPageLimitElement && perPageLimitElement.value < 1) {
				perPageLimitElement.value = pageBreakAt;
			}
			if (limitElement && limitElement.value < 1) {
				limitElement.value = pageBreakAt;
			}
			if (document.getElementById("paperkeyarea").innerHTML == "") {
				document.getElementById("paperencrypt").checked = false;
				ninja.wallets.paperwallet.encrypt = false;
				ninja.wallets.paperwallet.build(pageBreakAt, pageBreakAt, !document.getElementById('paperart').checked, document.getElementById('paperpassphrase').value);
			}
		},

		close: function () {
			document.getElementById("paperarea").style.display = "none";
			document.getElementById("main").setAttribute("class", ""); // remove 'paper' class from main div
		},

		toggleVanityField: function(show) {
			document.getElementById('keyButtons').style.display= show ? 'none' : 'block'; 
			document.getElementById('supplyKeys').style.display = show ? 'block' : 'none';
		},

		remaining: null, // use to keep track of how many addresses are left to process when building the paper wallet
		count: 0,
		pageBreakAtDefault: 7,
		pageBreakAtArtisticDefault: 1,
		useArtisticWallet: true,
		pageBreakAt: null,
		passphrase: null,
		lastwallet: null,
		minPassphraseLength: 15,

		build: function (numWallets, pageBreakAt, useArtisticWallet, passphrase) {
			if (numWallets < 1) numWallets = 1;
			ninja.wallets.paperwallet.remaining = numWallets;
			ninja.wallets.paperwallet.count = 0;
			ninja.wallets.paperwallet.useArtisticWallet = useArtisticWallet;
			ninja.wallets.paperwallet.pageBreakAt = pageBreakAt;
			document.getElementById("paperkeyarea").innerHTML = "";
			if (ninja.wallets.paperwallet.encrypt && passphrase == "") {
				alert(ninja.translator.get("bip38alertpassphraserequired"));
				return;
			}
			ninja.wallets.paperwallet.passphrase = passphrase;
			setTimeout(ninja.wallets.paperwallet.batch, 0);
		},
		
		buildManual: function(wallet, passphrase) {
			ninja.wallets.paperwallet.remaining = 1;
			ninja.wallets.paperwallet.count = 0;
			ninja.wallets.paperwallet.pageBreakAt = 1;
			document.getElementById("paperkeyarea").innerHTML = "";
			if (ninja.wallets.paperwallet.encrypt && passphrase == "") {
				alert(ninja.translator.get("bip38alertpassphraserequired"));
				return;
			}
			ninja.wallets.paperwallet.passphrase = passphrase;
			setTimeout(function() {
				ninja.wallets.paperwallet.batch(wallet);
			}, 0);
		},
		
		batch: function (addressSeed) {
			if (ninja.wallets.paperwallet.remaining > 0) {
				var paperArea = document.getElementById("paperkeyarea");
				ninja.wallets.paperwallet.count++;
				var i = ninja.wallets.paperwallet.count;
				var pageBreakAt = ninja.wallets.paperwallet.pageBreakAt;
				var div = document.createElement("div");
				div.setAttribute("id", "keyarea" + i);
				div.innerHTML = ninja.wallets.paperwallet.templateArtisticHtml(i);
				div.setAttribute("class", "keyarea art");
				if (paperArea.innerHTML != "") {
					// page break
				   if ((i-1) % pageBreakAt == 0 && i >= pageBreakAt) {
						var pBreak = document.createElement("div");
						pBreak.setAttribute("class", "pagebreak");
						document.getElementById("paperkeyarea").appendChild(pBreak);
						div.style.pageBreakBefore = "always";
						if (!ninja.wallets.paperwallet.useArtisticWallet) {
							div.style.borderTop = "2px solid green";
						}
					}
				}
				document.getElementById("paperkeyarea").appendChild(div);
				ninja.wallets.paperwallet.generateNewWallet(addressSeed, function(wallet) {
					var walletKey = ninja.wallets.paperwallet.encrypt ? wallet.encryptedKey : wallet.wifKey;
					ninja.wallets.paperwallet.showArtisticWallet(i, wallet.address, walletKey);
				});
				ninja.wallets.paperwallet.remaining--;
				setTimeout(ninja.wallets.paperwallet.batch, 0);
			}
		},

		generateNewWallet: function(addressSeed, callback) {
			if (addressSeed == null) {
				var key = new Bitcoin.ECKey(false);
				addressSeed = { address: key.getBitcoinAddress(), wifKey: key.getBitcoinWalletImportFormat() };
			}
			ninja.wallets.paperwallet.lastwallet = addressSeed;
			if (ninja.wallets.paperwallet.encrypt) {
				document.getElementById("busyblock").className = "busy";
				setTimeout(function() {
					ninja.privateKey.BIP38PrivateKeyToEncryptedKeyAsync(addressSeed.wifKey, ninja.wallets.paperwallet.passphrase, false, function(encodedKey) {
						document.getElementById("busyblock").className = "";
						addressSeed.passphrase = ninja.wallets.paperwallet.passphrase;
						addressSeed.encryptedKey = encodedKey;
						ninja.wallets.paperwallet.lastwallet.addressSeed = addressSeed;
						callback(addressSeed);
					});
				}, 10);
			} else {
				callback(addressSeed);
			}
		},

		templateArtisticHtml: function (i) {
			var keyelement = 'btcprivwif';
			if (ninja.wallets.paperwallet.encrypt) {
				keyelement = 'btcencryptedkey'
			}

			var walletHtml =
						"<div class='artwallet' id='artwallet" + i + "'>" +
			//"<iframe src='bitcoin-wallet-01.svg' id='papersvg" + i + "' class='papersvg' ></iframe>" +
							"<img id='papersvg" + i + "' class='papersvg' src='" + window.frontJPG + "' />" +
							"<div id='qrcode_public" + i + "' class='qrcode_public'></div>" +
							"<div id='qrcode_private" + i + "' class='qrcode_private'></div>" +
							"<div class='btcaddress' id='btcaddress" + i + "'></div>" +
							"<div class='dupbtcaddress' id='dupbtcaddress" + i + "'></div>" +
							"<div class='" + keyelement + "' id='" + keyelement + i + "'></div>" +
							"<div class='dup" + keyelement + "' id='dup" + keyelement + i + "'></div>" +
							"<div class='wallettype' id='wallettype" + i + "'></div>" +
						"</div>";
			return walletHtml;
		},

		showArtisticWallet: function (idPostFix, bitcoinAddress, privateKey) {

			// BIP38 coloration
			var colors = {
				'bip38': {
					publicUpper: "#fff57c",
					publicLower: "#f7931a",
					privateLeft: "#78bad6",			
					privateRight: "#fff67d",
					pointer: "#0084a8",
					guilloche: "white",
					text: "#1937a9",
					textShadow: "white",
					textPointer: "white",
				},
				'default': {
					publicUpper: "#fff57c",
					publicLower: "#f7931a",
					privateLeft: "#8cd96f",			
					privateRight: "#fff67d",
					pointer: "#02ab5c",
					guilloche: "white",
					text: "#1937a9",
					textShadow: "white",
					textPointer: "white",
				}
			};
			
			var keyValuePair = {};
			keyValuePair["qrcode_public" + idPostFix] = bitcoinAddress;
			keyValuePair["qrcode_private" + idPostFix] = privateKey;
			ninja.qrCode.showQrCode(keyValuePair, 2.75);
			document.getElementById("btcaddress" + idPostFix).innerHTML = bitcoinAddress;
			document.getElementById("dupbtcaddress" + idPostFix).innerHTML = bitcoinAddress;

			if (ninja.wallets.paperwallet.encrypt) {
				var half = privateKey.length / 2;
				document.getElementById("btcencryptedkey" + idPostFix).innerHTML = privateKey;
				document.getElementById("dupbtcencryptedkey" + idPostFix).innerHTML = privateKey;
				if (window.designChoice != 'default') document.getElementById("wallettype" + idPostFix).innerHTML = 'BIP38 ENCRYPTED'; // only add for special designs
				drawOpts.text['walletImportFormat'] = 'BIP38 ENCRYPTED';
				drawOpts.color = colors['bip38'];
			}
			else {
				document.getElementById("btcprivwif" + idPostFix).innerHTML = privateKey;
				document.getElementById("dupbtcprivwif" + idPostFix).innerHTML = privateKey;
				document.getElementById("wallettype" + idPostFix).innerHTML = '';
				drawOpts.color = colors['default'];
				if (window.designChoice != 'default') document.getElementById("wallettype" + idPostFix).innerHTML = ''; // special designs should have this burned into the JPG
				drawOpts.text['walletImportFormat'] = 'WALLET IMPORT FORMAT';
			}

			if (window.designChoice == 'default') { // if we are not loading up a special JPG-based design, render the canvas
				document.getElementById("papersvg1").src = PaperWallet.draw.frontImage(bitcoinAddress, drawOpts);
			}
			// CODE to modify SVG DOM elements
			//var paperSvg = document.getElementById("papersvg" + idPostFix);
			//if (paperSvg) {
			//	svgDoc = paperSvg.contentDocument;
			//	if (svgDoc) {
			//		var bitcoinAddressElement = svgDoc.getElementById("bitcoinaddress");
			//		var privateKeyElement = svgDoc.getElementById("privatekey");
			//		if (bitcoinAddressElement && privateKeyElement) {
			//			bitcoinAddressElement.textContent = bitcoinAddress;
			//			privateKeyElement.textContent = privateKeyWif;
			//		}
			//	}
			//}
		},

		toggleArt: function (element) {
			if (!element.checked) {
				// show Art
				document.getElementById("paperlimitperpage").value = ninja.wallets.paperwallet.pageBreakAtArtisticDefault;
				document.getElementById("paperlimit").value = ninja.wallets.paperwallet.pageBreakAtArtisticDefault;
			}
			else {
				// hide Art
				document.getElementById("paperlimitperpage").value = ninja.wallets.paperwallet.pageBreakAtDefault;
				document.getElementById("paperlimit").value = ninja.wallets.paperwallet.pageBreakAtDefault;
			}
		},

		toggleEncryptSettings: function(show, cancelSave) {
			if (show == null)
				show = document.getElementById('paperbip38settings').className != 'show';
			var encryptBox = document.getElementById('paperencrypt');
			if (cancelSave == true) {
				encryptBox.checked = ninja.wallets.paperwallet.encrypt;
			}
				
			document.getElementById('paperbip38settings').className = show ? 'show' : '';
			if (!cancelSave) document.getElementById('paperencryptpassphrase').innerText = 
				document.getElementById('paperencryptpassphrase').textContent = document.getElementById('paperpassphrase').value;
			
			if (!show && !cancelSave) {
				ninja.wallets.paperwallet.encrypt = encryptBox.checked;
				ninja.wallets.paperwallet.buildManual(ninja.wallets.paperwallet.lastwallet, document.getElementById('paperpassphrase').value);
				ninja.wallets.paperwallet.resetLimits();
			}
			
			document.getElementById('paperencryptstatus').className = ninja.wallets.paperwallet.encrypt ? '' : 'hide';
		},

		resetLimits: function () {
			var hideArt = document.getElementById("paperart");
			var paperEncrypt = document.getElementById("paperencrypt");
			var limit;
			var limitperpage;

			document.getElementById("paperkeyarea").style.fontSize = "100%";
			if (!hideArt.checked) {
				limit = ninja.wallets.paperwallet.pageBreakAtArtisticDefault;
				limitperpage = ninja.wallets.paperwallet.pageBreakAtArtisticDefault;
			}
			else if (hideArt.checked && paperEncrypt.checked) {
				limit = ninja.wallets.paperwallet.pageBreakAtDefault;
				limitperpage = ninja.wallets.paperwallet.pageBreakAtDefault;
				// reduce font size
				document.getElementById("paperkeyarea").style.fontSize = "95%";
			}
			else if (hideArt.checked && !paperEncrypt.checked) {
				limit = ninja.wallets.paperwallet.pageBreakAtDefault;
				limitperpage = ninja.wallets.paperwallet.pageBreakAtDefault;
			}
			document.getElementById("paperlimitperpage").value = limitperpage;
			document.getElementById("paperlimit").value = limit;
		}
	};

	ninja.wallets.detailwallet = {
		qrscanner: {
			scanner: null,

			start: function() {
				document.getElementById('paperqrscanner').className = 'show';
				ninja.wallets.detailwallet.qrscanner.showError(null);
				var supported = ninja.wallets.detailwallet.qrscanner.scanner.isSupported();
				if (!supported) {
					document.getElementById('paperqrnotsupported').className = '';
				} else {
					ninja.wallets.detailwallet.qrscanner.scanner.start();
				}
			},

			stop: function() {
				ninja.wallets.detailwallet.qrscanner.scanner.stop();
				document.getElementById('paperqrscanner').className = '';
			},

			showError: function(error) {
				if (error) {
					if (error == 'PERMISSION_DENIED' || error == 'PermissionDeniedError') {
						document.getElementById('paperqrerror').innerHTML = '';
						document.getElementById('paperqrpermissiondenied').className = '';
					} else {
						document.getElementById('paperqrerror').innerHTML = error;
						document.getElementById('paperqrpermissiondenied').className = 'hide';
					}
				} else {
					document.getElementById('paperqrerror').innerHTML = '';
					document.getElementById('paperqrpermissiondenied').className = 'hide';
				}
			}
		},

		open: function () {
			document.getElementById("detailarea").style.display = "block";
			document.getElementById("detailprivkey").focus();
			if (!ninja.wallets.detailwallet.qrscanner.scanner) {
				ninja.wallets.detailwallet.qrscanner.scanner = new QRCodeScanner(320, 240, 'paperqroutput', 
					function(data) {
						document.getElementById('detailprivkey').value = data;
						document.getElementById('paperqrscanner').className = '';
					},
					function(error) {
						ninja.wallets.detailwallet.qrscanner.showError(error);
					});
			}
		},

		close: function () {
			document.getElementById("detailarea").style.display = "none";
		},

		openCloseFaq: function (faqNum) {
			// do close
			if (document.getElementById("detaila" + faqNum).style.display == "block") {
				document.getElementById("detaila" + faqNum).style.display = "none";
				document.getElementById("detaile" + faqNum).setAttribute("class", "more");
			}
			// do open
			else {
				document.getElementById("detaila" + faqNum).style.display = "block";
				document.getElementById("detaile" + faqNum).setAttribute("class", "less");
			}
		},

		viewDetails: function () {
			var bip38 = false;
			var key = document.getElementById("detailprivkey").value.toString().replace(/^\s+|\s+$/g, ""); // trim white space
			document.getElementById("detailprivkey").value = key;
			var bip38CommandDisplay = document.getElementById("detailbip38commands").style.display;
			ninja.wallets.detailwallet.clear();
			if (key == "") {
				return;
			}
			if (ninja.privateKey.isBIP38Format(key)) {
				document.getElementById("detailbip38commands").style.display = bip38CommandDisplay;
				if (bip38CommandDisplay != "block") {
					document.getElementById("detailbip38commands").style.display = "block";
					document.getElementById("detailprivkeypassphrase").focus();
					return;
				}
				var passphrase = document.getElementById("detailprivkeypassphrase").value.toString().replace(/^\s+|\s+$/g, ""); // trim white space
				if (passphrase == "") {
					alert(ninja.translator.get("bip38alertpassphraserequired"));
					return;
				}
				document.getElementById("busyblock_decrypt").className = "busy";
				// show Private Key BIP38 Format
				document.getElementById("detailprivbip38").innerHTML = key;
				document.getElementById("detailbip38").style.display = "block";
				ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(key, passphrase, function (btcKeyOrError) {
					document.getElementById("busyblock_decrypt").className = "";
					if (btcKeyOrError.message) {
						alert(btcKeyOrError.message);
						ninja.wallets.detailwallet.clear();
					} else {
						ninja.wallets.detailwallet.populateKeyDetails(new Bitcoin.ECKey(btcKeyOrError));
					}
				});
			}
			else {
				if (Bitcoin.ECKey.isMiniFormat(key)) {
					// show Private Key Mini Format
					document.getElementById("detailprivmini").innerHTML = key;
					document.getElementById("detailmini").style.display = "block";
				}
				else if (Bitcoin.ECKey.isBase6Format(key)) {
					// show Private Key Base6 Format
					document.getElementById("detailprivb6").innerHTML = key;
					document.getElementById("detailb6").style.display = "block";
				}
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.priv == null) {
					// enforce a minimum passphrase length
					if (key.length >= ninja.wallets.paperwallet.minPassphraseLength) {
						// Deterministic Wallet confirm box to ask if user wants to SHA256 the input to get a private key
						var usePassphrase = confirm(ninja.translator.get("detailconfirmsha256"));
						if (usePassphrase) {
							var bytes = Crypto.SHA256(key, { asBytes: true });
							var btcKey = new Bitcoin.ECKey(bytes);
						}
						else {
							ninja.wallets.detailwallet.clear();
						}
					}
					else {
						alert(ninja.translator.get("detailalertnotvalidprivatekey"));
						ninja.wallets.detailwallet.clear();
					}
				}
				ninja.wallets.detailwallet.populateKeyDetails(btcKey);
			}
		},

		populateKeyDetails: function (btcKey) {
			if (btcKey.priv != null) {
				btcKey.setCompressed(false);
				document.getElementById('detailkeyarea').className = '';
				document.getElementById('detailkeyareakey').innerHTML = document.getElementById('detailprivkey').value;
				document.getElementById("detailprivhex").innerHTML = btcKey.toString().toUpperCase();
				document.getElementById("detailprivb64").innerHTML = btcKey.toString("base64");
				var bitcoinAddress = btcKey.getBitcoinAddress();
				var wif = btcKey.getBitcoinWalletImportFormat();
				ninja.wallets.detailwallet.lastwallet = { address: bitcoinAddress, wifKey: wif };
				document.getElementById("detailpubkey").innerHTML = btcKey.getPubKeyHex();
				document.getElementById("detailaddress").innerHTML = bitcoinAddress;
				document.getElementById("detailprivwif").innerHTML = wif;
				btcKey.setCompressed(true);
				var bitcoinAddressComp = btcKey.getBitcoinAddress();
				var wifComp = btcKey.getBitcoinWalletImportFormat();
				document.getElementById("detailpubkeycomp").innerHTML = btcKey.getPubKeyHex();
				document.getElementById("detailaddresscomp").innerHTML = bitcoinAddressComp;
				document.getElementById("detailprivwifcomp").innerHTML = wifComp;

				ninja.qrCode.showQrCode({
					"detailqrcodepublic": bitcoinAddress,
					"detailqrcodepubliccomp": bitcoinAddressComp,
					"detailqrcodeprivate": wif,
					"detailqrcodeprivatecomp": wifComp
				}, 4);
			}
		},

		clear: function () {
			document.getElementById('detailkeyarea').className = 'hide';
			document.getElementById("detailpubkey").innerHTML = "";
			document.getElementById("detailpubkeycomp").innerHTML = "";
			document.getElementById("detailaddress").innerHTML = "";
			document.getElementById("detailaddresscomp").innerHTML = "";
			document.getElementById("detailprivwif").innerHTML = "";
			document.getElementById("detailprivwifcomp").innerHTML = "";
			document.getElementById("detailprivhex").innerHTML = "";
			document.getElementById("detailprivb64").innerHTML = "";
			document.getElementById("detailprivb6").innerHTML = "";
			document.getElementById("detailprivmini").innerHTML = "";
			document.getElementById("detailprivbip38").innerHTML = "";
			document.getElementById("detailqrcodepublic").innerHTML = "";
			document.getElementById("detailqrcodepubliccomp").innerHTML = "";
			document.getElementById("detailqrcodeprivate").innerHTML = "";
			document.getElementById("detailqrcodeprivatecomp").innerHTML = "";
			document.getElementById("detailb6").style.display = "none";
			document.getElementById("detailmini").style.display = "none";
			document.getElementById("detailbip38commands").style.display = "none";
			document.getElementById("detailbip38").style.display = "none";
		},

		loadInPaperWallet: function() {
			document.getElementById("paperkeyarea").innerHTML = 'Loading...';
			ninja.tabSwitch(document.getElementById('paperwallet'));
			ninja.wallets.paperwallet.toggleVanityField(true);
			document.getElementById('suppliedPrivateKey').value = ninja.wallets.detailwallet.lastwallet.wifKey;
			if (ninja.wallets.paperwallet.encrypt && !confirm('Do you want to encrypt this wallet using the previously supplied private key?')) {
				document.getElementById('paperencrypt').checked = false;
				ninja.wallets.paperwallet.toggleEncryptSettings(false);
			}
			ninja.wallets.paperwallet.buildManual(ninja.wallets.detailwallet.lastwallet, ninja.wallets.paperwallet.passphrase);
		}
	};


(function (ninja) {
	var ut = ninja.unitTests = {
		runSynchronousTests: function () {
			document.getElementById("busyblock").className = "busy";
			var div = document.createElement("div");
			div.setAttribute("class", "unittests");
			div.setAttribute("id", "unittests");
			var testResults = "";
			var passCount = 0;
			var testCount = 0;
			for (var test in ut.synchronousTests) {
				var exceptionMsg = "";
				var resultBool = false;
				try {
					resultBool = ut.synchronousTests[test]();
				} catch (ex) {
					exceptionMsg = ex.toString();
					resultBool = false;
				}
				if (resultBool == true) {
					var passFailStr = "pass";
					passCount++;
				}
				else {
					var passFailStr = "<b>FAIL " + exceptionMsg + "</b>";
				}
				testCount++;
				testResults += test + ": " + passFailStr + "<br/>";
			}
			testResults += passCount + " of " + testCount + " synchronous tests passed";
			if (passCount < testCount) {
				testResults += "<b>" + (testCount - passCount) + " unit test(s) failed</b>";
			}
			div.innerHTML = "<a name=\"tests\"></a><h3>Unit Tests</h3><div id=\"unittestresults\">" + testResults + "<br/><br/></div>";
			document.body.appendChild(div);
			document.getElementById("busyblock").className = "";

	},

		runAsynchronousTests: function () {
			var div = document.createElement("div");
			div.setAttribute("class", "unittests");
			div.setAttribute("id", "asyncunittests");
			div.innerHTML = "<a name=\"tests\"></a><h3>Async Unit Tests</h3><div id=\"asyncunittestresults\"></div><br/><br/><br/><br/>";
			document.body.appendChild(div);

			// run the asynchronous tests one after another so we don't crash the browser
			ninja.foreachSerialized(ninja.unitTests.asynchronousTests, function (name, cb) {
				document.getElementById("busyblock").className = "busy";
				ninja.unitTests.asynchronousTests[name](cb);
			}, function () {
				document.getElementById("asyncunittestresults").innerHTML += "running of asynchronous unit tests complete!<br/>";
				document.getElementById("busyblock").className = "";
			});
		},

		synchronousTests: {
			//ninja.publicKey tests
			testIsPublicKeyHexFormat: function () {
				var key = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var bool = ninja.publicKey.isPublicKeyHexFormat(key);
				if (bool != true) {
					return false;
				}
				return true;
			},
			testGetHexFromByteArray: function () {
				var bytes = [4, 120, 152, 47, 64, 250, 12, 11, 122, 85, 113, 117, 131, 175, 201, 154, 78, 223, 211, 1, 162, 114, 157, 197, 155, 11, 142, 185, 225, 134, 146, 188, 181, 33, 240, 84, 250, 217, 130, 175, 76, 193, 147, 58, 253, 31, 27, 86, 62, 167, 121, 166, 170, 108, 206, 54, 163, 11, 148, 125, 214, 83, 230, 62, 68];
				var key = ninja.publicKey.getHexFromByteArray(bytes);
				if (key != "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44") {
					return false;
				}
				return true;
			},
			testHexToBytes: function () {
				var key = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var bytes = Crypto.util.hexToBytes(key);
				if (bytes.toString() != "4,120,152,47,64,250,12,11,122,85,113,117,131,175,201,154,78,223,211,1,162,114,157,197,155,11,142,185,225,134,146,188,181,33,240,84,250,217,130,175,76,193,147,58,253,31,27,86,62,167,121,166,170,108,206,54,163,11,148,125,214,83,230,62,68") {
					return false;
				}
				return true;
			},
			testGetBitcoinAddressFromByteArray: function () {
				var bytes = [4, 120, 152, 47, 64, 250, 12, 11, 122, 85, 113, 117, 131, 175, 201, 154, 78, 223, 211, 1, 162, 114, 157, 197, 155, 11, 142, 185, 225, 134, 146, 188, 181, 33, 240, 84, 250, 217, 130, 175, 76, 193, 147, 58, 253, 31, 27, 86, 62, 167, 121, 166, 170, 108, 206, 54, 163, 11, 148, 125, 214, 83, 230, 62, 68];
				var address = ninja.publicKey.getBitcoinAddressFromByteArray(bytes);
				if (address != "1Cnz9ULjzBPYhDw1J8bpczDWCEXnC9HuU1") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAdding: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0419153E53FECAD7FF07FEC26F7DDEB1EDD66957711AA4554B8475F10AFBBCD81C0159DC0099AD54F733812892EB9A11A8C816A201B3BAF0D97117EBA2033C9AB2";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes.toString() != "4,151,19,227,152,54,37,184,255,4,83,115,216,102,189,76,82,170,57,4,196,253,2,41,74,6,226,33,167,199,250,74,235,223,128,233,99,150,147,92,57,39,208,84,196,71,68,248,166,106,138,95,172,253,224,70,187,65,62,92,81,38,253,79,0") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingCompressed: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "0219153E53FECAD7FF07FEC26F7DDEB1EDD66957711AA4554B8475F10AFBBCD81C";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				var hex = ninja.publicKey.getHexFromByteArray(bytes);
				if (hex != "029713E3983625B8FF045373D866BD4C52AA3904C4FD02294A06E221A7C7FA4AEB") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingUncompressedAndCompressed: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0219153E53FECAD7FF07FEC26F7DDEB1EDD66957711AA4554B8475F10AFBBCD81C";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes.toString() != "4,151,19,227,152,54,37,184,255,4,83,115,216,102,189,76,82,170,57,4,196,253,2,41,74,6,226,33,167,199,250,74,235,223,128,233,99,150,147,92,57,39,208,84,196,71,68,248,166,106,138,95,172,253,224,70,187,65,62,92,81,38,253,79,0") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingShouldReturnNullWhenSameKey1: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes != null) {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingShouldReturnNullWhenSameKey2: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes != null) {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplying: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes.toString() != "4,102,230,163,180,107,9,21,17,48,35,245,227,110,199,119,144,57,41,112,64,245,182,40,224,41,230,41,5,26,206,138,57,115,35,54,105,7,180,5,106,217,57,229,127,174,145,215,79,121,163,191,211,143,215,50,48,156,211,178,72,226,68,150,52") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingCompressedOutputsUncompressed: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes.toString() != "4,102,230,163,180,107,9,21,17,48,35,245,227,110,199,119,144,57,41,112,64,245,182,40,224,41,230,41,5,26,206,138,57,115,35,54,105,7,180,5,106,217,57,229,127,174,145,215,79,121,163,191,211,143,215,50,48,156,211,178,72,226,68,150,52") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingCompressedOutputsCompressed: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = new Bitcoin.ECKey(key2);
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, ecKey);
				if (bytes.toString() != "2,102,230,163,180,107,9,21,17,48,35,245,227,110,199,119,144,57,41,112,64,245,182,40,224,41,230,41,5,26,206,138,57") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingShouldReturnNullWhenSameKey1: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes != null) {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingShouldReturnNullWhenSameKey2: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes != null) {
					return false;
				}
				return true;
			},
			// confirms multiplication is working and BigInteger was created correctly (Pub Key B vs Priv Key A)
			testGetPubHexFromMultiplyingPrivAPubB: function () {
				var keyPub = "04F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F98938020F36EBBDE6F1BEAF98E5BD0E425747E68B0F2FB7A2A59EDE93F43C0D78156FF";
				var keyPriv = "B1202A137E917536B3B4C5010C3FF5DDD4784917B3EEF21D3A3BF21B2E03310C";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(keyPub, new Bitcoin.ECKey(keyPriv));
				var pubHex = ninja.publicKey.getHexFromByteArray(bytes);
				if (pubHex != "04C6732006AF4AE571C7758DF7A7FB9E3689DFCF8B53D8724D3A15517D8AB1B4DBBE0CB8BB1C4525F8A3001771FC7E801D3C5986A555E2E9441F1AD6D181356076") {
					return false;
				}
				return true;
			},
			// confirms multiplication is working and BigInteger was created correctly (Pub Key A vs Priv Key B)
			testGetPubHexFromMultiplyingPrivBPubA: function () {
				var keyPub = "0429BF26C0AF7D31D608474CEBD49DA6E7C541B8FAD95404B897643476CE621CFD05E24F7AE8DE8033AADE5857DB837E0B704A31FDDFE574F6ECA879643A0D3709";
				var keyPriv = "7DE52819F1553C2BFEDE6A2628B6FDDF03C2A07EB21CF77ACA6C2C3D252E1FD9";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(keyPub, new Bitcoin.ECKey(keyPriv));
				var pubHex = ninja.publicKey.getHexFromByteArray(bytes);
				if (pubHex != "04C6732006AF4AE571C7758DF7A7FB9E3689DFCF8B53D8724D3A15517D8AB1B4DBBE0CB8BB1C4525F8A3001771FC7E801D3C5986A555E2E9441F1AD6D181356076") {
					return false;
				}
				return true;
			},

			// Private Key tests
			testBadKeyIsNotWif: function () {
				return !(Bitcoin.ECKey.isWalletImportFormat("bad key"));
			},
			testBadKeyIsNotWifCompressed: function () {
				return !(Bitcoin.ECKey.isCompressedWalletImportFormat("bad key"));
			},
			testBadKeyIsNotHex: function () {
				return !(Bitcoin.ECKey.isHexFormat("bad key"));
			},
			testBadKeyIsNotBase64: function () {
				return !(Bitcoin.ECKey.isBase64Format("bad key"));
			},
			testBadKeyIsNotMini: function () {
				return !(Bitcoin.ECKey.isMiniFormat("bad key"));
			},
			testBadKeyReturnsNullPrivFromECKey: function () {
				var key = "bad key";
				var ecKey = new Bitcoin.ECKey(key);
				if (ecKey.priv != null) {
					return false;
				}
				return true;
			},
			testGetBitcoinPrivateKeyByteArray: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var bytes = [41, 38, 101, 195, 135, 36, 24, 173, 241, 218, 127, 250, 58, 100, 111, 47, 6, 2, 36, 109, 166, 9, 138, 145, 210, 41, 195, 33, 80, 242, 113, 139];
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinPrivateKeyByteArray().toString() != bytes.toString()) {
					return false;
				}
				return true;
			},
			testECKeyDecodeWalletImportFormat: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var bytes1 = [41, 38, 101, 195, 135, 36, 24, 173, 241, 218, 127, 250, 58, 100, 111, 47, 6, 2, 36, 109, 166, 9, 138, 145, 210, 41, 195, 33, 80, 242, 113, 139];
				var bytes2 = Bitcoin.ECKey.decodeWalletImportFormat(key);
				if (bytes1.toString() != bytes2.toString()) {
					return false;
				}
				return true;
			},
			testECKeyDecodeCompressedWalletImportFormat: function () {
				var key = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var bytes1 = [41, 38, 101, 195, 135, 36, 24, 173, 241, 218, 127, 250, 58, 100, 111, 47, 6, 2, 36, 109, 166, 9, 138, 145, 210, 41, 195, 33, 80, 242, 113, 139];
				var bytes2 = Bitcoin.ECKey.decodeCompressedWalletImportFormat(key);
				if (bytes1.toString() != bytes2.toString()) {
					return false;
				}
				return true;
			},
			testWifToPubKeyHex: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getPubKeyHex() != "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44"
					|| btcKey.getPubPoint().compressed != false) {
				return false;
			}
			return true;
		},
		testWifToPubKeyHexCompressed: function () {
			var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
			var btcKey = new Bitcoin.ECKey(key);
			btcKey.setCompressed(true);
			if (btcKey.getPubKeyHex() != "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5"
					|| btcKey.getPubPoint().compressed != true) {
				return false;
			}
			return true;
		},
		testBase64ToECKey: function () {
			var key = "KSZlw4ckGK3x2n/6OmRvLwYCJG2mCYqR0inDIVDycYs=";
			var btcKey = new Bitcoin.ECKey(key);
			if (btcKey.getBitcoinBase64Format() != "KSZlw4ckGK3x2n/6OmRvLwYCJG2mCYqR0inDIVDycYs=") {
				return false;
			}
			return true;
		},
		testHexToECKey: function () {
			var key = "292665C3872418ADF1DA7FFA3A646F2F0602246DA6098A91D229C32150F2718B";
			var btcKey = new Bitcoin.ECKey(key);
			if (btcKey.getBitcoinHexFormat() != "292665C3872418ADF1DA7FFA3A646F2F0602246DA6098A91D229C32150F2718B") {
				return false;
			}
			return true;
		},
		testCompressedWifToECKey: function () {
			var key = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
			var btcKey = new Bitcoin.ECKey(key);
			if (btcKey.getBitcoinWalletImportFormat() != "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S"
					|| btcKey.getPubPoint().compressed != true) {
					return false;
				}
				return true;
			},
			testWifToECKey: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinWalletImportFormat() != "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb") {
					return false;
				}
				return true;
			},
			testBrainToECKey: function () {
				var key = "bitaddress.org unit test";
				var bytes = Crypto.SHA256(key, { asBytes: true });
				var btcKey = new Bitcoin.ECKey(bytes);
				if (btcKey.getBitcoinWalletImportFormat() != "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb") {
					return false;
				}
				return true;
			},
			testMini30CharsToECKey: function () {
				var key = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinWalletImportFormat() != "5JrBLQseeZdYw4jWEAHmNxGMr5fxh9NJU3fUwnv4khfKcg2rJVh") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAdding: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KAJTSqSjpsZ11KyEE3qu5PrJVjR4ZCbNxK3Nb1F637oe41m1c2") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingCompressed: function () {
				var key1 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "L3A43j2pc2J8F2SjBNbYprPrcDpDCh8Aju8dUH65BEM2r7RFSLv4") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingUncompressedAndCompressed: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KAJTSqSjpsZ11KyEE3qu5PrJVjR4ZCbNxK3Nb1F637oe41m1c2") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingShouldReturnNullWhenSameKey1: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingShouldReturnNullWhenSameKey2: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplying: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KetpZ5mCGagCeJnMmvo18n4iVrtPSqrpnW5RP92Gv2BQy7GPCk") {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingCompressed: function () {
				var key1 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "L5LFitc24jme2PfVChJS3bKuQAPBp54euuqLWciQdF2CxnaU3M8t") {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingUncompressedAndCompressed: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KetpZ5mCGagCeJnMmvo18n4iVrtPSqrpnW5RP92Gv2BQy7GPCk") {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingShouldReturnNullWhenSameKey1: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingShouldReturnNullWhenSameKey2: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromBase6Key: function () {
				var baseKey = "100531114202410255230521444145414341221420541210522412225005202300434134213212540304311321323051431";
				var hexKey = "292665C3872418ADF1DA7FFA3A646F2F0602246DA6098A91D229C32150F2718B";
				var ecKey = new Bitcoin.ECKey(baseKey);
				if (ecKey.getBitcoinHexFormat() != hexKey) {
					return false;
				}
				return true;
			},

			// EllipticCurve tests
			testDecodePointEqualsDecodeFrom: function () {
				var key = "04F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F98938020F36EBBDE6F1BEAF98E5BD0E425747E68B0F2FB7A2A59EDE93F43C0D78156FF";
				var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
				var ecPoint1 = EllipticCurve.PointFp.decodeFrom(ecparams.getCurve(), Crypto.util.hexToBytes(key));
				var ecPoint2 = ecparams.getCurve().decodePointHex(key);
				if (!ecPoint1.equals(ecPoint2)) {
					return false;
				}
				return true;
			},
			testDecodePointHexForCompressedPublicKey: function () {
				var key = "03F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F989380";
				var pubHexUncompressed = ninja.publicKey.getDecompressedPubKeyHex(key);
				if (pubHexUncompressed != "04F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F98938020F36EBBDE6F1BEAF98E5BD0E425747E68B0F2FB7A2A59EDE93F43C0D78156FF") {
					return false;
				}
				return true;
			},
			// old bugs
			testBugWithLeadingZeroBytePublicKey: function () {
				var key = "5Je7CkWTzgdo1RpwjYhwnVKxQXt8EPRq17WZFtWcq5umQdsDtTP";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinAddress() != "1M6dsMZUjFxjdwsyVk8nJytWcfr9tfUa9E") {
					return false;
				}
				return true;
			},
			testBugWithLeadingZeroBytePrivateKey: function () {
				var key = "0004d30da67214fa65a41a6493576944c7ea86713b14db437446c7a8df8e13da";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinAddress() != "1NAjZjF81YGfiJ3rTKc7jf1nmZ26KN7Gkn") {
					return false;
				}
				return true;
			}
		},

		asynchronousTests: {
			//https://en.bitcoin.it/wiki/BIP_0038
			testBip38: function (done) {
				var tests = [
				//No compression, no EC multiply
					["6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg", "TestingOneTwoThree", "5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR"],
					["6PRNFFkZc2NZ6dJqFfhRoFNMR9Lnyj7dYGrzdgXXVMXcxoKTePPX1dWByq", "Satoshi", "5HtasZ6ofTHP6HCwTqTkLDuLQisYPah7aUnSKfC7h4hMUVw2gi5"],
				//Compression, no EC multiply
					["6PYNKZ1EAgYgmQfmNVamxyXVWHzK5s6DGhwP4J5o44cvXdoY7sRzhtpUeo", "TestingOneTwoThree", "L44B5gGEpqEDRS9vVPz7QT35jcBG2r3CZwSwQ4fCewXAhAhqGVpP"],
					["6PYLtMnXvfG3oJde97zRyLYFZCYizPU5T3LwgdYJz1fRhh16bU7u6PPmY7", "Satoshi", "KwYgW8gcxj1JWJXhPSu4Fqwzfhp5Yfi42mdYmMa4XqK7NJxXUSK7"],
				//EC multiply, no compression, no lot/sequence numbers
					["6PfQu77ygVyJLZjfvMLyhLMQbYnu5uguoJJ4kMCLqWwPEdfpwANVS76gTX", "TestingOneTwoThree", "5K4caxezwjGCGfnoPTZ8tMcJBLB7Jvyjv4xxeacadhq8nLisLR2"],
					["6PfLGnQs6VZnrNpmVKfjotbnQuaJK4KZoPFrAjx1JMJUa1Ft8gnf5WxfKd", "Satoshi", "5KJ51SgxWaAYR13zd9ReMhJpwrcX47xTJh2D3fGPG9CM8vkv5sH"],
				//EC multiply, no compression, lot/sequence numbers
					["6PgNBNNzDkKdhkT6uJntUXwwzQV8Rr2tZcbkDcuC9DZRsS6AtHts4Ypo1j", "MOLON LABE", "5JLdxTtcTHcfYcmJsNVy1v2PMDx432JPoYcBTVVRHpPaxUrdtf8"],
					["6PgGWtx25kUg8QWvwuJAgorN6k9FbE25rv5dMRwu5SKMnfpfVe5mar2ngH", Crypto.charenc.UTF8.bytesToString([206, 156, 206, 159, 206, 155, 206, 169, 206, 157, 32, 206, 155, 206, 145, 206, 146, 206, 149])/*UTF-8 characters, encoded in source so they don't get corrupted*/, "5KMKKuUmAkiNbA3DazMQiLfDq47qs8MAEThm4yL8R2PhV1ov33D"]];

				// running each test uses a lot of memory, which isn't freed
				// immediately, so give the VM a little time to reclaim memory
				function waitThenCall(callback) {
					return function () { setTimeout(callback, 10000); }
				}

				var decryptTest = function (test, i, onComplete) {
					ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(test[0], test[1], function (privBytes) {
						if (privBytes.constructor == Error) {
							document.getElementById("asyncunittestresults").innerHTML += "fail testDecryptBip38 #" + i + ", error: " + privBytes.message + "<br/>";
						} else {
							var btcKey = new Bitcoin.ECKey(privBytes);
							var wif = !test[2].substr(0, 1).match(/[LK]/) ? btcKey.setCompressed(false).getBitcoinWalletImportFormat() : btcKey.setCompressed(true).getBitcoinWalletImportFormat();
							if (wif != test[2]) {
								document.getElementById("asyncunittestresults").innerHTML += "fail testDecryptBip38 #" + i + "<br/>";
							} else {
								document.getElementById("asyncunittestresults").innerHTML += "pass testDecryptBip38 #" + i + "<br/>";
							}
						}
						onComplete();
					});
				};

				var encryptTest = function (test, compressed, i, onComplete) {
					ninja.privateKey.BIP38PrivateKeyToEncryptedKeyAsync(test[2], test[1], compressed, function (encryptedKey) {
						if (encryptedKey === test[0]) {
							document.getElementById("asyncunittestresults").innerHTML += "pass testBip38Encrypt #" + i + "<br/>";
						} else {
							document.getElementById("asyncunittestresults").innerHTML += "fail testBip38Encrypt #" + i + "<br/>";
							document.getElementById("asyncunittestresults").innerHTML += "expected " + test[0] + "<br/>received " + encryptedKey + "<br/>";
						}
						onComplete();
					});
				};

				// test randomly generated encryption-decryption cycle
				var cycleTest = function (i, compress, onComplete) {
					// create new private key
					var privKey = (new Bitcoin.ECKey(false)).getBitcoinWalletImportFormat();

					// encrypt private key
					ninja.privateKey.BIP38PrivateKeyToEncryptedKeyAsync(privKey, 'testing', compress, function (encryptedKey) {
						// decrypt encryptedKey
						ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(encryptedKey, 'testing', function (decryptedBytes) {
							var decryptedKey = (new Bitcoin.ECKey(decryptedBytes)).getBitcoinWalletImportFormat();

							if (decryptedKey === privKey) {
								document.getElementById("asyncunittestresults").innerHTML += "pass cycleBip38 test #" + i + "<br/>";
							}
							else {
								document.getElementById("asyncunittestresults").innerHTML += "fail cycleBip38 test #" + i + " " + privKey + "<br/>";
								document.getElementById("asyncunittestresults").innerHTML += "encrypted key: " + encryptedKey + "<br/>decrypted key: " + decryptedKey;
							}
							onComplete();
						});
					});
				};

				// intermediate test - create some encrypted keys from an intermediate
				// then decrypt them to check that the private keys are recoverable
				var intermediateTest = function (i, onComplete) {
					var pass = Math.random().toString(36).substr(2);
					ninja.privateKey.BIP38GenerateIntermediatePointAsync(pass, null, null, function (intermediatePoint) {
						ninja.privateKey.BIP38GenerateECAddressAsync(intermediatePoint, false, function (address, encryptedKey) {
							ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(encryptedKey, pass, function (privBytes) {
								if (privBytes.constructor == Error) {
									document.getElementById("asyncunittestresults").innerHTML += "fail testBip38Intermediate #" + i + ", error: " + privBytes.message + "<br/>";
								} else {
									var btcKey = new Bitcoin.ECKey(privBytes);
									var btcAddress = btcKey.getBitcoinAddress();
									if (address !== btcKey.getBitcoinAddress()) {
										document.getElementById("asyncunittestresults").innerHTML += "fail testBip38Intermediate #" + i + "<br/>";
									} else {
										document.getElementById("asyncunittestresults").innerHTML += "pass testBip38Intermediate #" + i + "<br/>";
									}
								}
								onComplete();
							});
						});
					});
				}

				document.getElementById("asyncunittestresults").innerHTML += "running " + tests.length + " tests named testDecryptBip38<br/>";
				document.getElementById("asyncunittestresults").innerHTML += "running 4 tests named testBip38Encrypt<br/>";
				document.getElementById("asyncunittestresults").innerHTML += "running 2 tests named cycleBip38<br/>";
				document.getElementById("asyncunittestresults").innerHTML += "running 5 tests named testBip38Intermediate<br/>";
				ninja.runSerialized([
					function (cb) {
						ninja.forSerialized(0, tests.length, function (i, callback) {
							decryptTest(tests[i], i, waitThenCall(callback));
						}, waitThenCall(cb));
					},
					function (cb) {
						ninja.forSerialized(0, 4, function (i, callback) {
							// only first 4 test vectors are not EC-multiply,
							// compression param false for i = 1,2 and true for i = 3,4
							encryptTest(tests[i], i >= 2, i, waitThenCall(callback));
						}, waitThenCall(cb));
					},
					function (cb) {
						ninja.forSerialized(0, 2, function (i, callback) {
							cycleTest(i, i % 2 ? true : false, waitThenCall(callback));
						}, waitThenCall(cb));
					},
					function (cb) {
						ninja.forSerialized(0, 5, function (i, callback) {
							intermediateTest(i, waitThenCall(callback));
						}, cb);
					}
				], done);
			}
		}
	};
})(ninja);

	// run unit tests
	if (ninja.getQueryString()["unittests"] == "true" || ninja.getQueryString()["unittests"] == "1") {
		ninja.unitTests.runSynchronousTests();
		// ninja.translator.showEnglishJson();
		// no need to show translations until we actually have some. 9/5/2013 - Canton
	}
	// run async unit tests
	if (ninja.getQueryString()["asyncunittests"] == "true" || ninja.getQueryString()["asyncunittests"] == "1") {
		ninja.unitTests.runAsynchronousTests();
	}
	// change language
	if (ninja.getQueryString()["culture"] != undefined) {
		ninja.translator.translate(ninja.getQueryString()["culture"]);
	}

	if (ninja.getQueryString()["showseedpool"] == "true" || ninja.getQueryString()["showseedpool"] == "1") {
		document.getElementById("seedpoolarea").style.display = "block";
	}


	/********************************************************
	 Brand new JS functions added for bitcoinpaperwallet.com
	 ********************************************************/


// Dynamic drawing of standard bitcoin design
		if (typeof PaperWallet == "undefined") {
			// global PaperWallet object
			var PaperWallet = window.PaperWallet = {};
		} 
		if (!PaperWallet.draw) {
			(function() {
				// images minimized with https://tinypng.com/ and http://pnggauntlet.com/ and encoded with http://www.base64-image.de/		
				var imgBitcoinLogo = new Image();
				imgBitcoinLogo.src =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATEAAABlCAMAAAAS0yQPAAAAsVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////3kxr7kwD90ar3jQ38tWv/+fT3khf6nCf7pUH+5dH92rf3kBL/8+r+7dz7rlf4oDX+4MT9xI38vXz//vz4lyH9zJz806L5q03+69T+6M36tWH+8uP6u278zZT82Kv7xIL3igbY4iM2AAAAGXRSTlMAeUWrl+673YhmVg82H8sI1MMWKfblb6Jei/6cWwAADftJREFUeNrs2N2OojAYBuCKIKAMgjrq9yWMlcAiG0HwB3Tv/8LWtG5kHcqgiSfW57ik5E37QktaG1j9qdF1Hf1Td9yuMZ1bI/ImMp6r9ifc0pyZaQ3J2y2rY09AyFGVAXm7+pja8BNdtcgbp8w0aMWdv3fnmdKDqkOQnb5y349jP9+fymMEVY4pfWZWF662mzzGW0u/CBaVzPpEZiPj2va/9ykK5ZXQehL3WV+Hi0O2xB+UO7iYdCTdmkMVLrYrbMMP4MIdEwmNXeCiFbYVB8BpErZZXwMm2eA98i1wBpHMFLhgiXfaANeVq8wM4Aq8nx8B48p0RleBiXx8RJoBY8sT2SWwXYoPWksWmQFMiWJhSLHJHhhXjguNKTBrFKOxj54XothqweufSEBp0flhkGyzIsbGyGT5yRhrTSuMo+kBzn4tKSIVrbUVMHPy4oZuY4dxYZ7A2ZYihqdyH1OPCrtMe/Vzucq/ktjIW/NYPaQYASx2ZVoXWcFGOa/9J8tLLErxO1pJ7MiG7T0MY7baDrWJYdayyoZKv6P29JlJRAZKx7TI0zw+zYBf7/hYx/NCWq2xRRyi98UeOHpYix8yG99B6fQ0+MeuHTpQHX6L1FPIczw+jSH8TNLl7lj4PLXQT9jWpYhexp8QJMYH2kNxXjr8xybfmXDV+yBP8Pg04wmcBfVlDwBJxFL7U1xrjK2ixA+xXslGmuISqKgfOvpLq7kupw0DURgwlBAKadPSdLFs4Qu2sQmXhCRN3v/B2q6Q67VuHs/0+5HMRMYrr3ePjkQ8Mv79f5RZ/zAePn6kbckKEMxa2ZKxnMgYAQ9mVybrP4U2D+qcKNP/sI3oHeYzXns0eFZowXdB8GGTMWSHFwz1ARdwJSlZFcY4U32v8ISlOSDjhkz3XwzcYTrnOdd71ohDi8c83ce/bDKG4BWTe/M8yzDykYrUGMkpw0tC8TC4tHpf5YP1wx2mc4m9WTyryiP+2Fl2mAdaZOorqvwrKeqYzh6GvkC8tiU0+TLohTvMqOPHnkwPHr+mL6AniwNq+lVTNtUul2grYv9KBn/4phE65ksYUPpXmTvM0L1aTKzbo20QHC6GnPH0sg421iK71S3NmG7/Sozt25oT3t2vCYHSv8jcYT51E7/MugH/IL1JeL5sTK2J3eaZIqb+lUpz2S0KnV+zB6SWaWyfXounO4w3cIFSelpb2T6DkTI26P8ZDc6ij4wNabf4rF5a9+FfwRFl2Qd3mGE392o98kLDKimfOVD4q22v9KOPjI0wP74k4iK0sxbcuMM4ncsP95mF3B6J9THYXd6egPAemLX/UzcZo9zhbSNShgBHVy3cjZC5aWTRJUzDe+hv9km4VyvBKyDC5m+CYH0+kUoLA6OLnSxcMoZ8vSGr+hJjiWeJShAUpCyHw+GsUZqL2cMUrkw84nFvx0syYA0zxvwK36ed2v3E1pT0lEfafDyA3aUgwVNZY1veOmVMMp5ThQHOwjBkHASclCX5r4X5cAotJuOFyKTXHpgNLGEm8883S1DwFrSV87UNPD6U7IPadVTOvjxhHpwypu7H5ytQKWlZIvhC5mPQMsN8qUxH5jDeBPSMSZZP3WUs3v7zHKeGydDWWIy+ySFjBO9elqHKUS1LlMAZmJiZhoYDQ5gVGPnyrSFjhaMpQxDQQ9ftjpO/q0Rib+mSsSxpzAuvBoIqY02aj50gHFRwIGulDOxk9GYrTNkd9n/syNgJJGmgb1auFzK8YGSTMXYUiajlypNSkbErqZQxCSMjkrKqOz3ap7z55Kz4NyBTZgqDJML3CUKWNXYZC3Rjh85ubN/M2CF3Sf9J405XQsYUIlarzw1xlozIGKIIGmeRT2H11Cq/SVwCMjKEgSzdq4F4rWUjsQu3gceHEiFjtCstZ4uV+g3JgsgYIRT3m4tFv37JCSDMJxBBI/mSnzJ97Cjkf6ANg+WvUmTXqQ1+omPoLGP5upGxjzeoKbfmf8PwLHs5igg0FsbSl4Ag9BUyQLhmqCBDupTN9GGw/FUKLnpZOP63zjL2dD5sg2C72Wz+/Hp9dLr+s/qtx5gse9pWopuXEAS+QgxIHvum8uOFrwMbc6IPk9mmtry28rtbxmpeyvdLHB0Ou4tsCfmFXEd7MRXLHoXu7LT6kphkLIt8lZgkTD+ql7HUNDUcvRs84OGzU8Yoj9nLC6dWKbCc9k91R1K2N9lZxsxZYaSR9Z/sKGPkgpHbjqGMuXg6bCwZW1lkrGAJQFJR+bHLGKvJWg0eHxNhDYqI0yRHLAfIK3oQ5pCxMgHgZdE+CsL95tklYw7KCHvSaGHNMsaUBY0DYpaxGAgJqSsJp+1a5O0wgNhkLJRGs5WxpTtjKGMWsgoX0I4Zm2rdO49I7dtkbA+EkHQaoSLqSNXgd3vXupwoDEYXRfFet9W2dECEoqIiSNW2+v4PtgqJMRySsM7+KntmdmYHTAPH5OS7JRIKhTLGLqz5kDaMMbmMHY+reV7T4ggi/RLGHgVBiAn33jIZswRDzIJvklcg/KtSGcOvLs5sS7WO2Xu2Tr6dZm5w3G24BztCoF+iYx0IQggIcUUytuBoCcW5kxh7QWfeFcpY8ZNpmZO3L+1UppGxqbfmckt+BJQJ10odn1srYmyRZ4Jf5LUz+Gm2yqzS7tlV7ugmxpMMRTcoYwRhLh+hK+2x6Q7M1JkdHZ1b5Z/CvAR7TChjyJhaxpowWr3b8FqPIyPIrGK+m3eljMGgW2RJAA1sfomMJSw2Zi8JkbTaBwA2v0DGGoWvEkpfTYM80Pp2MGvYop7Z6jF0o5IxhxvcIxKs2iplDOMTdkSWUKiKAr+yKZWxugEKrJSxHg3sTQpzJTq+eyf3+blKxhw6f/KDuwaZJJmMcTdus75rwSA7puuLVMba8OhqGbsmNQImYzSjAGRm2eBuqW7mYElD/uqJi49hMed0BjIGWV8IXUB8TCZjw7Q9/+io0CBjWfw078JkaCA5v3RgSCpjMQR+6eB+MESppFl49CL7FICMQYIpjbBNxcZvTSpjOReopIw9tUWMPXa0AvenBgNGLmMrKmMwuIUm7Mx1zM3B/3aEYVbbZ4wtkDGM86OMMTtUoi+o2No14cPbr7qm6UaxwzjiPIv7ZeyMlkD67aOZgz+D/SOQSpIaFyhjBI7HSAR94cegycNF9oExB83k4G4Zo1/7hzhFyXA8cfveSBkxzfuKt/W+KJ3KIDfEUF8CAWMTcB1TwKJACKLw75UxTI2gUcHg75dvtm1PU9inNIyLCROUsVeRjCFhsYn6AnqFnhB9abn/tHBZz/fLGF2lvwosfYTzsf1Mlmd2IzfZbkylPZYZfX25jPkui285Im8vn6EwHZ/IDFK2snKRHfJRF2hXyRi6GsxA3oGlvzAFcA4fHwvy3ArjIuYt/pzZPfHf3/3Yu4kLkz5BX7god2hZVhjQt3Rvml/urCfn/+Tj9YFlxR7m7NQyhms0qxt2sf41/D5szHIIiifljitaymW7ED4+J5tiAPZRQE7jMCtUUsbQ1cgwLFwtL8miyPv8XphqrCRpkdFTrlpLRhjqizhd8U6XWQQbQgww9dUyhq4GgcZV9yBrX6YCjjcTV/T/hopADjglUV+YJYWMMT3HW5ZshJWXMSwp7jdkUcXpac8K+Bmw3A6xoSslhBQQIXlI1JdBg0o8DkmkDMcM9nO/jFHUUfvRGQqT7cIxC7D5tCU+5bhbhrEJfUcNn7Ol80sq1lVMFIKINRfD0jKGbivbiBZI87ub5cmehUUalohiY06+5qJHCm1C/uXdNeVr1KmjvtS6BhSckHobCp/jzIvTW9jIsxxCWL2EjKGn9ZCrT98JI4rU1T6ts+fb7kh+d/6xDaYiwrZYm84mxGUDV4q19X5bOvhsAh6uWwudlRWfm4QWazOizPjxJIXlE7oatBG5E1sLVjoH3ZTBAHY7fsmKhrc2tWo33uktWnpBEHjum3iXjYs7YYTFhKwKtlf4nB1Rk3ptLLzVEvZDupHDgCstqLeeR5KI4qdNi58O0TQtVEkLVt6E8KHOWk7ZoEd89Rx67IQvwLjLNpTCLUFnRq2wG+C3xnUJ75Jx/i2QMRLpsfcQwhAjwK+FFT4jBrXc0UG5A+C6Re3qXcYm3BJ0pou6aeUvdBr5Kxx0kfjPvGs0x/4CW0KI6CDcD9vTmqMcXVr/9n7rNyukZzf6usG1ad2sXHx9dKPe7l4bcXeabUk3fdEFeoXHY6oH8yUylhxSjWMytiwzxnbcvjdk7XJoQwpdq5U6FoNEV1vnJnUN2zy1W80UZFME3mlp//gQiFfhASFREvqHfSpjdNFU4qsKpx1lcz4udJVmUZQWRZFFU4l9Jr4//BCyx6HkoKPp5d/y05+ni6YKyYYUM/9w9EamvAZjattusl4qJ6U3JwXzPx5tEylD0tSEHaogYhlaSBmiJGGDahwL+KI65U6NJJuSRv9XJfBQlx89qcZ+kxFWmeOtKWU79z7CvsyKEXamjEzMQ3IHX+6ORFMqRNiNi7r9+xk5Jz5YRTQMjgJfwDArd978y88+PlF6/NxqWZqv6JIMqIrhiug3TQLfK8fXtaTA+PGukQDPDfazLGV+M4NC/+HOtwRPLHzpfHsy+dqyAuJhVQdYhs7QvOLwvV9GBWwlKV0E46r+kM0VD23CGcEuPgaJt7zAS4LP3I9yNVpVsykKOXv9bZaDof3ni6Cnj00VRs1ONQIVJdHtvBimGI3mc7V8orLHZDeNjQkYD1qd/7NRhIenzrPeHAwNwxgbw8HvF+21V8m5+AfCu6sYTeBU+wAAAABJRU5ErkJggg==";
				
				var draw = PaperWallet.draw = {
					imgBitcoinLogo: imgBitcoinLogo,
				
					/**
					 * Draw guilloche pattern with the given parameters into the canvas.
					 * Source: https://gist.github.com/3n/803329
					 */
					guilloche: function(ctx, opts) {
						ctx.save();
						
						var opts = opts || {};
						var scale = opts.scale || 1,
							majorR = opts.majorR || 49,
							minorR = opts.minorR || 20.4324,
							angleMultiplier = opts.angleMultiplier || 1,
							radiusEffectConstant = opts.radiusEffectConstant || 33,
							steps = opts.steps || 1000,
							centerPoint = opts.centerPoint || { x: 0, y:0 },
							color = opts.color || 'rgb(0,0,255)',
							width = opts.width || 0.5;
							globalAlpha = opts.globalAlpha || 1.0;
					 
						ctx.globalAlpha = globalAlpha;
					 
						var	diff = majorR - minorR,
							s = diff / minorR,
							theta = 0,
							radiusEffect = radiusEffectConstant + minorR,
							oldX, oldY;

						for (var i = steps; i>0; --i) {
							var new_theta = angleMultiplier * theta,
								x = (diff * Math.sin(new_theta) + radiusEffect * Math.sin(new_theta * s))*scale + (centerPoint.x),
								y = (diff * Math.cos(new_theta) - radiusEffect * Math.cos(new_theta * s))*scale + (centerPoint.y);

							theta += Math.PI * 4 / steps;

							if (oldX) {
								ctx.strokeStyle = color;
								ctx.lineWidth = width;
								ctx.beginPath();
								ctx.moveTo(oldX, oldY);
								ctx.lineTo(x, y);
								ctx.closePath();
								ctx.stroke();
							}

							oldX = x;
							oldY = y;
						}
						
						ctx.restore();
					},
					
					
					/**
					 * Calculate unique parameters for pattern drawing.
					 * @param {String} msg Message to extract parameters from.
					 */
					guillocheParams: function(msg) {			
						/** 
						 * Extracts a float in range [0, 1[ from first 4 bytes of the given bytearray.
						 * This treats the first 4 bytes as a signed integer value, scales it to size 1,
						 * and adds 0.5 to move to the range [0, 1[.
						 *
						 * @param {bytearray} Byte array, at least 4 bytes
						 */
						function float01(bytearray) {
							var v = bytearray[0] << 24;
							v |= bytearray[1] << 16;
							v |= bytearray[2] << 8;
							v |= bytearray[3];			
							v /= 4294967296;
								
							// since v is signed, just add 0.5 to remap to [0, 1[.
							return v + 0.5;
						}

						/**
						 * Linear interpolation between min and max based on v [0, 1[.
						 */
						function scaled_between(v, min, max) {
							return v*(max - min) + min;
						};			
					
						// this contains some hand tuned constant to make the generated patterns look pretty.
						var msg = Crypto.SHA256(msg, {asBytes: true});
						var majorR = scaled_between(float01(msg), 55, 300); // overall radius.
												
						var msg = Crypto.SHA256(msg, {asBytes: true});
						var scale = scaled_between(float01(msg), 5, 15);

						msg = Crypto.SHA256(msg, {asBytes: true}); 
						var minorR = scaled_between(float01(msg), 0.01, 10); // a large minorR makes for a sparser design, bigger holes in the spiderweb.
						
						
						msg = Crypto.SHA256(msg, {asBytes: true}); 
						var steps = scaled_between(float01(msg), 1500, 7000); 
						
						var width = (5000/steps) * .5; 
						width = Math.min(width,1.2); // prevent overly chunky lines
						
						msg = Crypto.SHA256(msg, {asBytes: true});
						var radiusEffectConstant = scaled_between(float01(msg), majorR*0.9, majorR); 
						
						msg = Crypto.SHA256(msg, {asBytes: true});
						var angleMultiplier = Math.ceil(scaled_between(float01(msg), 0, 3));

						// majorR = 110; scale = 11; minorR = .5; steps = 5000; width = .3; radiusEffectConstant = 100; angleMultiplier = 2; // test suite
					
						return  {
							angleMultiplier: angleMultiplier,
							majorR: majorR,
							minorR: minorR,
							radiusEffectConstant: radiusEffectConstant,
							scale: scale,
							steps: steps,		
							width: width
						}
					},
					
					
					/**
					 * Draws a rounded rectangle using the current state of the canvas. 
					 * If you omit the last three params, it will draw a rectangle 
					 * outline with a 5 pixel border radius 
					 *
					 * Source: http://stackoverflow.com/a/3368118
					 *
					 * @param {CanvasRenderingContext2D} ctx
					 * @param {Number} x The top left x coordinate
					 * @param {Number} y The top left y coordinate 
					 * @param {Number} width The width of the rectangle 
					 * @param {Number} height The height of the rectangle
					 * @param {Number} radius The corner radius. Defaults to 5;
					 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
					 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
					 */
					roundRect: function(ctx, x, y, w, h, opts) {
						ctx.save();
						
						ctx.beginPath();
						ctx.moveTo(x + opts.radius, y);
						ctx.lineTo(x + w - opts.radius, y);
						ctx.quadraticCurveTo(x + w, y, x + w, y + opts.radius);
						ctx.lineTo(x + w, y + h - opts.radius);
						ctx.quadraticCurveTo(x + w, y + h, x + w - opts.radius, y + h);
						ctx.lineTo(x + opts.radius, y + h);
						ctx.quadraticCurveTo(x, y + h, x, y + h - opts.radius);
						ctx.lineTo(x, y + opts.radius);
						ctx.quadraticCurveTo(x, y, x + opts.radius, y);
						ctx.closePath();

						if (typeof opts.lineWidth != "undefined") {
							ctx.lineWidth = opts.lineWidth;
						}
						if (typeof opts.strokeStyle != "undefined") {
							ctx.strokeStyle = opts.strokeStyle;
							ctx.stroke();
						}
						if (typeof opts.fillStyle != "undefined") {
							ctx.fillStyle = opts.fillStyle;
							ctx.fill();
						}
						
						ctx.restore();
					},			
					
					
					/**
					 * Draw text with strong blur around it.
					 * This is quite a hack, but I couldn't find a better way.
					 */
					fillTextStrongBlur: function(ctx, msg, x, y, offset, opts) {
						ctx.save();
						
						ctx.shadowColor = opts.color.textShadow;
						ctx.shadowBlur = 7;
						ctx.shadowOffsetX = 4;
						ctx.shadowOffsetY = 4;
						
						// run multiple times for stronger blur
						for (var i=0; i<1; ++i) {
							ctx.shadowOffsetX = offset;
							ctx.shadowOffsetY = offset;
							ctx.fillText(msg, x, y);
							
							ctx.shadowOffsetX = -offset;
							ctx.shadowOffsetY = offset;
							ctx.fillText(msg, x, y);
							
							ctx.shadowOffsetX = offset;
							ctx.shadowOffsetY = -offset;
							ctx.fillText(msg, x, y);
							
							ctx.shadowOffsetX = -offset;
							ctx.shadowOffsetY = -offset;
							ctx.fillText(msg, x, y);
						}
						
						ctx.restore();
					},			
					
					text: function(ctx, opts) {
						ctx.save();
						
						ctx.font = opts.font;
						ctx.textAlign = "center";
						ctx.fillStyle = opts.color.text;
						draw.fillTextStrongBlur(ctx, opts.text.publicAddress, 268, 320, 4, opts);
						draw.fillTextStrongBlur(ctx, opts.text.depositVerify, 268, 696, 4, opts);
						
						ctx.rotate(-Math.PI*2/4);
						draw.fillTextStrongBlur(ctx, opts.text.privateKey, -482, 2396, 4, opts);
						draw.fillTextStrongBlur(ctx, opts.text.walletImportFormat, -482, 2844, 4, opts);
						
						
						// text for green pointer
						ctx.fillStyle = opts.color.textPointer;
						ctx.fillText(opts.text.withdraw, -482, 1015);
						
						ctx.restore();
					},
					
					obfuscation: function(ctx, x, y, w, h) {
						ctx.save();
						ctx.font = "18px Courier";
						ctx.textAlign = "center";
						var obfuscationColors = ["#000000","#222222","#333333","#666666"];
						
						// create random text to black out private key pattern
						var possible_letters = "฿#";
						// var possible_letters = "■•";
						for (var i=0; i<1500; ++i) {
							ctx.fillStyle = obfuscationColors[Math.floor(Math.random() * obfuscationColors.length)];
							var letter = possible_letters[Math.floor(Math.random()*possible_letters.length)];
							ctx.fillText(letter, x + Math.random()*w, y + Math.random()*h);
						}
						ctx.restore();
					},
					
					gradients: function(ctx, opts) {
						ctx.save();
						
						// draw background gradients
						var grd = ctx.createLinearGradient(55, 82, 55, 807);
						grd.addColorStop(0, opts.color.publicUpper);
						grd.addColorStop(1, opts.color.publicLower);
						ctx.fillStyle = grd;
						ctx.fillRect(55, 82, 958, 807);
						
						grd = ctx.createLinearGradient(1013, 0, 2961, 0)
						grd.addColorStop(0, opts.color.privateLeft);
						grd.addColorStop(1, opts.color.privateRight);
						ctx.fillStyle = grd;
						ctx.fillRect(1013, 82, 2961, 807);
						ctx.restore();
					},
					
					logos: function(ctx, cp) {
						var w = 90;
						
						/* draw circle for bitcoin logo
						ctx.arc(cp.x, cp.y, w/2+5, 0, 2*Math.PI, false);
						ctx.fillStyle = "white";
						ctx.fill();
						*/

						// logo
						ctx.drawImage(PaperWallet.draw.imgBitcoinLogo, (cp.x-w/2)-4, (cp.y-w/2)-4, 305, 101);
					},

					pointer: function(ctx, colorPointer) {
						ctx.save();
						ctx.beginPath();
						ctx.moveTo(980, 82);
						ctx.lineTo(1030, 82);
						ctx.lineTo(1030, 355);
						ctx.quadraticCurveTo(1030, 466, 1070, 486);
						ctx.quadraticCurveTo(1030, 506, 1030, 617);
						ctx.lineTo(1030, 889);
						ctx.lineTo(980, 889);
						ctx.closePath();
						ctx.fillStyle = colorPointer;
						ctx.shadowColor = "#555";
						ctx.shadowBlur = 5;
						ctx.shadowOffsetX = 5;
						ctx.shadowOffsetY = 0;
						ctx.fill();
						ctx.restore();		
					},

					clearSurroundings: function(ctx) {
						ctx.save();
						
						ctx.beginPath();
						ctx.moveTo(55, 82);
						ctx.lineTo(1708, 82);
						ctx.lineTo(1708, 182);
						ctx.lineTo(2308, 182);
						ctx.lineTo(2809, 90);
						ctx.lineTo(2906, 182);
						
						ctx.lineTo(2906, 971-182);	
						ctx.lineTo(2809, 971-90);
						ctx.lineTo(2308, 971-182);
						ctx.lineTo(1708, 971-182);
						ctx.lineTo(1708, 971-82);
						ctx.lineTo(55, 971-82);
						
						// surroundings,  move back
						ctx.lineTo(0, 971);
						ctx.lineTo(2962, 971);
						ctx.lineTo(2962, 0);
						ctx.lineTo(0, 0);
						ctx.lineTo(0, 971);
						ctx.lineTo(55, 971);
						ctx.closePath();
						
						ctx.lineWidth = 0.2;	
						ctx.strokeStyle = "black";
						ctx.fillStyle = "white";
						
						ctx.stroke();	
						ctx.fill();
						
						ctx.restore();
					},
					
					// Creates an image based on the given public key.
					frontImage: function(key, opts) {
						// create the temporary draw canvas
						var canvas = document.createElement('canvas');
						canvas.width = 2962;
						canvas.height = 971;
						
						var key = key || "";
						
						var ctx = canvas.getContext('2d');
						var cp = {x: 665, y: 389};
						
						PaperWallet.draw.gradients(ctx, opts);
						
						// draw guilloche
						guillocheParams = PaperWallet.draw.guillocheParams(key);
						guillocheParams.color = opts.color.guilloche;
						guillocheParams.centerPoint = cp;
						PaperWallet.draw.guilloche(ctx,  guillocheParams);
						
						PaperWallet.draw.logos(ctx, cp);
						PaperWallet.draw.pointer(ctx, opts.color.pointer);
						
						PaperWallet.draw.clearSurroundings(ctx);
						
						// draw empty rectangle for public QR code
						var qrOpts = {
							lineWidth: 0.2,
							strokeStyle: "black",
							fillStyle: "white",
							radius: 20,
						};
						
						PaperWallet.draw.roundRect(ctx, 113, 344, 310, 310, qrOpts);
						PaperWallet.draw.roundRect(ctx, 1816, 290, 384, 384, qrOpts);
						PaperWallet.draw.roundRect(ctx, 2416, 290, 384, 384, qrOpts);
						
						PaperWallet.draw.text(ctx, opts);
						
						PaperWallet.draw.obfuscation(ctx, 1831, 310, 350, 350);

						return canvas.toDataURL();
					}
				};
			})();
		}

	// global drawing options, most of which will be replaced in setDesign() for translation
	
	var drawOpts = {
		color: {
			publicUpper: "#fff57c",
			publicLower: "#f7931a",
			privateLeft: "#8cd96f",			
			privateRight: "#fff67d",
			pointer: "#03ab5d",
			guilloche: "white",
			
			text: "#1937a9",
			textShadow: "white",
			textPointer: "white",				
		},

		font: "bold 20pt sans-serif",			
		
		text: {
			publicAddress: "",
			depositVerify: "",
			privateKey: "",
			walletImportFormat: "",
			withdraw: "",
		},
	};


	// Functions for printer calibration

	var inlineMediaStyle = null;

	function printZoom (changeBy) { /* handle +/- buttons for print zoom */
		var currentZoom = document.getElementById("printerzoom").value * 1;
		document.getElementById("printerzoom").value = currentZoom + changeBy;
		updateCalibrationInfo();
	}

	function printShift (changeBy) { /* handle +/- buttons for print shift */
		var currentShift = document.getElementById("printershift").value * 1;
		document.getElementById("printershift").value = currentShift + changeBy;
		updateCalibrationInfo();
	}

	// apply the printer zoom & shift values as !important <head> styles
	// thanks http://stackoverflow.com/questions/798535/changing-media-specific-css-properties-from-javascript
	function updateCalibrationInfo() { 

		var currentZoom = document.getElementById("printerzoom").value;
		var currentShift = document.getElementById("printershift").value;
		// first write values onto printable area for reference
		document.getElementById("calibrationinfo").innerHTML="Zoom: " + currentZoom + " / Horizontal shift: " + currentShift;
		// now update the @print style accordingly
		var head = document.getElementsByTagName('head')[0];
		var printerStyle = document.createElement('style');
		printerStyle.setAttribute('type', 'text/css');
		printerStyle.setAttribute('media', 'print');
		printerStyle.appendChild(document.createTextNode('body { width: ' + ( 950 + (currentZoom * 10)) + 'px !important;} #main { left: ' + ((currentShift * 5)) + 'px !important;}'));

		if (inlineMediaStyle != null) { 
			head.replaceChild(printerStyle, inlineMediaStyle)
		} else {
			head.appendChild(printerStyle);
		}
		inlineMediaStyle = printerStyle;
	}
	
	var printCounter=0;
	var landscapeAlert=0;
	
	function doPrint(myContext) { /* What to do anytime a print button is clicked */
		window.landscapeAlert ++;
		updateCalibrationInfo();
		if (window.landscapeAlert == 1) {
			alert ('Important note: This design requires that you set your printer to output in LANDSCAPE (wide) format.');	
		}
		
		if (myContext == 'generate') {
			window.printCounter ++;
			if (window.printCounter == 2) {
				alert (" *** WARNING *** WARNING *** WARNING *** \n\nYou are about to print a second wallet with the same set of keys. \n\nUnless you intended to make a backup wallet, cancel this print job and generate a fresh set of keys.");
			}
		}
		window.print();	
	}
	
	function testAndApplyVanityKey() { /* Verify that a self-entered key is valid, and compute the corresponding public address, render the wallet. */
       
		var suppliedKey = document.getElementById('suppliedPrivateKey').value;
		suppliedKey = suppliedKey.trim(); // in case any spaces or whitespace got pasted in
		document.getElementById('suppliedPrivateKey').value = suppliedKey;
		if (!ninja.privateKey.isPrivateKey(suppliedKey)) {
			var message = 'What you entered does not appear to be a ' + window.currencyName + ' Wallet Import Format (WIF) private key.';
			if (suppliedKey == null || suppliedKey.length == 0) {
				alert(message);
				return;
			}
			if (suppliedKey.length < ninja.wallets.paperwallet.minPassphraseLength) {
				alert(message + '\n\nIf you would like to use this text as a random data source or "brain wallet" passphrase, please supply a longer input.');
				return;
			}
			if (confirm(message + '\n\nClick OK to interpret this text as a random data source or "brain wallet" passphrase from which a SHA256 hash and keypair will be computed.')) {
				var wallet = new Bitcoin.ECKey(Crypto.SHA256(suppliedKey, { asBytes: true }));
				var computedPublicAddress = wallet.getBitcoinAddress();
				var privateKey = wallet.getBitcoinWalletImportFormat();
				ninja.wallets.paperwallet.buildManual({ address: computedPublicAddress, wifKey: privateKey }, document.getElementById('paperpassphrase').value);
			}
		} else {			
			var computedPublicAddress = new Bitcoin.ECKey(suppliedKey).getBitcoinAddress();
			alert ('OK! This is a valid WIF-format private key whose public address is:\r\r'+computedPublicAddress);
			ninja.wallets.paperwallet.buildManual({ address: computedPublicAddress, wifKey: suppliedKey }, document.getElementById('paperpassphrase').value);
			window.printCounter = 0;
		}
	}

	function guessPrinterSettings() {
		// detect browser / OS human-readable
		txt = "<p><small style=\"color: #666666;\"><b>User-agent:</b> " + navigator.userAgent + "</small><br />&nbsp;<br />";
		var parser = new UAParser();
		parser.setUA(navigator.userAgent);
		var result = parser.getResult();
		txt+=result.browser.name + " version " + result.browser.version + " (" + result.engine.name + ")<br />";
		txt+=result.os.name + " version " + result.os.version + " (" + result.cpu.architecture + ")<br />";
		txt += "</p>";
		document.getElementById("browserinfo").innerHTML=txt;
		
		// some common printer calibration settings here
		if (result.browser.name == 'Safari') { // OS X Safari
			document.getElementById("printerzoom").value = 5;
			document.getElementById("printershift").value = 6;
		} else if (result.browser.name == 'Chrome' && result.os.name == 'Mac OS X') { 
			document.getElementById("printerzoom").value = 3;
			document.getElementById("printershift").value = 3;
		} else if (result.browser.name == 'Firefox' && result.os.name == 'Ubuntu') { // live CD?
			document.getElementById("printerzoom").value = 2;
			document.getElementById("printershift").value = 3;
		} else if (result.browser.name == 'Iceweasel' && result.os.name == 'Debian') { 
			document.getElementById("printerzoom").value = 1.8;
			document.getElementById("printershift").value = 2.9;
		} else if (result.browser.name == 'IE' && result.os.name == 'Windows') { 
			document.getElementById("printerzoom").value = 5;
			document.getElementById("printershift").value = 6;
		}

		updateCalibrationInfo();
	}

function setDesign (whichDesign, isOnLoad, whichLanguage) {
	whichLanguage = typeof whichLanguage !== 'undefined' ? whichLanguage : 'english';

	// these translations are only applicable to the standard bitcoin wallet. 
	// alt-currencies and special holiday/theme designs use JPGs instead.
	
	var translations = {
		
		'english': {
			publicAddress: "PUBLIC ADDRESS",
			depositVerify: "DEPOSIT / VERIFY",
			privateKey: "PRIVATE KEY",
			walletImportFormat: "WALLET IMPORT FORMAT",
			withdraw: "PRIVATE KEY / WITHDRAW",
			backLongTextFontSize: "9px",
			backPaperWallet: "BITCOIN PAPER WALLET",
			backAmount: "Amount Added",
			backDate: "Date",
			backNotes: "Notes:",
			backInst1: "To deposit additional funds to this paper wallet, send bitcoins to its public address, anytime.",
			backInst2: "Verify your balance by searching for the public address using a service such as blockchain.info",
			backInst3: "<strong>Do not reveal the private key</strong> until you are ready to import the balance on this wallet to a bitcoin client, exchange, or online wallet.",
			backInst4: "When withdrawing your funds from this wallet you should remove the <strong>ENTIRE BALANCE</strong>. If you attempt to spend only some of the funds you will likely lose the remaining bitcoins forever.<br />For instructions visit bitcoinpaperwallet.com",
		}
	};
	
	drawOpts.text = translations[whichLanguage];

    
	if (!whichDesign) whichDesign = 'alt-dogecoin';	

	// show the language menu if we're using the default design
//	if (whichDesign == 'default') {
//		document.getElementById('langPicker').style.display = 'inline';
//	} else {
//		document.getElementById('langPicker').style.display = 'none';
//	}

	// if we used the dropdown menu to select an alt-coin, we need to reload the page altogether.
	if (!isOnLoad && whichDesign.substring(0,4) == 'alt-') window.location='?design=' + whichDesign;
	// if we're already using an altcoin, reload the page no matter which design we choose.
	if (!isOnLoad && window.networkVersion != 0x00 ) window.location='?design=' + whichDesign;

	// reload background and add altcoin donation addresses if necessary
//	if (isOnLoad && whichDesign.substring(0,4) == 'alt-') {
//		document.getElementById('logoback').style.backgroundImage = 'url(images/logo-' + whichDesign + '.png)';
//	}

	// now deal with JPG-style backgrounds, and apply instructions to default design

	if (whichDesign == 'default') {
		var myFront = './images/walletfront.jpg';
		var myBack = './images/walletback.jpg';
		var myPreview = './images/walletfront.jpg';
		// setup proper back text translation & controls
		//document.getElementById('backTextControl').style.display='block';
		document.getElementById('backText').style.display='block';
		document.getElementById("backPaperWallet").innerHTML = translations[whichLanguage]['backPaperWallet'];
		document.getElementById("backAmount").innerHTML = translations[whichLanguage]['backAmount'];
		document.getElementById("backDate").innerHTML = translations[whichLanguage]['backDate'];
		document.getElementById("backNotes").innerHTML = translations[whichLanguage]['backNotes'];
		document.getElementById("backLongText").style.fontSize = translations[whichLanguage]['backLongTextFontSize'];
		document.getElementById("backInst1").innerHTML = translations[whichLanguage]['backInst1'];
		document.getElementById("backInst2").innerHTML = translations[whichLanguage]['backInst2'];
		document.getElementById("backInst3").innerHTML = translations[whichLanguage]['backInst3'];
		document.getElementById("backInst4").innerHTML = translations[whichLanguage]['backInst4'];

	} else {
		var myFront = './images/walletfront.jpg';
		var myBack = './images/walletback.jpg';
		var myPreview = './images/walletfront.jpg';
        //document.getElementById('backTextControl').style.display='none';
		//document.getElementById('backText').style.display='none';
	}

	window.frontJPG=myFront;
	window.designChoice=whichDesign;
	
	// if the front artwork is ready, set it to either the correspondong JPG, or draw it	
	if (document.getElementById('papersvg1') != null) {
		if (whichDesign == 'default') {
			document.getElementById("papersvg1").src = PaperWallet.draw.frontImage(document.getElementById("btcaddress1").innerHTML, drawOpts);
			} else {
			document.getElementById('papersvg1').src=myFront;
		}
	}
	
	// set back
	document.getElementById('backsvg1').src=myBack;
//	document.getElementById('designPreview').src=myPreview;
	document.getElementById('designPicker').value = whichDesign; // force menu option in case it was picked during onload.
	//document.getElementById('langPicker').value = whichLanguage; 
}

function setDenomination(valueAndUnit) {
	if (!valueAndUnit) {
		document.getElementById('backSeal').style.display = 'none';
		document.getElementById('backDenominationOther').style.display = 'none';
	} else if (valueAndUnit == 'other') {
		document.getElementById('backDenominationOther').style.display = 'block';
		document.getElementById('backSeal').style.display = 'block';
		document.getElementById('backSealBig').innerHTML = document.getElementById('backDenominationOtherAmount').value;
		document.getElementById('backSealSmall').innerHTML = document.getElementById('backDenominationOtherUnit').value;
	} else {
		denominationParts = valueAndUnit.split(' ');
		document.getElementById('backSeal').style.display = 'block';
		document.getElementById('backSealBig').innerHTML = denominationParts[0];
		document.getElementById('backSealSmall').innerHTML = denominationParts[1];
		document.getElementById('backDenominationOther').style.display = 'none'
	}
}
