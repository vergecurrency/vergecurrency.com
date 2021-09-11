
// Basic initialization and switching for bitcoin vs. alternative cryptocurrencies
function setCryptoCurrency(toThis) {
	window.currencyName = toThis;
	switch (toThis)
	{
	case 'Bitcoin':	
           
	  window.networkVersion = 0x00;
	  window.privateKeyPrefix = 0x80;
	  window.WIFPrefix = '5';
	  window.compressedWIFPrefix = '[LK]';
	  break;
	case 'Litecoin':
       
		window.networkVersion = 0x30;
		window.privateKeyPrefix = 0xb0;
		window.WIFPrefix = '6';
		window.compressedWIFPrefix = 'T';
		document.title = 'Litecoin paper wallet generator';
		break;
	case 'Verge':
        
		window.networkVersion = 0x1e;
		window.privateKeyPrefix = 0x9e;
		window.WIFPrefix = '6';
		window.compressedWIFPrefix = 'Q';	
		document.title = 'VERGE paper wallet generator.';
		break;
	case 'Testnet':
		window.networkVersion = 0x6F;
		window.privateKeyPrefix = 0xEF;
		window.WIFPrefix = '9';
		window.compressedWIFPrefix = 'c';
		document.title = 'Bitcoin TESTNET paper wallet generator';
		break;
	default:
	  alert ('Invalid cryptocurrency "' + toThis + '" at initialization. Defaulting to Bitcoin.');
	  setCryptoCurrency('Bitcoin');		
	} // eof switch
	return (true);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var myDesign = getParameterByName('design');
window.suppliesURL = 'https://bitcoinpaperwallet.com/?p=' + myDesign + '#purchase';

switch (myDesign) {
	case 'alt-litecoin':
		setCryptoCurrency('Verge');
		break;
	case 'alt-dogecoin':
		setCryptoCurrency('Verge');
		break;
	case 'alt-testnet':
		setCryptoCurrency('Testnet');
		break;
	default:
	setCryptoCurrency('Verge');
		break; // remove special currency flag
} 

// Array.prototype.map function is in the public domain.
// Production steps of ECMA-262, Edition 5, 15.4.4.19  
// Reference: http://es5.github.com/#x15.4.4.19  
if (!Array.prototype.map) {
	Array.prototype.map = function (callback, thisArg) {
		var T, A, k;
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		// 1. Let O be the result of calling ToObject passing the |this| value as the argument.  
		var O = Object(this);
		// 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".  
		// 3. Let len be ToUint32(lenValue).  
		var len = O.length >>> 0;
		// 4. If IsCallable(callback) is false, throw a TypeError exception.  
		// See: http://es5.github.com/#x9.11  
		if ({}.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}
		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.  
		if (thisArg) {
			T = thisArg;
		}
		// 6. Let A be a new array created as if by the expression new Array(len) where Array is  
		// the standard built-in constructor with that name and len is the value of len.  
		A = new Array(len);
		// 7. Let k be 0  
		k = 0;
		// 8. Repeat, while k < len  
		while (k < len) {
			var kValue, mappedValue;
			// a. Let Pk be ToString(k).  
			//   This is implicit for LHS operands of the in operator  
			// b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.  
			//   This step can be combined with c  
			// c. If kPresent is true, then  
			if (k in O) {
				// i. Let kValue be the result of calling the Get internal method of O with argument Pk.  
				kValue = O[k];
				// ii. Let mappedValue be the result of calling the Call internal method of callback  
				// with T as the this value and argument list containing kValue, k, and O.  
				mappedValue = callback.call(T, kValue, k, O);
				// iii. Call the DefineOwnProperty internal method of A with arguments  
				// Pk, Property Descriptor {Value: mappedValue, Writable: true, Enumerable: true, Configurable: true},  
				// and false.  
				// In browsers that support Object.defineProperty, use the following:  
				// Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });  
				// For best browser support, use the following:  
				A[k] = mappedValue;
			}
			// d. Increase k by 1.  
			k++;
		}
		// 9. return A  
		return A;
	};
}

/*!
* Crypto-JS v2.5.4	Crypto.js
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009-2013, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*/
if (typeof Crypto == "undefined" || !Crypto.util) {
	(function () {

		var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

		// Global Crypto object
		var Crypto = window.Crypto = {};

		// Crypto utilities
		var util = Crypto.util = {

			// Bit-wise rotate left
			rotl: function (n, b) {
				return (n << b) | (n >>> (32 - b));
			},

			// Bit-wise rotate right
			rotr: function (n, b) {
				return (n << (32 - b)) | (n >>> b);
			},

			// Swap big-endian to little-endian and vice versa
			endian: function (n) {

				// If number given, swap endian
				if (n.constructor == Number) {
					return util.rotl(n, 8) & 0x00FF00FF |
			    util.rotl(n, 24) & 0xFF00FF00;
				}

				// Else, assume array and swap all items
				for (var i = 0; i < n.length; i++)
					n[i] = util.endian(n[i]);
				return n;

			},

			// Generate an array of any length of random bytes
			randomBytes: function (n) {
				for (var bytes = []; n > 0; n--)
					bytes.push(Math.floor(Math.random() * 256));
				return bytes;
			},

			// Convert a byte array to big-endian 32-bit words
			bytesToWords: function (bytes) {
				for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
					words[b >>> 5] |= (bytes[i] & 0xFF) << (24 - b % 32);
				return words;
			},

			// Convert big-endian 32-bit words to a byte array
			wordsToBytes: function (words) {
				for (var bytes = [], b = 0; b < words.length * 32; b += 8)
					bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
				return bytes;
			},

			// Convert a byte array to a hex string
			bytesToHex: function (bytes) {
				for (var hex = [], i = 0; i < bytes.length; i++) {
					hex.push((bytes[i] >>> 4).toString(16));
					hex.push((bytes[i] & 0xF).toString(16));
				}
				return hex.join("");
			},

			// Convert a hex string to a byte array
			hexToBytes: function (hex) {
				for (var bytes = [], c = 0; c < hex.length; c += 2)
					bytes.push(parseInt(hex.substr(c, 2), 16));
				return bytes;
			},

			// Convert a byte array to a base-64 string
			bytesToBase64: function (bytes) {
				for (var base64 = [], i = 0; i < bytes.length; i += 3) {
					var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
					for (var j = 0; j < 4; j++) {
						if (i * 8 + j * 6 <= bytes.length * 8)
							base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
						else base64.push("=");
					}
				}

				return base64.join("");
			},

			// Convert a base-64 string to a byte array
			base64ToBytes: function (base64) {
				// Remove non-base-64 characters
				base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");

				for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
					if (imod4 == 0) continue;
					bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) |
			        (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
				}

				return bytes;
			}

		};

		// Crypto character encodings
		var charenc = Crypto.charenc = {};

		// UTF-8 encoding
		var UTF8 = charenc.UTF8 = {

			// Convert a string to a byte array
			stringToBytes: function (str) {
				return Binary.stringToBytes(unescape(encodeURIComponent(str)));
			},

			// Convert a byte array to a string
			bytesToString: function (bytes) {
				return decodeURIComponent(escape(Binary.bytesToString(bytes)));
			}

		};

		// Binary encoding
		var Binary = charenc.Binary = {

			// Convert a string to a byte array
			stringToBytes: function (str) {
				for (var bytes = [], i = 0; i < str.length; i++)
					bytes.push(str.charCodeAt(i) & 0xFF);
				return bytes;
			},

			// Convert a byte array to a string
			bytesToString: function (bytes) {
				for (var str = [], i = 0; i < bytes.length; i++)
					str.push(String.fromCharCode(bytes[i]));
				return str.join("");
			}

		};

	})();
}	

/*!
* Crypto-JS v2.5.4	SHA256.js
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009-2013, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*/
(function () {

	// Shortcuts
	var C = Crypto,
		util = C.util,
		charenc = C.charenc,
		UTF8 = charenc.UTF8,
		Binary = charenc.Binary;

	// Constants
	var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
        0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
        0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
        0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
        0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
        0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
        0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
        0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
        0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
        0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
        0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
        0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
        0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
        0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
        0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
        0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];

	// Public API
	var SHA256 = C.SHA256 = function (message, options) {
		var digestbytes = util.wordsToBytes(SHA256._sha256(message));
		return options && options.asBytes ? digestbytes :
	    options && options.asString ? Binary.bytesToString(digestbytes) :
	    util.bytesToHex(digestbytes);
	};

	// The core
	SHA256._sha256 = function (message) {

		// Convert to byte array
		if (message.constructor == String) message = UTF8.stringToBytes(message);
		/* else, assume byte array already */

		var m = util.bytesToWords(message),
		l = message.length * 8,
		H = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
				0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19],
		w = [],
		a, b, c, d, e, f, g, h, i, j,
		t1, t2;

		// Padding
		m[l >> 5] |= 0x80 << (24 - l % 32);
		m[((l + 64 >> 9) << 4) + 15] = l;

		for (var i = 0; i < m.length; i += 16) {

			a = H[0];
			b = H[1];
			c = H[2];
			d = H[3];
			e = H[4];
			f = H[5];
			g = H[6];
			h = H[7];

			for (var j = 0; j < 64; j++) {

				if (j < 16) w[j] = m[j + i];
				else {

					var gamma0x = w[j - 15],
				gamma1x = w[j - 2],
				gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^
				            ((gamma0x << 14) | (gamma0x >>> 18)) ^
				            (gamma0x >>> 3),
				gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^
				            ((gamma1x << 13) | (gamma1x >>> 19)) ^
				            (gamma1x >>> 10);

					w[j] = gamma0 + (w[j - 7] >>> 0) +
				    gamma1 + (w[j - 16] >>> 0);

				}

				var ch = e & f ^ ~e & g,
			maj = a & b ^ a & c ^ b & c,
			sigma0 = ((a << 30) | (a >>> 2)) ^
			            ((a << 19) | (a >>> 13)) ^
			            ((a << 10) | (a >>> 22)),
			sigma1 = ((e << 26) | (e >>> 6)) ^
			            ((e << 21) | (e >>> 11)) ^
			            ((e << 7) | (e >>> 25));


				t1 = (h >>> 0) + sigma1 + ch + (K[j]) + (w[j] >>> 0);
				t2 = sigma0 + maj;

				h = g;
				g = f;
				f = e;
				e = (d + t1) >>> 0;
				d = c;
				c = b;
				b = a;
				a = (t1 + t2) >>> 0;

			}

			H[0] += a;
			H[1] += b;
			H[2] += c;
			H[3] += d;
			H[4] += e;
			H[5] += f;
			H[6] += g;
			H[7] += h;

		}

		return H;

	};

	// Package private blocksize
	SHA256._blocksize = 16;

	SHA256._digestsize = 32;

})();	

/*!
* Crypto-JS v2.5.4	PBKDF2.js
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009-2013, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*/
(function () {

	// Shortcuts
	var C = Crypto,
		util = C.util,
		charenc = C.charenc,
		UTF8 = charenc.UTF8,
		Binary = charenc.Binary;

	C.PBKDF2 = function (password, salt, keylen, options) {

		// Convert to byte arrays
		if (password.constructor == String) password = UTF8.stringToBytes(password);
		if (salt.constructor == String) salt = UTF8.stringToBytes(salt);
		/* else, assume byte arrays already */

		// Defaults
		var hasher = options && options.hasher || C.SHA1,
			iterations = options && options.iterations || 1;

		// Pseudo-random function
		function PRF(password, salt) {
			return C.HMAC(hasher, salt, password, { asBytes: true });
		}

		// Generate key
		var derivedKeyBytes = [],
			blockindex = 1;
		while (derivedKeyBytes.length < keylen) {
			var block = PRF(password, salt.concat(util.wordsToBytes([blockindex])));
			for (var u = block, i = 1; i < iterations; i++) {
				u = PRF(password, u);
				for (var j = 0; j < block.length; j++) block[j] ^= u[j];
			}
			derivedKeyBytes = derivedKeyBytes.concat(block);
			blockindex++;
		}

		// Truncate excess bytes
		derivedKeyBytes.length = keylen;

		return options && options.asBytes ? derivedKeyBytes :
		options && options.asString ? Binary.bytesToString(derivedKeyBytes) :
		util.bytesToHex(derivedKeyBytes);

	};

})(); 

/*!
* Crypto-JS v2.5.4	HMAC.js
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009-2013, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*/
(function () {

	// Shortcuts
	var C = Crypto,
		util = C.util,
		charenc = C.charenc,
		UTF8 = charenc.UTF8,
		Binary = charenc.Binary;

	C.HMAC = function (hasher, message, key, options) {

		// Convert to byte arrays
		if (message.constructor == String) message = UTF8.stringToBytes(message);
		if (key.constructor == String) key = UTF8.stringToBytes(key);
		/* else, assume byte arrays already */

		// Allow arbitrary length keys
		if (key.length > hasher._blocksize * 4)
			key = hasher(key, { asBytes: true });

		// XOR keys with pad constants
		var okey = key.slice(0),
			ikey = key.slice(0);
		for (var i = 0; i < hasher._blocksize * 4; i++) {
			okey[i] ^= 0x5C;
			ikey[i] ^= 0x36;
		}

		var hmacbytes = hasher(okey.concat(hasher(ikey.concat(message), { asBytes: true })), { asBytes: true });

		return options && options.asBytes ? hmacbytes :
		options && options.asString ? Binary.bytesToString(hmacbytes) :
		util.bytesToHex(hmacbytes);

	};

})();

/*!
* Crypto-JS v2.5.4	AES.js
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009-2013, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*/
(function () {

	// Shortcuts
	var C = Crypto,
		util = C.util,
		charenc = C.charenc,
		UTF8 = charenc.UTF8;

	// Precomputed SBOX
	var SBOX = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5,
            0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
            0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0,
            0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
            0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc,
            0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
            0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a,
            0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
            0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0,
            0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
            0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b,
            0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
            0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85,
            0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
            0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5,
            0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
            0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17,
            0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
            0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88,
            0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
            0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c,
            0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
            0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9,
            0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
            0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6,
            0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
            0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e,
            0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
            0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94,
            0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
            0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68,
            0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];

	// Compute inverse SBOX lookup table
	for (var INVSBOX = [], i = 0; i < 256; i++) INVSBOX[SBOX[i]] = i;

	// Compute multiplication in GF(2^8) lookup tables
	var MULT2 = [],
		MULT3 = [],
		MULT9 = [],
		MULTB = [],
		MULTD = [],
		MULTE = [];

	function xtime(a, b) {
		for (var result = 0, i = 0; i < 8; i++) {
			if (b & 1) result ^= a;
			var hiBitSet = a & 0x80;
			a = (a << 1) & 0xFF;
			if (hiBitSet) a ^= 0x1b;
			b >>>= 1;
		}
		return result;
	}

	for (var i = 0; i < 256; i++) {
		MULT2[i] = xtime(i, 2);
		MULT3[i] = xtime(i, 3);
		MULT9[i] = xtime(i, 9);
		MULTB[i] = xtime(i, 0xB);
		MULTD[i] = xtime(i, 0xD);
		MULTE[i] = xtime(i, 0xE);
	}

	// Precomputed RCon lookup
	var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	// Inner state
	var state = [[], [], [], []],
		keylength,
		nrounds,
		keyschedule;

	var AES = C.AES = {

		/**
		* Public API
		*/

		encrypt: function (message, password, options) {

			options = options || {};

			// Determine mode
			var mode = options.mode || new C.mode.OFB;

			// Allow mode to override options
			if (mode.fixOptions) mode.fixOptions(options);

			var 

			// Convert to bytes if message is a string
		m = (
			message.constructor == String ?
			UTF8.stringToBytes(message) :
			message
		),

			// Generate random IV
		iv = options.iv || util.randomBytes(AES._blocksize * 4),

			// Generate key
		k = (
			password.constructor == String ?
			// Derive key from pass-phrase
			C.PBKDF2(password, iv, 32, { asBytes: true }) :
			// else, assume byte array representing cryptographic key
			password
		);

			// Encrypt
			AES._init(k);
			mode.encrypt(AES, m, iv);

			// Return ciphertext
			m = options.iv ? m : iv.concat(m);
			return (options && options.asBytes) ? m : util.bytesToBase64(m);

		},

		decrypt: function (ciphertext, password, options) {

			options = options || {};

			// Determine mode
			var mode = options.mode || new C.mode.OFB;

			// Allow mode to override options
			if (mode.fixOptions) mode.fixOptions(options);

			var 

			// Convert to bytes if ciphertext is a string
		c = (
			ciphertext.constructor == String ?
			util.base64ToBytes(ciphertext) :
			ciphertext
		),

			// Separate IV and message
		iv = options.iv || c.splice(0, AES._blocksize * 4),

			// Generate key
		k = (
			password.constructor == String ?
			// Derive key from pass-phrase
			C.PBKDF2(password, iv, 32, { asBytes: true }) :
			// else, assume byte array representing cryptographic key
			password
		);

			// Decrypt
			AES._init(k);
			mode.decrypt(AES, c, iv);

			// Return plaintext
			return (options && options.asBytes) ? c : UTF8.bytesToString(c);

		},


		/**
		* Package private methods and properties
		*/

		_blocksize: 4,

		_encryptblock: function (m, offset) {

			// Set input
			for (var row = 0; row < AES._blocksize; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] = m[offset + col * 4 + row];
			}

			// Add round key
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] ^= keyschedule[col][row];
			}

			for (var round = 1; round < nrounds; round++) {

				// Sub bytes
				for (var row = 0; row < 4; row++) {
					for (var col = 0; col < 4; col++)
						state[row][col] = SBOX[state[row][col]];
				}

				// Shift rows
				state[1].push(state[1].shift());
				state[2].push(state[2].shift());
				state[2].push(state[2].shift());
				state[3].unshift(state[3].pop());

				// Mix columns
				for (var col = 0; col < 4; col++) {

					var s0 = state[0][col],
				s1 = state[1][col],
				s2 = state[2][col],
				s3 = state[3][col];

					state[0][col] = MULT2[s0] ^ MULT3[s1] ^ s2 ^ s3;
					state[1][col] = s0 ^ MULT2[s1] ^ MULT3[s2] ^ s3;
					state[2][col] = s0 ^ s1 ^ MULT2[s2] ^ MULT3[s3];
					state[3][col] = MULT3[s0] ^ s1 ^ s2 ^ MULT2[s3];

				}

				// Add round key
				for (var row = 0; row < 4; row++) {
					for (var col = 0; col < 4; col++)
						state[row][col] ^= keyschedule[round * 4 + col][row];
				}

			}

			// Sub bytes
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] = SBOX[state[row][col]];
			}

			// Shift rows
			state[1].push(state[1].shift());
			state[2].push(state[2].shift());
			state[2].push(state[2].shift());
			state[3].unshift(state[3].pop());

			// Add round key
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] ^= keyschedule[nrounds * 4 + col][row];
			}

			// Set output
			for (var row = 0; row < AES._blocksize; row++) {
				for (var col = 0; col < 4; col++)
					m[offset + col * 4 + row] = state[row][col];
			}

		},

		_decryptblock: function (c, offset) {

			// Set input
			for (var row = 0; row < AES._blocksize; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] = c[offset + col * 4 + row];
			}

			// Add round key
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] ^= keyschedule[nrounds * 4 + col][row];
			}

			for (var round = 1; round < nrounds; round++) {

				// Inv shift rows
				state[1].unshift(state[1].pop());
				state[2].push(state[2].shift());
				state[2].push(state[2].shift());
				state[3].push(state[3].shift());

				// Inv sub bytes
				for (var row = 0; row < 4; row++) {
					for (var col = 0; col < 4; col++)
						state[row][col] = INVSBOX[state[row][col]];
				}

				// Add round key
				for (var row = 0; row < 4; row++) {
					for (var col = 0; col < 4; col++)
						state[row][col] ^= keyschedule[(nrounds - round) * 4 + col][row];
				}

				// Inv mix columns
				for (var col = 0; col < 4; col++) {

					var s0 = state[0][col],
				s1 = state[1][col],
				s2 = state[2][col],
				s3 = state[3][col];

					state[0][col] = MULTE[s0] ^ MULTB[s1] ^ MULTD[s2] ^ MULT9[s3];
					state[1][col] = MULT9[s0] ^ MULTE[s1] ^ MULTB[s2] ^ MULTD[s3];
					state[2][col] = MULTD[s0] ^ MULT9[s1] ^ MULTE[s2] ^ MULTB[s3];
					state[3][col] = MULTB[s0] ^ MULTD[s1] ^ MULT9[s2] ^ MULTE[s3];

				}

			}

			// Inv shift rows
			state[1].unshift(state[1].pop());
			state[2].push(state[2].shift());
			state[2].push(state[2].shift());
			state[3].push(state[3].shift());

			// Inv sub bytes
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] = INVSBOX[state[row][col]];
			}

			// Add round key
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++)
					state[row][col] ^= keyschedule[col][row];
			}

			// Set output
			for (var row = 0; row < AES._blocksize; row++) {
				for (var col = 0; col < 4; col++)
					c[offset + col * 4 + row] = state[row][col];
			}

		},


		/**
		* Private methods
		*/

		_init: function (k) {
			keylength = k.length / 4;
			nrounds = keylength + 6;
			AES._keyexpansion(k);
		},

		// Generate a key schedule
		_keyexpansion: function (k) {

			keyschedule = [];

			for (var row = 0; row < keylength; row++) {
				keyschedule[row] = [
			k[row * 4],
			k[row * 4 + 1],
			k[row * 4 + 2],
			k[row * 4 + 3]
		];
			}

			for (var row = keylength; row < AES._blocksize * (nrounds + 1); row++) {

				var temp = [
			keyschedule[row - 1][0],
			keyschedule[row - 1][1],
			keyschedule[row - 1][2],
			keyschedule[row - 1][3]
		];

				if (row % keylength == 0) {

					// Rot word
					temp.push(temp.shift());

					// Sub word
					temp[0] = SBOX[temp[0]];
					temp[1] = SBOX[temp[1]];
					temp[2] = SBOX[temp[2]];
					temp[3] = SBOX[temp[3]];

					temp[0] ^= RCON[row / keylength];

				} else if (keylength > 6 && row % keylength == 4) {

					// Sub word
					temp[0] = SBOX[temp[0]];
					temp[1] = SBOX[temp[1]];
					temp[2] = SBOX[temp[2]];
					temp[3] = SBOX[temp[3]];

				}

				keyschedule[row] = [
			keyschedule[row - keylength][0] ^ temp[0],
			keyschedule[row - keylength][1] ^ temp[1],
			keyschedule[row - keylength][2] ^ temp[2],
			keyschedule[row - keylength][3] ^ temp[3]
		];

			}

		}

	};

})();

/*!
* Crypto-JS 2.5.4 BlockModes.js
* contribution from Simon Greatrix
*/

(function (C) {

	// Create pad namespace
	var C_pad = C.pad = {};

	// Calculate the number of padding bytes required.
	function _requiredPadding(cipher, message) {
		var blockSizeInBytes = cipher._blocksize * 4;
		var reqd = blockSizeInBytes - message.length % blockSizeInBytes;
		return reqd;
	}

	// Remove padding when the final byte gives the number of padding bytes.
	var _unpadLength = function (cipher, message, alg, padding) {
		var pad = message.pop();
		if (pad == 0) {
			throw new Error("Invalid zero-length padding specified for " + alg
			+ ". Wrong cipher specification or key used?");
		}
		var maxPad = cipher._blocksize * 4;
		if (pad > maxPad) {
			throw new Error("Invalid padding length of " + pad
			+ " specified for " + alg
			+ ". Wrong cipher specification or key used?");
		}
		for (var i = 1; i < pad; i++) {
			var b = message.pop();
			if (padding != undefined && padding != b) {
				throw new Error("Invalid padding byte of 0x" + b.toString(16)
				+ " specified for " + alg
				+ ". Wrong cipher specification or key used?");
			}
		}
	};

	// No-operation padding, used for stream ciphers
	C_pad.NoPadding = {
		pad: function (cipher, message) { },
		unpad: function (cipher, message) { }
	};

	// Zero Padding.
	//
	// If the message is not an exact number of blocks, the final block is
	// completed with 0x00 bytes. There is no unpadding.
	C_pad.ZeroPadding = {
		pad: function (cipher, message) {
			var blockSizeInBytes = cipher._blocksize * 4;
			var reqd = message.length % blockSizeInBytes;
			if (reqd != 0) {
				for (reqd = blockSizeInBytes - reqd; reqd > 0; reqd--) {
					message.push(0x00);
				}
			}
		},

		unpad: function (cipher, message) {
			while (message[message.length - 1] == 0) {
				message.pop();
			}
		}
	};

	// ISO/IEC 7816-4 padding.
	//
	// Pads the plain text with an 0x80 byte followed by as many 0x00
	// bytes are required to complete the block.
	C_pad.iso7816 = {
		pad: function (cipher, message) {
			var reqd = _requiredPadding(cipher, message);
			message.push(0x80);
			for (; reqd > 1; reqd--) {
				message.push(0x00);
			}
		},

		unpad: function (cipher, message) {
			var padLength;
			for (padLength = cipher._blocksize * 4; padLength > 0; padLength--) {
				var b = message.pop();
				if (b == 0x80) return;
				if (b != 0x00) {
					throw new Error("ISO-7816 padding byte must be 0, not 0x" + b.toString(16) + ". Wrong cipher specification or key used?");
				}
			}
			throw new Error("ISO-7816 padded beyond cipher block size. Wrong cipher specification or key used?");
		}
	};

	// ANSI X.923 padding
	//
	// The final block is padded with zeros except for the last byte of the
	// last block which contains the number of padding bytes.
	C_pad.ansix923 = {
		pad: function (cipher, message) {
			var reqd = _requiredPadding(cipher, message);
			for (var i = 1; i < reqd; i++) {
				message.push(0x00);
			}
			message.push(reqd);
		},

		unpad: function (cipher, message) {
			_unpadLength(cipher, message, "ANSI X.923", 0);
		}
	};

	// ISO 10126
	//
	// The final block is padded with random bytes except for the last
	// byte of the last block which contains the number of padding bytes.
	C_pad.iso10126 = {
		pad: function (cipher, message) {
			var reqd = _requiredPadding(cipher, message);
			for (var i = 1; i < reqd; i++) {
				message.push(Math.floor(Math.random() * 256));
			}
			message.push(reqd);
		},

		unpad: function (cipher, message) {
			_unpadLength(cipher, message, "ISO 10126", undefined);
		}
	};

	// PKCS7 padding
	//
	// PKCS7 is described in RFC 5652. Padding is in whole bytes. The
	// value of each added byte is the number of bytes that are added,
	// i.e. N bytes, each of value N are added.
	C_pad.pkcs7 = {
		pad: function (cipher, message) {
			var reqd = _requiredPadding(cipher, message);
			for (var i = 0; i < reqd; i++) {
				message.push(reqd);
			}
		},

		unpad: function (cipher, message) {
			_unpadLength(cipher, message, "PKCS 7", message[message.length - 1]);
		}
	};

	// Create mode namespace
	var C_mode = C.mode = {};

	/**
	* Mode base "class".
	*/
	var Mode = C_mode.Mode = function (padding) {
		if (padding) {
			this._padding = padding;
		}
	};

	Mode.prototype = {
		encrypt: function (cipher, m, iv) {
			this._padding.pad(cipher, m);
			this._doEncrypt(cipher, m, iv);
		},

		decrypt: function (cipher, m, iv) {
			this._doDecrypt(cipher, m, iv);
			this._padding.unpad(cipher, m);
		},

		// Default padding
		_padding: C_pad.iso7816
	};


	/**
	* Electronic Code Book mode.
	* 
	* ECB applies the cipher directly against each block of the input.
	* 
	* ECB does not require an initialization vector.
	*/
	var ECB = C_mode.ECB = function () {
		// Call parent constructor
		Mode.apply(this, arguments);
	};

	// Inherit from Mode
	var ECB_prototype = ECB.prototype = new Mode;

	// Concrete steps for Mode template
	ECB_prototype._doEncrypt = function (cipher, m, iv) {
		var blockSizeInBytes = cipher._blocksize * 4;
		// Encrypt each block
		for (var offset = 0; offset < m.length; offset += blockSizeInBytes) {
			cipher._encryptblock(m, offset);
		}
	};
	ECB_prototype._doDecrypt = function (cipher, c, iv) {
		var blockSizeInBytes = cipher._blocksize * 4;
		// Decrypt each block
		for (var offset = 0; offset < c.length; offset += blockSizeInBytes) {
			cipher._decryptblock(c, offset);
		}
	};

	// ECB never uses an IV
	ECB_prototype.fixOptions = function (options) {
		options.iv = [];
	};


	/**
	* Cipher block chaining
	* 
	* The first block is XORed with the IV. Subsequent blocks are XOR with the
	* previous cipher output.
	*/
	var CBC = C_mode.CBC = function () {
		// Call parent constructor
		Mode.apply(this, arguments);
	};

	// Inherit from Mode
	var CBC_prototype = CBC.prototype = new Mode;

	// Concrete steps for Mode template
	CBC_prototype._doEncrypt = function (cipher, m, iv) {
		var blockSizeInBytes = cipher._blocksize * 4;

		// Encrypt each block
		for (var offset = 0; offset < m.length; offset += blockSizeInBytes) {
			if (offset == 0) {
				// XOR first block using IV
				for (var i = 0; i < blockSizeInBytes; i++)
					m[i] ^= iv[i];
			} else {
				// XOR this block using previous crypted block
				for (var i = 0; i < blockSizeInBytes; i++)
					m[offset + i] ^= m[offset + i - blockSizeInBytes];
			}
			// Encrypt block
			cipher._encryptblock(m, offset);
		}
	};
	CBC_prototype._doDecrypt = function (cipher, c, iv) {
		var blockSizeInBytes = cipher._blocksize * 4;

		// At the start, the previously crypted block is the IV
		var prevCryptedBlock = iv;

		// Decrypt each block
		for (var offset = 0; offset < c.length; offset += blockSizeInBytes) {
			// Save this crypted block
			var thisCryptedBlock = c.slice(offset, offset + blockSizeInBytes);
			// Decrypt block
			cipher._decryptblock(c, offset);
			// XOR decrypted block using previous crypted block
			for (var i = 0; i < blockSizeInBytes; i++) {
				c[offset + i] ^= prevCryptedBlock[i];
			}
			prevCryptedBlock = thisCryptedBlock;
		}
	};


	/**
	* Cipher feed back
	* 
	* The cipher output is XORed with the plain text to produce the cipher output,
	* which is then fed back into the cipher to produce a bit pattern to XOR the
	* next block with.
	* 
	* This is a stream cipher mode and does not require padding.
	*/
	var CFB = C_mode.CFB = function () {
		// Call parent constructor
		Mode.apply(this, arguments);
	};

	// Inherit from Mode
	var CFB_prototype = CFB.prototype = new Mode;

	// Override padding
	CFB_prototype._padding = C_pad.NoPadding;

	// Concrete steps for Mode template
	CFB_prototype._doEncrypt = function (cipher, m, iv) {
		var blockSizeInBytes = cipher._blocksize * 4,
    keystream = iv.slice(0);

		// Encrypt each byte
		for (var i = 0; i < m.length; i++) {

			var j = i % blockSizeInBytes;
			if (j == 0) cipher._encryptblock(keystream, 0);

			m[i] ^= keystream[j];
			keystream[j] = m[i];
		}
	};
	CFB_prototype._doDecrypt = function (cipher, c, iv) {
		var blockSizeInBytes = cipher._blocksize * 4,
			keystream = iv.slice(0);

		// Encrypt each byte
		for (var i = 0; i < c.length; i++) {

			var j = i % blockSizeInBytes;
			if (j == 0) cipher._encryptblock(keystream, 0);

			var b = c[i];
			c[i] ^= keystream[j];
			keystream[j] = b;
		}
	};


	/**
	* Output feed back
	* 
	* The cipher repeatedly encrypts its own output. The output is XORed with the
	* plain text to produce the cipher text.
	* 
	* This is a stream cipher mode and does not require padding.
	*/
	var OFB = C_mode.OFB = function () {
		// Call parent constructor
		Mode.apply(this, arguments);
	};

	// Inherit from Mode
	var OFB_prototype = OFB.prototype = new Mode;

	// Override padding
	OFB_prototype._padding = C_pad.NoPadding;

	// Concrete steps for Mode template
	OFB_prototype._doEncrypt = function (cipher, m, iv) {

		var blockSizeInBytes = cipher._blocksize * 4,
			keystream = iv.slice(0);

		// Encrypt each byte
		for (var i = 0; i < m.length; i++) {

			// Generate keystream
			if (i % blockSizeInBytes == 0)
				cipher._encryptblock(keystream, 0);

			// Encrypt byte
			m[i] ^= keystream[i % blockSizeInBytes];

		}
	};
	OFB_prototype._doDecrypt = OFB_prototype._doEncrypt;

	/**
	* Counter
	* @author Gergely Risko
	*
	* After every block the last 4 bytes of the IV is increased by one
	* with carry and that IV is used for the next block.
	*
	* This is a stream cipher mode and does not require padding.
	*/
	var CTR = C_mode.CTR = function () {
		// Call parent constructor
		Mode.apply(this, arguments);
	};

	// Inherit from Mode
	var CTR_prototype = CTR.prototype = new Mode;

	// Override padding
	CTR_prototype._padding = C_pad.NoPadding;

	CTR_prototype._doEncrypt = function (cipher, m, iv) {
		var blockSizeInBytes = cipher._blocksize * 4;
		var counter = iv.slice(0);

		for (var i = 0; i < m.length; ) {
			// do not lose iv
			var keystream = counter.slice(0);

			// Generate keystream for next block
			cipher._encryptblock(keystream, 0);

			// XOR keystream with block
			for (var j = 0; i < m.length && j < blockSizeInBytes; j++, i++) {
				m[i] ^= keystream[j];
			}

			// Increase counter
			if (++(counter[blockSizeInBytes - 1]) == 256) {
				counter[blockSizeInBytes - 1] = 0;
				if (++(counter[blockSizeInBytes - 2]) == 256) {
					counter[blockSizeInBytes - 2] = 0;
					if (++(counter[blockSizeInBytes - 3]) == 256) {
						counter[blockSizeInBytes - 3] = 0;
						++(counter[blockSizeInBytes - 4]);
					}
				}
			}
		}
	};
	CTR_prototype._doDecrypt = CTR_prototype._doEncrypt;

})(Crypto);

/*!
* Crypto-JS v2.0.0  RIPEMD-160
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*
* A JavaScript implementation of the RIPEMD-160 Algorithm
* Version 2.2 Copyright Jeremy Lin, Paul Johnston 2000 - 2009.
* Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
* Distributed under the BSD License
* See http://pajhome.org.uk/crypt/md5 for details.
* Also http://www.ocf.berkeley.edu/~jjlin/jsotp/
* Ported to Crypto-JS by Stefan Thomas.
*/

(function () {
	// Shortcuts
	var C = Crypto,
	util = C.util,
	charenc = C.charenc,
	UTF8 = charenc.UTF8,
	Binary = charenc.Binary;

	// Convert a byte array to little-endian 32-bit words
	util.bytesToLWords = function (bytes) {

		var output = Array(bytes.length >> 2);
		for (var i = 0; i < output.length; i++)
			output[i] = 0;
		for (var i = 0; i < bytes.length * 8; i += 8)
			output[i >> 5] |= (bytes[i / 8] & 0xFF) << (i % 32);
		return output;
	};

	// Convert little-endian 32-bit words to a byte array
	util.lWordsToBytes = function (words) {
		var output = [];
		for (var i = 0; i < words.length * 32; i += 8)
			output.push((words[i >> 5] >>> (i % 32)) & 0xff);
		return output;
	};

	// Public API
	var RIPEMD160 = C.RIPEMD160 = function (message, options) {
		var digestbytes = util.lWordsToBytes(RIPEMD160._rmd160(message));
		return options && options.asBytes ? digestbytes :
			options && options.asString ? Binary.bytesToString(digestbytes) :
			util.bytesToHex(digestbytes);
	};

	// The core
	RIPEMD160._rmd160 = function (message) {
		// Convert to byte array
		if (message.constructor == String) message = UTF8.stringToBytes(message);

		var x = util.bytesToLWords(message),
			len = message.length * 8;

		/* append padding */
		x[len >> 5] |= 0x80 << (len % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;

		var h0 = 0x67452301;
		var h1 = 0xefcdab89;
		var h2 = 0x98badcfe;
		var h3 = 0x10325476;
		var h4 = 0xc3d2e1f0;

		for (var i = 0; i < x.length; i += 16) {
			var T;
			var A1 = h0, B1 = h1, C1 = h2, D1 = h3, E1 = h4;
			var A2 = h0, B2 = h1, C2 = h2, D2 = h3, E2 = h4;
			for (var j = 0; j <= 79; ++j) {
				T = safe_add(A1, rmd160_f(j, B1, C1, D1));
				T = safe_add(T, x[i + rmd160_r1[j]]);
				T = safe_add(T, rmd160_K1(j));
				T = safe_add(bit_rol(T, rmd160_s1[j]), E1);
				A1 = E1; E1 = D1; D1 = bit_rol(C1, 10); C1 = B1; B1 = T;
				T = safe_add(A2, rmd160_f(79 - j, B2, C2, D2));
				T = safe_add(T, x[i + rmd160_r2[j]]);
				T = safe_add(T, rmd160_K2(j));
				T = safe_add(bit_rol(T, rmd160_s2[j]), E2);
				A2 = E2; E2 = D2; D2 = bit_rol(C2, 10); C2 = B2; B2 = T;
			}
			T = safe_add(h1, safe_add(C1, D2));
			h1 = safe_add(h2, safe_add(D1, E2));
			h2 = safe_add(h3, safe_add(E1, A2));
			h3 = safe_add(h4, safe_add(A1, B2));
			h4 = safe_add(h0, safe_add(B1, C2));
			h0 = T;
		}
		return [h0, h1, h2, h3, h4];
	}

	function rmd160_f(j, x, y, z) {
		return (0 <= j && j <= 15) ? (x ^ y ^ z) :
			(16 <= j && j <= 31) ? (x & y) | (~x & z) :
			(32 <= j && j <= 47) ? (x | ~y) ^ z :
			(48 <= j && j <= 63) ? (x & z) | (y & ~z) :
			(64 <= j && j <= 79) ? x ^ (y | ~z) :
			"rmd160_f: j out of range";
	}
	function rmd160_K1(j) {
		return (0 <= j && j <= 15) ? 0x00000000 :
			(16 <= j && j <= 31) ? 0x5a827999 :
			(32 <= j && j <= 47) ? 0x6ed9eba1 :
			(48 <= j && j <= 63) ? 0x8f1bbcdc :
			(64 <= j && j <= 79) ? 0xa953fd4e :
			"rmd160_K1: j out of range";
	}
	function rmd160_K2(j) {
		return (0 <= j && j <= 15) ? 0x50a28be6 :
			(16 <= j && j <= 31) ? 0x5c4dd124 :
			(32 <= j && j <= 47) ? 0x6d703ef3 :
			(48 <= j && j <= 63) ? 0x7a6d76e9 :
			(64 <= j && j <= 79) ? 0x00000000 :
			"rmd160_K2: j out of range";
	}
	var rmd160_r1 = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
		7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
		3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
		1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
		4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
	];
	var rmd160_r2 = [
		5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
		6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
		15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
		8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
		12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
	];
	var rmd160_s1 = [
		11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
		7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
		11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
		11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
		9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
	];
	var rmd160_s2 = [
		8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
		9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
		9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
		15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
		8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
	];

	/*
	* Add integers, wrapping at 2^32. This uses 16-bit operations internally
	* to work around bugs in some JS interpreters.
	*/
	function safe_add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	* Bitwise rotate a 32-bit number to the left.
	*/
	function bit_rol(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}
})();

/*!
* Random number generator with ArcFour PRNG
* 
* NOTE: For best results, put code like
* <body onclick='SecureRandom.seedTime();' onkeypress='SecureRandom.seedTime();'>
* in your main HTML document.
* 
* Copyright Tom Wu, bitaddress.org  BSD License.
* http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/
(function () {

	// Constructor function of Global SecureRandom object
	var sr = window.SecureRandom = function () { };

	// Properties
	sr.state;
	sr.pool;
	sr.pptr;
	sr.poolCopyOnInit;

	// Pool size must be a multiple of 4 and greater than 32.
	// An array of bytes the size of the pool will be passed to init()
	sr.poolSize = 256;

	// --- object methods ---

	// public method
	// ba: byte array
	sr.prototype.nextBytes = function (ba) {
		var i;
		if (window.crypto && window.crypto.getRandomValues && window.Uint8Array) {
			try {
				var rvBytes = new Uint8Array(ba.length);
				window.crypto.getRandomValues(rvBytes);
				for (i = 0; i < ba.length; ++i)
					ba[i] = sr.getByte() ^ rvBytes[i];
				return;
			} catch (e) {
				alert(e);
			}
		}
		for (i = 0; i < ba.length; ++i) ba[i] = sr.getByte();
	};


	// --- static methods ---

	// Mix in the current time (w/milliseconds) into the pool
	// NOTE: this method should be called from body click/keypress event handlers to increase entropy
	sr.seedTime = function () {
		sr.seedInt(new Date().getTime());
	}

	sr.getByte = function () {
		if (sr.state == null) {
			sr.seedTime();
			sr.state = sr.ArcFour(); // Plug in your RNG constructor here
			sr.state.init(sr.pool);
			sr.poolCopyOnInit = [];
			for (sr.pptr = 0; sr.pptr < sr.pool.length; ++sr.pptr)
				sr.poolCopyOnInit[sr.pptr] = sr.pool[sr.pptr];
			sr.pptr = 0;
		}
		// TODO: allow reseeding after first request
		return sr.state.next();
	}

	// Mix in a 32-bit integer into the pool
	sr.seedInt = function (x) {
		sr.seedInt8(x);
		sr.seedInt8((x >> 8));
		sr.seedInt8((x >> 16));
		sr.seedInt8((x >> 24));
	}

	// Mix in a 16-bit integer into the pool
	sr.seedInt16 = function (x) {
		sr.seedInt8(x);
		sr.seedInt8((x >> 8));
	}

	// Mix in a 8-bit integer into the pool
	sr.seedInt8 = function (x) {
		sr.pool[sr.pptr++] ^= x & 255;
		if (sr.pptr >= sr.poolSize) sr.pptr -= sr.poolSize;
	}

	// Arcfour is a PRNG
	sr.ArcFour = function () {
		function Arcfour() {
			this.i = 0;
			this.j = 0;
			this.S = new Array();
		}

		// Initialize arcfour context from key, an array of ints, each from [0..255]
		function ARC4init(key) {
			var i, j, t;
			for (i = 0; i < 256; ++i)
				this.S[i] = i;
			j = 0;
			for (i = 0; i < 256; ++i) {
				j = (j + this.S[i] + key[i % key.length]) & 255;
				t = this.S[i];
				this.S[i] = this.S[j];
				this.S[j] = t;
			}
			this.i = 0;
			this.j = 0;
		}

		function ARC4next() {
			var t;
			this.i = (this.i + 1) & 255;
			this.j = (this.j + this.S[this.i]) & 255;
			t = this.S[this.i];
			this.S[this.i] = this.S[this.j];
			this.S[this.j] = t;
			return this.S[(t + this.S[this.i]) & 255];
		}

		Arcfour.prototype.init = ARC4init;
		Arcfour.prototype.next = ARC4next;

		return new Arcfour();
	};


	// Initialize the pool with junk if needed.
	if (sr.pool == null) {
		sr.pool = new Array();
		sr.pptr = 0;
		var t;
		if (window.crypto && window.crypto.getRandomValues && window.Uint8Array) {
			try {
				// Use webcrypto if available
				var ua = new Uint8Array(sr.poolSize);
				window.crypto.getRandomValues(ua);
				for (t = 0; t < sr.poolSize; ++t)
					sr.pool[sr.pptr++] = ua[t];
			} catch (e) { alert(e); }
		}
		while (sr.pptr < sr.poolSize) {  // extract some randomness from Math.random()
			t = Math.floor(65536 * Math.random());
			sr.pool[sr.pptr++] = t >>> 8;
			sr.pool[sr.pptr++] = t & 255;
		}
		sr.pptr = Math.floor(sr.poolSize * Math.random());
		sr.seedTime();
		// entropy
		var entropyStr = "";
		// screen size and color depth: ~4.8 to ~5.4 bits
		entropyStr += (window.screen.height * window.screen.width * window.screen.colorDepth);
		entropyStr += (window.screen.availHeight * window.screen.availWidth * window.screen.pixelDepth);
		// time zone offset: ~4 bits
		var dateObj = new Date();
		var timeZoneOffset = dateObj.getTimezoneOffset();
		entropyStr += timeZoneOffset;
		// user agent: ~8.3 to ~11.6 bits
		entropyStr += navigator.userAgent;
		// browser plugin details: ~16.2 to ~21.8 bits
		var pluginsStr = "";
		for (var i = 0; i < navigator.plugins.length; i++) {
			pluginsStr += navigator.plugins[i].name + " " + navigator.plugins[i].filename + " " + navigator.plugins[i].description + " " + navigator.plugins[i].version + ", ";
		}
		var mimeTypesStr = "";
		for (var i = 0; i < navigator.mimeTypes.length; i++) {
			mimeTypesStr += navigator.mimeTypes[i].description + " " + navigator.mimeTypes[i].type + " " + navigator.mimeTypes[i].suffixes + ", ";
		}
		entropyStr += pluginsStr + mimeTypesStr;
		// cookies and storage: 1 bit
		entropyStr += navigator.cookieEnabled + typeof (sessionStorage) + typeof (localStorage);
		// language: ~7 bit
		entropyStr += navigator.language;
		// history: ~2 bit
		entropyStr += window.history.length;
		// location
		entropyStr += window.location;

		var entropyBytes = Crypto.SHA256(entropyStr, { asBytes: true });
		for (var i = 0 ; i < entropyBytes.length ; i++) {
			sr.seedInt8(entropyBytes[i]);
		}
	}
})();

//https://raw.github.com/bitcoinjs/bitcoinjs-lib/faa10f0f6a1fff0b9a99fffb9bc30cee33b17212/src/ecdsa.js
/*!
* Basic Javascript Elliptic Curve implementation
* Ported loosely from BouncyCastle's Java EC code
* Only Fp curves implemented for now
* 
* Copyright Tom Wu, bitaddress.org  BSD License.
* http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/
(function () {

	// Constructor function of Global EllipticCurve object
	var ec = window.EllipticCurve = function () { };


	// ----------------
	// ECFieldElementFp constructor
	// q instanceof BigInteger
	// x instanceof BigInteger
	ec.FieldElementFp = function (q, x) {
		this.x = x;
		// TODO if(x.compareTo(q) >= 0) error
		this.q = q;
	};

	ec.FieldElementFp.prototype.equals = function (other) {
		if (other == this) return true;
		return (this.q.equals(other.q) && this.x.equals(other.x));
	};

	ec.FieldElementFp.prototype.toBigInteger = function () {
		return this.x;
	};

	ec.FieldElementFp.prototype.negate = function () {
		return new ec.FieldElementFp(this.q, this.x.negate().mod(this.q));
	};

	ec.FieldElementFp.prototype.add = function (b) {
		return new ec.FieldElementFp(this.q, this.x.add(b.toBigInteger()).mod(this.q));
	};

	ec.FieldElementFp.prototype.subtract = function (b) {
		return new ec.FieldElementFp(this.q, this.x.subtract(b.toBigInteger()).mod(this.q));
	};

	ec.FieldElementFp.prototype.multiply = function (b) {
		return new ec.FieldElementFp(this.q, this.x.multiply(b.toBigInteger()).mod(this.q));
	};

	ec.FieldElementFp.prototype.square = function () {
		return new ec.FieldElementFp(this.q, this.x.square().mod(this.q));
	};

	ec.FieldElementFp.prototype.divide = function (b) {
		return new ec.FieldElementFp(this.q, this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q));
	};

	ec.FieldElementFp.prototype.getByteLength = function () {
		return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
	};

	// D.1.4 91
	/**
	* return a sqrt root - the routine verifies that the calculation
	* returns the right value - if none exists it returns null.
	* 
	* Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
	* Ported to JavaScript by bitaddress.org
	*/
	ec.FieldElementFp.prototype.sqrt = function () {
		if (!this.q.testBit(0)) throw new Error("even value of q");

		// p mod 4 == 3
		if (this.q.testBit(1)) {
			// z = g^(u+1) + p, p = 4u + 3
			var z = new ec.FieldElementFp(this.q, this.x.modPow(this.q.shiftRight(2).add(BigInteger.ONE), this.q));
			return z.square().equals(this) ? z : null;
		}

		// p mod 4 == 1
		var qMinusOne = this.q.subtract(BigInteger.ONE);
		var legendreExponent = qMinusOne.shiftRight(1);
		if (!(this.x.modPow(legendreExponent, this.q).equals(BigInteger.ONE))) return null;
		var u = qMinusOne.shiftRight(2);
		var k = u.shiftLeft(1).add(BigInteger.ONE);
		var Q = this.x;
		var fourQ = Q.shiftLeft(2).mod(this.q);
		var U, V;

		do {
			var rand = new SecureRandom();
			var P;
			do {
				P = new BigInteger(this.q.bitLength(), rand);
			}
			while (P.compareTo(this.q) >= 0 || !(P.multiply(P).subtract(fourQ).modPow(legendreExponent, this.q).equals(qMinusOne)));

			var result = ec.FieldElementFp.fastLucasSequence(this.q, P, Q, k);

			U = result[0];
			V = result[1];
			if (V.multiply(V).mod(this.q).equals(fourQ)) {
				// Integer division by 2, mod q
				if (V.testBit(0)) {
					V = V.add(this.q);
				}
				V = V.shiftRight(1);
				return new ec.FieldElementFp(this.q, V);
			}
		}
		while (U.equals(BigInteger.ONE) || U.equals(qMinusOne));

		return null;
	};

	/*
	* Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
	* Ported to JavaScript by bitaddress.org
	*/
	ec.FieldElementFp.fastLucasSequence = function (p, P, Q, k) {
		// TODO Research and apply "common-multiplicand multiplication here"

		var n = k.bitLength();
		var s = k.getLowestSetBit();
		var Uh = BigInteger.ONE;
		var Vl = BigInteger.TWO;
		var Vh = P;
		var Ql = BigInteger.ONE;
		var Qh = BigInteger.ONE;

		for (var j = n - 1; j >= s + 1; --j) {
			Ql = Ql.multiply(Qh).mod(p);
			if (k.testBit(j)) {
				Qh = Ql.multiply(Q).mod(p);
				Uh = Uh.multiply(Vh).mod(p);
				Vl = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
				Vh = Vh.multiply(Vh).subtract(Qh.shiftLeft(1)).mod(p);
			}
			else {
				Qh = Ql;
				Uh = Uh.multiply(Vl).subtract(Ql).mod(p);
				Vh = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
				Vl = Vl.multiply(Vl).subtract(Ql.shiftLeft(1)).mod(p);
			}
		}

		Ql = Ql.multiply(Qh).mod(p);
		Qh = Ql.multiply(Q).mod(p);
		Uh = Uh.multiply(Vl).subtract(Ql).mod(p);
		Vl = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
		Ql = Ql.multiply(Qh).mod(p);

		for (var j = 1; j <= s; ++j) {
			Uh = Uh.multiply(Vl).mod(p);
			Vl = Vl.multiply(Vl).subtract(Ql.shiftLeft(1)).mod(p);
			Ql = Ql.multiply(Ql).mod(p);
		}

		return [Uh, Vl];
	};

	// ----------------
	// ECPointFp constructor
	ec.PointFp = function (curve, x, y, z, compressed) {
		this.curve = curve;
		this.x = x;
		this.y = y;
		// Projective coordinates: either zinv == null or z * zinv == 1
		// z and zinv are just BigIntegers, not fieldElements
		if (z == null) {
			this.z = BigInteger.ONE;
		}
		else {
			this.z = z;
		}
		this.zinv = null;
		// compression flag
		this.compressed = !!compressed;
	};

	ec.PointFp.prototype.getX = function () {
		if (this.zinv == null) {
			this.zinv = this.z.modInverse(this.curve.q);
		}
		var r = this.x.toBigInteger().multiply(this.zinv);
		this.curve.reduce(r);
		return this.curve.fromBigInteger(r);
	};

	ec.PointFp.prototype.getY = function () {
		if (this.zinv == null) {
			this.zinv = this.z.modInverse(this.curve.q);
		}
		var r = this.y.toBigInteger().multiply(this.zinv);
		this.curve.reduce(r);
		return this.curve.fromBigInteger(r);
	};

	ec.PointFp.prototype.equals = function (other) {
		if (other == this) return true;
		if (this.isInfinity()) return other.isInfinity();
		if (other.isInfinity()) return this.isInfinity();
		var u, v;
		// u = Y2 * Z1 - Y1 * Z2
		u = other.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(other.z)).mod(this.curve.q);
		if (!u.equals(BigInteger.ZERO)) return false;
		// v = X2 * Z1 - X1 * Z2
		v = other.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(other.z)).mod(this.curve.q);
		return v.equals(BigInteger.ZERO);
	};

	ec.PointFp.prototype.isInfinity = function () {
		if ((this.x == null) && (this.y == null)) return true;
		return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
	};

	ec.PointFp.prototype.negate = function () {
		return new ec.PointFp(this.curve, this.x, this.y.negate(), this.z);
	};

	ec.PointFp.prototype.add = function (b) {
		if (this.isInfinity()) return b;
		if (b.isInfinity()) return this;

		// u = Y2 * Z1 - Y1 * Z2
		var u = b.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(b.z)).mod(this.curve.q);
		// v = X2 * Z1 - X1 * Z2
		var v = b.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(b.z)).mod(this.curve.q);


		if (BigInteger.ZERO.equals(v)) {
			if (BigInteger.ZERO.equals(u)) {
				return this.twice(); // this == b, so double
			}
			return this.curve.getInfinity(); // this = -b, so infinity
		}

		var THREE = new BigInteger("3");
		var x1 = this.x.toBigInteger();
		var y1 = this.y.toBigInteger();
		var x2 = b.x.toBigInteger();
		var y2 = b.y.toBigInteger();

		var v2 = v.square();
		var v3 = v2.multiply(v);
		var x1v2 = x1.multiply(v2);
		var zu2 = u.square().multiply(this.z);

		// x3 = v * (z2 * (z1 * u^2 - 2 * x1 * v^2) - v^3)
		var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.q);
		// y3 = z2 * (3 * x1 * u * v^2 - y1 * v^3 - z1 * u^3) + u * v^3
		var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.q);
		// z3 = v^3 * z1 * z2
		var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.q);

		return new ec.PointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
	};

	ec.PointFp.prototype.twice = function () {
		if (this.isInfinity()) return this;
		if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();

		// TODO: optimized handling of constants
		var THREE = new BigInteger("3");
		var x1 = this.x.toBigInteger();
		var y1 = this.y.toBigInteger();

		var y1z1 = y1.multiply(this.z);
		var y1sqz1 = y1z1.multiply(y1).mod(this.curve.q);
		var a = this.curve.a.toBigInteger();

		// w = 3 * x1^2 + a * z1^2
		var w = x1.square().multiply(THREE);
		if (!BigInteger.ZERO.equals(a)) {
			w = w.add(this.z.square().multiply(a));
		}
		w = w.mod(this.curve.q);
		//this.curve.reduce(w);
		// x3 = 2 * y1 * z1 * (w^2 - 8 * x1 * y1^2 * z1)
		var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.q);
		// y3 = 4 * y1^2 * z1 * (3 * w * x1 - 2 * y1^2 * z1) - w^3
		var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.square().multiply(w)).mod(this.curve.q);
		// z3 = 8 * (y1 * z1)^3
		var z3 = y1z1.square().multiply(y1z1).shiftLeft(3).mod(this.curve.q);

		return new ec.PointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
	};

	// Simple NAF (Non-Adjacent Form) multiplication algorithm
	// TODO: modularize the multiplication algorithm
	ec.PointFp.prototype.multiply = function (k) {
		if (this.isInfinity()) return this;
		if (k.signum() == 0) return this.curve.getInfinity();

		var e = k;
		var h = e.multiply(new BigInteger("3"));

		var neg = this.negate();
		var R = this;

		var i;
		for (i = h.bitLength() - 2; i > 0; --i) {
			R = R.twice();

			var hBit = h.testBit(i);
			var eBit = e.testBit(i);

			if (hBit != eBit) {
				R = R.add(hBit ? this : neg);
			}
		}

		return R;
	};

	// Compute this*j + x*k (simultaneous multiplication)
	ec.PointFp.prototype.multiplyTwo = function (j, x, k) {
		var i;
		if (j.bitLength() > k.bitLength())
			i = j.bitLength() - 1;
		else
			i = k.bitLength() - 1;

		var R = this.curve.getInfinity();
		var both = this.add(x);
		while (i >= 0) {
			R = R.twice();
			if (j.testBit(i)) {
				if (k.testBit(i)) {
					R = R.add(both);
				}
				else {
					R = R.add(this);
				}
			}
			else {
				if (k.testBit(i)) {
					R = R.add(x);
				}
			}
			--i;
		}

		return R;
	};

	// patched by bitaddress.org and Casascius for use with Bitcoin.ECKey
	// patched by coretechs to support compressed public keys
	ec.PointFp.prototype.getEncoded = function (compressed) {
		var x = this.getX().toBigInteger();
		var y = this.getY().toBigInteger();
		var len = 32; // integerToBytes will zero pad if integer is less than 32 bytes. 32 bytes length is required by the Bitcoin protocol.
		var enc = ec.integerToBytes(x, len);

		// when compressed prepend byte depending if y point is even or odd 
		if (compressed) {
			if (y.isEven()) {
				enc.unshift(0x02);
			}
			else {
				enc.unshift(0x03);
			}
		}
		else {
			enc.unshift(0x04);
			enc = enc.concat(ec.integerToBytes(y, len)); // uncompressed public key appends the bytes of the y point
		}
		return enc;
	};

	ec.PointFp.decodeFrom = function (curve, enc) {
		var type = enc[0];
		var dataLen = enc.length - 1;

		// Extract x and y as byte arrays
		var xBa = enc.slice(1, 1 + dataLen / 2);
		var yBa = enc.slice(1 + dataLen / 2, 1 + dataLen);

		// Prepend zero byte to prevent interpretation as negative integer
		xBa.unshift(0);
		yBa.unshift(0);

		// Convert to BigIntegers
		var x = new BigInteger(xBa);
		var y = new BigInteger(yBa);

		// Return point
		return new ec.PointFp(curve, curve.fromBigInteger(x), curve.fromBigInteger(y));
	};

	ec.PointFp.prototype.add2D = function (b) {
		if (this.isInfinity()) return b;
		if (b.isInfinity()) return this;

		if (this.x.equals(b.x)) {
			if (this.y.equals(b.y)) {
				// this = b, i.e. this must be doubled
				return this.twice();
			}
			// this = -b, i.e. the result is the point at infinity
			return this.curve.getInfinity();
		}

		var x_x = b.x.subtract(this.x);
		var y_y = b.y.subtract(this.y);
		var gamma = y_y.divide(x_x);

		var x3 = gamma.square().subtract(this.x).subtract(b.x);
		var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);

		return new ec.PointFp(this.curve, x3, y3);
	};

	ec.PointFp.prototype.twice2D = function () {
		if (this.isInfinity()) return this;
		if (this.y.toBigInteger().signum() == 0) {
			// if y1 == 0, then (x1, y1) == (x1, -y1)
			// and hence this = -this and thus 2(x1, y1) == infinity
			return this.curve.getInfinity();
		}

		var TWO = this.curve.fromBigInteger(BigInteger.valueOf(2));
		var THREE = this.curve.fromBigInteger(BigInteger.valueOf(3));
		var gamma = this.x.square().multiply(THREE).add(this.curve.a).divide(this.y.multiply(TWO));

		var x3 = gamma.square().subtract(this.x.multiply(TWO));
		var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);

		return new ec.PointFp(this.curve, x3, y3);
	};

	ec.PointFp.prototype.multiply2D = function (k) {
		if (this.isInfinity()) return this;
		if (k.signum() == 0) return this.curve.getInfinity();

		var e = k;
		var h = e.multiply(new BigInteger("3"));

		var neg = this.negate();
		var R = this;

		var i;
		for (i = h.bitLength() - 2; i > 0; --i) {
			R = R.twice();

			var hBit = h.testBit(i);
			var eBit = e.testBit(i);

			if (hBit != eBit) {
				R = R.add2D(hBit ? this : neg);
			}
		}

		return R;
	};

	ec.PointFp.prototype.isOnCurve = function () {
		var x = this.getX().toBigInteger();
		var y = this.getY().toBigInteger();
		var a = this.curve.getA().toBigInteger();
		var b = this.curve.getB().toBigInteger();
		var n = this.curve.getQ();
		var lhs = y.multiply(y).mod(n);
		var rhs = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(n);
		return lhs.equals(rhs);
	};

	ec.PointFp.prototype.toString = function () {
		return '(' + this.getX().toBigInteger().toString() + ',' + this.getY().toBigInteger().toString() + ')';
	};

	/**
	* Validate an elliptic curve point.
	*
	* See SEC 1, section 3.2.2.1: Elliptic Curve Public Key Validation Primitive
	*/
	ec.PointFp.prototype.validate = function () {
		var n = this.curve.getQ();

		// Check Q != O
		if (this.isInfinity()) {
			throw new Error("Point is at infinity.");
		}

		// Check coordinate bounds
		var x = this.getX().toBigInteger();
		var y = this.getY().toBigInteger();
		if (x.compareTo(BigInteger.ONE) < 0 || x.compareTo(n.subtract(BigInteger.ONE)) > 0) {
			throw new Error('x coordinate out of bounds');
		}
		if (y.compareTo(BigInteger.ONE) < 0 || y.compareTo(n.subtract(BigInteger.ONE)) > 0) {
			throw new Error('y coordinate out of bounds');
		}

		// Check y^2 = x^3 + ax + b (mod n)
		if (!this.isOnCurve()) {
			throw new Error("Point is not on the curve.");
		}

		// Check nQ = 0 (Q is a scalar multiple of G)
		if (this.multiply(n).isInfinity()) {
			// TODO: This check doesn't work - fix.
			throw new Error("Point is not a scalar multiple of G.");
		}

		return true;
	};




	// ----------------
	// ECCurveFp constructor
	ec.CurveFp = function (q, a, b) {
		this.q = q;
		this.a = this.fromBigInteger(a);
		this.b = this.fromBigInteger(b);
		this.infinity = new ec.PointFp(this, null, null);
		this.reducer = new Barrett(this.q);
	}

	ec.CurveFp.prototype.getQ = function () {
		return this.q;
	};

	ec.CurveFp.prototype.getA = function () {
		return this.a;
	};

	ec.CurveFp.prototype.getB = function () {
		return this.b;
	};

	ec.CurveFp.prototype.equals = function (other) {
		if (other == this) return true;
		return (this.q.equals(other.q) && this.a.equals(other.a) && this.b.equals(other.b));
	};

	ec.CurveFp.prototype.getInfinity = function () {
		return this.infinity;
	};

	ec.CurveFp.prototype.fromBigInteger = function (x) {
		return new ec.FieldElementFp(this.q, x);
	};

	ec.CurveFp.prototype.reduce = function (x) {
		this.reducer.reduce(x);
	};

	// for now, work with hex strings because they're easier in JS
	// compressed support added by bitaddress.org
	ec.CurveFp.prototype.decodePointHex = function (s) {
		var firstByte = parseInt(s.substr(0, 2), 16);
		switch (firstByte) { // first byte
			case 0:
				return this.infinity;
			case 2: // compressed
			case 3: // compressed
				var yTilde = firstByte & 1;
				var xHex = s.substr(2, s.length - 2);
				var X1 = new BigInteger(xHex, 16);
				return this.decompressPoint(yTilde, X1);
			case 4: // uncompressed
			case 6: // hybrid
			case 7: // hybrid
				var len = (s.length - 2) / 2;
				var xHex = s.substr(2, len);
				var yHex = s.substr(len + 2, len);

				return new ec.PointFp(this,
					this.fromBigInteger(new BigInteger(xHex, 16)),
					this.fromBigInteger(new BigInteger(yHex, 16)));

			default: // unsupported
				return null;
		}
	};

	ec.CurveFp.prototype.encodePointHex = function (p) {
		if (p.isInfinity()) return "00";
		var xHex = p.getX().toBigInteger().toString(16);
		var yHex = p.getY().toBigInteger().toString(16);
		var oLen = this.getQ().toString(16).length;
		if ((oLen % 2) != 0) oLen++;
		while (xHex.length < oLen) {
			xHex = "0" + xHex;
		}
		while (yHex.length < oLen) {
			yHex = "0" + yHex;
		}
		return "04" + xHex + yHex;
	};

	/*
	* Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
	* Ported to JavaScript by bitaddress.org
	*
	* Number yTilde
	* BigInteger X1
	*/
	ec.CurveFp.prototype.decompressPoint = function (yTilde, X1) {
		var x = this.fromBigInteger(X1);
		var alpha = x.multiply(x.square().add(this.getA())).add(this.getB());
		var beta = alpha.sqrt();
		// if we can't find a sqrt we haven't got a point on the curve - run!
		if (beta == null) throw new Error("Invalid point compression");
		var betaValue = beta.toBigInteger();
		var bit0 = betaValue.testBit(0) ? 1 : 0;
		if (bit0 != yTilde) {
			// Use the other root
			beta = this.fromBigInteger(this.getQ().subtract(betaValue));
		}
		return new ec.PointFp(this, x, beta, null, true);
	};


	ec.fromHex = function (s) { return new BigInteger(s, 16); };

	ec.integerToBytes = function (i, len) {
		var bytes = i.toByteArrayUnsigned();
		if (len < bytes.length) {
			bytes = bytes.slice(bytes.length - len);
		} else while (len > bytes.length) {
			bytes.unshift(0);
		}
		return bytes;
	};


	// Named EC curves
	// ----------------
	// X9ECParameters constructor
	ec.X9Parameters = function (curve, g, n, h) {
		this.curve = curve;
		this.g = g;
		this.n = n;
		this.h = h;
	}
	ec.X9Parameters.prototype.getCurve = function () { return this.curve; };
	ec.X9Parameters.prototype.getG = function () { return this.g; };
	ec.X9Parameters.prototype.getN = function () { return this.n; };
	ec.X9Parameters.prototype.getH = function () { return this.h; };

	// secp256k1 is the Curve used by Bitcoin
	ec.secNamedCurves = {
		// used by Bitcoin
		"secp256k1": function () {
			// p = 2^256 - 2^32 - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1
			var p = ec.fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F");
			var a = BigInteger.ZERO;
			var b = ec.fromHex("7");
			var n = ec.fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141");
			var h = BigInteger.ONE;
			var curve = new ec.CurveFp(p, a, b);
			var G = curve.decodePointHex("04"
					+ "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798"
					+ "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8");
			return new ec.X9Parameters(curve, G, n, h);
		}
	};

	// secp256k1 called by Bitcoin's ECKEY
	ec.getSECCurveByName = function (name) {
		if (ec.secNamedCurves[name] == undefined) return null;
		return ec.secNamedCurves[name]();
	}
})();

/*!
* Basic JavaScript BN library - subset useful for RSA encryption. v1.3
* 
* Copyright (c) 2005  Tom Wu
* All Rights Reserved.
* BSD License
* http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*
* Copyright Stephan Thomas
* Copyright bitaddress.org
*/

(function () {

	// (public) Constructor function of Global BigInteger object
	var BigInteger = window.BigInteger = function BigInteger(a, b, c) {
		if (a != null)
			if ("number" == typeof a) this.fromNumber(a, b, c);
			else if (b == null && "string" != typeof a) this.fromString(a, 256);
			else this.fromString(a, b);
	};

	// Bits per digit
	var dbits;

	// JavaScript engine analysis
	var canary = 0xdeadbeefcafe;
	var j_lm = ((canary & 0xffffff) == 0xefcafe);

	// return new, unset BigInteger
	function nbi() { return new BigInteger(null); }

	// am: Compute w_j += (x*this_i), propagate carries,
	// c is initial carry, returns final carry.
	// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
	// We need to select the fastest one that works in this environment.

	// am1: use a single mult and divide to get the high bits,
	// max digit bits should be 26 because
	// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
	function am1(i, x, w, j, c, n) {
		while (--n >= 0) {
			var v = x * this[i++] + w[j] + c;
			c = Math.floor(v / 0x4000000);
			w[j++] = v & 0x3ffffff;
		}
		return c;
	}
	// am2 avoids a big mult-and-extract completely.
	// Max digit bits should be <= 30 because we do bitwise ops
	// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
	function am2(i, x, w, j, c, n) {
		var xl = x & 0x7fff, xh = x >> 15;
		while (--n >= 0) {
			var l = this[i] & 0x7fff;
			var h = this[i++] >> 15;
			var m = xh * l + h * xl;
			l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
			c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
			w[j++] = l & 0x3fffffff;
		}
		return c;
	}
	// Alternately, set max digit bits to 28 since some
	// browsers slow down when dealing with 32-bit numbers.
	function am3(i, x, w, j, c, n) {
		var xl = x & 0x3fff, xh = x >> 14;
		while (--n >= 0) {
			var l = this[i] & 0x3fff;
			var h = this[i++] >> 14;
			var m = xh * l + h * xl;
			l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
			c = (l >> 28) + (m >> 14) + xh * h;
			w[j++] = l & 0xfffffff;
		}
		return c;
	}
	if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
		BigInteger.prototype.am = am2;
		dbits = 30;
	}
	else if (j_lm && (navigator.appName != "Netscape")) {
		BigInteger.prototype.am = am1;
		dbits = 26;
	}
	else { // Mozilla/Netscape seems to prefer am3
		BigInteger.prototype.am = am3;
		dbits = 28;
	}

	BigInteger.prototype.DB = dbits;
	BigInteger.prototype.DM = ((1 << dbits) - 1);
	BigInteger.prototype.DV = (1 << dbits);

	var BI_FP = 52;
	BigInteger.prototype.FV = Math.pow(2, BI_FP);
	BigInteger.prototype.F1 = BI_FP - dbits;
	BigInteger.prototype.F2 = 2 * dbits - BI_FP;

	// Digit conversions
	var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	var BI_RC = new Array();
	var rr, vv;
	rr = "0".charCodeAt(0);
	for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
	rr = "a".charCodeAt(0);
	for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	rr = "A".charCodeAt(0);
	for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

	function int2char(n) { return BI_RM.charAt(n); }
	function intAt(s, i) {
		var c = BI_RC[s.charCodeAt(i)];
		return (c == null) ? -1 : c;
	}



	// return bigint initialized to value
	function nbv(i) { var r = nbi(); r.fromInt(i); return r; }


	// returns bit length of the integer x
	function nbits(x) {
		var r = 1, t;
		if ((t = x >>> 16) != 0) { x = t; r += 16; }
		if ((t = x >> 8) != 0) { x = t; r += 8; }
		if ((t = x >> 4) != 0) { x = t; r += 4; }
		if ((t = x >> 2) != 0) { x = t; r += 2; }
		if ((t = x >> 1) != 0) { x = t; r += 1; }
		return r;
	}







	// (protected) copy this to r
	BigInteger.prototype.copyTo = function (r) {
		for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
		r.t = this.t;
		r.s = this.s;
	};


	// (protected) set from integer value x, -DV <= x < DV
	BigInteger.prototype.fromInt = function (x) {
		this.t = 1;
		this.s = (x < 0) ? -1 : 0;
		if (x > 0) this[0] = x;
		else if (x < -1) this[0] = x + this.DV;
		else this.t = 0;
	};

	// (protected) set from string and radix
	BigInteger.prototype.fromString = function (s, b) {
		var k;
		if (b == 16) k = 4;
		else if (b == 8) k = 3;
		else if (b == 256) k = 8; // byte array
		else if (b == 2) k = 1;
		else if (b == 32) k = 5;
		else if (b == 4) k = 2;
		else { this.fromRadix(s, b); return; }
		this.t = 0;
		this.s = 0;
		var i = s.length, mi = false, sh = 0;
		while (--i >= 0) {
			var x = (k == 8) ? s[i] & 0xff : intAt(s, i);
			if (x < 0) {
				if (s.charAt(i) == "-") mi = true;
				continue;
			}
			mi = false;
			if (sh == 0)
				this[this.t++] = x;
			else if (sh + k > this.DB) {
				this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
				this[this.t++] = (x >> (this.DB - sh));
			}
			else
				this[this.t - 1] |= x << sh;
			sh += k;
			if (sh >= this.DB) sh -= this.DB;
		}
		if (k == 8 && (s[0] & 0x80) != 0) {
			this.s = -1;
			if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
		}
		this.clamp();
		if (mi) BigInteger.ZERO.subTo(this, this);
	};


	// (protected) clamp off excess high words
	BigInteger.prototype.clamp = function () {
		var c = this.s & this.DM;
		while (this.t > 0 && this[this.t - 1] == c) --this.t;
	};

	// (protected) r = this << n*DB
	BigInteger.prototype.dlShiftTo = function (n, r) {
		var i;
		for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
		for (i = n - 1; i >= 0; --i) r[i] = 0;
		r.t = this.t + n;
		r.s = this.s;
	};

	// (protected) r = this >> n*DB
	BigInteger.prototype.drShiftTo = function (n, r) {
		for (var i = n; i < this.t; ++i) r[i - n] = this[i];
		r.t = Math.max(this.t - n, 0);
		r.s = this.s;
	};


	// (protected) r = this << n
	BigInteger.prototype.lShiftTo = function (n, r) {
		var bs = n % this.DB;
		var cbs = this.DB - bs;
		var bm = (1 << cbs) - 1;
		var ds = Math.floor(n / this.DB), c = (this.s << bs) & this.DM, i;
		for (i = this.t - 1; i >= 0; --i) {
			r[i + ds + 1] = (this[i] >> cbs) | c;
			c = (this[i] & bm) << bs;
		}
		for (i = ds - 1; i >= 0; --i) r[i] = 0;
		r[ds] = c;
		r.t = this.t + ds + 1;
		r.s = this.s;
		r.clamp();
	};


	// (protected) r = this >> n
	BigInteger.prototype.rShiftTo = function (n, r) {
		r.s = this.s;
		var ds = Math.floor(n / this.DB);
		if (ds >= this.t) { r.t = 0; return; }
		var bs = n % this.DB;
		var cbs = this.DB - bs;
		var bm = (1 << bs) - 1;
		r[0] = this[ds] >> bs;
		for (var i = ds + 1; i < this.t; ++i) {
			r[i - ds - 1] |= (this[i] & bm) << cbs;
			r[i - ds] = this[i] >> bs;
		}
		if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
		r.t = this.t - ds;
		r.clamp();
	};


	// (protected) r = this - a
	BigInteger.prototype.subTo = function (a, r) {
		var i = 0, c = 0, m = Math.min(a.t, this.t);
		while (i < m) {
			c += this[i] - a[i];
			r[i++] = c & this.DM;
			c >>= this.DB;
		}
		if (a.t < this.t) {
			c -= a.s;
			while (i < this.t) {
				c += this[i];
				r[i++] = c & this.DM;
				c >>= this.DB;
			}
			c += this.s;
		}
		else {
			c += this.s;
			while (i < a.t) {
				c -= a[i];
				r[i++] = c & this.DM;
				c >>= this.DB;
			}
			c -= a.s;
		}
		r.s = (c < 0) ? -1 : 0;
		if (c < -1) r[i++] = this.DV + c;
		else if (c > 0) r[i++] = c;
		r.t = i;
		r.clamp();
	};


	// (protected) r = this * a, r != this,a (HAC 14.12)
	// "this" should be the larger one if appropriate.
	BigInteger.prototype.multiplyTo = function (a, r) {
		var x = this.abs(), y = a.abs();
		var i = x.t;
		r.t = i + y.t;
		while (--i >= 0) r[i] = 0;
		for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
		r.s = 0;
		r.clamp();
		if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
	};


	// (protected) r = this^2, r != this (HAC 14.16)
	BigInteger.prototype.squareTo = function (r) {
		var x = this.abs();
		var i = r.t = 2 * x.t;
		while (--i >= 0) r[i] = 0;
		for (i = 0; i < x.t - 1; ++i) {
			var c = x.am(i, x[i], r, 2 * i, 0, 1);
			if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
				r[i + x.t] -= x.DV;
				r[i + x.t + 1] = 1;
			}
		}
		if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
		r.s = 0;
		r.clamp();
	};



	// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
	// r != q, this != m.  q or r may be null.
	BigInteger.prototype.divRemTo = function (m, q, r) {
		var pm = m.abs();
		if (pm.t <= 0) return;
		var pt = this.abs();
		if (pt.t < pm.t) {
			if (q != null) q.fromInt(0);
			if (r != null) this.copyTo(r);
			return;
		}
		if (r == null) r = nbi();
		var y = nbi(), ts = this.s, ms = m.s;
		var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
		if (nsh > 0) { pm.lShiftTo(nsh, y); pt.lShiftTo(nsh, r); }
		else { pm.copyTo(y); pt.copyTo(r); }
		var ys = y.t;
		var y0 = y[ys - 1];
		if (y0 == 0) return;
		var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
		var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
		var i = r.t, j = i - ys, t = (q == null) ? nbi() : q;
		y.dlShiftTo(j, t);
		if (r.compareTo(t) >= 0) {
			r[r.t++] = 1;
			r.subTo(t, r);
		}
		BigInteger.ONE.dlShiftTo(ys, t);
		t.subTo(y, y); // "negative" y so we can replace sub with am later
		while (y.t < ys) y[y.t++] = 0;
		while (--j >= 0) {
			// Estimate quotient digit
			var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
			if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {	// Try it out
				y.dlShiftTo(j, t);
				r.subTo(t, r);
				while (r[i] < --qd) r.subTo(t, r);
			}
		}
		if (q != null) {
			r.drShiftTo(ys, q);
			if (ts != ms) BigInteger.ZERO.subTo(q, q);
		}
		r.t = ys;
		r.clamp();
		if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder
		if (ts < 0) BigInteger.ZERO.subTo(r, r);
	};


	// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
	// justification:
	//         xy == 1 (mod m)
	//         xy =  1+km
	//   xy(2-xy) = (1+km)(1-km)
	// x[y(2-xy)] = 1-k^2m^2
	// x[y(2-xy)] == 1 (mod m^2)
	// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
	// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
	// JS multiply "overflows" differently from C/C++, so care is needed here.
	BigInteger.prototype.invDigit = function () {
		if (this.t < 1) return 0;
		var x = this[0];
		if ((x & 1) == 0) return 0;
		var y = x & 3; 	// y == 1/x mod 2^2
		y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
		y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
		y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
		// last step - calculate inverse mod DV directly;
		// assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
		y = (y * (2 - x * y % this.DV)) % this.DV; 	// y == 1/x mod 2^dbits
		// we really want the negative inverse, and -DV < y < DV
		return (y > 0) ? this.DV - y : -y;
	};


	// (protected) true iff this is even
	BigInteger.prototype.isEven = function () { return ((this.t > 0) ? (this[0] & 1) : this.s) == 0; };


	// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
	BigInteger.prototype.exp = function (e, z) {
		if (e > 0xffffffff || e < 1) return BigInteger.ONE;
		var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
		g.copyTo(r);
		while (--i >= 0) {
			z.sqrTo(r, r2);
			if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
			else { var t = r; r = r2; r2 = t; }
		}
		return z.revert(r);
	};


	// (public) return string representation in given radix
	BigInteger.prototype.toString = function (b) {
		if (this.s < 0) return "-" + this.negate().toString(b);
		var k;
		if (b == 16) k = 4;
		else if (b == 8) k = 3;
		else if (b == 2) k = 1;
		else if (b == 32) k = 5;
		else if (b == 4) k = 2;
		else return this.toRadix(b);
		var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
		var p = this.DB - (i * this.DB) % k;
		if (i-- > 0) {
			if (p < this.DB && (d = this[i] >> p) > 0) { m = true; r = int2char(d); }
			while (i >= 0) {
				if (p < k) {
					d = (this[i] & ((1 << p) - 1)) << (k - p);
					d |= this[--i] >> (p += this.DB - k);
				}
				else {
					d = (this[i] >> (p -= k)) & km;
					if (p <= 0) { p += this.DB; --i; }
				}
				if (d > 0) m = true;
				if (m) r += int2char(d);
			}
		}
		return m ? r : "0";
	};


	// (public) -this
	BigInteger.prototype.negate = function () { var r = nbi(); BigInteger.ZERO.subTo(this, r); return r; };

	// (public) |this|
	BigInteger.prototype.abs = function () { return (this.s < 0) ? this.negate() : this; };

	// (public) return + if this > a, - if this < a, 0 if equal
	BigInteger.prototype.compareTo = function (a) {
		var r = this.s - a.s;
		if (r != 0) return r;
		var i = this.t;
		r = i - a.t;
		if (r != 0) return (this.s < 0) ? -r : r;
		while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
		return 0;
	}

	// (public) return the number of bits in "this"
	BigInteger.prototype.bitLength = function () {
		if (this.t <= 0) return 0;
		return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
	};

	// (public) this mod a
	BigInteger.prototype.mod = function (a) {
		var r = nbi();
		this.abs().divRemTo(a, null, r);
		if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
		return r;
	}

	// (public) this^e % m, 0 <= e < 2^32
	BigInteger.prototype.modPowInt = function (e, m) {
		var z;
		if (e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
		return this.exp(e, z);
	};

	// "constants"
	BigInteger.ZERO = nbv(0);
	BigInteger.ONE = nbv(1);







	// Copyright (c) 2005-2009  Tom Wu
	// All Rights Reserved.
	// See "LICENSE" for details.
	// Extended JavaScript BN functions, required for RSA private ops.
	// Version 1.1: new BigInteger("0", 10) returns "proper" zero
	// Version 1.2: square() API, isProbablePrime fix


	// return index of lowest 1-bit in x, x < 2^31
	function lbit(x) {
		if (x == 0) return -1;
		var r = 0;
		if ((x & 0xffff) == 0) { x >>= 16; r += 16; }
		if ((x & 0xff) == 0) { x >>= 8; r += 8; }
		if ((x & 0xf) == 0) { x >>= 4; r += 4; }
		if ((x & 3) == 0) { x >>= 2; r += 2; }
		if ((x & 1) == 0) ++r;
		return r;
	}

	// return number of 1 bits in x
	function cbit(x) {
		var r = 0;
		while (x != 0) { x &= x - 1; ++r; }
		return r;
	}

	var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
	var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];



	// (protected) return x s.t. r^x < DV
	BigInteger.prototype.chunkSize = function (r) { return Math.floor(Math.LN2 * this.DB / Math.log(r)); };

	// (protected) convert to radix string
	BigInteger.prototype.toRadix = function (b) {
		if (b == null) b = 10;
		if (this.signum() == 0 || b < 2 || b > 36) return "0";
		var cs = this.chunkSize(b);
		var a = Math.pow(b, cs);
		var d = nbv(a), y = nbi(), z = nbi(), r = "";
		this.divRemTo(d, y, z);
		while (y.signum() > 0) {
			r = (a + z.intValue()).toString(b).substr(1) + r;
			y.divRemTo(d, y, z);
		}
		return z.intValue().toString(b) + r;
	};

	// (protected) convert from radix string
	BigInteger.prototype.fromRadix = function (s, b) {
		this.fromInt(0);
		if (b == null) b = 10;
		var cs = this.chunkSize(b);
		var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
		for (var i = 0; i < s.length; ++i) {
			var x = intAt(s, i);
			if (x < 0) {
				if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
				continue;
			}
			w = b * w + x;
			if (++j >= cs) {
				this.dMultiply(d);
				this.dAddOffset(w, 0);
				j = 0;
				w = 0;
			}
		}
		if (j > 0) {
			this.dMultiply(Math.pow(b, j));
			this.dAddOffset(w, 0);
		}
		if (mi) BigInteger.ZERO.subTo(this, this);
	};

	// (protected) alternate constructor
	BigInteger.prototype.fromNumber = function (a, b, c) {
		if ("number" == typeof b) {
			// new BigInteger(int,int,RNG)
			if (a < 2) this.fromInt(1);
			else {
				this.fromNumber(a, c);
				if (!this.testBit(a - 1))	// force MSB set
					this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
				if (this.isEven()) this.dAddOffset(1, 0); // force odd
				while (!this.isProbablePrime(b)) {
					this.dAddOffset(2, 0);
					if (this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
				}
			}
		}
		else {
			// new BigInteger(int,RNG)
			var x = new Array(), t = a & 7;
			x.length = (a >> 3) + 1;
			b.nextBytes(x);
			if (t > 0) x[0] &= ((1 << t) - 1); else x[0] = 0;
			this.fromString(x, 256);
		}
	};

	// (protected) r = this op a (bitwise)
	BigInteger.prototype.bitwiseTo = function (a, op, r) {
		var i, f, m = Math.min(a.t, this.t);
		for (i = 0; i < m; ++i) r[i] = op(this[i], a[i]);
		if (a.t < this.t) {
			f = a.s & this.DM;
			for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
			r.t = this.t;
		}
		else {
			f = this.s & this.DM;
			for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
			r.t = a.t;
		}
		r.s = op(this.s, a.s);
		r.clamp();
	};

	// (protected) this op (1<<n)
	BigInteger.prototype.changeBit = function (n, op) {
		var r = BigInteger.ONE.shiftLeft(n);
		this.bitwiseTo(r, op, r);
		return r;
	};

	// (protected) r = this + a
	BigInteger.prototype.addTo = function (a, r) {
		var i = 0, c = 0, m = Math.min(a.t, this.t);
		while (i < m) {
			c += this[i] + a[i];
			r[i++] = c & this.DM;
			c >>= this.DB;
		}
		if (a.t < this.t) {
			c += a.s;
			while (i < this.t) {
				c += this[i];
				r[i++] = c & this.DM;
				c >>= this.DB;
			}
			c += this.s;
		}
		else {
			c += this.s;
			while (i < a.t) {
				c += a[i];
				r[i++] = c & this.DM;
				c >>= this.DB;
			}
			c += a.s;
		}
		r.s = (c < 0) ? -1 : 0;
		if (c > 0) r[i++] = c;
		else if (c < -1) r[i++] = this.DV + c;
		r.t = i;
		r.clamp();
	};

	// (protected) this *= n, this >= 0, 1 < n < DV
	BigInteger.prototype.dMultiply = function (n) {
		this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
		++this.t;
		this.clamp();
	};

	// (protected) this += n << w words, this >= 0
	BigInteger.prototype.dAddOffset = function (n, w) {
		if (n == 0) return;
		while (this.t <= w) this[this.t++] = 0;
		this[w] += n;
		while (this[w] >= this.DV) {
			this[w] -= this.DV;
			if (++w >= this.t) this[this.t++] = 0;
			++this[w];
		}
	};

	// (protected) r = lower n words of "this * a", a.t <= n
	// "this" should be the larger one if appropriate.
	BigInteger.prototype.multiplyLowerTo = function (a, n, r) {
		var i = Math.min(this.t + a.t, n);
		r.s = 0; // assumes a,this >= 0
		r.t = i;
		while (i > 0) r[--i] = 0;
		var j;
		for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
		for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
		r.clamp();
	};


	// (protected) r = "this * a" without lower n words, n > 0
	// "this" should be the larger one if appropriate.
	BigInteger.prototype.multiplyUpperTo = function (a, n, r) {
		--n;
		var i = r.t = this.t + a.t - n;
		r.s = 0; // assumes a,this >= 0
		while (--i >= 0) r[i] = 0;
		for (i = Math.max(n - this.t, 0); i < a.t; ++i)
			r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
		r.clamp();
		r.drShiftTo(1, r);
	};

	// (protected) this % n, n < 2^26
	BigInteger.prototype.modInt = function (n) {
		if (n <= 0) return 0;
		var d = this.DV % n, r = (this.s < 0) ? n - 1 : 0;
		if (this.t > 0)
			if (d == 0) r = this[0] % n;
			else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
		return r;
	};


	// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
	BigInteger.prototype.millerRabin = function (t) {
		var n1 = this.subtract(BigInteger.ONE);
		var k = n1.getLowestSetBit();
		if (k <= 0) return false;
		var r = n1.shiftRight(k);
		t = (t + 1) >> 1;
		if (t > lowprimes.length) t = lowprimes.length;
		var a = nbi();
		for (var i = 0; i < t; ++i) {
			//Pick bases at random, instead of starting at 2
			a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
			var y = a.modPow(r, this);
			if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
				var j = 1;
				while (j++ < k && y.compareTo(n1) != 0) {
					y = y.modPowInt(2, this);
					if (y.compareTo(BigInteger.ONE) == 0) return false;
				}
				if (y.compareTo(n1) != 0) return false;
			}
		}
		return true;
	};



	// (public)
	BigInteger.prototype.clone = function () { var r = nbi(); this.copyTo(r); return r; };

	// (public) return value as integer
	BigInteger.prototype.intValue = function () {
		if (this.s < 0) {
			if (this.t == 1) return this[0] - this.DV;
			else if (this.t == 0) return -1;
		}
		else if (this.t == 1) return this[0];
		else if (this.t == 0) return 0;
		// assumes 16 < DB < 32
		return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
	};


	// (public) return value as byte
	BigInteger.prototype.byteValue = function () { return (this.t == 0) ? this.s : (this[0] << 24) >> 24; };

	// (public) return value as short (assumes DB>=16)
	BigInteger.prototype.shortValue = function () { return (this.t == 0) ? this.s : (this[0] << 16) >> 16; };

	// (public) 0 if this == 0, 1 if this > 0
	BigInteger.prototype.signum = function () {
		if (this.s < 0) return -1;
		else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
		else return 1;
	};


	// (public) convert to bigendian byte array
	BigInteger.prototype.toByteArray = function () {
		var i = this.t, r = new Array();
		r[0] = this.s;
		var p = this.DB - (i * this.DB) % 8, d, k = 0;
		if (i-- > 0) {
			if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
				r[k++] = d | (this.s << (this.DB - p));
			while (i >= 0) {
				if (p < 8) {
					d = (this[i] & ((1 << p) - 1)) << (8 - p);
					d |= this[--i] >> (p += this.DB - 8);
				}
				else {
					d = (this[i] >> (p -= 8)) & 0xff;
					if (p <= 0) { p += this.DB; --i; }
				}
				if ((d & 0x80) != 0) d |= -256;
				if (k == 0 && (this.s & 0x80) != (d & 0x80)) ++k;
				if (k > 0 || d != this.s) r[k++] = d;
			}
		}
		return r;
	};

	BigInteger.prototype.equals = function (a) { return (this.compareTo(a) == 0); };
	BigInteger.prototype.min = function (a) { return (this.compareTo(a) < 0) ? this : a; };
	BigInteger.prototype.max = function (a) { return (this.compareTo(a) > 0) ? this : a; };

	// (public) this & a
	function op_and(x, y) { return x & y; }
	BigInteger.prototype.and = function (a) { var r = nbi(); this.bitwiseTo(a, op_and, r); return r; };

	// (public) this | a
	function op_or(x, y) { return x | y; }
	BigInteger.prototype.or = function (a) { var r = nbi(); this.bitwiseTo(a, op_or, r); return r; };

	// (public) this ^ a
	function op_xor(x, y) { return x ^ y; }
	BigInteger.prototype.xor = function (a) { var r = nbi(); this.bitwiseTo(a, op_xor, r); return r; };

	// (public) this & ~a
	function op_andnot(x, y) { return x & ~y; }
	BigInteger.prototype.andNot = function (a) { var r = nbi(); this.bitwiseTo(a, op_andnot, r); return r; };

	// (public) ~this
	BigInteger.prototype.not = function () {
		var r = nbi();
		for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
		r.t = this.t;
		r.s = ~this.s;
		return r;
	};

	// (public) this << n
	BigInteger.prototype.shiftLeft = function (n) {
		var r = nbi();
		if (n < 0) this.rShiftTo(-n, r); else this.lShiftTo(n, r);
		return r;
	};

	// (public) this >> n
	BigInteger.prototype.shiftRight = function (n) {
		var r = nbi();
		if (n < 0) this.lShiftTo(-n, r); else this.rShiftTo(n, r);
		return r;
	};

	// (public) returns index of lowest 1-bit (or -1 if none)
	BigInteger.prototype.getLowestSetBit = function () {
		for (var i = 0; i < this.t; ++i)
			if (this[i] != 0) return i * this.DB + lbit(this[i]);
		if (this.s < 0) return this.t * this.DB;
		return -1;
	};

	// (public) return number of set bits
	BigInteger.prototype.bitCount = function () {
		var r = 0, x = this.s & this.DM;
		for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
		return r;
	};

	// (public) true iff nth bit is set
	BigInteger.prototype.testBit = function (n) {
		var j = Math.floor(n / this.DB);
		if (j >= this.t) return (this.s != 0);
		return ((this[j] & (1 << (n % this.DB))) != 0);
	};

	// (public) this | (1<<n)
	BigInteger.prototype.setBit = function (n) { return this.changeBit(n, op_or); };
	// (public) this & ~(1<<n)
	BigInteger.prototype.clearBit = function (n) { return this.changeBit(n, op_andnot); };
	// (public) this ^ (1<<n)
	BigInteger.prototype.flipBit = function (n) { return this.changeBit(n, op_xor); };
	// (public) this + a
	BigInteger.prototype.add = function (a) { var r = nbi(); this.addTo(a, r); return r; };
	// (public) this - a
	BigInteger.prototype.subtract = function (a) { var r = nbi(); this.subTo(a, r); return r; };
	// (public) this * a
	BigInteger.prototype.multiply = function (a) { var r = nbi(); this.multiplyTo(a, r); return r; };
	// (public) this / a
	BigInteger.prototype.divide = function (a) { var r = nbi(); this.divRemTo(a, r, null); return r; };
	// (public) this % a
	BigInteger.prototype.remainder = function (a) { var r = nbi(); this.divRemTo(a, null, r); return r; };
	// (public) [this/a,this%a]
	BigInteger.prototype.divideAndRemainder = function (a) {
		var q = nbi(), r = nbi();
		this.divRemTo(a, q, r);
		return new Array(q, r);
	};

	// (public) this^e % m (HAC 14.85)
	BigInteger.prototype.modPow = function (e, m) {
		var i = e.bitLength(), k, r = nbv(1), z;
		if (i <= 0) return r;
		else if (i < 18) k = 1;
		else if (i < 48) k = 3;
		else if (i < 144) k = 4;
		else if (i < 768) k = 5;
		else k = 6;
		if (i < 8)
			z = new Classic(m);
		else if (m.isEven())
			z = new Barrett(m);
		else
			z = new Montgomery(m);

		// precomputation
		var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
		g[1] = z.convert(this);
		if (k > 1) {
			var g2 = nbi();
			z.sqrTo(g[1], g2);
			while (n <= km) {
				g[n] = nbi();
				z.mulTo(g2, g[n - 2], g[n]);
				n += 2;
			}
		}

		var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
		i = nbits(e[j]) - 1;
		while (j >= 0) {
			if (i >= k1) w = (e[j] >> (i - k1)) & km;
			else {
				w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
				if (j > 0) w |= e[j - 1] >> (this.DB + i - k1);
			}

			n = k;
			while ((w & 1) == 0) { w >>= 1; --n; }
			if ((i -= n) < 0) { i += this.DB; --j; }
			if (is1) {	// ret == 1, don't bother squaring or multiplying it
				g[w].copyTo(r);
				is1 = false;
			}
			else {
				while (n > 1) { z.sqrTo(r, r2); z.sqrTo(r2, r); n -= 2; }
				if (n > 0) z.sqrTo(r, r2); else { t = r; r = r2; r2 = t; }
				z.mulTo(r2, g[w], r);
			}

			while (j >= 0 && (e[j] & (1 << i)) == 0) {
				z.sqrTo(r, r2); t = r; r = r2; r2 = t;
				if (--i < 0) { i = this.DB - 1; --j; }
			}
		}
		return z.revert(r);
	};

	// (public) 1/this % m (HAC 14.61)
	BigInteger.prototype.modInverse = function (m) {
		var ac = m.isEven();
		if ((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
		var u = m.clone(), v = this.clone();
		var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
		while (u.signum() != 0) {
			while (u.isEven()) {
				u.rShiftTo(1, u);
				if (ac) {
					if (!a.isEven() || !b.isEven()) { a.addTo(this, a); b.subTo(m, b); }
					a.rShiftTo(1, a);
				}
				else if (!b.isEven()) b.subTo(m, b);
				b.rShiftTo(1, b);
			}
			while (v.isEven()) {
				v.rShiftTo(1, v);
				if (ac) {
					if (!c.isEven() || !d.isEven()) { c.addTo(this, c); d.subTo(m, d); }
					c.rShiftTo(1, c);
				}
				else if (!d.isEven()) d.subTo(m, d);
				d.rShiftTo(1, d);
			}
			if (u.compareTo(v) >= 0) {
				u.subTo(v, u);
				if (ac) a.subTo(c, a);
				b.subTo(d, b);
			}
			else {
				v.subTo(u, v);
				if (ac) c.subTo(a, c);
				d.subTo(b, d);
			}
		}
		if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
		if (d.compareTo(m) >= 0) return d.subtract(m);
		if (d.signum() < 0) d.addTo(m, d); else return d;
		if (d.signum() < 0) return d.add(m); else return d;
	};


	// (public) this^e
	BigInteger.prototype.pow = function (e) { return this.exp(e, new NullExp()); };

	// (public) gcd(this,a) (HAC 14.54)
	BigInteger.prototype.gcd = function (a) {
		var x = (this.s < 0) ? this.negate() : this.clone();
		var y = (a.s < 0) ? a.negate() : a.clone();
		if (x.compareTo(y) < 0) { var t = x; x = y; y = t; }
		var i = x.getLowestSetBit(), g = y.getLowestSetBit();
		if (g < 0) return x;
		if (i < g) g = i;
		if (g > 0) {
			x.rShiftTo(g, x);
			y.rShiftTo(g, y);
		}
		while (x.signum() > 0) {
			if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
			if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
			if (x.compareTo(y) >= 0) {
				x.subTo(y, x);
				x.rShiftTo(1, x);
			}
			else {
				y.subTo(x, y);
				y.rShiftTo(1, y);
			}
		}
		if (g > 0) y.lShiftTo(g, y);
		return y;
	};

	// (public) test primality with certainty >= 1-.5^t
	BigInteger.prototype.isProbablePrime = function (t) {
		var i, x = this.abs();
		if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
			for (i = 0; i < lowprimes.length; ++i)
				if (x[0] == lowprimes[i]) return true;
			return false;
		}
		if (x.isEven()) return false;
		i = 1;
		while (i < lowprimes.length) {
			var m = lowprimes[i], j = i + 1;
			while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
			m = x.modInt(m);
			while (i < j) if (m % lowprimes[i++] == 0) return false;
		}
		return x.millerRabin(t);
	};


	// JSBN-specific extension

	// (public) this^2
	BigInteger.prototype.square = function () { var r = nbi(); this.squareTo(r); return r; };


	// NOTE: BigInteger interfaces not implemented in jsbn:
	// BigInteger(int signum, byte[] magnitude)
	// double doubleValue()
	// float floatValue()
	// int hashCode()
	// long longValue()
	// static BigInteger valueOf(long val)



	// Copyright Stephan Thomas (start) --- //
	// https://raw.github.com/bitcoinjs/bitcoinjs-lib/07f9d55ccb6abd962efb6befdd37671f85ea4ff9/src/util.js
	// BigInteger monkey patching
	BigInteger.valueOf = nbv;

	/**
	* Returns a byte array representation of the big integer.
	*
	* This returns the absolute of the contained value in big endian
	* form. A value of zero results in an empty array.
	*/
	BigInteger.prototype.toByteArrayUnsigned = function () {
		var ba = this.abs().toByteArray();
		if (ba.length) {
			if (ba[0] == 0) {
				ba = ba.slice(1);
			}
			return ba.map(function (v) {
				return (v < 0) ? v + 256 : v;
			});
		} else {
			// Empty array, nothing to do
			return ba;
		}
	};

	/**
	* Turns a byte array into a big integer.
	*
	* This function will interpret a byte array as a big integer in big
	* endian notation and ignore leading zeros.
	*/
	BigInteger.fromByteArrayUnsigned = function (ba) {
		if (!ba.length) {
			return ba.valueOf(0);
		} else if (ba[0] & 0x80) {
			// Prepend a zero so the BigInteger class doesn't mistake this
			// for a negative integer.
			return new BigInteger([0].concat(ba));
		} else {
			return new BigInteger(ba);
		}
	};

	/**
	* Converts big integer to signed byte representation.
	*
	* The format for this value uses a the most significant bit as a sign
	* bit. If the most significant bit is already occupied by the
	* absolute value, an extra byte is prepended and the sign bit is set
	* there.
	*
	* Examples:
	*
	*      0 =>     0x00
	*      1 =>     0x01
	*     -1 =>     0x81
	*    127 =>     0x7f
	*   -127 =>     0xff
	*    128 =>   0x0080
	*   -128 =>   0x8080
	*    255 =>   0x00ff
	*   -255 =>   0x80ff
	*  16300 =>   0x3fac
	* -16300 =>   0xbfac
	*  62300 => 0x00f35c
	* -62300 => 0x80f35c
	*/
	BigInteger.prototype.toByteArraySigned = function () {
		var val = this.abs().toByteArrayUnsigned();
		var neg = this.compareTo(BigInteger.ZERO) < 0;

		if (neg) {
			if (val[0] & 0x80) {
				val.unshift(0x80);
			} else {
				val[0] |= 0x80;
			}
		} else {
			if (val[0] & 0x80) {
				val.unshift(0x00);
			}
		}

		return val;
	};

	/**
	* Parse a signed big integer byte representation.
	*
	* For details on the format please see BigInteger.toByteArraySigned.
	*/
	BigInteger.fromByteArraySigned = function (ba) {
		// Check for negative value
		if (ba[0] & 0x80) {
			// Remove sign bit
			ba[0] &= 0x7f;

			return BigInteger.fromByteArrayUnsigned(ba).negate();
		} else {
			return BigInteger.fromByteArrayUnsigned(ba);
		}
	};
	// Copyright Stephan Thomas (end) --- //




	// ****** REDUCTION ******* //

	// Modular reduction using "classic" algorithm
	var Classic = window.Classic = function Classic(m) { this.m = m; }
	Classic.prototype.convert = function (x) {
		if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
		else return x;
	};
	Classic.prototype.revert = function (x) { return x; };
	Classic.prototype.reduce = function (x) { x.divRemTo(this.m, null, x); };
	Classic.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); this.reduce(r); };
	Classic.prototype.sqrTo = function (x, r) { x.squareTo(r); this.reduce(r); };





	// Montgomery reduction
	var Montgomery = window.Montgomery = function Montgomery(m) {
		this.m = m;
		this.mp = m.invDigit();
		this.mpl = this.mp & 0x7fff;
		this.mph = this.mp >> 15;
		this.um = (1 << (m.DB - 15)) - 1;
		this.mt2 = 2 * m.t;
	}
	// xR mod m
	Montgomery.prototype.convert = function (x) {
		var r = nbi();
		x.abs().dlShiftTo(this.m.t, r);
		r.divRemTo(this.m, null, r);
		if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
		return r;
	}
	// x/R mod m
	Montgomery.prototype.revert = function (x) {
		var r = nbi();
		x.copyTo(r);
		this.reduce(r);
		return r;
	};
	// x = x/R mod m (HAC 14.32)
	Montgomery.prototype.reduce = function (x) {
		while (x.t <= this.mt2)	// pad x so am has enough room later
			x[x.t++] = 0;
		for (var i = 0; i < this.m.t; ++i) {
			// faster way of calculating u0 = x[i]*mp mod DV
			var j = x[i] & 0x7fff;
			var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
			// use am to combine the multiply-shift-add into one call
			j = i + this.m.t;
			x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
			// propagate carry
			while (x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
		}
		x.clamp();
		x.drShiftTo(this.m.t, x);
		if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
	};
	// r = "xy/R mod m"; x,y != r
	Montgomery.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); this.reduce(r); };
	// r = "x^2/R mod m"; x != r
	Montgomery.prototype.sqrTo = function (x, r) { x.squareTo(r); this.reduce(r); };





	// A "null" reducer
	var NullExp = window.NullExp = function NullExp() { }
	NullExp.prototype.convert = function (x) { return x; };
	NullExp.prototype.revert = function (x) { return x; };
	NullExp.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); };
	NullExp.prototype.sqrTo = function (x, r) { x.squareTo(r); };





	// Barrett modular reduction
	var Barrett = window.Barrett = function Barrett(m) {
		// setup Barrett
		this.r2 = nbi();
		this.q3 = nbi();
		BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
		this.mu = this.r2.divide(m);
		this.m = m;
	}
	Barrett.prototype.convert = function (x) {
		if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
		else if (x.compareTo(this.m) < 0) return x;
		else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
	};
	Barrett.prototype.revert = function (x) { return x; };
	// x = x mod m (HAC 14.42)
	Barrett.prototype.reduce = function (x) {
		x.drShiftTo(this.m.t - 1, this.r2);
		if (x.t > this.m.t + 1) { x.t = this.m.t + 1; x.clamp(); }
		this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
		this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
		while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
		x.subTo(this.r2, x);
		while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
	};
	// r = x*y mod m; x,y != r
	Barrett.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); this.reduce(r); };
	// r = x^2 mod m; x != r
	Barrett.prototype.sqrTo = function (x, r) { x.squareTo(r); this.reduce(r); };

})();

//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of 
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

(function () {
	//---------------------------------------------------------------------
	// QRCode
	//---------------------------------------------------------------------

	var QRCode = window.QRCode = function (typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = new Array();
	}

	QRCode.prototype = {

		addData: function (data) {
			var newData = new QRCode.QR8bitByte(data);
			this.dataList.push(newData);
			this.dataCache = null;
		},

		isDark: function (row, col) {
			if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
				throw new Error(row + "," + col);
			}
			return this.modules[row][col];
		},

		getModuleCount: function () {
			return this.moduleCount;
		},

		make: function () {
			this.makeImpl(false, this.getBestMaskPattern());
		},

		makeImpl: function (test, maskPattern) {

			this.moduleCount = this.typeNumber * 4 + 17;
			this.modules = new Array(this.moduleCount);

			for (var row = 0; row < this.moduleCount; row++) {

				this.modules[row] = new Array(this.moduleCount);

				for (var col = 0; col < this.moduleCount; col++) {
					this.modules[row][col] = null; //(col + row) % 3;
				}
			}

			this.setupPositionProbePattern(0, 0);
			this.setupPositionProbePattern(this.moduleCount - 7, 0);
			this.setupPositionProbePattern(0, this.moduleCount - 7);
			this.setupPositionAdjustPattern();
			this.setupTimingPattern();
			this.setupTypeInfo(test, maskPattern);

			if (this.typeNumber >= 7) {
				this.setupTypeNumber(test);
			}

			if (this.dataCache == null) {
				this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
			}

			this.mapData(this.dataCache, maskPattern);
		},

		setupPositionProbePattern: function (row, col) {

			for (var r = -1; r <= 7; r++) {

				if (row + r <= -1 || this.moduleCount <= row + r) continue;

				for (var c = -1; c <= 7; c++) {

					if (col + c <= -1 || this.moduleCount <= col + c) continue;

					if ((0 <= r && r <= 6 && (c == 0 || c == 6))
						|| (0 <= c && c <= 6 && (r == 0 || r == 6))
						|| (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
						this.modules[row + r][col + c] = true;
					} else {
						this.modules[row + r][col + c] = false;
					}
				}
			}
		},

		getBestMaskPattern: function () {

			var minLostPoint = 0;
			var pattern = 0;

			for (var i = 0; i < 8; i++) {

				this.makeImpl(true, i);

				var lostPoint = QRCode.Util.getLostPoint(this);

				if (i == 0 || minLostPoint > lostPoint) {
					minLostPoint = lostPoint;
					pattern = i;
				}
			}

			return pattern;
		},

		createMovieClip: function (target_mc, instance_name, depth) {

			var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
			var cs = 1;

			this.make();

			for (var row = 0; row < this.modules.length; row++) {

				var y = row * cs;

				for (var col = 0; col < this.modules[row].length; col++) {

					var x = col * cs;
					var dark = this.modules[row][col];

					if (dark) {
						qr_mc.beginFill(0, 100);
						qr_mc.moveTo(x, y);
						qr_mc.lineTo(x + cs, y);
						qr_mc.lineTo(x + cs, y + cs);
						qr_mc.lineTo(x, y + cs);
						qr_mc.endFill();
					}
				}
			}

			return qr_mc;
		},

		setupTimingPattern: function () {

			for (var r = 8; r < this.moduleCount - 8; r++) {
				if (this.modules[r][6] != null) {
					continue;
				}
				this.modules[r][6] = (r % 2 == 0);
			}

			for (var c = 8; c < this.moduleCount - 8; c++) {
				if (this.modules[6][c] != null) {
					continue;
				}
				this.modules[6][c] = (c % 2 == 0);
			}
		},

		setupPositionAdjustPattern: function () {

			var pos = QRCode.Util.getPatternPosition(this.typeNumber);

			for (var i = 0; i < pos.length; i++) {

				for (var j = 0; j < pos.length; j++) {

					var row = pos[i];
					var col = pos[j];

					if (this.modules[row][col] != null) {
						continue;
					}

					for (var r = -2; r <= 2; r++) {

						for (var c = -2; c <= 2; c++) {

							if (r == -2 || r == 2 || c == -2 || c == 2
								|| (r == 0 && c == 0)) {
								this.modules[row + r][col + c] = true;
							} else {
								this.modules[row + r][col + c] = false;
							}
						}
					}
				}
			}
		},

		setupTypeNumber: function (test) {

			var bits = QRCode.Util.getBCHTypeNumber(this.typeNumber);

			for (var i = 0; i < 18; i++) {
				var mod = (!test && ((bits >> i) & 1) == 1);
				this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
			}

			for (var i = 0; i < 18; i++) {
				var mod = (!test && ((bits >> i) & 1) == 1);
				this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
			}
		},

		setupTypeInfo: function (test, maskPattern) {

			var data = (this.errorCorrectLevel << 3) | maskPattern;
			var bits = QRCode.Util.getBCHTypeInfo(data);

			// vertical		
			for (var i = 0; i < 15; i++) {

				var mod = (!test && ((bits >> i) & 1) == 1);

				if (i < 6) {
					this.modules[i][8] = mod;
				} else if (i < 8) {
					this.modules[i + 1][8] = mod;
				} else {
					this.modules[this.moduleCount - 15 + i][8] = mod;
				}
			}

			// horizontal
			for (var i = 0; i < 15; i++) {

				var mod = (!test && ((bits >> i) & 1) == 1);

				if (i < 8) {
					this.modules[8][this.moduleCount - i - 1] = mod;
				} else if (i < 9) {
					this.modules[8][15 - i - 1 + 1] = mod;
				} else {
					this.modules[8][15 - i - 1] = mod;
				}
			}

			// fixed module
			this.modules[this.moduleCount - 8][8] = (!test);

		},

		mapData: function (data, maskPattern) {

			var inc = -1;
			var row = this.moduleCount - 1;
			var bitIndex = 7;
			var byteIndex = 0;

			for (var col = this.moduleCount - 1; col > 0; col -= 2) {

				if (col == 6) col--;

				while (true) {

					for (var c = 0; c < 2; c++) {

						if (this.modules[row][col - c] == null) {

							var dark = false;

							if (byteIndex < data.length) {
								dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
							}

							var mask = QRCode.Util.getMask(maskPattern, row, col - c);

							if (mask) {
								dark = !dark;
							}

							this.modules[row][col - c] = dark;
							bitIndex--;

							if (bitIndex == -1) {
								byteIndex++;
								bitIndex = 7;
							}
						}
					}

					row += inc;

					if (row < 0 || this.moduleCount <= row) {
						row -= inc;
						inc = -inc;
						break;
					}
				}
			}

		}

	};

	QRCode.PAD0 = 0xEC;
	QRCode.PAD1 = 0x11;

	QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {

		var rsBlocks = QRCode.RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

		var buffer = new QRCode.BitBuffer();

		for (var i = 0; i < dataList.length; i++) {
			var data = dataList[i];
			buffer.put(data.mode, 4);
			buffer.put(data.getLength(), QRCode.Util.getLengthInBits(data.mode, typeNumber));
			data.write(buffer);
		}

		// calc num max data.
		var totalDataCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalDataCount += rsBlocks[i].dataCount;
		}

		if (buffer.getLengthInBits() > totalDataCount * 8) {
			throw new Error("code length overflow. ("
			+ buffer.getLengthInBits()
			+ ">"
			+ totalDataCount * 8
			+ ")");
		}

		// end code
		if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
			buffer.put(0, 4);
		}

		// padding
		while (buffer.getLengthInBits() % 8 != 0) {
			buffer.putBit(false);
		}

		// padding
		while (true) {

			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCode.PAD0, 8);

			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCode.PAD1, 8);
		}

		return QRCode.createBytes(buffer, rsBlocks);
	};

	QRCode.createBytes = function (buffer, rsBlocks) {

		var offset = 0;

		var maxDcCount = 0;
		var maxEcCount = 0;

		var dcdata = new Array(rsBlocks.length);
		var ecdata = new Array(rsBlocks.length);

		for (var r = 0; r < rsBlocks.length; r++) {

			var dcCount = rsBlocks[r].dataCount;
			var ecCount = rsBlocks[r].totalCount - dcCount;

			maxDcCount = Math.max(maxDcCount, dcCount);
			maxEcCount = Math.max(maxEcCount, ecCount);

			dcdata[r] = new Array(dcCount);

			for (var i = 0; i < dcdata[r].length; i++) {
				dcdata[r][i] = 0xff & buffer.buffer[i + offset];
			}
			offset += dcCount;

			var rsPoly = QRCode.Util.getErrorCorrectPolynomial(ecCount);
			var rawPoly = new QRCode.Polynomial(dcdata[r], rsPoly.getLength() - 1);

			var modPoly = rawPoly.mod(rsPoly);
			ecdata[r] = new Array(rsPoly.getLength() - 1);
			for (var i = 0; i < ecdata[r].length; i++) {
				var modIndex = i + modPoly.getLength() - ecdata[r].length;
				ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0;
			}

		}

		var totalCodeCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalCodeCount += rsBlocks[i].totalCount;
		}

		var data = new Array(totalCodeCount);
		var index = 0;

		for (var i = 0; i < maxDcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < dcdata[r].length) {
					data[index++] = dcdata[r][i];
				}
			}
		}

		for (var i = 0; i < maxEcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < ecdata[r].length) {
					data[index++] = ecdata[r][i];
				}
			}
		}

		return data;

	};

	//---------------------------------------------------------------------
	// QR8bitByte
	//---------------------------------------------------------------------
	QRCode.QR8bitByte = function (data) {
		this.mode = QRCode.Mode.MODE_8BIT_BYTE;
		this.data = data;
	}

	QRCode.QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.data.length;
		},

		write: function (buffer) {
			for (var i = 0; i < this.data.length; i++) {
				// not JIS ...
				buffer.put(this.data.charCodeAt(i), 8);
			}
		}
	};


	//---------------------------------------------------------------------
	// QRMode
	//---------------------------------------------------------------------
	QRCode.Mode = {
		MODE_NUMBER: 1 << 0,
		MODE_ALPHA_NUM: 1 << 1,
		MODE_8BIT_BYTE: 1 << 2,
		MODE_KANJI: 1 << 3
	};

	//---------------------------------------------------------------------
	// QRErrorCorrectLevel
	//---------------------------------------------------------------------
	QRCode.ErrorCorrectLevel = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	};


	//---------------------------------------------------------------------
	// QRMaskPattern
	//---------------------------------------------------------------------
	QRCode.MaskPattern = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};

	//---------------------------------------------------------------------
	// QRUtil
	//---------------------------------------------------------------------

	QRCode.Util = {

		PATTERN_POSITION_TABLE: [
		[],
		[6, 18],
		[6, 22],
		[6, 26],
		[6, 30],
		[6, 34],
		[6, 22, 38],
		[6, 24, 42],
		[6, 26, 46],
		[6, 28, 50],
		[6, 30, 54],
		[6, 32, 58],
		[6, 34, 62],
		[6, 26, 46, 66],
		[6, 26, 48, 70],
		[6, 26, 50, 74],
		[6, 30, 54, 78],
		[6, 30, 56, 82],
		[6, 30, 58, 86],
		[6, 34, 62, 90],
		[6, 28, 50, 72, 94],
		[6, 26, 50, 74, 98],
		[6, 30, 54, 78, 102],
		[6, 28, 54, 80, 106],
		[6, 32, 58, 84, 110],
		[6, 30, 58, 86, 114],
		[6, 34, 62, 90, 118],
		[6, 26, 50, 74, 98, 122],
		[6, 30, 54, 78, 102, 126],
		[6, 26, 52, 78, 104, 130],
		[6, 30, 56, 82, 108, 134],
		[6, 34, 60, 86, 112, 138],
		[6, 30, 58, 86, 114, 142],
		[6, 34, 62, 90, 118, 146],
		[6, 30, 54, 78, 102, 126, 150],
		[6, 24, 50, 76, 102, 128, 154],
		[6, 28, 54, 80, 106, 132, 158],
		[6, 32, 58, 84, 110, 136, 162],
		[6, 26, 54, 82, 110, 138, 166],
		[6, 30, 58, 86, 114, 142, 170]
	],

		G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
		G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
		G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),

		getBCHTypeInfo: function (data) {
			var d = data << 10;
			while (QRCode.Util.getBCHDigit(d) - QRCode.Util.getBCHDigit(QRCode.Util.G15) >= 0) {
				d ^= (QRCode.Util.G15 << (QRCode.Util.getBCHDigit(d) - QRCode.Util.getBCHDigit(QRCode.Util.G15)));
			}
			return ((data << 10) | d) ^ QRCode.Util.G15_MASK;
		},

		getBCHTypeNumber: function (data) {
			var d = data << 12;
			while (QRCode.Util.getBCHDigit(d) - QRCode.Util.getBCHDigit(QRCode.Util.G18) >= 0) {
				d ^= (QRCode.Util.G18 << (QRCode.Util.getBCHDigit(d) - QRCode.Util.getBCHDigit(QRCode.Util.G18)));
			}
			return (data << 12) | d;
		},

		getBCHDigit: function (data) {

			var digit = 0;

			while (data != 0) {
				digit++;
				data >>>= 1;
			}

			return digit;
		},

		getPatternPosition: function (typeNumber) {
			return QRCode.Util.PATTERN_POSITION_TABLE[typeNumber - 1];
		},

		getMask: function (maskPattern, i, j) {

			switch (maskPattern) {

				case QRCode.MaskPattern.PATTERN000: return (i + j) % 2 == 0;
				case QRCode.MaskPattern.PATTERN001: return i % 2 == 0;
				case QRCode.MaskPattern.PATTERN010: return j % 3 == 0;
				case QRCode.MaskPattern.PATTERN011: return (i + j) % 3 == 0;
				case QRCode.MaskPattern.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
				case QRCode.MaskPattern.PATTERN101: return (i * j) % 2 + (i * j) % 3 == 0;
				case QRCode.MaskPattern.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
				case QRCode.MaskPattern.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 == 0;

				default:
					throw new Error("bad maskPattern:" + maskPattern);
			}
		},

		getErrorCorrectPolynomial: function (errorCorrectLength) {

			var a = new QRCode.Polynomial([1], 0);

			for (var i = 0; i < errorCorrectLength; i++) {
				a = a.multiply(new QRCode.Polynomial([1, QRCode.Math.gexp(i)], 0));
			}

			return a;
		},

		getLengthInBits: function (mode, type) {

			if (1 <= type && type < 10) {

				// 1 - 9

				switch (mode) {
					case QRCode.Mode.MODE_NUMBER: return 10;
					case QRCode.Mode.MODE_ALPHA_NUM: return 9;
					case QRCode.Mode.MODE_8BIT_BYTE: return 8;
					case QRCode.Mode.MODE_KANJI: return 8;
					default:
						throw new Error("mode:" + mode);
				}

			} else if (type < 27) {

				// 10 - 26

				switch (mode) {
					case QRCode.Mode.MODE_NUMBER: return 12;
					case QRCode.Mode.MODE_ALPHA_NUM: return 11;
					case QRCode.Mode.MODE_8BIT_BYTE: return 16;
					case QRCode.Mode.MODE_KANJI: return 10;
					default:
						throw new Error("mode:" + mode);
				}

			} else if (type < 41) {

				// 27 - 40

				switch (mode) {
					case QRCode.Mode.MODE_NUMBER: return 14;
					case QRCode.Mode.MODE_ALPHA_NUM: return 13;
					case QRCode.Mode.MODE_8BIT_BYTE: return 16;
					case QRCode.Mode.MODE_KANJI: return 12;
					default:
						throw new Error("mode:" + mode);
				}

			} else {
				throw new Error("type:" + type);
			}
		},

		getLostPoint: function (qrCode) {

			var moduleCount = qrCode.getModuleCount();

			var lostPoint = 0;

			// LEVEL1

			for (var row = 0; row < moduleCount; row++) {

				for (var col = 0; col < moduleCount; col++) {

					var sameCount = 0;
					var dark = qrCode.isDark(row, col);

					for (var r = -1; r <= 1; r++) {

						if (row + r < 0 || moduleCount <= row + r) {
							continue;
						}

						for (var c = -1; c <= 1; c++) {

							if (col + c < 0 || moduleCount <= col + c) {
								continue;
							}

							if (r == 0 && c == 0) {
								continue;
							}

							if (dark == qrCode.isDark(row + r, col + c)) {
								sameCount++;
							}
						}
					}

					if (sameCount > 5) {
						lostPoint += (3 + sameCount - 5);
					}
				}
			}

			// LEVEL2

			for (var row = 0; row < moduleCount - 1; row++) {
				for (var col = 0; col < moduleCount - 1; col++) {
					var count = 0;
					if (qrCode.isDark(row, col)) count++;
					if (qrCode.isDark(row + 1, col)) count++;
					if (qrCode.isDark(row, col + 1)) count++;
					if (qrCode.isDark(row + 1, col + 1)) count++;
					if (count == 0 || count == 4) {
						lostPoint += 3;
					}
				}
			}

			// LEVEL3

			for (var row = 0; row < moduleCount; row++) {
				for (var col = 0; col < moduleCount - 6; col++) {
					if (qrCode.isDark(row, col)
						&& !qrCode.isDark(row, col + 1)
						&& qrCode.isDark(row, col + 2)
						&& qrCode.isDark(row, col + 3)
						&& qrCode.isDark(row, col + 4)
						&& !qrCode.isDark(row, col + 5)
						&& qrCode.isDark(row, col + 6)) {
						lostPoint += 40;
					}
				}
			}

			for (var col = 0; col < moduleCount; col++) {
				for (var row = 0; row < moduleCount - 6; row++) {
					if (qrCode.isDark(row, col)
						&& !qrCode.isDark(row + 1, col)
						&& qrCode.isDark(row + 2, col)
						&& qrCode.isDark(row + 3, col)
						&& qrCode.isDark(row + 4, col)
						&& !qrCode.isDark(row + 5, col)
						&& qrCode.isDark(row + 6, col)) {
						lostPoint += 40;
					}
				}
			}

			// LEVEL4

			var darkCount = 0;

			for (var col = 0; col < moduleCount; col++) {
				for (var row = 0; row < moduleCount; row++) {
					if (qrCode.isDark(row, col)) {
						darkCount++;
					}
				}
			}

			var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
			lostPoint += ratio * 10;

			return lostPoint;
		}

	};


	//---------------------------------------------------------------------
	// QRMath
	//---------------------------------------------------------------------

	QRCode.Math = {

		glog: function (n) {

			if (n < 1) {
				throw new Error("glog(" + n + ")");
			}

			return QRCode.Math.LOG_TABLE[n];
		},

		gexp: function (n) {

			while (n < 0) {
				n += 255;
			}

			while (n >= 256) {
				n -= 255;
			}

			return QRCode.Math.EXP_TABLE[n];
		},

		EXP_TABLE: new Array(256),

		LOG_TABLE: new Array(256)

	};

	for (var i = 0; i < 8; i++) {
		QRCode.Math.EXP_TABLE[i] = 1 << i;
	}
	for (var i = 8; i < 256; i++) {
		QRCode.Math.EXP_TABLE[i] = QRCode.Math.EXP_TABLE[i - 4]
		^ QRCode.Math.EXP_TABLE[i - 5]
		^ QRCode.Math.EXP_TABLE[i - 6]
		^ QRCode.Math.EXP_TABLE[i - 8];
	}
	for (var i = 0; i < 255; i++) {
		QRCode.Math.LOG_TABLE[QRCode.Math.EXP_TABLE[i]] = i;
	}

	//---------------------------------------------------------------------
	// QRPolynomial
	//---------------------------------------------------------------------

	QRCode.Polynomial = function (num, shift) {

		if (num.length == undefined) {
			throw new Error(num.length + "/" + shift);
		}

		var offset = 0;

		while (offset < num.length && num[offset] == 0) {
			offset++;
		}

		this.num = new Array(num.length - offset + shift);
		for (var i = 0; i < num.length - offset; i++) {
			this.num[i] = num[i + offset];
		}
	}

	QRCode.Polynomial.prototype = {

		get: function (index) {
			return this.num[index];
		},

		getLength: function () {
			return this.num.length;
		},

		multiply: function (e) {

			var num = new Array(this.getLength() + e.getLength() - 1);

			for (var i = 0; i < this.getLength(); i++) {
				for (var j = 0; j < e.getLength(); j++) {
					num[i + j] ^= QRCode.Math.gexp(QRCode.Math.glog(this.get(i)) + QRCode.Math.glog(e.get(j)));
				}
			}

			return new QRCode.Polynomial(num, 0);
		},

		mod: function (e) {

			if (this.getLength() - e.getLength() < 0) {
				return this;
			}

			var ratio = QRCode.Math.glog(this.get(0)) - QRCode.Math.glog(e.get(0));

			var num = new Array(this.getLength());

			for (var i = 0; i < this.getLength(); i++) {
				num[i] = this.get(i);
			}

			for (var i = 0; i < e.getLength(); i++) {
				num[i] ^= QRCode.Math.gexp(QRCode.Math.glog(e.get(i)) + ratio);
			}

			// recursive call
			return new QRCode.Polynomial(num, 0).mod(e);
		}
	};

	//---------------------------------------------------------------------
	// QRRSBlock
	//---------------------------------------------------------------------

	QRCode.RSBlock = function (totalCount, dataCount) {
		this.totalCount = totalCount;
		this.dataCount = dataCount;
	}

	QRCode.RSBlock.RS_BLOCK_TABLE = [

	// L
	// M
	// Q
	// H

	// 1
	[1, 26, 19],
	[1, 26, 16],
	[1, 26, 13],
	[1, 26, 9],

	// 2
	[1, 44, 34],
	[1, 44, 28],
	[1, 44, 22],
	[1, 44, 16],

	// 3
	[1, 70, 55],
	[1, 70, 44],
	[2, 35, 17],
	[2, 35, 13],

	// 4		
	[1, 100, 80],
	[2, 50, 32],
	[2, 50, 24],
	[4, 25, 9],

	// 5
	[1, 134, 108],
	[2, 67, 43],
	[2, 33, 15, 2, 34, 16],
	[2, 33, 11, 2, 34, 12],

	// 6
	[2, 86, 68],
	[4, 43, 27],
	[4, 43, 19],
	[4, 43, 15],

	// 7		
	[2, 98, 78],
	[4, 49, 31],
	[2, 32, 14, 4, 33, 15],
	[4, 39, 13, 1, 40, 14],

	// 8
	[2, 121, 97],
	[2, 60, 38, 2, 61, 39],
	[4, 40, 18, 2, 41, 19],
	[4, 40, 14, 2, 41, 15],

	// 9
	[2, 146, 116],
	[3, 58, 36, 2, 59, 37],
	[4, 36, 16, 4, 37, 17],
	[4, 36, 12, 4, 37, 13],

	// 10		
	[2, 86, 68, 2, 87, 69],
	[4, 69, 43, 1, 70, 44],
	[6, 43, 19, 2, 44, 20],
	[6, 43, 15, 2, 44, 16]

];

	QRCode.RSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {

		var rsBlock = QRCode.RSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

		if (rsBlock == undefined) {
			throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
		}

		var length = rsBlock.length / 3;

		var list = new Array();

		for (var i = 0; i < length; i++) {

			var count = rsBlock[i * 3 + 0];
			var totalCount = rsBlock[i * 3 + 1];
			var dataCount = rsBlock[i * 3 + 2];

			for (var j = 0; j < count; j++) {
				list.push(new QRCode.RSBlock(totalCount, dataCount));
			}
		}

		return list;
	};

	QRCode.RSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {

		switch (errorCorrectLevel) {
			case QRCode.ErrorCorrectLevel.L:
				return QRCode.RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
			case QRCode.ErrorCorrectLevel.M:
				return QRCode.RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
			case QRCode.ErrorCorrectLevel.Q:
				return QRCode.RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
			case QRCode.ErrorCorrectLevel.H:
				return QRCode.RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
			default:
				return undefined;
		}
	};

	//---------------------------------------------------------------------
	// QRBitBuffer
	//---------------------------------------------------------------------

	QRCode.BitBuffer = function () {
		this.buffer = new Array();
		this.length = 0;
	}

	QRCode.BitBuffer.prototype = {

		get: function (index) {
			var bufIndex = Math.floor(index / 8);
			return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) == 1;
		},

		put: function (num, length) {
			for (var i = 0; i < length; i++) {
				this.putBit(((num >>> (length - i - 1)) & 1) == 1);
			}
		},

		getLengthInBits: function () {
			return this.length;
		},

		putBit: function (bit) {

			var bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) {
				this.buffer.push(0);
			}

			if (bit) {
				this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
			}

			this.length++;
		}
	};
})();

/*
Copyright (c) 2011 Stefan Thomas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//https://raw.github.com/bitcoinjs/bitcoinjs-lib/1a7fc9d063f864058809d06ef4542af40be3558f/src/bitcoin.js
(function (exports) {
	var Bitcoin = exports;
})(
	'object' === typeof module ? module.exports : (window.Bitcoin = {})
);

//https://raw.github.com/bitcoinjs/bitcoinjs-lib/c952aaeb3ee472e3776655b8ea07299ebed702c7/src/base58.js
(function (Bitcoin) {
	Bitcoin.Base58 = {
		alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
		validRegex: /^[1-9A-HJ-NP-Za-km-z]+$/,
		base: BigInteger.valueOf(58),

		/**
		* Convert a byte array to a base58-encoded string.
		*
		* Written by Mike Hearn for BitcoinJ.
		*   Copyright (c) 2011 Google Inc.
		*
		* Ported to JavaScript by Stefan Thomas.
		*/
		encode: function (input) {
			var bi = BigInteger.fromByteArrayUnsigned(input);
			var chars = [];

			while (bi.compareTo(B58.base) >= 0) {
				var mod = bi.mod(B58.base);
				chars.unshift(B58.alphabet[mod.intValue()]);
				bi = bi.subtract(mod).divide(B58.base);
			}
			chars.unshift(B58.alphabet[bi.intValue()]);

			// Convert leading zeros too.
			for (var i = 0; i < input.length; i++) {
				if (input[i] == 0x00) {
					chars.unshift(B58.alphabet[0]);
				} else break;
			}

			return chars.join('');
		},

		/**
		* Convert a base58-encoded string to a byte array.
		*
		* Written by Mike Hearn for BitcoinJ.
		*   Copyright (c) 2011 Google Inc.
		*
		* Ported to JavaScript by Stefan Thomas.
		*/
		decode: function (input) {
			var bi = BigInteger.valueOf(0);
			var leadingZerosNum = 0;
			for (var i = input.length - 1; i >= 0; i--) {
				var alphaIndex = B58.alphabet.indexOf(input[i]);
				if (alphaIndex < 0) {
					throw "Invalid character";
				}
				bi = bi.add(BigInteger.valueOf(alphaIndex)
								.multiply(B58.base.pow(input.length - 1 - i)));

				// This counts leading zero bytes
				if (input[i] == "1") leadingZerosNum++;
				else leadingZerosNum = 0;
			}
			var bytes = bi.toByteArrayUnsigned();

			// Add leading zeros
			while (leadingZerosNum-- > 0) bytes.unshift(0);

			return bytes;
		}
	};

	var B58 = Bitcoin.Base58;
})(
	'undefined' != typeof Bitcoin ? Bitcoin : module.exports
);

//https://raw.github.com/bitcoinjs/bitcoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/address.js
Bitcoin.Address = function (bytes) {
	if ("string" == typeof bytes) {
		bytes = Bitcoin.Address.decodeString(bytes);
	}
	this.hash = bytes;
	this.version = Bitcoin.Address.networkVersion;
};

Bitcoin.Address.networkVersion = window.networkVersion; // multiple coin support

/**
* Serialize this object as a standard Bitcoin address.
*
* Returns the address as a base58-encoded string in the standardized format.
*/
Bitcoin.Address.prototype.toString = function () {
	// Get a copy of the hash
	var hash = this.hash.slice(0);

	// Version
	hash.unshift(this.version);
	var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
	var bytes = hash.concat(checksum.slice(0, 4));
	return Bitcoin.Base58.encode(bytes);
};

Bitcoin.Address.prototype.getHashBase64 = function () {
	return Crypto.util.bytesToBase64(this.hash);
};

/**
* Parse a Bitcoin address contained in a string.
*/
Bitcoin.Address.decodeString = function (string) {
	var bytes = Bitcoin.Base58.decode(string);
	var hash = bytes.slice(0, 21);
	var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });

	if (checksum[0] != bytes[21] ||
			checksum[1] != bytes[22] ||
			checksum[2] != bytes[23] ||
			checksum[3] != bytes[24]) {
		throw "Checksum validation failed!";
	}

	var version = hash.shift();

	if (version != 0) {
		throw "Version " + version + " not supported!";
	}

	return hash;
};

//https://raw.github.com/bitcoinjs/bitcoinjs-lib/e90780d3d3b8fc0d027d2bcb38b80479902f223e/src/ecdsa.js
Bitcoin.ECDSA = (function () {
	var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
	var rng = new SecureRandom();

	var P_OVER_FOUR = null;

	function implShamirsTrick(P, k, Q, l) {
		var m = Math.max(k.bitLength(), l.bitLength());
		var Z = P.add2D(Q);
		var R = P.curve.getInfinity();

		for (var i = m - 1; i >= 0; --i) {
			R = R.twice2D();

			R.z = BigInteger.ONE;

			if (k.testBit(i)) {
				if (l.testBit(i)) {
					R = R.add2D(Z);
				} else {
					R = R.add2D(P);
				}
			} else {
				if (l.testBit(i)) {
					R = R.add2D(Q);
				}
			}
		}

		return R;
	};

	var ECDSA = {
		getBigRandom: function (limit) {
			return new BigInteger(limit.bitLength(), rng)
				.mod(limit.subtract(BigInteger.ONE))
				.add(BigInteger.ONE);
		},
		sign: function (hash, priv) {
			var d = priv;
			var n = ecparams.getN();
			var e = BigInteger.fromByteArrayUnsigned(hash);

			do {
				var k = ECDSA.getBigRandom(n);
				var G = ecparams.getG();
				var Q = G.multiply(k);
				var r = Q.getX().toBigInteger().mod(n);
			} while (r.compareTo(BigInteger.ZERO) <= 0);

			var s = k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);

			return ECDSA.serializeSig(r, s);
		},

		verify: function (hash, sig, pubkey) {
			var r, s;
			if (Bitcoin.Util.isArray(sig)) {
				var obj = ECDSA.parseSig(sig);
				r = obj.r;
				s = obj.s;
			} else if ("object" === typeof sig && sig.r && sig.s) {
				r = sig.r;
				s = sig.s;
			} else {
				throw "Invalid value for signature";
			}

			var Q;
			if (pubkey instanceof ec.PointFp) {
				Q = pubkey;
			} else if (Bitcoin.Util.isArray(pubkey)) {
				Q = EllipticCurve.PointFp.decodeFrom(ecparams.getCurve(), pubkey);
			} else {
				throw "Invalid format for pubkey value, must be byte array or ec.PointFp";
			}
			var e = BigInteger.fromByteArrayUnsigned(hash);

			return ECDSA.verifyRaw(e, r, s, Q);
		},

		verifyRaw: function (e, r, s, Q) {
			var n = ecparams.getN();
			var G = ecparams.getG();

			if (r.compareTo(BigInteger.ONE) < 0 ||
          r.compareTo(n) >= 0)
				return false;

			if (s.compareTo(BigInteger.ONE) < 0 ||
          s.compareTo(n) >= 0)
				return false;

			var c = s.modInverse(n);

			var u1 = e.multiply(c).mod(n);
			var u2 = r.multiply(c).mod(n);

			// TODO(!!!): For some reason Shamir's trick isn't working with
			// signed message verification!? Probably an implementation
			// error!
			//var point = implShamirsTrick(G, u1, Q, u2);
			var point = G.multiply(u1).add(Q.multiply(u2));

			var v = point.getX().toBigInteger().mod(n);

			return v.equals(r);
		},

		/**
		* Serialize a signature into DER format.
		*
		* Takes two BigIntegers representing r and s and returns a byte array.
		*/
		serializeSig: function (r, s) {
			var rBa = r.toByteArraySigned();
			var sBa = s.toByteArraySigned();

			var sequence = [];
			sequence.push(0x02); // INTEGER
			sequence.push(rBa.length);
			sequence = sequence.concat(rBa);

			sequence.push(0x02); // INTEGER
			sequence.push(sBa.length);
			sequence = sequence.concat(sBa);

			sequence.unshift(sequence.length);
			sequence.unshift(0x30); // SEQUENCE

			return sequence;
		},

		/**
		* Parses a byte array containing a DER-encoded signature.
		*
		* This function will return an object of the form:
		* 
		* {
		*   r: BigInteger,
		*   s: BigInteger
		* }
		*/
		parseSig: function (sig) {
			var cursor;
			if (sig[0] != 0x30)
				throw new Error("Signature not a valid DERSequence");

			cursor = 2;
			if (sig[cursor] != 0x02)
				throw new Error("First element in signature must be a DERInteger"); ;
			var rBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);

			cursor += 2 + sig[cursor + 1];
			if (sig[cursor] != 0x02)
				throw new Error("Second element in signature must be a DERInteger");
			var sBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);

			cursor += 2 + sig[cursor + 1];

			//if (cursor != sig.length)
			//	throw new Error("Extra bytes in signature");

			var r = BigInteger.fromByteArrayUnsigned(rBa);
			var s = BigInteger.fromByteArrayUnsigned(sBa);

			return { r: r, s: s };
		},

		parseSigCompact: function (sig) {
			if (sig.length !== 65) {
				throw "Signature has the wrong length";
			}

			// Signature is prefixed with a type byte storing three bits of
			// information.
			var i = sig[0] - 27;
			if (i < 0 || i > 7) {
				throw "Invalid signature type";
			}

			var n = ecparams.getN();
			var r = BigInteger.fromByteArrayUnsigned(sig.slice(1, 33)).mod(n);
			var s = BigInteger.fromByteArrayUnsigned(sig.slice(33, 65)).mod(n);

			return { r: r, s: s, i: i };
		},

		/**
		* Recover a public key from a signature.
		*
		* See SEC 1: Elliptic Curve Cryptography, section 4.1.6, "Public
		* Key Recovery Operation".
		*
		* http://www.secg.org/download/aid-780/sec1-v2.pdf
		*/
		recoverPubKey: function (r, s, hash, i) {
			// The recovery parameter i has two bits.
			i = i & 3;

			// The less significant bit specifies whether the y coordinate
			// of the compressed point is even or not.
			var isYEven = i & 1;

			// The more significant bit specifies whether we should use the
			// first or second candidate key.
			var isSecondKey = i >> 1;

			var n = ecparams.getN();
			var G = ecparams.getG();
			var curve = ecparams.getCurve();
			var p = curve.getQ();
			var a = curve.getA().toBigInteger();
			var b = curve.getB().toBigInteger();

			// We precalculate (p + 1) / 4 where p is if the field order
			if (!P_OVER_FOUR) {
				P_OVER_FOUR = p.add(BigInteger.ONE).divide(BigInteger.valueOf(4));
			}

			// 1.1 Compute x
			var x = isSecondKey ? r.add(n) : r;

			// 1.3 Convert x to point
			var alpha = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(p);
			var beta = alpha.modPow(P_OVER_FOUR, p);

			var xorOdd = beta.isEven() ? (i % 2) : ((i + 1) % 2);
			// If beta is even, but y isn't or vice versa, then convert it,
			// otherwise we're done and y == beta.
			var y = (beta.isEven() ? !isYEven : isYEven) ? beta : p.subtract(beta);

			// 1.4 Check that nR is at infinity
			var R = new EllipticCurve.PointFp(curve,
                            curve.fromBigInteger(x),
                            curve.fromBigInteger(y));
			R.validate();

			// 1.5 Compute e from M
			var e = BigInteger.fromByteArrayUnsigned(hash);
			var eNeg = BigInteger.ZERO.subtract(e).mod(n);

			// 1.6 Compute Q = r^-1 (sR - eG)
			var rInv = r.modInverse(n);
			var Q = implShamirsTrick(R, s, G, eNeg).multiply(rInv);

			Q.validate();
			if (!ECDSA.verifyRaw(e, r, s, Q)) {
				throw "Pubkey recovery unsuccessful";
			}

			var pubKey = new Bitcoin.ECKey();
			pubKey.pub = Q;
			return pubKey;
		},

		/**
		* Calculate pubkey extraction parameter.
		*
		* When extracting a pubkey from a signature, we have to
		* distinguish four different cases. Rather than putting this
		* burden on the verifier, Bitcoin includes a 2-bit value with the
		* signature.
		*
		* This function simply tries all four cases and returns the value
		* that resulted in a successful pubkey recovery.
		*/
		calcPubkeyRecoveryParam: function (address, r, s, hash) {
			for (var i = 0; i < 4; i++) {
				try {
					var pubkey = Bitcoin.ECDSA.recoverPubKey(r, s, hash, i);
					if (pubkey.getBitcoinAddress().toString() == address) {
						return i;
					}
				} catch (e) { }
			}
			throw "Unable to find valid recovery factor";
		}
	};

	return ECDSA;
})();

//https://raw.github.com/pointbiz/bitcoinjs-lib/9b2f94a028a7bc9bed94e0722563e9ff1d8e8db8/src/eckey.js
Bitcoin.ECKey = (function () {
	var ECDSA = Bitcoin.ECDSA;
	var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
	var rng = new SecureRandom();

	var ECKey = function (input) {
		if (!input) {
			// Generate new key
			var n = ecparams.getN();
			this.priv = ECDSA.getBigRandom(n);
		} else if (input instanceof BigInteger) {
			// Input is a private key value
			this.priv = input;
		} else if (Bitcoin.Util.isArray(input)) {
			// Prepend zero byte to prevent interpretation as negative integer
			this.priv = BigInteger.fromByteArrayUnsigned(input);
		} else if ("string" == typeof input) {
			var bytes = null;
			if (ECKey.isWalletImportFormat(input)) {
				bytes = ECKey.decodeWalletImportFormat(input);
			} else if (ECKey.isCompressedWalletImportFormat(input)) {
				bytes = ECKey.decodeCompressedWalletImportFormat(input);
				this.compressed = true;
			} else if (ECKey.isMiniFormat(input)) {
				bytes = Crypto.SHA256(input, { asBytes: true });
			} else if (ECKey.isHexFormat(input)) {
				bytes = Crypto.util.hexToBytes(input);
			} else if (ECKey.isBase64Format(input)) {
				bytes = Crypto.util.base64ToBytes(input);
			}
			
			if (ECKey.isBase6Format(input)) {
				this.priv = new BigInteger(input, 6);
			} else if (bytes == null || bytes.length != 32) {
				this.priv = null;
			} else {
				// Prepend zero byte to prevent interpretation as negative integer
				this.priv = BigInteger.fromByteArrayUnsigned(bytes);
			}
		}

		this.compressed = (this.compressed == undefined) ? !!ECKey.compressByDefault : this.compressed;
	};

	ECKey.privateKeyPrefix = window.privateKeyPrefix;

	/**
	* Whether public keys should be returned compressed by default.
	*/
	ECKey.compressByDefault = false;

	/**
	* Set whether the public key should be returned compressed or not.
	*/
	ECKey.prototype.setCompressed = function (v) {
		this.compressed = !!v;
		if (this.pubPoint) this.pubPoint.compressed = this.compressed;
		return this;
	};

	/*
	* Return public key as a byte array in DER encoding
	*/
	ECKey.prototype.getPub = function () {
		if (this.compressed) {
			if (this.pubComp) return this.pubComp;
			return this.pubComp = this.getPubPoint().getEncoded(1);
		} else {
			if (this.pubUncomp) return this.pubUncomp;
			return this.pubUncomp = this.getPubPoint().getEncoded(0);
		}
	};

	/**
	* Return public point as ECPoint object.
	*/
	ECKey.prototype.getPubPoint = function () {
		if (!this.pubPoint) {
			this.pubPoint = ecparams.getG().multiply(this.priv);
			this.pubPoint.compressed = this.compressed;
		}
		return this.pubPoint;
	};

	ECKey.prototype.getPubKeyHex = function () {
		if (this.compressed) {
			if (this.pubKeyHexComp) return this.pubKeyHexComp;
			return this.pubKeyHexComp = Crypto.util.bytesToHex(this.getPub()).toString().toUpperCase();
		} else {
			if (this.pubKeyHexUncomp) return this.pubKeyHexUncomp;
			return this.pubKeyHexUncomp = Crypto.util.bytesToHex(this.getPub()).toString().toUpperCase();
		}
	};

	/**
	* Get the pubKeyHash for this key.
	*
	* This is calculated as RIPE160(SHA256([encoded pubkey])) and returned as
	* a byte array.
	*/
	ECKey.prototype.getPubKeyHash = function () {
		if (this.compressed) {
			if (this.pubKeyHashComp) return this.pubKeyHashComp;
			return this.pubKeyHashComp = Bitcoin.Util.sha256ripe160(this.getPub());
		} else {
			if (this.pubKeyHashUncomp) return this.pubKeyHashUncomp;
			return this.pubKeyHashUncomp = Bitcoin.Util.sha256ripe160(this.getPub());
		}
	};

	ECKey.prototype.getBitcoinAddress = function () {
		var hash = this.getPubKeyHash();
		var addr = new Bitcoin.Address(hash);
		return addr.toString();
	};

	/*
	* Takes a public point as a hex string or byte array
	*/
	ECKey.prototype.setPub = function (pub) {
		// byte array
		if (Bitcoin.Util.isArray(pub)) {
			pub = Crypto.util.bytesToHex(pub).toString().toUpperCase();
		}
		var ecPoint = ecparams.getCurve().decodePointHex(pub);
		this.setCompressed(ecPoint.compressed);
		this.pubPoint = ecPoint;
		return this;
	};

	// Sipa Private Key Wallet Import Format 
	ECKey.prototype.getBitcoinWalletImportFormat = function () {
		var bytes = this.getBitcoinPrivateKeyByteArray();
		bytes.unshift(ECKey.privateKeyPrefix); // prepend 0x80 byte
		if (this.compressed) bytes.push(0x01); // append 0x01 byte for compressed format
		var checksum = Crypto.SHA256(Crypto.SHA256(bytes, { asBytes: true }), { asBytes: true });
		bytes = bytes.concat(checksum.slice(0, 4));
		var privWif = Bitcoin.Base58.encode(bytes);
		return privWif;
	};

	// Private Key Hex Format 
	ECKey.prototype.getBitcoinHexFormat = function () {
		return Crypto.util.bytesToHex(this.getBitcoinPrivateKeyByteArray()).toString().toUpperCase();
	};

	// Private Key Base64 Format 
	ECKey.prototype.getBitcoinBase64Format = function () {
		return Crypto.util.bytesToBase64(this.getBitcoinPrivateKeyByteArray());
	};

	ECKey.prototype.getBitcoinPrivateKeyByteArray = function () {
		// Get a copy of private key as a byte array
		var bytes = this.priv.toByteArrayUnsigned();
		// zero pad if private key is less than 32 bytes 
		while (bytes.length < 32) bytes.unshift(0x00);
		return bytes;
	};

	ECKey.prototype.toString = function (format) {
		format = format || "";
		if (format.toString().toLowerCase() == "base64" || format.toString().toLowerCase() == "b64") {
			return this.getBitcoinBase64Format();
		}
		// Wallet Import Format
		else if (format.toString().toLowerCase() == "wif") {
			return this.getBitcoinWalletImportFormat();
		}
		else {
			return this.getBitcoinHexFormat();
		}
	};

	ECKey.prototype.sign = function (hash) {
		return ECDSA.sign(hash, this.priv);
	};

	ECKey.prototype.verify = function (hash, sig) {
		return ECDSA.verify(hash, sig, this.getPub());
	};

	/**
	* Parse a wallet import format private key contained in a string.
	*/
	ECKey.decodeWalletImportFormat = function (privStr) {
		var bytes = Bitcoin.Base58.decode(privStr);
		var hash = bytes.slice(0, 33);
		var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
		if (checksum[0] != bytes[33] ||
					checksum[1] != bytes[34] ||
					checksum[2] != bytes[35] ||
					checksum[3] != bytes[36]) {
			throw "Checksum validation failed!";
		}
		var version = hash.shift();
		if (version != ECKey.privateKeyPrefix) {
			throw "Version " + version + " not supported!";
		}
		return hash;
	};

	/**
	* Parse a compressed wallet import format private key contained in a string.
	*/
	ECKey.decodeCompressedWalletImportFormat = function (privStr) {
		var bytes = Bitcoin.Base58.decode(privStr);
		var hash = bytes.slice(0, 34);
		var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
		if (checksum[0] != bytes[34] ||
					checksum[1] != bytes[35] ||
					checksum[2] != bytes[36] ||
					checksum[3] != bytes[37]) {
			throw "Checksum validation failed!";
		}
		var version = hash.shift();
		if (version != ECKey.privateKeyPrefix) {
			throw "Version " + version + " not supported!";
		}
		hash.pop();
		return hash;
	};

	// 64 characters [0-9A-F]
	ECKey.isHexFormat = function (key) {
		key = key.toString();
		return /^[A-Fa-f0-9]{64}$/.test(key);
	};

	// 51 characters base58, bitcoin always starts with a 5, litecoin and dogecoin with a '6', testnet with a '9'
	ECKey.isWalletImportFormat = function (key) {
		key = key.toString();
		var matcher = new RegExp("^" + window.WIFPrefix + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$", "g");
		return (ECKey.privateKeyPrefix == window.privateKeyPrefix) ? (matcher.test(key)) : false;
	};

	// 52 characters base58, bitcoin always starts with L or K, litecoin with a T, dogecoin with a 'Q', testnet with a 'c'
	ECKey.isCompressedWalletImportFormat = function (key) {
		key = key.toString();
		var matcher = new RegExp("^" + window.compressedWIFPrefix + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$", "g");
		return (ECKey.privateKeyPrefix == window.privateKeyPrefix) ? (matcher.test(key)) : false;
	};

	// 44 characters
	ECKey.isBase64Format = function (key) {
		key = key.toString();
		return (/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=+\/]{44}$/.test(key));
	};

	// 99 characters, 1=1, if using dice convert 6 to 0
	ECKey.isBase6Format = function (key) {
		key = key.toString();
		return (/^[012345]{99}$/.test(key));
	};

	// 22, 26 or 30 characters, always starts with an 'S'
	ECKey.isMiniFormat = function (key) {
		key = key.toString();
		var validChars22 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}$/.test(key);
		var validChars26 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}$/.test(key);
		var validChars30 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}$/.test(key);
		var testBytes = Crypto.SHA256(key + "?", { asBytes: true });

		return ((testBytes[0] === 0x00 || testBytes[0] === 0x01) && (validChars22 || validChars26 || validChars30));
	};

	return ECKey;
})();

//https://raw.github.com/bitcoinjs/bitcoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/util.js
// Bitcoin utility functions
Bitcoin.Util = {
	/**
	* Cross-browser compatibility version of Array.isArray.
	*/
	isArray: Array.isArray || function (o) {
		return Object.prototype.toString.call(o) === '[object Array]';
	},
	/**
	* Create an array of a certain length filled with a specific value.
	*/
	makeFilledArray: function (len, val) {
		var array = [];
		var i = 0;
		while (i < len) {
			array[i++] = val;
		}
		return array;
	},
	/**
	* Turn an integer into a "var_int".
	*
	* "var_int" is a variable length integer used by Bitcoin's binary format.
	*
	* Returns a byte array.
	*/
	numToVarInt: function (i) {
		if (i < 0xfd) {
			// unsigned char
			return [i];
		} else if (i <= 1 << 16) {
			// unsigned short (LE)
			return [0xfd, i >>> 8, i & 255];
		} else if (i <= 1 << 32) {
			// unsigned int (LE)
			return [0xfe].concat(Crypto.util.wordsToBytes([i]));
		} else {
			// unsigned long long (LE)
			return [0xff].concat(Crypto.util.wordsToBytes([i >>> 32, i]));
		}
	},
	/**
	* Parse a Bitcoin value byte array, returning a BigInteger.
	*/
	valueToBigInt: function (valueBuffer) {
		if (valueBuffer instanceof BigInteger) return valueBuffer;

		// Prepend zero byte to prevent interpretation as negative integer
		return BigInteger.fromByteArrayUnsigned(valueBuffer);
	},
	/**
	* Format a Bitcoin value as a string.
	*
	* Takes a BigInteger or byte-array and returns that amount of Bitcoins in a
	* nice standard formatting.
	*
	* Examples:
	* 12.3555
	* 0.1234
	* 900.99998888
	* 34.00
	*/
	formatValue: function (valueBuffer) {
		var value = this.valueToBigInt(valueBuffer).toString();
		var integerPart = value.length > 8 ? value.substr(0, value.length - 8) : '0';
		var decimalPart = value.length > 8 ? value.substr(value.length - 8) : value;
		while (decimalPart.length < 8) decimalPart = "0" + decimalPart;
		decimalPart = decimalPart.replace(/0*$/, '');
		while (decimalPart.length < 2) decimalPart += "0";
		return integerPart + "." + decimalPart;
	},
	/**
	* Parse a floating point string as a Bitcoin value.
	*
	* Keep in mind that parsing user input is messy. You should always display
	* the parsed value back to the user to make sure we understood his input
	* correctly.
	*/
	parseValue: function (valueString) {
		// TODO: Detect other number formats (e.g. comma as decimal separator)
		var valueComp = valueString.split('.');
		var integralPart = valueComp[0];
		var fractionalPart = valueComp[1] || "0";
		while (fractionalPart.length < 8) fractionalPart += "0";
		fractionalPart = fractionalPart.replace(/^0+/g, '');
		var value = BigInteger.valueOf(parseInt(integralPart));
		value = value.multiply(BigInteger.valueOf(100000000));
		value = value.add(BigInteger.valueOf(parseInt(fractionalPart)));
		return value;
	},
	/**
	* Calculate RIPEMD160(SHA256(data)).
	*
	* Takes an arbitrary byte array as inputs and returns the hash as a byte
	* array.
	*/
	sha256ripe160: function (data) {
		return Crypto.RIPEMD160(Crypto.SHA256(data, { asBytes: true }), { asBytes: true });
	},
	// double sha256
	dsha256: function (data) {
		return Crypto.SHA256(Crypto.SHA256(data, { asBytes: true }), { asBytes: true });
	}
};

/*
* Copyright (c) 2010-2011 Intalio Pte, All Rights Reserved
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
// https://github.com/cheongwy/node-scrypt-js
(function () {

	var MAX_VALUE = 2147483647;
	var workerUrl = null;

	//function scrypt(byte[] passwd, byte[] salt, int N, int r, int p, int dkLen)
	/*
	* N = Cpu cost
	* r = Memory cost
	* p = parallelization cost
	* 
	*/
	window.Crypto_scrypt = function (passwd, salt, N, r, p, dkLen, callback) {
		if (N == 0 || (N & (N - 1)) != 0) throw Error("N must be > 0 and a power of 2");

		if (N > MAX_VALUE / 128 / r) throw Error("Parameter N is too large");
		if (r > MAX_VALUE / 128 / p) throw Error("Parameter r is too large");

		var PBKDF2_opts = { iterations: 1, hasher: Crypto.SHA256, asBytes: true };

		var B = Crypto.PBKDF2(passwd, salt, p * 128 * r, PBKDF2_opts);

		try {
			var i = 0;
			var worksDone = 0;
			var makeWorker = function () {
				if (!workerUrl) {
					var code = '(' + scryptCore.toString() + ')()';
					var blob;
					try {
						blob = new Blob([code], { type: "text/javascript" });
					} catch (e) {
						window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
						blob = new BlobBuilder();
						blob.append(code);
						blob = blob.getBlob("text/javascript");
					}
					workerUrl = URL.createObjectURL(blob);
				}
				var worker = new Worker(workerUrl);
				worker.onmessage = function (event) {
					var Bi = event.data[0], Bslice = event.data[1];
					worksDone++;

					if (i < p) {
						worker.postMessage([N, r, p, B, i++]);
					}

					var length = Bslice.length, destPos = Bi * 128 * r, srcPos = 0;
					while (length--) {
						B[destPos++] = Bslice[srcPos++];
					}

					if (worksDone == p) {
						callback(Crypto.PBKDF2(passwd, B, dkLen, PBKDF2_opts));
					}
				};
				return worker;
			};
			var workers = [makeWorker(), makeWorker()];
			workers[0].postMessage([N, r, p, B, i++]);
			if (p > 1) {
				workers[1].postMessage([N, r, p, B, i++]);
			}
		} catch (e) {
			window.setTimeout(function () {
				scryptCore();
				callback(Crypto.PBKDF2(passwd, B, dkLen, PBKDF2_opts));
			}, 0);
		}

		// using this function to enclose everything needed to create a worker (but also invokable directly for synchronous use)
		function scryptCore() {
			var XY = [], V = [];
			
			salsa20_8(new Array(32)); // dummy call added to work around problem with BIP38 encoding on Safari 6.05

			if (typeof B === 'undefined') {
				onmessage = function (event) {
					var data = event.data;
					var N = data[0], r = data[1], p = data[2], B = data[3], i = data[4];

					var Bslice = [];
					arraycopy32(B, i * 128 * r, Bslice, 0, 128 * r);
					smix(Bslice, 0, r, N, V, XY);

					postMessage([i, Bslice]);
				};
			} else {
				for (var i = 0; i < p; i++) {
					smix(B, i * 128 * r, r, N, V, XY);
				}
			}

			function smix(B, Bi, r, N, V, XY) {
				var Xi = 0;
				var Yi = 128 * r;
				var i;

				arraycopy32(B, Bi, XY, Xi, Yi);

				for (i = 0; i < N; i++) {
					arraycopy32(XY, Xi, V, i * Yi, Yi);
					blockmix_salsa8(XY, Xi, Yi, r);
				}

				for (i = 0; i < N; i++) {
					var j = integerify(XY, Xi, r) & (N - 1);
					blockxor(V, j * Yi, XY, Xi, Yi);
					blockmix_salsa8(XY, Xi, Yi, r);
				}

				arraycopy32(XY, Xi, B, Bi, Yi);
			}

			function blockmix_salsa8(BY, Bi, Yi, r) {
				var X = [];
				var i;

				arraycopy32(BY, Bi + (2 * r - 1) * 64, X, 0, 64);

				for (i = 0; i < 2 * r; i++) {
					blockxor(BY, i * 64, X, 0, 64);
					salsa20_8(X);
					arraycopy32(X, 0, BY, Yi + (i * 64), 64);
				}

				for (i = 0; i < r; i++) {
					arraycopy32(BY, Yi + (i * 2) * 64, BY, Bi + (i * 64), 64);
				}

				for (i = 0; i < r; i++) {
					arraycopy32(BY, Yi + (i * 2 + 1) * 64, BY, Bi + (i + r) * 64, 64);
				}
			}

			function R(a, b) {
				return (a << b) | (a >>> (32 - b));
			}

			function salsa20_8(B) {
				var B32 = new Array(32);
				var x = new Array(32);
				var i;

				for (i = 0; i < 16; i++) {
					B32[i] = (B[i * 4 + 0] & 0xff) << 0;
					B32[i] |= (B[i * 4 + 1] & 0xff) << 8;
					B32[i] |= (B[i * 4 + 2] & 0xff) << 16;
					B32[i] |= (B[i * 4 + 3] & 0xff) << 24;
				}

				arraycopy(B32, 0, x, 0, 16);

				for (i = 8; i > 0; i -= 2) {
					x[4] ^= R(x[0] + x[12], 7); x[8] ^= R(x[4] + x[0], 9);
					x[12] ^= R(x[8] + x[4], 13); x[0] ^= R(x[12] + x[8], 18);
					x[9] ^= R(x[5] + x[1], 7); x[13] ^= R(x[9] + x[5], 9);
					x[1] ^= R(x[13] + x[9], 13); x[5] ^= R(x[1] + x[13], 18);
					x[14] ^= R(x[10] + x[6], 7); x[2] ^= R(x[14] + x[10], 9);
					x[6] ^= R(x[2] + x[14], 13); x[10] ^= R(x[6] + x[2], 18);
					x[3] ^= R(x[15] + x[11], 7); x[7] ^= R(x[3] + x[15], 9);
					x[11] ^= R(x[7] + x[3], 13); x[15] ^= R(x[11] + x[7], 18);
					x[1] ^= R(x[0] + x[3], 7); x[2] ^= R(x[1] + x[0], 9);
					x[3] ^= R(x[2] + x[1], 13); x[0] ^= R(x[3] + x[2], 18);
					x[6] ^= R(x[5] + x[4], 7); x[7] ^= R(x[6] + x[5], 9);
					x[4] ^= R(x[7] + x[6], 13); x[5] ^= R(x[4] + x[7], 18);
					x[11] ^= R(x[10] + x[9], 7); x[8] ^= R(x[11] + x[10], 9);
					x[9] ^= R(x[8] + x[11], 13); x[10] ^= R(x[9] + x[8], 18);
					x[12] ^= R(x[15] + x[14], 7); x[13] ^= R(x[12] + x[15], 9);
					x[14] ^= R(x[13] + x[12], 13); x[15] ^= R(x[14] + x[13], 18);
				}

				for (i = 0; i < 16; ++i) B32[i] = x[i] + B32[i];

				for (i = 0; i < 16; i++) {
					var bi = i * 4;
					B[bi + 0] = (B32[i] >> 0 & 0xff);
					B[bi + 1] = (B32[i] >> 8 & 0xff);
					B[bi + 2] = (B32[i] >> 16 & 0xff);
					B[bi + 3] = (B32[i] >> 24 & 0xff);
				}
			}

			function blockxor(S, Si, D, Di, len) {
				var i = len >> 6;
				while (i--) {
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];

					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];

					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];

					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];

					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];

					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];

					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];

					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
					D[Di++] ^= S[Si++]; D[Di++] ^= S[Si++];
				}
			}

			function integerify(B, bi, r) {
				var n;

				bi += (2 * r - 1) * 64;

				n = (B[bi + 0] & 0xff) << 0;
				n |= (B[bi + 1] & 0xff) << 8;
				n |= (B[bi + 2] & 0xff) << 16;
				n |= (B[bi + 3] & 0xff) << 24;

				return n;
			}

			function arraycopy(src, srcPos, dest, destPos, length) {
				while (length--) {
					dest[destPos++] = src[srcPos++];
				}
			}

			function arraycopy32(src, srcPos, dest, destPos, length) {
				var i = length >> 5;
				while (i--) {
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];

					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];

					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];

					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
					dest[destPos++] = src[srcPos++]; dest[destPos++] = src[srcPos++];
				}
			}
		} // scryptCore
	}; // window.Crypto_scrypt
})();

	// User Agent Parser added by BitcoinPaperWallet.com for browser detection.
	// UAParser.js v0.6.1
	// Lightweight JavaScript-based User-Agent string parser
	// https://github.com/faisalman/ua-parser-js
	//
	// Copyright © 2012-2013 Faisalman <fyzlman@gmail.com>
	// Dual licensed under GPLv2 & MIT
	
	(function (window, undefined) {
	
	
		//////////////
		// Constants
		/////////////
	
	
		var EMPTY       = '',
			UNKNOWN     = '?',
			FUNC_TYPE   = 'function',
			UNDEF_TYPE  = 'undefined',
			OBJ_TYPE    = 'object',
			MAJOR       = 'major',
			MODEL       = 'model',
			NAME        = 'name',
			TYPE        = 'type',
			VENDOR      = 'vendor',
			VERSION     = 'version',
			ARCHITECTURE= 'architecture',
			CONSOLE     = 'console',
			MOBILE      = 'mobile',
			TABLET      = 'tablet';
	
	
		///////////
		// Helper
		//////////
	
	
		var util = {
			has : function (str1, str2) {
				return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
			},
			lowerize : function (str) {
				return str.toLowerCase();
			}
		};
	
	
		///////////////
		// Map helper
		//////////////
	
	
		var mapper = {
	
			rgx : function () {
	
				// loop through all regexes maps
				for (var result, i = 0, j, k, p, q, matches, match, args = arguments; i < args.length; i += 2) {
	
					var regex = args[i],       // even sequence (0,2,4,..)
						props = args[i + 1];   // odd sequence (1,3,5,..)
	
					// construct object barebones
					if (typeof(result) === UNDEF_TYPE) {
						result = {};
						for (p in props) {
							q = props[p];
							if (typeof(q) === OBJ_TYPE) {
								result[q[0]] = undefined;
							} else {
								result[q] = undefined;
							}
						}
					}
	
					// try matching uastring with regexes
					for (j = k = 0; j < regex.length; j++) {
						matches = regex[j].exec(this.getUA());
						if (!!matches) {
							for (p in props) {
								match = matches[++k];
								q = props[p];
								// check if given property is actually array
								if (typeof(q) === OBJ_TYPE && q.length > 0) {
									if (q.length == 2) {
										if (typeof(q[1]) == FUNC_TYPE) {
											// assign modified match
											result[q[0]] = q[1].call(this, match);
										} else {
											// assign given value, ignore regex match
											result[q[0]] = q[1];
										}
									} else if (q.length == 3) {
										// check whether function or regex
										if (typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
											// call function (usually string mapper)
											result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
										} else {
											// sanitize match using given regex
											result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
										}
									} else if (q.length == 4) {
											result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
									}
								} else {
									result[q] = match ? match : undefined;
								}
							}
							break;
						}
					}
	
					if(!!matches) break; // break the loop immediately if match found
				}
				return result;
			},
	
			str : function (str, map) {
	
				for (var i in map) {
					// check if array
					if (typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
						for (var j in map[i]) {
							if (util.has(map[i][j], str)) {
								return (i === UNKNOWN) ? undefined : i;
							}
						}
					} else if (util.has(map[i], str)) {
						return (i === UNKNOWN) ? undefined : i;
					}
				}
				return str;
			}
		};
	
	
		///////////////
		// String map
		//////////////
	
	
		var maps = {
	
			browser : {
				oldsafari : {
					major : {
						'1' : ['/8', '/1', '/3'],
						'2' : '/4',
						'?' : '/'
					},
					version : {
						'1.0'   : '/8',
						'1.2'   : '/1',
						'1.3'   : '/3',
						'2.0'   : '/412',
						'2.0.2' : '/416',
						'2.0.3' : '/417',
						'2.0.4' : '/419',
						'?'     : '/'
					}
				}
			},
	
			device : {
				sprint : {
					model : {
						'Evo Shift 4G' : '7373KT'
					},
					vendor : {
						'HTC'       : 'APA',
						'Sprint'    : 'Sprint'
					}
				}
			},
	
			os : {
				windows : {
					version : {
						'ME'        : '4.90',
						'NT 3.11'   : 'NT3.51',
						'NT 4.0'    : 'NT4.0',
						'2000'      : 'NT 5.0',
						'XP'        : ['NT 5.1', 'NT 5.2'],
						'Vista'     : 'NT 6.0',
						'7'         : 'NT 6.1',
						'8'         : 'NT 6.2',
						'RT'        : 'ARM'
					}
				}
			}
		};
	
	
		//////////////
		// Regex map
		/////////////
	
	
		var regexes = {
	
			browser : [[
	
				// Presto based
				/(opera\smini)\/((\d+)?[\w\.-]+)/i,                                 // Opera Mini
				/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,                // Opera Mobi/Tablet
				/(opera).+version\/((\d+)?[\w\.]+)/i,                               // Opera > 9.80
				/(opera)[\/\s]+((\d+)?[\w\.]+)/i                                    // Opera < 9.80
				
				], [NAME, VERSION, MAJOR], [
	
				/\s(opr)\/((\d+)?[\w\.]+)/i                                         // Opera Webkit
				], [[NAME, 'Opera'], VERSION, MAJOR], [
	
				// Mixed
				/(kindle)\/((\d+)?[\w\.]+)/i,                                       // Kindle
				/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,
																					// Lunascape/Maxthon/Netfront/Jasmine/Blazer
	
				// Trident based
				/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,
																					// Avant/IEMobile/SlimBrowser/Baidu
				/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,                                  // Internet Explorer
	
				// Webkit/KHTML based
				/(rekonq)((?:\/)[\w\.]+)*/i,                                        // Rekonq
				/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i
																					// Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt
				], [NAME, VERSION, MAJOR], [
	
				/(yabrowser)\/((\d+)?[\w\.]+)/i                                     // Yandex
				], [[NAME, 'Yandex'], VERSION, MAJOR], [
	
				/(comodo_dragon)\/((\d+)?[\w\.]+)/i                                 // Comodo Dragon
				], [[NAME, /_/g, ' '], VERSION, MAJOR], [
	
				/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i
																					// Chrome/OmniWeb/Arora/Tizen/Nokia
				], [NAME, VERSION, MAJOR], [
	
				/(dolfin)\/((\d+)?[\w\.]+)/i                                        // Dolphin
				], [[NAME, 'Dolphin'], VERSION, MAJOR], [
	
				/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i                       // Chrome for Android/iOS
				], [[NAME, 'Chrome'], VERSION, MAJOR], [
	
				/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i                 // Mobile Safari
				], [VERSION, MAJOR, [NAME, 'Mobile Safari']], [
	
				/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i              // Safari & Safari Mobile
				], [VERSION, MAJOR, NAME], [
	
				/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i                   // Safari < 3.0
				], [NAME, [MAJOR, mapper.str, maps.browser.oldsafari.major], [VERSION, mapper.str, maps.browser.oldsafari.version]], [
	
				/(konqueror)\/((\d+)?[\w\.]+)/i,                                    // Konqueror
				/(webkit|khtml)\/((\d+)?[\w\.]+)/i
				], [NAME, VERSION, MAJOR], [
	
				// Gecko based
				/(navigator|netscape)\/((\d+)?[\w\.-]+)/i                           // Netscape
				], [[NAME, 'Netscape'], VERSION, MAJOR], [
				/(swiftfox)/i,                                                      // Swiftfox
				/(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,
																					// Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
				/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,
																					// Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
				/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,                    // Mozilla
	
				// Other
				/(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,
																					// UCBrowser/Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf
				/(links)\s\(((\d+)?[\w\.]+)/i,                                      // Links
				/(gobrowser)\/?((\d+)?[\w\.]+)*/i,                                  // GoBrowser
				/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,                             // ICE Browser
				/(mosaic)[\/\s]((\d+)?[\w\.]+)/i                                    // Mosaic
				], [NAME, VERSION, MAJOR]
			],
	
			cpu : [[
	
				/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
				], [[ARCHITECTURE, 'amd64']], [
	
				/((?:i[346]|x)86)[;\)]/i                                            // IA32
				], [[ARCHITECTURE, 'ia32']], [
	
				// PocketPC mistakenly identified as PowerPC
				/windows\s(ce|mobile);\sppc;/i
				], [[ARCHITECTURE, 'arm']], [
	
				/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
				], [[ARCHITECTURE, /ower/, '', util.lowerize]], [
	
				/(sun4\w)[;\)]/i                                                    // SPARC
				], [[ARCHITECTURE, 'sparc']], [
	
				/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
																					// IA64, 68K, ARM, IRIX, MIPS, SPARC, PA-RISC
				], [ARCHITECTURE, util.lowerize]
			],
	
			device : [[
	
				/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
				], [MODEL, VENDOR, [TYPE, TABLET]], [
	
				/(hp).+(touchpad)/i,                                                // HP TouchPad
				/(kindle)\/([\w\.]+)/i,                                             // Kindle
				/\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
				/(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
				], [VENDOR, MODEL, [TYPE, TABLET]], [
	
				/\((ip[honed]+);.+(apple)/i                                         // iPod/iPhone
				], [MODEL, VENDOR, [TYPE, MOBILE]], [
	
				/(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
				/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i,
																					// BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola
				/(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
				/(asus)-?(\w+)/i                                                    // Asus
				], [VENDOR, MODEL, [TYPE, MOBILE]], [
				/\((bb10);\s(\w+)/i                                                 // BlackBerry 10
				], [[VENDOR, 'BlackBerry'], MODEL, [TYPE, MOBILE]], [
	
				/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i       // Asus Tablets
				], [[VENDOR, 'Asus'], MODEL, [TYPE, TABLET]], [
	
				/(sony)\s(tablet\s[ps])/i                                           // Sony Tablets
				], [VENDOR, MODEL, [TYPE, TABLET]], [
	
				/(nintendo)\s([wids3u]+)/i                                          // Nintendo
				], [VENDOR, MODEL, [TYPE, CONSOLE]], [
	
				/((playstation)\s[3portablevi]+)/i                                  // Playstation
				], [[VENDOR, 'Sony'], MODEL, [TYPE, CONSOLE]], [
	
				/(sprint\s(\w+))/i                                                  // Sprint Phones
				], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [
	
				/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
				/(zte)-(\w+)*/i,                                                    // ZTE
				/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
																					// Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
				], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [
	
				/\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i,                   // Motorola
				/(mot)[\s-]?(\w+)*/i
				], [[VENDOR, 'Motorola'], MODEL, [TYPE, MOBILE]], [
				/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i
				], [[VENDOR, 'Motorola'], MODEL, [TYPE, TABLET]], [
	
				/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i
				], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
				/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i,
				/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
				/sec-((sgh\w+))/i
				], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
				/(sie)-(\w+)*/i                                                     // Siemens
				], [[VENDOR, 'Siemens'], MODEL, [TYPE, MOBILE]], [
	
				/(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
				/(nokia)[\s_-]?([\w-]+)*/i
				], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [
	
				/android\s3\.[\s\w-;]{10}((a\d{3}))/i                               // Acer
				], [[VENDOR, 'Acer'], MODEL, [TYPE, TABLET]], [
	
				/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i                     // LG
				], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
				/((nexus\s4))/i,
				/(lg)[e;\s-\/]+(\w+)*/i
				], [[VENDOR, 'LG'], MODEL, [TYPE, MOBILE]], [
	
				/(mobile|tablet);.+rv\:.+gecko\//i                                  // Unidentifiable
				], [TYPE, VENDOR, MODEL]
			],
	
			engine : [[
	
				/(presto)\/([\w\.]+)/i,                                             // Presto
				/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
				/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
				/(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
				], [NAME, VERSION], [
	
				/rv\:([\w\.]+).*(gecko)/i                                           // Gecko
				], [VERSION, NAME]
			],
	
			os : [[
	
				// Windows based
				/(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
				/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
				], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
				/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
				], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
	
				// Mobile/Embedded OS
				/\((bb)(10);/i                                                      // BlackBerry 10
				], [[NAME, 'BlackBerry'], VERSION], [
				/(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
				/(tizen)\/([\w\.]+)/i,                                              // Tizen
				/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i
																					// Android/WebOS/Palm/QNX/Bada/RIM/MeeGo
				], [NAME, VERSION], [
				/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
				], [[NAME, 'Symbian'], VERSION],[
				/mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
				], [[NAME, 'Firefox OS'], VERSION], [
	
				// Console
				/(nintendo|playstation)\s([wids3portablevu]+)/i,                    // Nintendo/Playstation
	
				// GNU/Linux based
				/(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
				/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,
																					// Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
																					// Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk
				/(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
				/(gnu)\s?([\w\.]+)*/i                                               // GNU
				], [NAME, VERSION], [
	
				/(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
				], [[NAME, 'Chromium OS'], VERSION],[
	
				// Solaris
				/(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
				], [[NAME, 'Solaris'], VERSION], [
	
				// BSD based
				/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
				], [NAME, VERSION],[
	
				/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i             // iOS
				], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [
	
				/(mac\sos\sx)\s?([\w\s\.]+\w)*/i                                    // Mac OS
				], [NAME, [VERSION, /_/g, '.']], [
	
				// Other
				/(haiku)\s(\w+)/i,                                                  // Haiku
				/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
				/(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,
																					// Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS
				/(unix)\s?([\w\.]+)*/i                                              // UNIX
				], [NAME, VERSION]
			]
		};
	
	
		/////////////////
		// Constructor
		////////////////
	
	
		var UAParser = function (uastring) {
	
			var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	
			if (!(this instanceof UAParser)) {
				return new UAParser(uastring).getResult();
			}
			this.getBrowser = function () {
				return mapper.rgx.apply(this, regexes.browser);
			};
			this.getCPU = function () {
				return mapper.rgx.apply(this, regexes.cpu);
			};
			this.getDevice = function () {
				return mapper.rgx.apply(this, regexes.device);
			};
			this.getEngine = function () {
				return mapper.rgx.apply(this, regexes.engine);
			};
			this.getOS = function () {
				return mapper.rgx.apply(this, regexes.os);
			};
			this.getResult = function() {
				return {
					ua      : this.getUA(),
					browser : this.getBrowser(),
					engine  : this.getEngine(),
					os      : this.getOS(),
					device  : this.getDevice(),
					cpu     : this.getCPU()
				};
			};
			this.getUA = function () {
				return ua;
			};
			this.setUA = function (uastring) {
				ua = uastring;
				return this;
			};
			this.setUA(ua);
		};
	
	
		///////////
		// Export
		//////////
	
	
		// check js environment 
		if (typeof(exports) !== UNDEF_TYPE) {
			// nodejs env
			if (typeof(module) !== UNDEF_TYPE && module.exports) {
				exports = module.exports = UAParser;
			}
			exports.UAParser = UAParser;
		} else {
			// browser env
			window.UAParser = UAParser;        
			// requirejs env (optional)
			if (typeof(define) === FUNC_TYPE && define.amd) {
				define(function () {
					return UAParser;
				});
			}
			// jQuery specific (optional)
			if (typeof(window.jQuery) !== UNDEF_TYPE) {
				var $ = window.jQuery;
				var parser = new UAParser();
				$.ua = parser.getResult();
				$.ua.get = function() {
					return parser.getUA();
				};
				$.ua.set = function (uastring) {
					parser.setUA(uastring);
					var result = parser.getResult();
					for (var prop in result) {
						$.ua[prop] = result[prop];
					}
				};
			}
		}
	
	})(this);

	// Included by bitcoinpaperwallet.com to support QR code scanning
	//https://github.com/LazarSoft/jsqrcode
	/*
	  Ported to JavaScript by Lazar Laszlo 2011 
  
	  lazarsoft@gmail.com, www.lazarsoft.info
  
	  Updated to replace Array.prototype.remove with an arrayRemove function to avoid conflicts
	*/

	/*
	*
	* Copyright 2007 ZXing authors
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*      http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	GridSampler = {};

	GridSampler.checkAndNudgePoints=function( image,  points)
					{
							var width = qrcode.width;
							var height = qrcode.height;
							// Check and nudge points from start until we see some that are OK:
							var nudged = true;
							for (var offset = 0; offset < points.length && nudged; offset += 2)
							{
									var x = Math.floor (points[offset]);
									var y = Math.floor( points[offset + 1]);
									if (x < - 1 || x > width || y < - 1 || y > height)
									{
											throw "Error.checkAndNudgePoints ";
									}
									nudged = false;
									if (x == - 1)
									{
											points[offset] = 0.0;
											nudged = true;
									}
									else if (x == width)
									{
											points[offset] = width - 1;
											nudged = true;
									}
									if (y == - 1)
									{
											points[offset + 1] = 0.0;
											nudged = true;
									}
									else if (y == height)
									{
											points[offset + 1] = height - 1;
											nudged = true;
									}
							}
							// Check and nudge points from end:
							nudged = true;
							for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2)
							{
									var x = Math.floor( points[offset]);
									var y = Math.floor( points[offset + 1]);
									if (x < - 1 || x > width || y < - 1 || y > height)
									{
											throw "Error.checkAndNudgePoints ";
									}
									nudged = false;
									if (x == - 1)
									{
											points[offset] = 0.0;
											nudged = true;
									}
									else if (x == width)
									{
											points[offset] = width - 1;
											nudged = true;
									}
									if (y == - 1)
									{
											points[offset + 1] = 0.0;
											nudged = true;
									}
									else if (y == height)
									{
											points[offset + 1] = height - 1;
											nudged = true;
									}
							}
					}
		


	GridSampler.sampleGrid3=function( image,  dimension,  transform)
					{
							var bits = new BitMatrix(dimension);
							var points = new Array(dimension << 1);
							for (var y = 0; y < dimension; y++)
							{
									var max = points.length;
									var iValue =  y + 0.5;
									for (var x = 0; x < max; x += 2)
									{
											points[x] =  (x >> 1) + 0.5;
											points[x + 1] = iValue;
									}
									transform.transformPoints1(points);
									// Quick check to see if points transformed to something inside the image;
									// sufficient to check the endpoints
									GridSampler.checkAndNudgePoints(image, points);
									try
									{
											for (var x = 0; x < max; x += 2)
											{
													var xpoint = (Math.floor( points[x]) * 4) + (Math.floor( points[x + 1]) * qrcode.width * 4);
							var bit = image[Math.floor( points[x])+ qrcode.width* Math.floor( points[x + 1])];
													qrcode.imagedata.data[xpoint] = bit?255:0;
													qrcode.imagedata.data[xpoint+1] = bit?255:0;
													qrcode.imagedata.data[xpoint+2] = 0;
													qrcode.imagedata.data[xpoint+3] = 255;
													//bits[x >> 1][ y]=bit;
													if(bit)
															bits.set_Renamed(x >> 1, y);
											}
									}
									catch ( aioobe)
									{
											// This feels wrong, but, sometimes if the finder patterns are misidentified, the resulting
											// transform gets "twisted" such that it maps a straight line of points to a set of points
											// whose endpoints are in bounds, but others are not. There is probably some mathematical
											// way to detect this about the transformation that I don't know yet.
											// This results in an ugly runtime exception despite our clever checks above -- can't have
											// that. We could check each point's coordinates but that feels duplicative. We settle for
											// catching and wrapping ArrayIndexOutOfBoundsException.
											throw "Error.checkAndNudgePoints";
									}
							}
							return bits;
					}

	GridSampler.sampleGridx=function( image,  dimension,  p1ToX,  p1ToY,  p2ToX,  p2ToY,  p3ToX,  p3ToY,  p4ToX,  p4ToY,  p1FromX,  p1FromY,  p2FromX,  p2FromY,  p3FromX,  p3FromY,  p4FromX,  p4FromY)
	{
			var transform = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
						
			return GridSampler.sampleGrid3(image, dimension, transform);
	}

	function ECB(count,  dataCodewords)
	{
			this.count = count;
			this.dataCodewords = dataCodewords;
		
			this.__defineGetter__("Count", function()
			{
					return this.count;
			});
			this.__defineGetter__("DataCodewords", function()
			{
					return this.dataCodewords;
			});
	}

	function ECBlocks( ecCodewordsPerBlock,  ecBlocks1,  ecBlocks2)
	{
			this.ecCodewordsPerBlock = ecCodewordsPerBlock;
			if(ecBlocks2)
					this.ecBlocks = new Array(ecBlocks1, ecBlocks2);
			else
					this.ecBlocks = new Array(ecBlocks1);
		
			this.__defineGetter__("ECCodewordsPerBlock", function()
			{
					return this.ecCodewordsPerBlock;
			});
		
			this.__defineGetter__("TotalECCodewords", function()
			{
					return  this.ecCodewordsPerBlock * this.NumBlocks;
			});
		
			this.__defineGetter__("NumBlocks", function()
			{
					var total = 0;
					for (var i = 0; i < this.ecBlocks.length; i++)
					{
							total += this.ecBlocks[i].length;
					}
					return total;
			});
		
			this.getECBlocks=function()
							{
									return this.ecBlocks;
							}
	}

	function Version( versionNumber,  alignmentPatternCenters,  ecBlocks1,  ecBlocks2,  ecBlocks3,  ecBlocks4)
	{
			this.versionNumber = versionNumber;
			this.alignmentPatternCenters = alignmentPatternCenters;
			this.ecBlocks = new Array(ecBlocks1, ecBlocks2, ecBlocks3, ecBlocks4);
		
			var total = 0;
			var ecCodewords = ecBlocks1.ECCodewordsPerBlock;
			var ecbArray = ecBlocks1.getECBlocks();
			for (var i = 0; i < ecbArray.length; i++)
			{
					var ecBlock = ecbArray[i];
					total += ecBlock.Count * (ecBlock.DataCodewords + ecCodewords);
			}
			this.totalCodewords = total;
		
			this.__defineGetter__("VersionNumber", function()
			{
					return  this.versionNumber;
			});
		
			this.__defineGetter__("AlignmentPatternCenters", function()
			{
					return  this.alignmentPatternCenters;
			});
			this.__defineGetter__("TotalCodewords", function()
			{
					return  this.totalCodewords;
			});
			this.__defineGetter__("DimensionForVersion", function()
			{
					return  17 + 4 * this.versionNumber;
			});
		
			this.buildFunctionPattern=function()
					{
							var dimension = this.DimensionForVersion;
							var bitMatrix = new BitMatrix(dimension);
						
							// Top left finder pattern + separator + format
							bitMatrix.setRegion(0, 0, 9, 9);
							// Top right finder pattern + separator + format
							bitMatrix.setRegion(dimension - 8, 0, 8, 9);
							// Bottom left finder pattern + separator + format
							bitMatrix.setRegion(0, dimension - 8, 9, 8);
						
							// Alignment patterns
							var max = this.alignmentPatternCenters.length;
							for (var x = 0; x < max; x++)
							{
									var i = this.alignmentPatternCenters[x] - 2;
									for (var y = 0; y < max; y++)
									{
											if ((x == 0 && (y == 0 || y == max - 1)) || (x == max - 1 && y == 0))
											{
													// No alignment patterns near the three finder paterns
													continue;
											}
											bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
									}
							}
						
							// Vertical timing pattern
							bitMatrix.setRegion(6, 9, 1, dimension - 17);
							// Horizontal timing pattern
							bitMatrix.setRegion(9, 6, dimension - 17, 1);
						
							if (this.versionNumber > 6)
							{
									// Version info, top right
									bitMatrix.setRegion(dimension - 11, 0, 3, 6);
									// Version info, bottom left
									bitMatrix.setRegion(0, dimension - 11, 6, 3);
							}
						
							return bitMatrix;
					}
			this.getECBlocksForLevel=function( ecLevel)
			{
					return this.ecBlocks[ecLevel.ordinal()];
			}
	}

	Version.VERSION_DECODE_INFO = new Array(0x07C94, 0x085BC, 0x09A99, 0x0A4D3, 0x0BBF6, 0x0C762, 0x0D847, 0x0E60D, 0x0F928, 0x10B78, 0x1145D, 0x12A17, 0x13532, 0x149A6, 0x15683, 0x168C9, 0x177EC, 0x18EC4, 0x191E1, 0x1AFAB, 0x1B08E, 0x1CC1A, 0x1D33F, 0x1ED75, 0x1F250, 0x209D5, 0x216F0, 0x228BA, 0x2379F, 0x24B0B, 0x2542E, 0x26A64, 0x27541, 0x28C69);

	Version.VERSIONS = buildVersions();

	Version.getVersionForNumber=function( versionNumber)
	{
			if (versionNumber < 1 || versionNumber > 40)
			{
					throw "ArgumentException";
			}
			return Version.VERSIONS[versionNumber - 1];
	}

	Version.getProvisionalVersionForDimension=function(dimension)
	{
			if (dimension % 4 != 1)
			{
					throw "Error getProvisionalVersionForDimension";
			}
			try
			{
					return Version.getVersionForNumber((dimension - 17) >> 2);
			}
			catch ( iae)
			{
					throw "Error getVersionForNumber";
			}
	}

	Version.decodeVersionInformation=function( versionBits)
	{
			var bestDifference = 0xffffffff;
			var bestVersion = 0;
			for (var i = 0; i < Version.VERSION_DECODE_INFO.length; i++)
			{
					var targetVersion = Version.VERSION_DECODE_INFO[i];
					// Do the version info bits match exactly? done.
					if (targetVersion == versionBits)
					{
							return this.getVersionForNumber(i + 7);
					}
					// Otherwise see if this is the closest to a real version info bit string
					// we have seen so far
					var bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion);
					if (bitsDifference < bestDifference)
					{
							bestVersion = i + 7;
							bestDifference = bitsDifference;
					}
			}
			// We can tolerate up to 3 bits of error since no two version info codewords will
			// differ in less than 4 bits.
			if (bestDifference <= 3)
			{
					return this.getVersionForNumber(bestVersion);
			}
			// If we didn't find a close enough match, fail
			return null;
	}

	function buildVersions()
	{
			return new Array(new Version(1, new Array(), new ECBlocks(7, new ECB(1, 19)), new ECBlocks(10, new ECB(1, 16)), new ECBlocks(13, new ECB(1, 13)), new ECBlocks(17, new ECB(1, 9))), 
			new Version(2, new Array(6, 18), new ECBlocks(10, new ECB(1, 34)), new ECBlocks(16, new ECB(1, 28)), new ECBlocks(22, new ECB(1, 22)), new ECBlocks(28, new ECB(1, 16))), 
			new Version(3, new Array(6, 22), new ECBlocks(15, new ECB(1, 55)), new ECBlocks(26, new ECB(1, 44)), new ECBlocks(18, new ECB(2, 17)), new ECBlocks(22, new ECB(2, 13))), 
			new Version(4, new Array(6, 26), new ECBlocks(20, new ECB(1, 80)), new ECBlocks(18, new ECB(2, 32)), new ECBlocks(26, new ECB(2, 24)), new ECBlocks(16, new ECB(4, 9))), 
			new Version(5, new Array(6, 30), new ECBlocks(26, new ECB(1, 108)), new ECBlocks(24, new ECB(2, 43)), new ECBlocks(18, new ECB(2, 15), new ECB(2, 16)), new ECBlocks(22, new ECB(2, 11), new ECB(2, 12))), 
			new Version(6, new Array(6, 34), new ECBlocks(18, new ECB(2, 68)), new ECBlocks(16, new ECB(4, 27)), new ECBlocks(24, new ECB(4, 19)), new ECBlocks(28, new ECB(4, 15))), 
			new Version(7, new Array(6, 22, 38), new ECBlocks(20, new ECB(2, 78)), new ECBlocks(18, new ECB(4, 31)), new ECBlocks(18, new ECB(2, 14), new ECB(4, 15)), new ECBlocks(26, new ECB(4, 13), new ECB(1, 14))), 
			new Version(8, new Array(6, 24, 42), new ECBlocks(24, new ECB(2, 97)), new ECBlocks(22, new ECB(2, 38), new ECB(2, 39)), new ECBlocks(22, new ECB(4, 18), new ECB(2, 19)), new ECBlocks(26, new ECB(4, 14), new ECB(2, 15))), 
			new Version(9, new Array(6, 26, 46), new ECBlocks(30, new ECB(2, 116)), new ECBlocks(22, new ECB(3, 36), new ECB(2, 37)), new ECBlocks(20, new ECB(4, 16), new ECB(4, 17)), new ECBlocks(24, new ECB(4, 12), new ECB(4, 13))), 
			new Version(10, new Array(6, 28, 50), new ECBlocks(18, new ECB(2, 68), new ECB(2, 69)), new ECBlocks(26, new ECB(4, 43), new ECB(1, 44)), new ECBlocks(24, new ECB(6, 19), new ECB(2, 20)), new ECBlocks(28, new ECB(6, 15), new ECB(2, 16))), 
			new Version(11, new Array(6, 30, 54), new ECBlocks(20, new ECB(4, 81)), new ECBlocks(30, new ECB(1, 50), new ECB(4, 51)), new ECBlocks(28, new ECB(4, 22), new ECB(4, 23)), new ECBlocks(24, new ECB(3, 12), new ECB(8, 13))), 
			new Version(12, new Array(6, 32, 58), new ECBlocks(24, new ECB(2, 92), new ECB(2, 93)), new ECBlocks(22, new ECB(6, 36), new ECB(2, 37)), new ECBlocks(26, new ECB(4, 20), new ECB(6, 21)), new ECBlocks(28, new ECB(7, 14), new ECB(4, 15))), 
			new Version(13, new Array(6, 34, 62), new ECBlocks(26, new ECB(4, 107)), new ECBlocks(22, new ECB(8, 37), new ECB(1, 38)), new ECBlocks(24, new ECB(8, 20), new ECB(4, 21)), new ECBlocks(22, new ECB(12, 11), new ECB(4, 12))), 
			new Version(14, new Array(6, 26, 46, 66), new ECBlocks(30, new ECB(3, 115), new ECB(1, 116)), new ECBlocks(24, new ECB(4, 40), new ECB(5, 41)), new ECBlocks(20, new ECB(11, 16), new ECB(5, 17)), new ECBlocks(24, new ECB(11, 12), new ECB(5, 13))), 
			new Version(15, new Array(6, 26, 48, 70), new ECBlocks(22, new ECB(5, 87), new ECB(1, 88)), new ECBlocks(24, new ECB(5, 41), new ECB(5, 42)), new ECBlocks(30, new ECB(5, 24), new ECB(7, 25)), new ECBlocks(24, new ECB(11, 12), new ECB(7, 13))), 
			new Version(16, new Array(6, 26, 50, 74), new ECBlocks(24, new ECB(5, 98), new ECB(1, 99)), new ECBlocks(28, new ECB(7, 45), new ECB(3, 46)), new ECBlocks(24, new ECB(15, 19), new ECB(2, 20)), new ECBlocks(30, new ECB(3, 15), new ECB(13, 16))), 
			new Version(17, new Array(6, 30, 54, 78), new ECBlocks(28, new ECB(1, 107), new ECB(5, 108)), new ECBlocks(28, new ECB(10, 46), new ECB(1, 47)), new ECBlocks(28, new ECB(1, 22), new ECB(15, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(17, 15))), 
			new Version(18, new Array(6, 30, 56, 82), new ECBlocks(30, new ECB(5, 120), new ECB(1, 121)), new ECBlocks(26, new ECB(9, 43), new ECB(4, 44)), new ECBlocks(28, new ECB(17, 22), new ECB(1, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(19, 15))), 
			new Version(19, new Array(6, 30, 58, 86), new ECBlocks(28, new ECB(3, 113), new ECB(4, 114)), new ECBlocks(26, new ECB(3, 44), new ECB(11, 45)), new ECBlocks(26, new ECB(17, 21), new ECB(4, 22)), new ECBlocks(26, new ECB(9, 13), new ECB(16, 14))), 
			new Version(20, new Array(6, 34, 62, 90), new ECBlocks(28, new ECB(3, 107), new ECB(5, 108)), new ECBlocks(26, new ECB(3, 41), new ECB(13, 42)), new ECBlocks(30, new ECB(15, 24), new ECB(5, 25)), new ECBlocks(28, new ECB(15, 15), new ECB(10, 16))), 
			new Version(21, new Array(6, 28, 50, 72, 94), new ECBlocks(28, new ECB(4, 116), new ECB(4, 117)), new ECBlocks(26, new ECB(17, 42)), new ECBlocks(28, new ECB(17, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(19, 16), new ECB(6, 17))), 
			new Version(22, new Array(6, 26, 50, 74, 98), new ECBlocks(28, new ECB(2, 111), new ECB(7, 112)), new ECBlocks(28, new ECB(17, 46)), new ECBlocks(30, new ECB(7, 24), new ECB(16, 25)), new ECBlocks(24, new ECB(34, 13))), 
			new Version(23, new Array(6, 30, 54, 74, 102), new ECBlocks(30, new ECB(4, 121), new ECB(5, 122)), new ECBlocks(28, new ECB(4, 47), new ECB(14, 48)), new ECBlocks(30, new ECB(11, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(16, 15), new ECB(14, 16))), 
			new Version(24, new Array(6, 28, 54, 80, 106), new ECBlocks(30, new ECB(6, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(6, 45), new ECB(14, 46)), new ECBlocks(30, new ECB(11, 24), new ECB(16, 25)), new ECBlocks(30, new ECB(30, 16), new ECB(2, 17))), 
			new Version(25, new Array(6, 32, 58, 84, 110), new ECBlocks(26, new ECB(8, 106), new ECB(4, 107)), new ECBlocks(28, new ECB(8, 47), new ECB(13, 48)), new ECBlocks(30, new ECB(7, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(13, 16))), 
			new Version(26, new Array(6, 30, 58, 86, 114), new ECBlocks(28, new ECB(10, 114), new ECB(2, 115)), new ECBlocks(28, new ECB(19, 46), new ECB(4, 47)), new ECBlocks(28, new ECB(28, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(33, 16), new ECB(4, 17))), 
			new Version(27, new Array(6, 34, 62, 90, 118), new ECBlocks(30, new ECB(8, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(22, 45), new ECB(3, 46)), new ECBlocks(30, new ECB(8, 23), new ECB(26, 24)), new ECBlocks(30, new ECB(12, 15),                 new ECB(28, 16))),
			new Version(28, new Array(6, 26, 50, 74, 98, 122), new ECBlocks(30, new ECB(3, 117), new ECB(10, 118)), new ECBlocks(28, new ECB(3, 45), new ECB(23, 46)), new ECBlocks(30, new ECB(4, 24), new ECB(31, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(31, 16))), 
			new Version(29, new Array(6, 30, 54, 78, 102, 126), new ECBlocks(30, new ECB(7, 116), new ECB(7, 117)), new ECBlocks(28, new ECB(21, 45), new ECB(7, 46)), new ECBlocks(30, new ECB(1, 23), new ECB(37, 24)), new ECBlocks(30, new ECB(19, 15), new ECB(26, 16))), 
			new Version(30, new Array(6, 26, 52, 78, 104, 130), new ECBlocks(30, new ECB(5, 115), new ECB(10, 116)), new ECBlocks(28, new ECB(19, 47), new ECB(10, 48)), new ECBlocks(30, new ECB(15, 24), new ECB(25, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(25, 16))), 
			new Version(31, new Array(6, 30, 56, 82, 108, 134), new ECBlocks(30, new ECB(13, 115), new ECB(3, 116)), new ECBlocks(28, new ECB(2, 46), new ECB(29, 47)), new ECBlocks(30, new ECB(42, 24), new ECB(1, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(28, 16))), 
			new Version(32, new Array(6, 34, 60, 86, 112, 138), new ECBlocks(30, new ECB(17, 115)), new ECBlocks(28, new ECB(10, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(10, 24), new ECB(35, 25)), new ECBlocks(30, new ECB(19, 15), new ECB(35, 16))), 
			new Version(33, new Array(6, 30, 58, 86, 114, 142), new ECBlocks(30, new ECB(17, 115), new ECB(1, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(21, 47)), new ECBlocks(30, new ECB(29, 24), new ECB(19, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(46, 16))), 
			new Version(34, new Array(6, 34, 62, 90, 118, 146), new ECBlocks(30, new ECB(13, 115), new ECB(6, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(44, 24), new ECB(7, 25)), new ECBlocks(30, new ECB(59, 16), new ECB(1, 17))), 
			new Version(35, new Array(6, 30, 54, 78, 102, 126, 150), new ECBlocks(30, new ECB(12, 121), new ECB(7, 122)), new ECBlocks(28, new ECB(12, 47), new ECB(26, 48)), new ECBlocks(30, new ECB(39, 24), new ECB(14, 25)),new ECBlocks(30, new ECB(22, 15), new ECB(41, 16))), 
			new Version(36, new Array(6, 24, 50, 76, 102, 128, 154), new ECBlocks(30, new ECB(6, 121), new ECB(14, 122)), new ECBlocks(28, new ECB(6, 47), new ECB(34, 48)), new ECBlocks(30, new ECB(46, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(2, 15), new ECB(64, 16))), 
			new Version(37, new Array(6, 28, 54, 80, 106, 132, 158), new ECBlocks(30, new ECB(17, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(29, 46), new ECB(14, 47)), new ECBlocks(30, new ECB(49, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(24, 15), new ECB(46, 16))), 
			new Version(38, new Array(6, 32, 58, 84, 110, 136, 162), new ECBlocks(30, new ECB(4, 122), new ECB(18, 123)), new ECBlocks(28, new ECB(13, 46), new ECB(32, 47)), new ECBlocks(30, new ECB(48, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(42, 15), new ECB(32, 16))), 
			new Version(39, new Array(6, 26, 54, 82, 110, 138, 166), new ECBlocks(30, new ECB(20, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(40, 47), new ECB(7, 48)), new ECBlocks(30, new ECB(43, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(10, 15), new ECB(67, 16))), 
			new Version(40, new Array(6, 30, 58, 86, 114, 142, 170), new ECBlocks(30, new ECB(19, 118), new ECB(6, 119)), new ECBlocks(28, new ECB(18, 47), new ECB(31, 48)), new ECBlocks(30, new ECB(34, 24), new ECB(34, 25)), new ECBlocks(30, new ECB(20, 15), new ECB(61, 16))));
	}

	function PerspectiveTransform( a11,  a21,  a31,  a12,  a22,  a32,  a13,  a23,  a33)
	{
			this.a11 = a11;
			this.a12 = a12;
			this.a13 = a13;
			this.a21 = a21;
			this.a22 = a22;
			this.a23 = a23;
			this.a31 = a31;
			this.a32 = a32;
			this.a33 = a33;
			this.transformPoints1=function( points)
					{
							var max = points.length;
							var a11 = this.a11;
							var a12 = this.a12;
							var a13 = this.a13;
							var a21 = this.a21;
							var a22 = this.a22;
							var a23 = this.a23;
							var a31 = this.a31;
							var a32 = this.a32;
							var a33 = this.a33;
							for (var i = 0; i < max; i += 2)
							{
									var x = points[i];
									var y = points[i + 1];
									var denominator = a13 * x + a23 * y + a33;
									points[i] = (a11 * x + a21 * y + a31) / denominator;
									points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
							}
					}
			this. transformPoints2=function(xValues, yValues)
					{
							var n = xValues.length;
							for (var i = 0; i < n; i++)
							{
									var x = xValues[i];
									var y = yValues[i];
									var denominator = this.a13 * x + this.a23 * y + this.a33;
									xValues[i] = (this.a11 * x + this.a21 * y + this.a31) / denominator;
									yValues[i] = (this.a12 * x + this.a22 * y + this.a32) / denominator;
							}
					}

			this.buildAdjoint=function()
					{
							// Adjoint is the transpose of the cofactor matrix:
							return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
					}
			this.times=function( other)
					{
							return new PerspectiveTransform(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 +this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
					}

	}

	PerspectiveTransform.quadrilateralToQuadrilateral=function( x0,  y0,  x1,  y1,  x2,  y2,  x3,  y3,  x0p,  y0p,  x1p,  y1p,  x2p,  y2p,  x3p,  y3p)
	{
		
			var qToS = this.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
			var sToQ = this.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
			return sToQ.times(qToS);
	}

	PerspectiveTransform.squareToQuadrilateral=function( x0,  y0,  x1,  y1,  x2,  y2,  x3,  y3)
	{
			 dy2 = y3 - y2;
			 dy3 = y0 - y1 + y2 - y3;
			if (dy2 == 0.0 && dy3 == 0.0)
			{
					return new PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0.0, 0.0, 1.0);
			}
			else
			{
					 dx1 = x1 - x2;
					 dx2 = x3 - x2;
					 dx3 = x0 - x1 + x2 - x3;
					 dy1 = y1 - y2;
					 denominator = dx1 * dy2 - dx2 * dy1;
					 a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
					 a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
					return new PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1.0);
			}
	}

	PerspectiveTransform.quadrilateralToSquare=function( x0,  y0,  x1,  y1,  x2,  y2,  x3,  y3)
	{
			// Here, the adjoint serves as the inverse:
			return this.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
	}

	function DetectorResult(bits,  points)
	{
			this.bits = bits;
			this.points = points;
	}


	function Detector(image)
	{
			this.image=image;
			this.resultPointCallback = null;
		
			this.sizeOfBlackWhiteBlackRun=function( fromX,  fromY,  toX,  toY)
					{
							// Mild variant of Bresenham's algorithm;
							// see http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
							var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
							if (steep)
							{
									var temp = fromX;
									fromX = fromY;
									fromY = temp;
									temp = toX;
									toX = toY;
									toY = temp;
							}
						
							var dx = Math.abs(toX - fromX);
							var dy = Math.abs(toY - fromY);
							var error = - dx >> 1;
							var ystep = fromY < toY?1:- 1;
							var xstep = fromX < toX?1:- 1;
							var state = 0; // In black pixels, looking for white, first or second time
							for (var x = fromX, y = fromY; x != toX; x += xstep)
							{
								
									var realX = steep?y:x;
									var realY = steep?x:y;
									if (state == 1)
									{
											// In white pixels, looking for black
											if (this.image[realX + realY*qrcode.width])
											{
													state++;
											}
									}
									else
									{
											if (!this.image[realX + realY*qrcode.width])
											{
													state++;
											}
									}
								
									if (state == 3)
									{
											// Found black, white, black, and stumbled back onto white; done
											var diffX = x - fromX;
											var diffY = y - fromY;
											return  Math.sqrt( (diffX * diffX + diffY * diffY));
									}
									error += dy;
									if (error > 0)
									{
											if (y == toY)
											{
													break;
											}
											y += ystep;
											error -= dx;
									}
							}
							var diffX2 = toX - fromX;
							var diffY2 = toY - fromY;
							return  Math.sqrt( (diffX2 * diffX2 + diffY2 * diffY2));
					}

		
			this.sizeOfBlackWhiteBlackRunBothWays=function( fromX,  fromY,  toX,  toY)
					{
						
							var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
						
							// Now count other way -- don't run off image though of course
							var scale = 1.0;
							var otherToX = fromX - (toX - fromX);
							if (otherToX < 0)
							{
									scale =  fromX /  (fromX - otherToX);
									otherToX = 0;
							}
							else if (otherToX >= qrcode.width)
							{
									scale =  (qrcode.width - 1 - fromX) /  (otherToX - fromX);
									otherToX = qrcode.width - 1;
							}
							var otherToY = Math.floor (fromY - (toY - fromY) * scale);
						
							scale = 1.0;
							if (otherToY < 0)
							{
									scale =  fromY /  (fromY - otherToY);
									otherToY = 0;
							}
							else if (otherToY >= qrcode.height)
							{
									scale =  (qrcode.height - 1 - fromY) /  (otherToY - fromY);
									otherToY = qrcode.height - 1;
							}
							otherToX = Math.floor (fromX + (otherToX - fromX) * scale);
						
							result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
							return result - 1.0; // -1 because we counted the middle pixel twice
					}
				

		
			this.calculateModuleSizeOneWay=function( pattern,  otherPattern)
					{
							var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor( pattern.X), Math.floor( pattern.Y), Math.floor( otherPattern.X), Math.floor(otherPattern.Y));
							var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.X), Math.floor(otherPattern.Y), Math.floor( pattern.X), Math.floor(pattern.Y));
							if (isNaN(moduleSizeEst1))
							{
									return moduleSizeEst2 / 7.0;
							}
							if (isNaN(moduleSizeEst2))
							{
									return moduleSizeEst1 / 7.0;
							}
							// Average them, and divide by 7 since we've counted the width of 3 black modules,
							// and 1 white and 1 black module on either side. Ergo, divide sum by 14.
							return (moduleSizeEst1 + moduleSizeEst2) / 14.0;
					}

		
			this.calculateModuleSize=function( topLeft,  topRight,  bottomLeft)
					{
							// Take the average
							return (this.calculateModuleSizeOneWay(topLeft, topRight) + this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2.0;
					}

			this.distance=function( pattern1,  pattern2)
			{
					xDiff = pattern1.X - pattern2.X;
					yDiff = pattern1.Y - pattern2.Y;
					return  Math.sqrt( (xDiff * xDiff + yDiff * yDiff));
			}
			this.computeDimension=function( topLeft,  topRight,  bottomLeft,  moduleSize)
					{
						
							var tltrCentersDimension = Math.round(this.distance(topLeft, topRight) / moduleSize);
							var tlblCentersDimension = Math.round(this.distance(topLeft, bottomLeft) / moduleSize);
							var dimension = ((tltrCentersDimension + tlblCentersDimension) >> 1) + 7;
							switch (dimension & 0x03)
							{
								
									// mod 4
									case 0: 
											dimension++;
											break;
											// 1? do nothing
								
									case 2: 
											dimension--;
											break;
								
									case 3: 
											throw "Error";
									}
							return dimension;
					}

			this.findAlignmentInRegion=function( overallEstModuleSize,  estAlignmentX,  estAlignmentY,  allowanceFactor)
					{
							// Look for an alignment pattern (3 modules in size) around where it
							// should be
							var allowance = Math.floor (allowanceFactor * overallEstModuleSize);
							var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
							var alignmentAreaRightX = Math.min(qrcode.width - 1, estAlignmentX + allowance);
							if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3)
							{
									throw "Error";
							}
						
							var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
							var alignmentAreaBottomY = Math.min(qrcode.height - 1, estAlignmentY + allowance);
						
							var alignmentFinder = new AlignmentPatternFinder(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
							return alignmentFinder.find();
					}
				
			this.createTransform=function( topLeft,  topRight,  bottomLeft, alignmentPattern, dimension)
					{
							var dimMinusThree =  dimension - 3.5;
							var bottomRightX;
							var bottomRightY;
							var sourceBottomRightX;
							var sourceBottomRightY;
							if (alignmentPattern != null)
							{
									bottomRightX = alignmentPattern.X;
									bottomRightY = alignmentPattern.Y;
									sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3.0;
							}
							else
							{
									// Don't have an alignment pattern, just make up the bottom-right point
									bottomRightX = (topRight.X - topLeft.X) + bottomLeft.X;
									bottomRightY = (topRight.Y - topLeft.Y) + bottomLeft.Y;
									sourceBottomRightX = sourceBottomRightY = dimMinusThree;
							}
						
							var transform = PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.X, topLeft.Y, topRight.X, topRight.Y, bottomRightX, bottomRightY, bottomLeft.X, bottomLeft.Y);
						
							return transform;
					}                
		
			this.sampleGrid=function( image,  transform,  dimension)
					{
						
							var sampler = GridSampler;
							return sampler.sampleGrid3(image, dimension, transform);
					}
		
			this.processFinderPatternInfo = function( info)
					{
						
							var topLeft = info.TopLeft;
							var topRight = info.TopRight;
							var bottomLeft = info.BottomLeft;
						
							var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
							if (moduleSize < 1.0)
							{
									throw "Error";
							}
							var dimension = this.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
							var provisionalVersion = Version.getProvisionalVersionForDimension(dimension);
							var modulesBetweenFPCenters = provisionalVersion.DimensionForVersion - 7;
						
							var alignmentPattern = null;
							// Anything above version 1 has an alignment pattern
							if (provisionalVersion.AlignmentPatternCenters.length > 0)
							{
								
									// Guess where a "bottom right" finder pattern would have been
									var bottomRightX = topRight.X - topLeft.X + bottomLeft.X;
									var bottomRightY = topRight.Y - topLeft.Y + bottomLeft.Y;
								
									// Estimate that alignment pattern is closer by 3 modules
									// from "bottom right" to known top left location
									var correctionToTopLeft = 1.0 - 3.0 /  modulesBetweenFPCenters;
									var estAlignmentX = Math.floor (topLeft.X + correctionToTopLeft * (bottomRightX - topLeft.X));
									var estAlignmentY = Math.floor (topLeft.Y + correctionToTopLeft * (bottomRightY - topLeft.Y));
								
									// Kind of arbitrary -- expand search radius before giving up
									for (var i = 4; i <= 16; i <<= 1)
									{
											//try
											//{
													alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY,  i);
													break;
											//}
											//catch (re)
											//{
													// try next round
											//}
									}
									// If we didn't find alignment pattern... well try anyway without it
							}
						
							var transform = this.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
						
							var bits = this.sampleGrid(this.image, transform, dimension);
						
							var points;
							if (alignmentPattern == null)
							{
									points = new Array(bottomLeft, topLeft, topRight);
							}
							else
							{
									points = new Array(bottomLeft, topLeft, topRight, alignmentPattern);
							}
							return new DetectorResult(bits, points);
					}
				

		
			this.detect=function()
			{
					var info =  new FinderPatternFinder().findFinderPattern(this.image);
						
					return this.processFinderPatternInfo(info); 
			}
	}

	var FORMAT_INFO_MASK_QR = 0x5412;
	var FORMAT_INFO_DECODE_LOOKUP = new Array(new Array(0x5412, 0x00), new Array(0x5125, 0x01), new Array(0x5E7C, 0x02), new Array(0x5B4B, 0x03), new Array(0x45F9, 0x04), new Array(0x40CE, 0x05), new Array(0x4F97, 0x06), new Array(0x4AA0, 0x07), new Array(0x77C4, 0x08), new Array(0x72F3, 0x09), new Array(0x7DAA, 0x0A), new Array(0x789D, 0x0B), new Array(0x662F, 0x0C), new Array(0x6318, 0x0D), new Array(0x6C41, 0x0E), new Array(0x6976, 0x0F), new Array(0x1689, 0x10), new Array(0x13BE, 0x11), new Array(0x1CE7, 0x12), new Array(0x19D0, 0x13), new Array(0x0762, 0x14), new Array(0x0255, 0x15), new Array(0x0D0C, 0x16), new Array(0x083B, 0x17), new Array(0x355F, 0x18), new Array(0x3068, 0x19), new Array(0x3F31, 0x1A), new Array(0x3A06, 0x1B), new Array(0x24B4, 0x1C), new Array(0x2183, 0x1D), new Array(0x2EDA, 0x1E), new Array(0x2BED, 0x1F));
	var BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);


	function FormatInformation(formatInfo)
	{
			this.errorCorrectionLevel = ErrorCorrectionLevel.forBits((formatInfo >> 3) & 0x03);
			this.dataMask =  (formatInfo & 0x07);

			this.__defineGetter__("ErrorCorrectionLevel", function()
			{
					return this.errorCorrectionLevel;
			});
			this.__defineGetter__("DataMask", function()
			{
					return this.dataMask;
			});
			this.GetHashCode=function()
			{
					return (this.errorCorrectionLevel.ordinal() << 3) |  dataMask;
			}
			this.Equals=function( o)
			{
					var other =  o;
					return this.errorCorrectionLevel == other.errorCorrectionLevel && this.dataMask == other.dataMask;
			}
	}

	FormatInformation.numBitsDiffering=function( a,  b)
	{
			a ^= b; // a now has a 1 bit exactly where its bit differs with b's
			// Count bits set quickly with a series of lookups:
			return BITS_SET_IN_HALF_BYTE[a & 0x0F] + BITS_SET_IN_HALF_BYTE[(URShift(a, 4) & 0x0F)] + BITS_SET_IN_HALF_BYTE[(URShift(a, 8) & 0x0F)] + BITS_SET_IN_HALF_BYTE[(URShift(a, 12) & 0x0F)] + BITS_SET_IN_HALF_BYTE[(URShift(a, 16) & 0x0F)] + BITS_SET_IN_HALF_BYTE[(URShift(a, 20) & 0x0F)] + BITS_SET_IN_HALF_BYTE[(URShift(a, 24) & 0x0F)] + BITS_SET_IN_HALF_BYTE[(URShift(a, 28) & 0x0F)];
	}

	FormatInformation.decodeFormatInformation=function( maskedFormatInfo)
	{
			var formatInfo = FormatInformation.doDecodeFormatInformation(maskedFormatInfo);
			if (formatInfo != null)
			{
					return formatInfo;
			}
			// Should return null, but, some QR codes apparently
			// do not mask this info. Try again by actually masking the pattern
			// first
			return FormatInformation.doDecodeFormatInformation(maskedFormatInfo ^ FORMAT_INFO_MASK_QR);
	}
	FormatInformation.doDecodeFormatInformation=function( maskedFormatInfo)
	{
			// Find the int in FORMAT_INFO_DECODE_LOOKUP with fewest bits differing
			var bestDifference = 0xffffffff;
			var bestFormatInfo = 0;
			for (var i = 0; i < FORMAT_INFO_DECODE_LOOKUP.length; i++)
			{
					var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i];
					var targetInfo = decodeInfo[0];
					if (targetInfo == maskedFormatInfo)
					{
							// Found an exact match
							return new FormatInformation(decodeInfo[1]);
					}
					var bitsDifference = this.numBitsDiffering(maskedFormatInfo, targetInfo);
					if (bitsDifference < bestDifference)
					{
							bestFormatInfo = decodeInfo[1];
							bestDifference = bitsDifference;
					}
			}
			// Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits
			// differing means we found a match
			if (bestDifference <= 3)
			{
					return new FormatInformation(bestFormatInfo);
			}
			return null;
	}

	function ErrorCorrectionLevel(ordinal,  bits, name)
	{
			this.ordinal_Renamed_Field = ordinal;
			this.bits = bits;
			this.name = name;
			this.__defineGetter__("Bits", function()
			{
					return this.bits;
			});
			this.__defineGetter__("Name", function()
			{
					return this.name;
			});
			this.ordinal=function()
			{
					return this.ordinal_Renamed_Field;
			}
	}

	ErrorCorrectionLevel.forBits=function( bits)
	{
			if (bits < 0 || bits >= FOR_BITS.length)
			{
					throw "ArgumentException";
			}
			return FOR_BITS[bits];
	}

	var L = new ErrorCorrectionLevel(0, 0x01, "L");
	var M = new ErrorCorrectionLevel(1, 0x00, "M");
	var Q = new ErrorCorrectionLevel(2, 0x03, "Q");
	var H = new ErrorCorrectionLevel(3, 0x02, "H");
	var FOR_BITS = new Array( M, L, H, Q);

	function BitMatrix( width,  height)
	{
			if(!height)
					height=width;
			if (width < 1 || height < 1)
			{
					throw "Both dimensions must be greater than 0";
			}
			this.width = width;
			this.height = height;
			var rowSize = width >> 5;
			if ((width & 0x1f) != 0)
			{
					rowSize++;
			}
			this.rowSize = rowSize;
			this.bits = new Array(rowSize * height);
			for(var i=0;i<this.bits.length;i++)
					this.bits[i]=0;
		
			this.__defineGetter__("Width", function()
			{
					return this.width;
			});
			this.__defineGetter__("Height", function()
			{
					return this.height;
			});
			this.__defineGetter__("Dimension", function()
			{
					if (this.width != this.height)
					{
							throw "Can't call getDimension() on a non-square matrix";
					}
					return this.width;
			});
		
			this.get_Renamed=function( x,  y)
					{
							var offset = y * this.rowSize + (x >> 5);
							return ((URShift(this.bits[offset], (x & 0x1f))) & 1) != 0;
					}
			this.set_Renamed=function( x,  y)
					{
							var offset = y * this.rowSize + (x >> 5);
							this.bits[offset] |= 1 << (x & 0x1f);
					}
			this.flip=function( x,  y)
					{
							var offset = y * this.rowSize + (x >> 5);
							this.bits[offset] ^= 1 << (x & 0x1f);
					}
			this.clear=function()
					{
							var max = this.bits.length;
							for (var i = 0; i < max; i++)
							{
									this.bits[i] = 0;
							}
					}
			this.setRegion=function( left,  top,  width,  height)
					{
							if (top < 0 || left < 0)
							{
									throw "Left and top must be nonnegative";
							}
							if (height < 1 || width < 1)
							{
									throw "Height and width must be at least 1";
							}
							var right = left + width;
							var bottom = top + height;
							if (bottom > this.height || right > this.width)
							{
									throw "The region must fit inside the matrix";
							}
							for (var y = top; y < bottom; y++)
							{
									var offset = y * this.rowSize;
									for (var x = left; x < right; x++)
									{
											this.bits[offset + (x >> 5)] |= 1 << (x & 0x1f);
									}
							}
					}
	}

	function DataBlock(numDataCodewords,  codewords)
	{
			this.numDataCodewords = numDataCodewords;
			this.codewords = codewords;
		
			this.__defineGetter__("NumDataCodewords", function()
			{
					return this.numDataCodewords;
			});
			this.__defineGetter__("Codewords", function()
			{
					return this.codewords;
			});
	}        
		
	DataBlock.getDataBlocks=function(rawCodewords,  version,  ecLevel)
	{
		
			if (rawCodewords.length != version.TotalCodewords)
			{
					throw "ArgumentException";
			}
		
			// Figure out the number and size of data blocks used by this version and
			// error correction level
			var ecBlocks = version.getECBlocksForLevel(ecLevel);
		
			// First count the total number of data blocks
			var totalBlocks = 0;
			var ecBlockArray = ecBlocks.getECBlocks();
			for (var i = 0; i < ecBlockArray.length; i++)
			{
					totalBlocks += ecBlockArray[i].Count;
			}
		
			// Now establish DataBlocks of the appropriate size and number of data codewords
			var result = new Array(totalBlocks);
			var numResultBlocks = 0;
			for (var j = 0; j < ecBlockArray.length; j++)
			{
					var ecBlock = ecBlockArray[j];
					for (var i = 0; i < ecBlock.Count; i++)
					{
							var numDataCodewords = ecBlock.DataCodewords;
							var numBlockCodewords = ecBlocks.ECCodewordsPerBlock + numDataCodewords;
							result[numResultBlocks++] = new DataBlock(numDataCodewords, new Array(numBlockCodewords));
					}
			}
		
			// All blocks have the same amount of data, except that the last n
			// (where n may be 0) have 1 more byte. Figure out where these start.
			var shorterBlocksTotalCodewords = result[0].codewords.length;
			var longerBlocksStartAt = result.length - 1;
			while (longerBlocksStartAt >= 0)
			{
					var numCodewords = result[longerBlocksStartAt].codewords.length;
					if (numCodewords == shorterBlocksTotalCodewords)
					{
							break;
					}
					longerBlocksStartAt--;
			}
			longerBlocksStartAt++;
		
			var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ECCodewordsPerBlock;
			// The last elements of result may be 1 element longer;
			// first fill out as many elements as all of them have
			var rawCodewordsOffset = 0;
			for (var i = 0; i < shorterBlocksNumDataCodewords; i++)
			{
					for (var j = 0; j < numResultBlocks; j++)
					{
							result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
					}
			}
			// Fill out the last data block in the longer ones
			for (var j = longerBlocksStartAt; j < numResultBlocks; j++)
			{
					result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
			}
			// Now add in error correction blocks
			var max = result[0].codewords.length;
			for (var i = shorterBlocksNumDataCodewords; i < max; i++)
			{
					for (var j = 0; j < numResultBlocks; j++)
					{
							var iOffset = j < longerBlocksStartAt?i:i + 1;
							result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
					}
			}
			return result;
	}

	function BitMatrixParser(bitMatrix)
	{
			var dimension = bitMatrix.Dimension;
			if (dimension < 21 || (dimension & 0x03) != 1)
			{
					throw "Error BitMatrixParser";
			}
			this.bitMatrix = bitMatrix;
			this.parsedVersion = null;
			this.parsedFormatInfo = null;
		
			this.copyBit=function( i,  j,  versionBits)
			{
					return this.bitMatrix.get_Renamed(i, j)?(versionBits << 1) | 0x1:versionBits << 1;
			}
		
			this.readFormatInformation=function()
			{
							if (this.parsedFormatInfo != null)
							{
									return this.parsedFormatInfo;
							}
						
							// Read top-left format info bits
							var formatInfoBits = 0;
							for (var i = 0; i < 6; i++)
							{
									formatInfoBits = this.copyBit(i, 8, formatInfoBits);
							}
							// .. and skip a bit in the timing pattern ...
							formatInfoBits = this.copyBit(7, 8, formatInfoBits);
							formatInfoBits = this.copyBit(8, 8, formatInfoBits);
							formatInfoBits = this.copyBit(8, 7, formatInfoBits);
							// .. and skip a bit in the timing pattern ...
							for (var j = 5; j >= 0; j--)
							{
									formatInfoBits = this.copyBit(8, j, formatInfoBits);
							}
						
							this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits);
							if (this.parsedFormatInfo != null)
							{
									return this.parsedFormatInfo;
							}
						
							// Hmm, failed. Try the top-right/bottom-left pattern
							var dimension = this.bitMatrix.Dimension;
							formatInfoBits = 0;
							var iMin = dimension - 8;
							for (var i = dimension - 1; i >= iMin; i--)
							{
									formatInfoBits = this.copyBit(i, 8, formatInfoBits);
							}
							for (var j = dimension - 7; j < dimension; j++)
							{
									formatInfoBits = this.copyBit(8, j, formatInfoBits);
							}
						
							this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits);
							if (this.parsedFormatInfo != null)
							{
									return this.parsedFormatInfo;
							}
							throw "Error readFormatInformation";        
			}
			this.readVersion=function()
					{
						
							if (this.parsedVersion != null)
							{
									return this.parsedVersion;
							}
						
							var dimension = this.bitMatrix.Dimension;
						
							var provisionalVersion = (dimension - 17) >> 2;
							if (provisionalVersion <= 6)
							{
									return Version.getVersionForNumber(provisionalVersion);
							}
						
							// Read top-right version info: 3 wide by 6 tall
							var versionBits = 0;
							var ijMin = dimension - 11;
							for (var j = 5; j >= 0; j--)
							{
									for (var i = dimension - 9; i >= ijMin; i--)
									{
											versionBits = this.copyBit(i, j, versionBits);
									}
							}
						
							this.parsedVersion = Version.decodeVersionInformation(versionBits);
							if (this.parsedVersion != null && this.parsedVersion.DimensionForVersion == dimension)
							{
									return this.parsedVersion;
							}
						
							// Hmm, failed. Try bottom left: 6 wide by 3 tall
							versionBits = 0;
							for (var i = 5; i >= 0; i--)
							{
									for (var j = dimension - 9; j >= ijMin; j--)
									{
											versionBits = this.copyBit(i, j, versionBits);
									}
							}
						
							this.parsedVersion = Version.decodeVersionInformation(versionBits);
							if (this.parsedVersion != null && this.parsedVersion.DimensionForVersion == dimension)
							{
									return this.parsedVersion;
							}
							throw "Error readVersion";
					}
			this.readCodewords=function()
					{
						
							var formatInfo = this.readFormatInformation();
							var version = this.readVersion();
						
							// Get the data mask for the format used in this QR Code. This will exclude
							// some bits from reading as we wind through the bit matrix.
							var dataMask = DataMask.forReference( formatInfo.DataMask);
							var dimension = this.bitMatrix.Dimension;
							dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
						
							var functionPattern = version.buildFunctionPattern();
						
							var readingUp = true;
							var result = new Array(version.TotalCodewords);
							var resultOffset = 0;
							var currentByte = 0;
							var bitsRead = 0;
							// Read columns in pairs, from right to left
							for (var j = dimension - 1; j > 0; j -= 2)
							{
									if (j == 6)
									{
											// Skip whole column with vertical alignment pattern;
											// saves time and makes the other code proceed more cleanly
											j--;
									}
									// Read alternatingly from bottom to top then top to bottom
									for (var count = 0; count < dimension; count++)
									{
											var i = readingUp?dimension - 1 - count:count;
											for (var col = 0; col < 2; col++)
											{
													// Ignore bits covered by the function pattern
													if (!functionPattern.get_Renamed(j - col, i))
													{
															// Read a bit
															bitsRead++;
															currentByte <<= 1;
															if (this.bitMatrix.get_Renamed(j - col, i))
															{
																	currentByte |= 1;
															}
															// If we've made a whole byte, save it off
															if (bitsRead == 8)
															{
																	result[resultOffset++] =  currentByte;
																	bitsRead = 0;
																	currentByte = 0;
															}
													}
											}
									}
									readingUp ^= true; // readingUp = !readingUp; // switch directions
							}
							if (resultOffset != version.TotalCodewords)
							{
									throw "Error readCodewords";
							}
							return result;
					}
	}

	DataMask = {};

	DataMask.forReference = function(reference)
	{
			if (reference < 0 || reference > 7)
			{
					throw "System.ArgumentException";
			}
			return DataMask.DATA_MASKS[reference];
	}

	function DataMask000()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					return ((i + j) & 0x01) == 0;
			}
	}

	function DataMask001()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					return (i & 0x01) == 0;
			}
	}

	function DataMask010()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					return j % 3 == 0;
			}
	}

	function DataMask011()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					return (i + j) % 3 == 0;
			}
	}

	function DataMask100()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					return (((URShift(i, 1)) + (j / 3)) & 0x01) == 0;
			}
	}

	function DataMask101()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					var temp = i * j;
					return (temp & 0x01) + (temp % 3) == 0;
			}
	}

	function DataMask110()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					var temp = i * j;
					return (((temp & 0x01) + (temp % 3)) & 0x01) == 0;
			}
	}
	function DataMask111()
	{
			this.unmaskBitMatrix=function(bits,  dimension)
			{
					for (var i = 0; i < dimension; i++)
					{
							for (var j = 0; j < dimension; j++)
							{
									if (this.isMasked(i, j))
									{
											bits.flip(j, i);
									}
							}
					}
			}
			this.isMasked=function( i,  j)
			{
					return ((((i + j) & 0x01) + ((i * j) % 3)) & 0x01) == 0;
			}
	}

	DataMask.DATA_MASKS = new Array(new DataMask000(), new DataMask001(), new DataMask010(), new DataMask011(), new DataMask100(), new DataMask101(), new DataMask110(), new DataMask111());

	function ReedSolomonDecoder(field)
	{
			this.field = field;
			this.decode=function(received,  twoS)
			{
							var poly = new GF256Poly(this.field, received);
							var syndromeCoefficients = new Array(twoS);
							for(var i=0;i<syndromeCoefficients.length;i++)syndromeCoefficients[i]=0;
							var dataMatrix = false;//this.field.Equals(GF256.DATA_MATRIX_FIELD);
							var noError = true;
							for (var i = 0; i < twoS; i++)
							{
									// Thanks to sanfordsquires for this fix:
									var evali = poly.evaluateAt(this.field.exp(dataMatrix?i + 1:i));
									syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evali;
									if (evali != 0)
									{
											noError = false;
									}
							}
							if (noError)
							{
									return ;
							}
							var syndrome = new GF256Poly(this.field, syndromeCoefficients);
							var sigmaOmega = this.runEuclideanAlgorithm(this.field.buildMonomial(twoS, 1), syndrome, twoS);
							var sigma = sigmaOmega[0];
							var omega = sigmaOmega[1];
							var errorLocations = this.findErrorLocations(sigma);
							var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations, dataMatrix);
							for (var i = 0; i < errorLocations.length; i++)
							{
									var position = received.length - 1 - this.field.log(errorLocations[i]);
									if (position < 0)
									{
											throw "ReedSolomonException Bad error location";
									}
									received[position] = GF256.addOrSubtract(received[position], errorMagnitudes[i]);
							}
			}
		
			this.runEuclideanAlgorithm=function( a,  b,  R)
					{
							// Assume a's degree is >= b's
							if (a.Degree < b.Degree)
							{
									var temp = a;
									a = b;
									b = temp;
							}
						
							var rLast = a;
							var r = b;
							var sLast = this.field.One;
							var s = this.field.Zero;
							var tLast = this.field.Zero;
							var t = this.field.One;
						
							// Run Euclidean algorithm until r's degree is less than R/2
							while (r.Degree >= Math.floor(R / 2))
							{
									var rLastLast = rLast;
									var sLastLast = sLast;
									var tLastLast = tLast;
									rLast = r;
									sLast = s;
									tLast = t;
								
									// Divide rLastLast by rLast, with quotient in q and remainder in r
									if (rLast.Zero)
									{
											// Oops, Euclidean algorithm already terminated?
											throw "r_{i-1} was zero";
									}
									r = rLastLast;
									var q = this.field.Zero;
									var denominatorLeadingTerm = rLast.getCoefficient(rLast.Degree);
									var dltInverse = this.field.inverse(denominatorLeadingTerm);
									while (r.Degree >= rLast.Degree && !r.Zero)
									{
											var degreeDiff = r.Degree - rLast.Degree;
											var scale = this.field.multiply(r.getCoefficient(r.Degree), dltInverse);
											q = q.addOrSubtract(this.field.buildMonomial(degreeDiff, scale));
											r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
											//r.EXE();
									}
								
									s = q.multiply1(sLast).addOrSubtract(sLastLast);
									t = q.multiply1(tLast).addOrSubtract(tLastLast);
							}
						
							var sigmaTildeAtZero = t.getCoefficient(0);
							if (sigmaTildeAtZero == 0)
							{
									throw "ReedSolomonException sigmaTilde(0) was zero";
							}
						
							var inverse = this.field.inverse(sigmaTildeAtZero);
							var sigma = t.multiply2(inverse);
							var omega = r.multiply2(inverse);
							return new Array(sigma, omega);
					}
			this.findErrorLocations=function( errorLocator)
					{
							// This is a direct application of Chien's search
							var numErrors = errorLocator.Degree;
							if (numErrors == 1)
							{
									// shortcut
									return new Array(errorLocator.getCoefficient(1));
							}
							var result = new Array(numErrors);
							var e = 0;
							for (var i = 1; i < 256 && e < numErrors; i++)
							{
									if (errorLocator.evaluateAt(i) == 0)
									{
											result[e] = this.field.inverse(i);
											e++;
									}
							}
							if (e != numErrors)
							{
									throw "Error locator degree does not match number of roots";
							}
							return result;
					}
			this.findErrorMagnitudes=function( errorEvaluator,  errorLocations,  dataMatrix)
					{
							// This is directly applying Forney's Formula
							var s = errorLocations.length;
							var result = new Array(s);
							for (var i = 0; i < s; i++)
							{
									var xiInverse = this.field.inverse(errorLocations[i]);
									var denominator = 1;
									for (var j = 0; j < s; j++)
									{
											if (i != j)
											{
													denominator = this.field.multiply(denominator, GF256.addOrSubtract(1, this.field.multiply(errorLocations[j], xiInverse)));
											}
									}
									result[i] = this.field.multiply(errorEvaluator.evaluateAt(xiInverse), this.field.inverse(denominator));
									// Thanks to sanfordsquires for this fix:
									if (dataMatrix)
									{
											result[i] = this.field.multiply(result[i], xiInverse);
									}
							}
							return result;
					}
	}

	function GF256Poly(field,  coefficients)
	{
			if (coefficients == null || coefficients.length == 0)
			{
					throw "System.ArgumentException";
			}
			this.field = field;
			var coefficientsLength = coefficients.length;
			if (coefficientsLength > 1 && coefficients[0] == 0)
			{
					// Leading term must be non-zero for anything except the constant polynomial "0"
					var firstNonZero = 1;
					while (firstNonZero < coefficientsLength && coefficients[firstNonZero] == 0)
					{
							firstNonZero++;
					}
					if (firstNonZero == coefficientsLength)
					{
							this.coefficients = field.Zero.coefficients;
					}
					else
					{
							this.coefficients = new Array(coefficientsLength - firstNonZero);
							for(var i=0;i<this.coefficients.length;i++)this.coefficients[i]=0;
							//Array.Copy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
							for(var ci=0;ci<this.coefficients.length;ci++)this.coefficients[ci]=coefficients[firstNonZero+ci];
					}
			}
			else
			{
					this.coefficients = coefficients;
			}
		
			this.__defineGetter__("Zero", function()
			{
					return this.coefficients[0] == 0;
			});
			this.__defineGetter__("Degree", function()
			{
					return this.coefficients.length - 1;
			});
			this.__defineGetter__("Coefficients", function()
			{
					return this.coefficients;
			});
		
			this.getCoefficient=function( degree)
			{
					return this.coefficients[this.coefficients.length - 1 - degree];
			}
		
			this.evaluateAt=function( a)
			{
					if (a == 0)
					{
							// Just return the x^0 coefficient
							return this.getCoefficient(0);
					}
					var size = this.coefficients.length;
					if (a == 1)
					{
							// Just the sum of the coefficients
							var result = 0;
							for (var i = 0; i < size; i++)
							{
									result = GF256.addOrSubtract(result, this.coefficients[i]);
							}
							return result;
					}
					var result2 = this.coefficients[0];
					for (var i = 1; i < size; i++)
					{
							result2 = GF256.addOrSubtract(this.field.multiply(a, result2), this.coefficients[i]);
					}
					return result2;
			}
		
			this.addOrSubtract=function( other)
					{
							if (this.field != other.field)
							{
									throw "GF256Polys do not have same GF256 field";
							}
							if (this.Zero)
							{
									return other;
							}
							if (other.Zero)
							{
									return this;
							}
						
							var smallerCoefficients = this.coefficients;
							var largerCoefficients = other.coefficients;
							if (smallerCoefficients.length > largerCoefficients.length)
							{
									var temp = smallerCoefficients;
									smallerCoefficients = largerCoefficients;
									largerCoefficients = temp;
							}
							var sumDiff = new Array(largerCoefficients.length);
							var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
							// Copy high-order terms only found in higher-degree polynomial's coefficients
							//Array.Copy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
							for(var ci=0;ci<lengthDiff;ci++)sumDiff[ci]=largerCoefficients[ci];
						
							for (var i = lengthDiff; i < largerCoefficients.length; i++)
							{
									sumDiff[i] = GF256.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
							}
						
							return new GF256Poly(field, sumDiff);
			}
			this.multiply1=function( other)
					{
							if (this.field!=other.field)
							{
									throw "GF256Polys do not have same GF256 field";
							}
							if (this.Zero || other.Zero)
							{
									return this.field.Zero;
							}
							var aCoefficients = this.coefficients;
							var aLength = aCoefficients.length;
							var bCoefficients = other.coefficients;
							var bLength = bCoefficients.length;
							var product = new Array(aLength + bLength - 1);
							for (var i = 0; i < aLength; i++)
							{
									var aCoeff = aCoefficients[i];
									for (var j = 0; j < bLength; j++)
									{
											product[i + j] = GF256.addOrSubtract(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
									}
							}
							return new GF256Poly(this.field, product);
					}
			this.multiply2=function( scalar)
					{
							if (scalar == 0)
							{
									return this.field.Zero;
							}
							if (scalar == 1)
							{
									return this;
							}
							var size = this.coefficients.length;
							var product = new Array(size);
							for (var i = 0; i < size; i++)
							{
									product[i] = this.field.multiply(this.coefficients[i], scalar);
							}
							return new GF256Poly(this.field, product);
					}
			this.multiplyByMonomial=function( degree,  coefficient)
					{
							if (degree < 0)
							{
									throw "System.ArgumentException";
							}
							if (coefficient == 0)
							{
									return this.field.Zero;
							}
							var size = this.coefficients.length;
							var product = new Array(size + degree);
							for(var i=0;i<product.length;i++)product[i]=0;
							for (var i = 0; i < size; i++)
							{
									product[i] = this.field.multiply(this.coefficients[i], coefficient);
							}
							return new GF256Poly(this.field, product);
					}
			this.divide=function( other)
					{
							if (this.field!=other.field)
							{
									throw "GF256Polys do not have same GF256 field";
							}
							if (other.Zero)
							{
									throw "Divide by 0";
							}
						
							var quotient = this.field.Zero;
							var remainder = this;
						
							var denominatorLeadingTerm = other.getCoefficient(other.Degree);
							var inverseDenominatorLeadingTerm = this.field.inverse(denominatorLeadingTerm);
						
							while (remainder.Degree >= other.Degree && !remainder.Zero)
							{
									var degreeDifference = remainder.Degree - other.Degree;
									var scale = this.field.multiply(remainder.getCoefficient(remainder.Degree), inverseDenominatorLeadingTerm);
									var term = other.multiplyByMonomial(degreeDifference, scale);
									var iterationQuotient = this.field.buildMonomial(degreeDifference, scale);
									quotient = quotient.addOrSubtract(iterationQuotient);
									remainder = remainder.addOrSubtract(term);
							}
						
							return new Array(quotient, remainder);
					}
	}

	function GF256( primitive)
	{
			this.expTable = new Array(256);
			this.logTable = new Array(256);
			var x = 1;
			for (var i = 0; i < 256; i++)
			{
					this.expTable[i] = x;
					x <<= 1; // x = x * 2; we're assuming the generator alpha is 2
					if (x >= 0x100)
					{
							x ^= primitive;
					}
			}
			for (var i = 0; i < 255; i++)
			{
					this.logTable[this.expTable[i]] = i;
			}
			// logTable[0] == 0 but this should never be used
			var at0=new Array(1);at0[0]=0;
			this.zero = new GF256Poly(this, new Array(at0));
			var at1=new Array(1);at1[0]=1;
			this.one = new GF256Poly(this, new Array(at1));
		
			this.__defineGetter__("Zero", function()
			{
					return this.zero;
			});
			this.__defineGetter__("One", function()
			{
					return this.one;
			});
			this.buildMonomial=function( degree,  coefficient)
					{
							if (degree < 0)
							{
									throw "System.ArgumentException";
							}
							if (coefficient == 0)
							{
									return zero;
							}
							var coefficients = new Array(degree + 1);
							for(var i=0;i<coefficients.length;i++)coefficients[i]=0;
							coefficients[0] = coefficient;
							return new GF256Poly(this, coefficients);
					}
			this.exp=function( a)
					{
							return this.expTable[a];
					}
			this.log=function( a)
					{
							if (a == 0)
							{
									throw "System.ArgumentException";
							}
							return this.logTable[a];
					}
			this.inverse=function( a)
					{
							if (a == 0)
							{
									throw "System.ArithmeticException";
							}
							return this.expTable[255 - this.logTable[a]];
					}
			this.multiply=function( a,  b)
					{
							if (a == 0 || b == 0)
							{
									return 0;
							}
							if (a == 1)
							{
									return b;
							}
							if (b == 1)
							{
									return a;
							}
							return this.expTable[(this.logTable[a] + this.logTable[b]) % 255];
					}                
	}

	GF256.QR_CODE_FIELD = new GF256(0x011D);
	GF256.DATA_MATRIX_FIELD = new GF256(0x012D);

	GF256.addOrSubtract=function( a,  b)
	{
			return a ^ b;
	}

	Decoder={};
	Decoder.rsDecoder = new ReedSolomonDecoder(GF256.QR_CODE_FIELD);

	Decoder.correctErrors=function( codewordBytes,  numDataCodewords)
	{
			var numCodewords = codewordBytes.length;
			// First read into an array of ints
			var codewordsInts = new Array(numCodewords);
			for (var i = 0; i < numCodewords; i++)
			{
					codewordsInts[i] = codewordBytes[i] & 0xFF;
			}
			var numECCodewords = codewordBytes.length - numDataCodewords;
			try
			{
					Decoder.rsDecoder.decode(codewordsInts, numECCodewords);
					//var corrector = new ReedSolomon(codewordsInts, numECCodewords);
					//corrector.correct();
			}
			catch ( rse)
			{
					throw rse;
			}
			// Copy back into array of bytes -- only need to worry about the bytes that were data
			// We don't care about errors in the error-correction codewords
			for (var i = 0; i < numDataCodewords; i++)
			{
					codewordBytes[i] =  codewordsInts[i];
			}
	}

	Decoder.decode=function(bits)
	{
			var parser = new BitMatrixParser(bits);
			var version = parser.readVersion();
			var ecLevel = parser.readFormatInformation().ErrorCorrectionLevel;
		
			// Read codewords
			var codewords = parser.readCodewords();

			// Separate into data blocks
			var dataBlocks = DataBlock.getDataBlocks(codewords, version, ecLevel);
		
			// Count total number of data bytes
			var totalBytes = 0;
			for (var i = 0; i < dataBlocks.length; i++)
			{
					totalBytes += dataBlocks[i].NumDataCodewords;
			}
			var resultBytes = new Array(totalBytes);
			var resultOffset = 0;
		
			// Error-correct and copy data blocks together into a stream of bytes
			for (var j = 0; j < dataBlocks.length; j++)
			{
					var dataBlock = dataBlocks[j];
					var codewordBytes = dataBlock.Codewords;
					var numDataCodewords = dataBlock.NumDataCodewords;
					Decoder.correctErrors(codewordBytes, numDataCodewords);
					for (var i = 0; i < numDataCodewords; i++)
					{
							resultBytes[resultOffset++] = codewordBytes[i];
					}
			}
		
			// Decode the contents of that stream of bytes
			var reader = new QRCodeDataBlockReader(resultBytes, version.VersionNumber, ecLevel.Bits);
			return reader;
			//return DecodedBitStreamParser.decode(resultBytes, version, ecLevel);
	}

	qrcode = {};
	qrcode.imagedata = null;
	qrcode.width = 0;
	qrcode.height = 0;
	qrcode.qrCodeSymbol = null;
	qrcode.debug = false;

	qrcode.sizeOfDataLengthInfo =  [  [ 10, 9, 8, 8 ],  [ 12, 11, 16, 10 ],  [ 14, 13, 16, 12 ] ];

	qrcode.callback = null;

	qrcode.decode = function(src){
		
			if(arguments.length==0)
			{
					var canvas_qr = document.getElementById("qr-canvas");
					var context = canvas_qr.getContext('2d');
					qrcode.width = canvas_qr.width;
					qrcode.height = canvas_qr.height;
					qrcode.imagedata = context.getImageData(0, 0, qrcode.width, qrcode.height);
			qrcode.result = qrcode.process(context);
			if(qrcode.callback!=null)
				qrcode.callback(qrcode.result);
					return qrcode.result;
			}
			else
			{
					var image = new Image();
					image.onload=function(){
							//var canvas_qr = document.getElementById("qr-canvas");
							var canvas_qr = document.createElement('canvas');
							var context = canvas_qr.getContext('2d');
							var canvas_out = document.getElementById("out-canvas");
							if(canvas_out!=null)
				{
					var outctx = canvas_out.getContext('2d');
					outctx.clearRect(0, 0, 320, 240);
									outctx.drawImage(image, 0, 0, 320, 240);
				}
							canvas_qr.width = image.width;
							canvas_qr.height = image.height;
				context.drawImage(image, 0, 0);
							qrcode.width = image.width;
							qrcode.height = image.height;
							try{
									qrcode.imagedata = context.getImageData(0, 0, image.width, image.height);
							}catch(e){
									qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
									if(qrcode.callback!=null)
											qrcode.callback(qrcode.result);
									return;
							}
						
				try
				{
					qrcode.result = qrcode.process(context);
				}
				catch(e)
				{
									console.log(e);
					qrcode.result = "error decoding QR Code";
				}
							if(qrcode.callback!=null)
									qrcode.callback(qrcode.result);
					}
					image.src = src;
			}
	}

	qrcode.decode_utf8 = function ( s )
	{
	  return decodeURIComponent( escape( s ) );
	}

	qrcode.process = function(ctx){
		
			var start = new Date().getTime();

			var image = qrcode.grayScaleToBitmap(qrcode.grayscale());
		//var image = qrcode.binarize(128);
		
		if(qrcode.debug)
		{
			for (var y = 0; y < qrcode.height; y++)
			{
				for (var x = 0; x < qrcode.width; x++)
				{
					var point = (x * 4) + (y * qrcode.width * 4);
					qrcode.imagedata.data[point] = image[x+y*qrcode.width]?0:0;
					qrcode.imagedata.data[point+1] = image[x+y*qrcode.width]?0:0;
					qrcode.imagedata.data[point+2] = image[x+y*qrcode.width]?255:0;
				}
			}
			ctx.putImageData(qrcode.imagedata, 0, 0);
		}
		
			//var finderPatternInfo = new FinderPatternFinder().findFinderPattern(image);
		
			var detector = new Detector(image);

			var qRCodeMatrix = detector.detect();
		
			/*for (var y = 0; y < qRCodeMatrix.bits.Height; y++)
			{
					for (var x = 0; x < qRCodeMatrix.bits.Width; x++)
					{
							var point = (x * 4*2) + (y*2 * qrcode.width * 4);
							qrcode.imagedata.data[point] = qRCodeMatrix.bits.get_Renamed(x,y)?0:0;
							qrcode.imagedata.data[point+1] = qRCodeMatrix.bits.get_Renamed(x,y)?0:0;
							qrcode.imagedata.data[point+2] = qRCodeMatrix.bits.get_Renamed(x,y)?255:0;
					}
			}*/
		if(qrcode.debug)
			ctx.putImageData(qrcode.imagedata, 0, 0);
		
			var reader = Decoder.decode(qRCodeMatrix.bits);
			var data = reader.DataByte;
			var str="";
			for(var i=0;i<data.length;i++)
			{
					for(var j=0;j<data[i].length;j++)
							str+=String.fromCharCode(data[i][j]);
			}
		
			var end = new Date().getTime();
			var time = end - start;
			console.log(time);
	
			return qrcode.decode_utf8(str);
			//alert("Time:" + time + " Code: "+str);
	}

	qrcode.getPixel = function(x,y){
			if (qrcode.width < x) {
					throw "point error";
			}
			if (qrcode.height < y) {
					throw "point error";
			}
			point = (x * 4) + (y * qrcode.width * 4);
			p = (qrcode.imagedata.data[point]*33 + qrcode.imagedata.data[point + 1]*34 + qrcode.imagedata.data[point + 2]*33)/100;
			return p;
	}

	qrcode.binarize = function(th){
			var ret = new Array(qrcode.width*qrcode.height);
			for (var y = 0; y < qrcode.height; y++)
			{
					for (var x = 0; x < qrcode.width; x++)
					{
							var gray = qrcode.getPixel(x, y);
						
							ret[x+y*qrcode.width] = gray<=th?true:false;
					}
			}
			return ret;
	}

	qrcode.getMiddleBrightnessPerArea=function(image)
	{
			var numSqrtArea = 4;
			//obtain middle brightness((min + max) / 2) per area
			var areaWidth = Math.floor(qrcode.width / numSqrtArea);
			var areaHeight = Math.floor(qrcode.height / numSqrtArea);
			var minmax = new Array(numSqrtArea);
			for (var i = 0; i < numSqrtArea; i++)
			{
					minmax[i] = new Array(numSqrtArea);
					for (var i2 = 0; i2 < numSqrtArea; i2++)
					{
							minmax[i][i2] = new Array(0,0);
					}
			}
			for (var ay = 0; ay < numSqrtArea; ay++)
			{
					for (var ax = 0; ax < numSqrtArea; ax++)
					{
							minmax[ax][ay][0] = 0xFF;
							for (var dy = 0; dy < areaHeight; dy++)
							{
									for (var dx = 0; dx < areaWidth; dx++)
									{
											var target = image[areaWidth * ax + dx+(areaHeight * ay + dy)*qrcode.width];
											if (target < minmax[ax][ay][0])
													minmax[ax][ay][0] = target;
											if (target > minmax[ax][ay][1])
													minmax[ax][ay][1] = target;
									}
							}
							//minmax[ax][ay][0] = (minmax[ax][ay][0] + minmax[ax][ay][1]) / 2;
					}
			}
			var middle = new Array(numSqrtArea);
			for (var i3 = 0; i3 < numSqrtArea; i3++)
			{
					middle[i3] = new Array(numSqrtArea);
			}
			for (var ay = 0; ay < numSqrtArea; ay++)
			{
					for (var ax = 0; ax < numSqrtArea; ax++)
					{
							middle[ax][ay] = Math.floor((minmax[ax][ay][0] + minmax[ax][ay][1]) / 2);
							//Console.out.print(middle[ax][ay] + ",");
					}
					//Console.out.println("");
			}
			//Console.out.println("");
		
			return middle;
	}

	qrcode.grayScaleToBitmap=function(grayScale)
	{
			var middle = qrcode.getMiddleBrightnessPerArea(grayScale);
			var sqrtNumArea = middle.length;
			var areaWidth = Math.floor(qrcode.width / sqrtNumArea);
			var areaHeight = Math.floor(qrcode.height / sqrtNumArea);
			var bitmap = new Array(qrcode.height*qrcode.width);
		
			for (var ay = 0; ay < sqrtNumArea; ay++)
			{
					for (var ax = 0; ax < sqrtNumArea; ax++)
					{
							for (var dy = 0; dy < areaHeight; dy++)
							{
									for (var dx = 0; dx < areaWidth; dx++)
									{
											bitmap[areaWidth * ax + dx+ (areaHeight * ay + dy)*qrcode.width] = (grayScale[areaWidth * ax + dx+ (areaHeight * ay + dy)*qrcode.width] < middle[ax][ay])?true:false;
									}
							}
					}
			}
			return bitmap;
	}

	qrcode.grayscale = function(){
			var ret = new Array(qrcode.width*qrcode.height);
			for (var y = 0; y < qrcode.height; y++)
			{
					for (var x = 0; x < qrcode.width; x++)
					{
							var gray = qrcode.getPixel(x, y);
						
							ret[x+y*qrcode.width] = gray;
					}
			}
			return ret;
	}




	function URShift( number,  bits)
	{
			if (number >= 0)
					return number >> bits;
			else
					return (number >> bits) + (2 << ~bits);
	}


	function arrayRemove(array, from, to) {
	  var rest = array.slice((to || from) + 1 || array.length);
	  array.length = from < 0 ? array.length + from : from;
	  return array.push.apply(array, rest);
	}

	var MIN_SKIP = 3;
	var MAX_MODULES = 57;
	var INTEGER_MATH_SHIFT = 8;
	var CENTER_QUORUM = 2;

	qrcode.orderBestPatterns=function(patterns)
					{
						
							function distance( pattern1,  pattern2)
							{
									xDiff = pattern1.X - pattern2.X;
									yDiff = pattern1.Y - pattern2.Y;
									return  Math.sqrt( (xDiff * xDiff + yDiff * yDiff));
							}
						
							/// <summary> Returns the z component of the cross product between vectors BC and BA.</summary>
							function crossProductZ( pointA,  pointB,  pointC)
							{
									var bX = pointB.x;
									var bY = pointB.y;
									return ((pointC.x - bX) * (pointA.y - bY)) - ((pointC.y - bY) * (pointA.x - bX));
							}

						
							// Find distances between pattern centers
							var zeroOneDistance = distance(patterns[0], patterns[1]);
							var oneTwoDistance = distance(patterns[1], patterns[2]);
							var zeroTwoDistance = distance(patterns[0], patterns[2]);
						
							var pointA, pointB, pointC;
							// Assume one closest to other two is B; A and C will just be guesses at first
							if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance)
							{
									pointB = patterns[0];
									pointA = patterns[1];
									pointC = patterns[2];
							}
							else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance)
							{
									pointB = patterns[1];
									pointA = patterns[0];
									pointC = patterns[2];
							}
							else
							{
									pointB = patterns[2];
									pointA = patterns[0];
									pointC = patterns[1];
							}
						
							// Use cross product to figure out whether A and C are correct or flipped.
							// This asks whether BC x BA has a positive z component, which is the arrangement
							// we want for A, B, C. If it's negative, then we've got it flipped around and
							// should swap A and C.
							if (crossProductZ(pointA, pointB, pointC) < 0.0)
							{
									var temp = pointA;
									pointA = pointC;
									pointC = temp;
							}
						
							patterns[0] = pointA;
							patterns[1] = pointB;
							patterns[2] = pointC;
					}


	function FinderPattern(posX, posY,  estimatedModuleSize)
	{
			this.x=posX;
			this.y=posY;
			this.count = 1;
			this.estimatedModuleSize = estimatedModuleSize;
		
			this.__defineGetter__("EstimatedModuleSize", function()
			{
					return this.estimatedModuleSize;
			}); 
			this.__defineGetter__("Count", function()
			{
					return this.count;
			});
			this.__defineGetter__("X", function()
			{
					return this.x;
			});
			this.__defineGetter__("Y", function()
			{
					return this.y;
			});
			this.incrementCount = function()
			{
					this.count++;
			}
			this.aboutEquals=function( moduleSize,  i,  j)
					{
							if (Math.abs(i - this.y) <= moduleSize && Math.abs(j - this.x) <= moduleSize)
							{
									var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
									return moduleSizeDiff <= 1.0 || moduleSizeDiff / this.estimatedModuleSize <= 1.0;
							}
							return false;
					}
		
	}

	function FinderPatternInfo(patternCenters)
	{
			this.bottomLeft = patternCenters[0];
			this.topLeft = patternCenters[1];
			this.topRight = patternCenters[2];
			this.__defineGetter__("BottomLeft", function()
			{
					return this.bottomLeft;
			}); 
			this.__defineGetter__("TopLeft", function()
			{
					return this.topLeft;
			}); 
			this.__defineGetter__("TopRight", function()
			{
					return this.topRight;
			}); 
	}

	function FinderPatternFinder()
	{
			this.image=null;
			this.possibleCenters = [];
			this.hasSkipped = false;
			this.crossCheckStateCount = new Array(0,0,0,0,0);
			this.resultPointCallback = null;
		
			this.__defineGetter__("CrossCheckStateCount", function()
			{
					this.crossCheckStateCount[0] = 0;
					this.crossCheckStateCount[1] = 0;
					this.crossCheckStateCount[2] = 0;
					this.crossCheckStateCount[3] = 0;
					this.crossCheckStateCount[4] = 0;
					return this.crossCheckStateCount;
			}); 
		
			this.foundPatternCross=function( stateCount)
					{
							var totalModuleSize = 0;
							for (var i = 0; i < 5; i++)
							{
									var count = stateCount[i];
									if (count == 0)
									{
											return false;
									}
									totalModuleSize += count;
							}
							if (totalModuleSize < 7)
							{
									return false;
							}
							var moduleSize = Math.floor((totalModuleSize << INTEGER_MATH_SHIFT) / 7);
							var maxVariance = Math.floor(moduleSize / 2);
							// Allow less than 50% variance from 1-1-3-1-1 proportions
							return Math.abs(moduleSize - (stateCount[0] << INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(moduleSize - (stateCount[1] << INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(3 * moduleSize - (stateCount[2] << INTEGER_MATH_SHIFT)) < 3 * maxVariance && Math.abs(moduleSize - (stateCount[3] << INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(moduleSize - (stateCount[4] << INTEGER_MATH_SHIFT)) < maxVariance;
					}
			this.centerFromEnd=function( stateCount,  end)
					{
							return  (end - stateCount[4] - stateCount[3]) - stateCount[2] / 2.0;
					}
			this.crossCheckVertical=function( startI,  centerJ,  maxCount,  originalStateCountTotal)
					{
							var image = this.image;
						
							var maxI = qrcode.height;
							var stateCount = this.CrossCheckStateCount;
						
							// Start counting up from center
							var i = startI;
							while (i >= 0 && image[centerJ + i*qrcode.width])
							{
									stateCount[2]++;
									i--;
							}
							if (i < 0)
							{
									return NaN;
							}
							while (i >= 0 && !image[centerJ +i*qrcode.width] && stateCount[1] <= maxCount)
							{
									stateCount[1]++;
									i--;
							}
							// If already too many modules in this state or ran off the edge:
							if (i < 0 || stateCount[1] > maxCount)
							{
									return NaN;
							}
							while (i >= 0 && image[centerJ + i*qrcode.width] && stateCount[0] <= maxCount)
							{
									stateCount[0]++;
									i--;
							}
							if (stateCount[0] > maxCount)
							{
									return NaN;
							}
						
							// Now also count down from center
							i = startI + 1;
							while (i < maxI && image[centerJ +i*qrcode.width])
							{
									stateCount[2]++;
									i++;
							}
							if (i == maxI)
							{
									return NaN;
							}
							while (i < maxI && !image[centerJ + i*qrcode.width] && stateCount[3] < maxCount)
							{
									stateCount[3]++;
									i++;
							}
							if (i == maxI || stateCount[3] >= maxCount)
							{
									return NaN;
							}
							while (i < maxI && image[centerJ + i*qrcode.width] && stateCount[4] < maxCount)
							{
									stateCount[4]++;
									i++;
							}
							if (stateCount[4] >= maxCount)
							{
									return NaN;
							}
						
							// If we found a finder-pattern-like section, but its size is more than 40% different than
							// the original, assume it's a false positive
							var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
							if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal)
							{
									return NaN;
							}
						
							return this.foundPatternCross(stateCount)?this.centerFromEnd(stateCount, i):NaN;
					}
			this.crossCheckHorizontal=function( startJ,  centerI,  maxCount, originalStateCountTotal)
					{
							var image = this.image;
						
							var maxJ = qrcode.width;
							var stateCount = this.CrossCheckStateCount;
						
							var j = startJ;
							while (j >= 0 && image[j+ centerI*qrcode.width])
							{
									stateCount[2]++;
									j--;
							}
							if (j < 0)
							{
									return NaN;
							}
							while (j >= 0 && !image[j+ centerI*qrcode.width] && stateCount[1] <= maxCount)
							{
									stateCount[1]++;
									j--;
							}
							if (j < 0 || stateCount[1] > maxCount)
							{
									return NaN;
							}
							while (j >= 0 && image[j+ centerI*qrcode.width] && stateCount[0] <= maxCount)
							{
									stateCount[0]++;
									j--;
							}
							if (stateCount[0] > maxCount)
							{
									return NaN;
							}
						
							j = startJ + 1;
							while (j < maxJ && image[j+ centerI*qrcode.width])
							{
									stateCount[2]++;
									j++;
							}
							if (j == maxJ)
							{
									return NaN;
							}
							while (j < maxJ && !image[j+ centerI*qrcode.width] && stateCount[3] < maxCount)
							{
									stateCount[3]++;
									j++;
							}
							if (j == maxJ || stateCount[3] >= maxCount)
							{
									return NaN;
							}
							while (j < maxJ && image[j+ centerI*qrcode.width] && stateCount[4] < maxCount)
							{
									stateCount[4]++;
									j++;
							}
							if (stateCount[4] >= maxCount)
							{
									return NaN;
							}
						
							// If we found a finder-pattern-like section, but its size is significantly different than
							// the original, assume it's a false positive
							var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
							if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal)
							{
									return NaN;
							}
						
							return this.foundPatternCross(stateCount)?this.centerFromEnd(stateCount, j):NaN;
					}
			this.handlePossibleCenter=function( stateCount,  i,  j)
					{
							var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
							var centerJ = this.centerFromEnd(stateCount, j); //float
							var centerI = this.crossCheckVertical(i, Math.floor( centerJ), stateCount[2], stateCountTotal); //float
							if (!isNaN(centerI))
							{
									// Re-cross check
									centerJ = this.crossCheckHorizontal(Math.floor( centerJ), Math.floor( centerI), stateCount[2], stateCountTotal);
									if (!isNaN(centerJ))
									{
											var estimatedModuleSize =   stateCountTotal / 7.0;
											var found = false;
											var max = this.possibleCenters.length;
											for (var index = 0; index < max; index++)
											{
													var center = this.possibleCenters[index];
													// Look for about the same center and module size:
													if (center.aboutEquals(estimatedModuleSize, centerI, centerJ))
													{
															center.incrementCount();
															found = true;
															break;
													}
											}
											if (!found)
											{
													var point = new FinderPattern(centerJ, centerI, estimatedModuleSize);
													this.possibleCenters.push(point);
													if (this.resultPointCallback != null)
													{
															this.resultPointCallback.foundPossibleResultPoint(point);
													}
											}
											return true;
									}
							}
							return false;
					}
				
			this.selectBestPatterns=function()
					{
						
							var startSize = this.possibleCenters.length;
							if (startSize < 3)
							{
									// Couldn't find enough finder patterns
									throw "Couldn't find enough finder patterns";
							}
						
							// Filter outlier possibilities whose module size is too different
							if (startSize > 3)
							{
									// But we can only afford to do so if we have at least 4 possibilities to choose from
									var totalModuleSize = 0.0;
					var square = 0.0;
									for (var i = 0; i < startSize; i++)
									{
											//totalModuleSize +=  this.possibleCenters[i].EstimatedModuleSize;
						var        centerValue=this.possibleCenters[i].EstimatedModuleSize;
											totalModuleSize += centerValue;
											square += (centerValue * centerValue);
									}
									var average = totalModuleSize /  startSize;
					this.possibleCenters.sort(function(center1,center2) {
										  var dA=Math.abs(center2.EstimatedModuleSize - average);
										  var dB=Math.abs(center1.EstimatedModuleSize - average);
										  if (dA < dB) {
												  return (-1);
										  } else if (dA == dB) {
												  return 0;
										  } else {
												  return 1;
										  }
											});

									var stdDev = Math.sqrt(square / startSize - average * average);
									var limit = Math.max(0.2 * average, stdDev);
									for (var i = 0; i < this.possibleCenters.length && this.possibleCenters.length > 3; i++)
									{
											var pattern =  this.possibleCenters[i];
											//if (Math.abs(pattern.EstimatedModuleSize - average) > 0.2 * average)
						if (Math.abs(pattern.EstimatedModuleSize - average) > limit)
											{
													arrayRemove(this.possibleCenters, i);
													i--;
											}
									}
							}
						
							if (this.possibleCenters.length > 3)
							{
									// Throw away all but those first size candidate points we found.
									this.possibleCenters.sort(function(a, b){
											if (a.count > b.count){return -1;}
											if (a.count < b.count){return 1;}
											return 0;
									});
							}
						
							return new Array( this.possibleCenters[0],  this.possibleCenters[1],  this.possibleCenters[2]);
					}
				
			this.findRowSkip=function()
					{
							var max = this.possibleCenters.length;
							if (max <= 1)
							{
									return 0;
							}
							var firstConfirmedCenter = null;
							for (var i = 0; i < max; i++)
							{
									var center =  this.possibleCenters[i];
									if (center.Count >= CENTER_QUORUM)
									{
											if (firstConfirmedCenter == null)
											{
													firstConfirmedCenter = center;
											}
											else
											{
													// We have two confirmed centers
													// How far down can we skip before resuming looking for the next
													// pattern? In the worst case, only the difference between the
													// difference in the x / y coordinates of the two centers.
													// This is the case where you find top left last.
													this.hasSkipped = true;
													return Math.floor ((Math.abs(firstConfirmedCenter.X - center.X) - Math.abs(firstConfirmedCenter.Y - center.Y)) / 2);
											}
									}
							}
							return 0;
					}
		
			this.haveMultiplyConfirmedCenters=function()
					{
							var confirmedCount = 0;
							var totalModuleSize = 0.0;
							var max = this.possibleCenters.length;
							for (var i = 0; i < max; i++)
							{
									var pattern =  this.possibleCenters[i];
									if (pattern.Count >= CENTER_QUORUM)
									{
											confirmedCount++;
											totalModuleSize += pattern.EstimatedModuleSize;
									}
							}
							if (confirmedCount < 3)
							{
									return false;
							}
							// OK, we have at least 3 confirmed centers, but, it's possible that one is a "false positive"
							// and that we need to keep looking. We detect this by asking if the estimated module sizes
							// vary too much. We arbitrarily say that when the total deviation from average exceeds
							// 5% of the total module size estimates, it's too much.
							var average = totalModuleSize / max;
							var totalDeviation = 0.0;
							for (var i = 0; i < max; i++)
							{
									pattern = this.possibleCenters[i];
									totalDeviation += Math.abs(pattern.EstimatedModuleSize - average);
							}
							return totalDeviation <= 0.05 * totalModuleSize;
					}
				
			this.findFinderPattern = function(image){
					var tryHarder = false;
					this.image=image;
					var maxI = qrcode.height;
					var maxJ = qrcode.width;
					var iSkip = Math.floor((3 * maxI) / (4 * MAX_MODULES));
					if (iSkip < MIN_SKIP || tryHarder)
					{
									iSkip = MIN_SKIP;
					}
				
					var done = false;
					var stateCount = new Array(5);
					for (var i = iSkip - 1; i < maxI && !done; i += iSkip)
					{
							// Get a row of black/white values
							stateCount[0] = 0;
							stateCount[1] = 0;
							stateCount[2] = 0;
							stateCount[3] = 0;
							stateCount[4] = 0;
							var currentState = 0;
							for (var j = 0; j < maxJ; j++)
							{
									if (image[j+i*qrcode.width] )
									{
											// Black pixel
											if ((currentState & 1) == 1)
											{
													// Counting white pixels
													currentState++;
											}
											stateCount[currentState]++;
									}
									else
									{
											// White pixel
											if ((currentState & 1) == 0)
											{
													// Counting black pixels
													if (currentState == 4)
													{
															// A winner?
															if (this.foundPatternCross(stateCount))
															{
																	// Yes
																	var confirmed = this.handlePossibleCenter(stateCount, i, j);
																	if (confirmed)
																	{
																			// Start examining every other line. Checking each line turned out to be too
																			// expensive and didn't improve performance.
																			iSkip = 2;
																			if (this.hasSkipped)
																			{
																					done = this.haveMultiplyConfirmedCenters();
																			}
																			else
																			{
																					var rowSkip = this.findRowSkip();
																					if (rowSkip > stateCount[2])
																					{
																							// Skip rows between row of lower confirmed center
																							// and top of presumed third confirmed center
																							// but back up a bit to get a full chance of detecting
																							// it, entire width of center of finder pattern
																						
																							// Skip by rowSkip, but back off by stateCount[2] (size of last center
																							// of pattern we saw) to be conservative, and also back off by iSkip which
																							// is about to be re-added
																							i += rowSkip - stateCount[2] - iSkip;
																							j = maxJ - 1;
																					}
																			}
																	}
																	else
																	{
																			// Advance to next black pixel
																			do 
																			{
																					j++;
																			}
																			while (j < maxJ && !image[j + i*qrcode.width]);
																			j--; // back up to that last white pixel
																	}
																	// Clear state to start looking again
																	currentState = 0;
																	stateCount[0] = 0;
																	stateCount[1] = 0;
																	stateCount[2] = 0;
																	stateCount[3] = 0;
																	stateCount[4] = 0;
															}
															else
															{
																	// No, shift counts back by two
																	stateCount[0] = stateCount[2];
																	stateCount[1] = stateCount[3];
																	stateCount[2] = stateCount[4];
																	stateCount[3] = 1;
																	stateCount[4] = 0;
																	currentState = 3;
															}
													}
													else
													{
															stateCount[++currentState]++;
													}
											}
											else
											{
													// Counting white pixels
													stateCount[currentState]++;
											}
									}
							}
							if (this.foundPatternCross(stateCount))
							{
									var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
									if (confirmed)
									{
											iSkip = stateCount[0];
											if (this.hasSkipped)
											{
													// Found a third one
													done = haveMultiplyConfirmedCenters();
											}
									}
							}
					}
				
					var patternInfo = this.selectBestPatterns();
					qrcode.orderBestPatterns(patternInfo);
				
					return new FinderPatternInfo(patternInfo);
			};
	}

	function AlignmentPattern(posX, posY,  estimatedModuleSize)
	{
			this.x=posX;
			this.y=posY;
			this.count = 1;
			this.estimatedModuleSize = estimatedModuleSize;
		
			this.__defineGetter__("EstimatedModuleSize", function()
			{
					return this.estimatedModuleSize;
			}); 
			this.__defineGetter__("Count", function()
			{
					return this.count;
			});
			this.__defineGetter__("X", function()
			{
					return Math.floor(this.x);
			});
			this.__defineGetter__("Y", function()
			{
					return Math.floor(this.y);
			});
			this.incrementCount = function()
			{
					this.count++;
			}
			this.aboutEquals=function( moduleSize,  i,  j)
					{
							if (Math.abs(i - this.y) <= moduleSize && Math.abs(j - this.x) <= moduleSize)
							{
									var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
									return moduleSizeDiff <= 1.0 || moduleSizeDiff / this.estimatedModuleSize <= 1.0;
							}
							return false;
					}
		
	}

	function AlignmentPatternFinder( image,  startX,  startY,  width,  height,  moduleSize,  resultPointCallback)
	{
			this.image = image;
			this.possibleCenters = new Array();
			this.startX = startX;
			this.startY = startY;
			this.width = width;
			this.height = height;
			this.moduleSize = moduleSize;
			this.crossCheckStateCount = new Array(0,0,0);
			this.resultPointCallback = resultPointCallback;
		
			this.centerFromEnd=function(stateCount,  end)
					{
							return  (end - stateCount[2]) - stateCount[1] / 2.0;
					}
			this.foundPatternCross = function(stateCount)
					{
							var moduleSize = this.moduleSize;
							var maxVariance = moduleSize / 2.0;
							for (var i = 0; i < 3; i++)
							{
									if (Math.abs(moduleSize - stateCount[i]) >= maxVariance)
									{
											return false;
									}
							}
							return true;
					}

			this.crossCheckVertical=function( startI,  centerJ,  maxCount,  originalStateCountTotal)
					{
							var image = this.image;
						
							var maxI = qrcode.height;
							var stateCount = this.crossCheckStateCount;
							stateCount[0] = 0;
							stateCount[1] = 0;
							stateCount[2] = 0;
						
							// Start counting up from center
							var i = startI;
							while (i >= 0 && image[centerJ + i*qrcode.width] && stateCount[1] <= maxCount)
							{
									stateCount[1]++;
									i--;
							}
							// If already too many modules in this state or ran off the edge:
							if (i < 0 || stateCount[1] > maxCount)
							{
									return NaN;
							}
							while (i >= 0 && !image[centerJ + i*qrcode.width] && stateCount[0] <= maxCount)
							{
									stateCount[0]++;
									i--;
							}
							if (stateCount[0] > maxCount)
							{
									return NaN;
							}
						
							// Now also count down from center
							i = startI + 1;
							while (i < maxI && image[centerJ + i*qrcode.width] && stateCount[1] <= maxCount)
							{
									stateCount[1]++;
									i++;
							}
							if (i == maxI || stateCount[1] > maxCount)
							{
									return NaN;
							}
							while (i < maxI && !image[centerJ + i*qrcode.width] && stateCount[2] <= maxCount)
							{
									stateCount[2]++;
									i++;
							}
							if (stateCount[2] > maxCount)
							{
									return NaN;
							}
						
							var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
							if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal)
							{
									return NaN;
							}
						
							return this.foundPatternCross(stateCount)?this.centerFromEnd(stateCount, i):NaN;
					}
				
			this.handlePossibleCenter=function( stateCount,  i,  j)
					{
							var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
							var centerJ = this.centerFromEnd(stateCount, j);
							var centerI = this.crossCheckVertical(i, Math.floor (centerJ), 2 * stateCount[1], stateCountTotal);
							if (!isNaN(centerI))
							{
									var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3.0;
									var max = this.possibleCenters.length;
									for (var index = 0; index < max; index++)
									{
											var center =  this.possibleCenters[index];
											// Look for about the same center and module size:
											if (center.aboutEquals(estimatedModuleSize, centerI, centerJ))
											{
													return new AlignmentPattern(centerJ, centerI, estimatedModuleSize);
											}
									}
									// Hadn't found this before; save it
									var point = new AlignmentPattern(centerJ, centerI, estimatedModuleSize);
									this.possibleCenters.push(point);
									if (this.resultPointCallback != null)
									{
											this.resultPointCallback.foundPossibleResultPoint(point);
									}
							}
							return null;
					}
				
			this.find = function()
			{
							var startX = this.startX;
							var height = this.height;
							var maxJ = startX + width;
							var middleI = startY + (height >> 1);
							// We are looking for black/white/black modules in 1:1:1 ratio;
							// this tracks the number of black/white/black modules seen so far
							var stateCount = new Array(0,0,0);
							for (var iGen = 0; iGen < height; iGen++)
							{
									// Search from middle outwards
									var i = middleI + ((iGen & 0x01) == 0?((iGen + 1) >> 1):- ((iGen + 1) >> 1));
									stateCount[0] = 0;
									stateCount[1] = 0;
									stateCount[2] = 0;
									var j = startX;
									// Burn off leading white pixels before anything else; if we start in the middle of
									// a white run, it doesn't make sense to count its length, since we don't know if the
									// white run continued to the left of the start point
									while (j < maxJ && !image[j + qrcode.width* i])
									{
											j++;
									}
									var currentState = 0;
									while (j < maxJ)
									{
											if (image[j + i*qrcode.width])
											{
													// Black pixel
													if (currentState == 1)
													{
															// Counting black pixels
															stateCount[currentState]++;
													}
													else
													{
															// Counting white pixels
															if (currentState == 2)
															{
																	// A winner?
																	if (this.foundPatternCross(stateCount))
																	{
																			// Yes
																			var confirmed = this.handlePossibleCenter(stateCount, i, j);
																			if (confirmed != null)
																			{
																					return confirmed;
																			}
																	}
																	stateCount[0] = stateCount[2];
																	stateCount[1] = 1;
																	stateCount[2] = 0;
																	currentState = 1;
															}
															else
															{
																	stateCount[++currentState]++;
															}
													}
											}
											else
											{
													// White pixel
													if (currentState == 1)
													{
															// Counting black pixels
															currentState++;
													}
													stateCount[currentState]++;
											}
											j++;
									}
									if (this.foundPatternCross(stateCount))
									{
											var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
											if (confirmed != null)
											{
													return confirmed;
											}
									}
							}
						
							// Hmm, nothing we saw was observed and confirmed twice. If we had
							// any guess at all, return it.
							if (!(this.possibleCenters.length == 0))
							{
									return  this.possibleCenters[0];
							}
						
							throw "Couldn't find enough alignment patterns";
					}
		
	}

	function QRCodeDataBlockReader(blocks,  version,  numErrorCorrectionCode)
	{
			this.blockPointer = 0;
			this.bitPointer = 7;
			this.dataLength = 0;
			this.blocks = blocks;
			this.numErrorCorrectionCode = numErrorCorrectionCode;
			if (version <= 9)
					this.dataLengthMode = 0;
			else if (version >= 10 && version <= 26)
					this.dataLengthMode = 1;
			else if (version >= 27 && version <= 40)
					this.dataLengthMode = 2;
				
			this.getNextBits = function( numBits)
					{                        
							var bits = 0;
							if (numBits < this.bitPointer + 1)
							{
									// next word fits into current data block
									var mask = 0;
									for (var i = 0; i < numBits; i++)
									{
											mask += (1 << i);
									}
									mask <<= (this.bitPointer - numBits + 1);
								
									bits = (this.blocks[this.blockPointer] & mask) >> (this.bitPointer - numBits + 1);
									this.bitPointer -= numBits;
									return bits;
							}
							else if (numBits < this.bitPointer + 1 + 8)
							{
									// next word crosses 2 data blocks
									var mask1 = 0;
									for (var i = 0; i < this.bitPointer + 1; i++)
									{
											mask1 += (1 << i);
									}
									bits = (this.blocks[this.blockPointer] & mask1) << (numBits - (this.bitPointer + 1));
					this.blockPointer++;
									bits += ((this.blocks[this.blockPointer]) >> (8 - (numBits - (this.bitPointer + 1))));
								
									this.bitPointer = this.bitPointer - numBits % 8;
									if (this.bitPointer < 0)
									{
											this.bitPointer = 8 + this.bitPointer;
									}
									return bits;
							}
							else if (numBits < this.bitPointer + 1 + 16)
							{
									// next word crosses 3 data blocks
									var mask1 = 0; // mask of first block
									var mask3 = 0; // mask of 3rd block
									//bitPointer + 1 : number of bits of the 1st block
									//8 : number of the 2nd block (note that use already 8bits because next word uses 3 data blocks)
									//numBits - (bitPointer + 1 + 8) : number of bits of the 3rd block 
									for (var i = 0; i < this.bitPointer + 1; i++)
									{
											mask1 += (1 << i);
									}
									var bitsFirstBlock = (this.blocks[this.blockPointer] & mask1) << (numBits - (this.bitPointer + 1));
									this.blockPointer++;
								
									var bitsSecondBlock = this.blocks[this.blockPointer] << (numBits - (this.bitPointer + 1 + 8));
									this.blockPointer++;
								
									for (var i = 0; i < numBits - (this.bitPointer + 1 + 8); i++)
									{
											mask3 += (1 << i);
									}
									mask3 <<= 8 - (numBits - (this.bitPointer + 1 + 8));
									var bitsThirdBlock = (this.blocks[this.blockPointer] & mask3) >> (8 - (numBits - (this.bitPointer + 1 + 8)));
								
									bits = bitsFirstBlock + bitsSecondBlock + bitsThirdBlock;
									this.bitPointer = this.bitPointer - (numBits - 8) % 8;
									if (this.bitPointer < 0)
									{
											this.bitPointer = 8 + this.bitPointer;
									}
									return bits;
							}
							else
							{
									return 0;
							}
					}
			this.NextMode=function()
			{
					if ((this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2))
							return 0;
					else
							return this.getNextBits(4);
			}
			this.getDataLength=function( modeIndicator)
					{
							var index = 0;
							while (true)
							{
									if ((modeIndicator >> index) == 1)
											break;
									index++;
							}
						
							return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][index]);
					}
			this.getRomanAndFigureString=function( dataLength)
					{
							var length = dataLength;
							var intData = 0;
							var strData = "";
							var tableRomanAndFigure = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':');
							do 
							{
									if (length > 1)
									{
											intData = this.getNextBits(11);
											var firstLetter = Math.floor(intData / 45);
											var secondLetter = intData % 45;
											strData += tableRomanAndFigure[firstLetter];
											strData += tableRomanAndFigure[secondLetter];
											length -= 2;
									}
									else if (length == 1)
									{
											intData = this.getNextBits(6);
											strData += tableRomanAndFigure[intData];
											length -= 1;
									}
							}
							while (length > 0);
						
							return strData;
					}
			this.getFigureString=function( dataLength)
					{
							var length = dataLength;
							var intData = 0;
							var strData = "";
							do 
							{
									if (length >= 3)
									{
											intData = this.getNextBits(10);
											if (intData < 100)
													strData += "0";
											if (intData < 10)
													strData += "0";
											length -= 3;
									}
									else if (length == 2)
									{
											intData = this.getNextBits(7);
											if (intData < 10)
													strData += "0";
											length -= 2;
									}
									else if (length == 1)
									{
											intData = this.getNextBits(4);
											length -= 1;
									}
									strData += intData;
							}
							while (length > 0);
						
							return strData;
					}
			this.get8bitByteArray=function( dataLength)
					{
							var length = dataLength;
							var intData = 0;
							var output = new Array();
						
							do 
							{
									intData = this.getNextBits(8);
									output.push( intData);
									length--;
							}
							while (length > 0);
							return output;
					}
		this.getKanjiString=function( dataLength)
					{
							var length = dataLength;
							var intData = 0;
							var unicodeString = "";
							do 
							{
									intData = getNextBits(13);
									var lowerByte = intData % 0xC0;
									var higherByte = intData / 0xC0;
								
									var tempWord = (higherByte << 8) + lowerByte;
									var shiftjisWord = 0;
									if (tempWord + 0x8140 <= 0x9FFC)
									{
											// between 8140 - 9FFC on Shift_JIS character set
											shiftjisWord = tempWord + 0x8140;
									}
									else
									{
											// between E040 - EBBF on Shift_JIS character set
											shiftjisWord = tempWord + 0xC140;
									}
								
									//var tempByte = new Array(0,0);
									//tempByte[0] = (sbyte) (shiftjisWord >> 8);
									//tempByte[1] = (sbyte) (shiftjisWord & 0xFF);
									//unicodeString += new String(SystemUtils.ToCharArray(SystemUtils.ToByteArray(tempByte)));
					unicodeString += String.fromCharCode(shiftjisWord);
									length--;
							}
							while (length > 0);
						
						
							return unicodeString;
					}

			this.__defineGetter__("DataByte", function()
			{
					var output = new Array();
					var MODE_NUMBER = 1;
				var MODE_ROMAN_AND_NUMBER = 2;
				var MODE_8BIT_BYTE = 4;
				var MODE_KANJI = 8;
					do 
											{
													var mode = this.NextMode();
													//canvas.println("mode: " + mode);
													if (mode == 0)
													{
															if (output.length > 0)
																	break;
															else
																	throw "Empty data block";
													}
													//if (mode != 1 && mode != 2 && mode != 4 && mode != 8)
													//        break;
													//}
													if (mode != MODE_NUMBER && mode != MODE_ROMAN_AND_NUMBER && mode != MODE_8BIT_BYTE && mode != MODE_KANJI)
													{
															/*                                        canvas.println("Invalid mode: " + mode);
															mode = guessMode(mode);
															canvas.println("Guessed mode: " + mode); */
															throw "Invalid mode: " + mode + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
													}
													dataLength = this.getDataLength(mode);
													if (dataLength < 1)
															throw "Invalid data length: " + dataLength;
													//canvas.println("length: " + dataLength);
													switch (mode)
													{
														
															case MODE_NUMBER: 
																	//canvas.println("Mode: Figure");
																	var temp_str = this.getFigureString(dataLength);
																	var ta = new Array(temp_str.length);
																	for(var j=0;j<temp_str.length;j++)
																			ta[j]=temp_str.charCodeAt(j);
																	output.push(ta);
																	break;
														
															case MODE_ROMAN_AND_NUMBER: 
																	//canvas.println("Mode: Roman&Figure");
																	var temp_str = this.getRomanAndFigureString(dataLength);
																	var ta = new Array(temp_str.length);
																	for(var j=0;j<temp_str.length;j++)
																			ta[j]=temp_str.charCodeAt(j);
																	output.push(ta );
																	//output.Write(SystemUtils.ToByteArray(temp_sbyteArray2), 0, temp_sbyteArray2.Length);
																	break;
														
															case MODE_8BIT_BYTE: 
																	//canvas.println("Mode: 8bit Byte");
																	//sbyte[] temp_sbyteArray3;
																	var temp_sbyteArray3 = this.get8bitByteArray(dataLength);
																	output.push(temp_sbyteArray3);
																	//output.Write(SystemUtils.ToByteArray(temp_sbyteArray3), 0, temp_sbyteArray3.Length);
																	break;
														
															case MODE_KANJI: 
																	//canvas.println("Mode: Kanji");
																	//sbyte[] temp_sbyteArray4;
																	//temp_sbyteArray4 = SystemUtils.ToSByteArray(SystemUtils.ToByteArray(getKanjiString(dataLength)));
																	//output.Write(SystemUtils.ToByteArray(temp_sbyteArray4), 0, temp_sbyteArray4.Length);
									var temp_str = this.getKanjiString(dataLength);
																	output.push(temp_str);
																	break;
															}
													//                        
													//canvas.println("DataLength: " + dataLength);
													//Console.out.println(dataString);
											}
											while (true);
					return output;
			});
	}


		function QRCodeScanner(width, height, container, success, error) {
		navigator.getUserMedia = navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia;
		window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

		var _width = width;
		var _height = height;
		var _id_container = container;
		var _id_video = container + '_video';
		var _success = success;
		var _error = error;

		var _container = document.getElementById(container);
		var _video = null;
		var _stream = null;
		var _canvas = null;
		var _ctx = null;
		var _interval = null;

		function isCanvasSupported() {
			var elem = document.createElement('canvas');
			return !!(elem.getContext && elem.getContext('2d'));
		}

		function canvasInit() {
			_canvas = document.createElement('canvas');
			_canvas.width = _width;
			_canvas.height = _height;
			_ctx = _canvas.getContext('2d');
		}

		function captureToCanvas() {
			_ctx.drawImage(_video, 0, 0, _video.videoWidth, _video.videoHeight, 0, 0, _canvas.width, _canvas.height);
			qrcode.decode(_canvas.toDataURL());
		}

		this.isSupported = function() {
			if (!isCanvasSupported()) return false;
			if (!navigator.getUserMedia) return false;
			return true;
		}

		this.start = function() {
			if (_video) return;
			if (navigator.getUserMedia) {
				//Append the video element
				_container.innerHTML = '<video style="width:' + _width + 'px;height:' + _height + 'px" autoplay id="' + _id_video + '"></video>';
				_video = document.getElementById(_id_video);

				navigator.getUserMedia(
					{video: true}, 
					function(stream) {
						_stream = stream;
						_video.src = window.URL.createObjectURL(stream) || stream;

						setTimeout(function() {
							canvasInit();
							_interval = setInterval(captureToCanvas, 500);
						}, 250); // Needed to get videoWidth/videoHeight
					}, 
					function(error) {
						_container.innerHTML = '';
						_video = null;
						if (error && error.message)
							_error(error.message);
						else if (error && error.name)
							_error(error.name);
						else
							_error(error);
					});


				qrcode.callback = function(data) {
					if (data && data.indexOf('error') != 0) {
						stop();
						if (data.indexOf('bitcoin:') == 0)
							data = data.substring(8);
						_success(data);
					}
				};
			}else{
				_error('Sorry your browser is not supported. Please try Firefox, Chrome or safari.');
			}
		}

		function stop() {
			if (_interval) {
				clearInterval(_interval);
				_interval = null;
			}

			_container.innerHTML = '';
			_video = null;

			try {
				if (_stream) {
					_stream.stop();
					_stream = null;
				}
			} catch (e) {
				console.log(e);
				_error(e);
			}
		}
		this.stop = stop;
	}
