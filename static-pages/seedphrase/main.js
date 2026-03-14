;(function() {
  var mnemonic = new Mnemonic('english')
  var bip32RootKey = null
  var bip32ExtendedKey = null
  var network = bitcoin.networks.bitcoin
  var addressRowTemplate = $('#address-row-template')

  var showIndex = true
  var showAddress = true
  var showPubKey = true
  var showPrivKey = true

  var phraseChangeTimeoutEvent = null

  var DOM = {}
  DOM.network = $('.network')
  DOM.phraseNetwork = $('#network-phrase')
  DOM.phrase = $('.phrase')
  DOM.passphrase = $('.passphrase')
  DOM.generate = $('.generate')
  DOM.rootKey = $('.root-key')
  DOM.extendedPrivKey = $('.extended-priv-key')
  DOM.extendedPubKey = $('.extended-pub-key')
  DOM.bip32tab = $('#bip32-tab')
  DOM.bip44tab = $('#bip44-tab')
  DOM.bip32panel = $('#bip32')
  DOM.bip44panel = $('#bip44')
  DOM.bip32path = $('#bip32-path')
  DOM.bip44path = $('#bip44-path')
  DOM.bip44purpose = $('#bip44 .purpose')
  DOM.bip44coin = $('#bip44 .coin')
  DOM.bip44account = $('#bip44 .account')
  DOM.bip44change = $('#bip44 .change')
  DOM.strength = $('.strength')
  DOM.addresses = $('.addresses')
  DOM.rowsToAdd = $('.rows-to-add')
  DOM.more = $('.more')
  DOM.feedback = $('.feedback')
  DOM.tab = $('.derivation-type a')
  DOM.indexToggle = $('.index-toggle')
  DOM.addressToggle = $('.address-toggle')
  DOM.publicKeyToggle = $('.public-key-toggle')
  DOM.privateKeyToggle = $('.private-key-toggle')

  var derivationPath = $('.tab-pane.active .path').val()

  function init() {
    // Events
    DOM.network.on('change', networkChanged)
    DOM.phrase.on('input', delayedPhraseChanged)
    DOM.passphrase.on('input', delayedPhraseChanged)
    DOM.generate.on('click', generateClicked)
    DOM.more.on('click', showMore)
    DOM.bip32path.on('input', bip32Changed)
    DOM.bip44purpose.on('input', bip44Changed)
    DOM.bip44coin.on('input', bip44Changed)
    DOM.bip44account.on('input', bip44Changed)
    DOM.bip44change.on('input', bip44Changed)
    DOM.tab.on('click', tabClicked)
    DOM.indexToggle.on('click', toggleIndexes)
    DOM.addressToggle.on('click', toggleAddresses)
    DOM.publicKeyToggle.on('click', togglePublicKeys)
    DOM.privateKeyToggle.on('click', togglePrivateKeys)
    disableForms()
    hidePending()
    hideValidationError()
    populateNetworkSelect()
  }

  // Event handlers

  function networkChanged(e) {
    var network = e.target.value
    networks[network].onSelect()
    setBip44DerivationPath()
    delayedPhraseChanged()
  }

  function delayedPhraseChanged() {
    hideValidationError()
    showPending()
    if (phraseChangeTimeoutEvent != null) {
      clearTimeout(phraseChangeTimeoutEvent)
    }
    phraseChangeTimeoutEvent = setTimeout(phraseChanged, 400)
  }

  function phraseChanged() {
    showPending()
    hideValidationError()
    // Get the mnemonic phrase
    var phrase = DOM.phrase.val()
    var passphrase = DOM.passphrase.val()
    var errorText = findPhraseErrors(phrase)
    if (errorText) {
      showValidationError(errorText)
      return
    }
    // Get the derivation path
    var errorText = findDerivationPathErrors()
    if (errorText) {
      showValidationError(errorText)
      return
    }
    // Calculate and display
    calcBip32Seed(phrase, passphrase, derivationPath)
    displayBip32Info()
    hidePending()
  }

  function generateClicked() {
    clearDisplay()
    showPending()
    setTimeout(function() {
      var phrase = generateRandomPhrase()
      if (!phrase) {
        return
      }
      phraseChanged()
    }, 50)
  }

  function tabClicked(e) {
    var activePath = $(e.target.getAttribute('href') + ' .path')
    derivationPath = activePath.val()
    derivationChanged()
  }

  function derivationChanged() {
    delayedPhraseChanged()
  }

  function bip32Changed() {
    derivationPath = DOM.bip32path.val()
    derivationChanged()
  }

  function bip44Changed() {
    setBip44DerivationPath()
    derivationChanged()
  }

  function toggleIndexes() {
    showIndex = !showIndex
    $('td.index span').toggleClass('invisible')
  }

  function toggleAddresses() {
    showAddress = !showAddress
    $('td.address span').toggleClass('invisible')
  }

  function togglePublicKeys() {
    showPubKey = !showPubKey
    $('td.pubkey span').toggleClass('invisible')
  }

  function togglePrivateKeys() {
    showPrivKey = !showPrivKey
    $('td.privkey span').toggleClass('invisible')
  }

  // Private methods

  function generateRandomPhrase() {
    if (!hasStrongRandom()) {
      var errorText = 'This browser does not support strong randomness'
      showValidationError(errorText)
      return
    }
    var numWords = parseInt(DOM.strength.val())
    var strength = numWords / 3 * 32
    var words = mnemonic.generate(strength)
    DOM.phrase.val(words)
    return words
  }

  function calcBip32Seed(phrase, passphrase, path) {
    var seed = mnemonic.toSeed(makeProperPhrase(phrase), passphrase)
    bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network)
    bip32ExtendedKey = bip32RootKey
    // Derive the key from the path
    var pathBits = path.split('/')
    for (var i = 0; i < pathBits.length; i++) {
      var bit = pathBits[i]
      var index = parseInt(bit)
      if (isNaN(index)) {
        continue
      }
      var hardened = bit[bit.length - 1] == "'"
      if (hardened) {
        bip32ExtendedKey = bip32ExtendedKey.deriveHardened(index)
      } else {
        bip32ExtendedKey = bip32ExtendedKey.derive(index)
      }
    }
  }

  function showValidationError(errorText) {
    DOM.feedback.text(errorText).show()
  }

  function hideValidationError() {
    DOM.feedback.text('').hide()
  }

  function makeProperPhrase(phrase) {
    // TODO make this right
    // Preprocess the words
    phrase = mnemonic.normalizeString(phrase)
    var parts = phrase.split(' ')
    var proper = []
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i]
      if (part.length > 0) {
        // TODO check that lowercasing is always valid to do
        proper.push(part.toLowerCase())
      }
    }
    // TODO some levenstein on the words
    return proper.join(' ')
  }

  function findPhraseErrors(phrase) {
    properPhrase = makeProperPhrase(phrase)
    // Check the words are valid
    var isValid = mnemonic.check(properPhrase)
    if (!isValid) {
      return 'Invalid mnemonic'
    }
    return false
  }

  function findDerivationPathErrors(path) {
    // TODO
    return false
  }

  function displayBip32Info() {
    // Display the key
    var rootKey = bip32RootKey.toBase58()
    DOM.rootKey.val(rootKey)
    var extendedPrivKey = bip32ExtendedKey.toBase58()
    DOM.extendedPrivKey.val(extendedPrivKey)
    var extendedPubKey = bip32ExtendedKey.toBase58(false)
    DOM.extendedPubKey.val(extendedPubKey)
    // Display the addresses and privkeys
    clearAddressesList()
    displayAddresses(0, 20)
  }

  function displayAddresses(start, total) {
    for (var i = 0; i < total; i++) {
      var index = i + start
      new TableRow(index)
    }
  }

  function TableRow(index) {
    function init() {
      calculateValues()
    }

    function calculateValues() {
      setTimeout(function() {
        var key = bip32ExtendedKey.derive(index)
        var address
        if (!network.ethereum) {
          address = key.getAddress().toString()
        } else {
          var pubData = new bitcoin.ECKey(key.privKey.d, false).pub.toHex()
          var buffer = new ArrayBuffer(64)
          var view = new Uint8Array(buffer)
          var offset = 0
          for (var i = 2; i < pubData.length; i += 2) {
            view[offset++] = parseInt(pubData.substr(i, 2), 16)
          }
          var addressHex = keccak_256(buffer)
            .substr(24)
            .toLowerCase()
          var checksum = keccak_256(addressHex)
          var address = '0x'
          for (var i = 0; i < addressHex.length; i++) {
            if (parseInt(checksum[i], 16) >= 8) {
              address += addressHex[i].toUpperCase()
            } else {
              address += addressHex[i]
            }
          }
        }
        var privkey

        var pubkey = key.pubKey.toHex()
        if (!network.ethereum) {
          privkey = key.privKey.toWIF(network)
        } else {
          privkey = '0x' + key.privKey.d.toString(16)
          pubkey = '0x' + pubkey
        }
        addAddressToList(index, address, pubkey, privkey)
      }, 50)
    }

    init()
  }

  function showMore() {
    var start = DOM.addresses.children().length
    var rowsToAdd = parseInt(DOM.rowsToAdd.val())
    if (isNaN(rowsToAdd)) {
      rowsToAdd = 20
      DOM.rowsToAdd.val('20')
    }
    if (rowsToAdd > 200) {
      var msg = 'Generating ' + rowsToAdd + ' rows could take a while. '
      msg += 'Do you want to continue?'
      if (!confirm(msg)) {
        return
      }
    }
    displayAddresses(start, rowsToAdd)
  }

  function clearDisplay() {
    clearAddressesList()
    clearKey()
    hideValidationError()
  }

  function clearAddressesList() {
    DOM.addresses.empty()
  }

  function clearKey() {
    DOM.rootKey.val('')
    DOM.extendedPrivKey.val('')
    DOM.extendedPubKey.val('')
  }

  function addAddressToList(index, address, pubkey, privkey) {
    var row = $(addressRowTemplate.html())
    // Elements
    var indexCell = row.find('.index span')
    var addressCell = row.find('.address span')
    var pubkeyCell = row.find('.pubkey span')
    var privkeyCell = row.find('.privkey span')
    // Content
    var indexText = derivationPath + '/' + index
    indexCell.text(indexText)
    addressCell.text(address)
    pubkeyCell.text(pubkey)
    privkeyCell.text(privkey)
    // Visibility
    if (!showIndex) {
      indexCell.addClass('invisible')
    }
    if (!showAddress) {
      addressCell.addClass('invisible')
    }
    if (!showPubKey) {
      pubkeyCell.addClass('invisible')
    }
    if (!showPrivKey) {
      privkeyCell.addClass('invisible')
    }
    DOM.addresses.append(row)
  }

  function hasStrongRandom() {
    return 'crypto' in window && window['crypto'] !== null
  }

  function disableForms() {
    $('form').on('submit', function(e) {
      e.preventDefault()
    })
  }

  function setBip44DerivationPath() {
    var purpose = parseIntNoNaN(DOM.bip44purpose.val(), 44)
    var coin = parseIntNoNaN(DOM.bip44coin.val(), 0)
    var account = parseIntNoNaN(DOM.bip44account.val(), 0)
    var change = parseIntNoNaN(DOM.bip44change.val(), 0)
    var path = 'm/'
    path += purpose + "'/"
    path += coin + "'/"
    path += account + "'"
    if (!network.ethereum) {
      path += '/' + change
    }
    DOM.bip44path.val(path)
    derivationPath = DOM.bip44path.val()
  }

  function parseIntNoNaN(val, defaultVal) {
    var v = parseInt(val)
    if (isNaN(v)) {
      return defaultVal
    }
    return v
  }

  function showPending() {
    DOM.feedback.text('Calculating...').show()
  }

  function hidePending() {
    DOM.feedback.text('').hide()
  }

  function populateNetworkSelect() {
    networks = networks.sort(function(a, b) {
      return a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    })

    for (var i = 0; i < networks.length; i++) {
      var network = networks[i]
      var option = $('<option>')
      option.attr('value', i)
      option.text(network.name)
      DOM.phraseNetwork.append(option)
    }
  }

  var networks = [
    {
      name: 'Verge',
      onSelect: function() {
        network = bitcoin.networks.vergecoin
        DOM.bip44coin.val(77)
      },
    },
  ]

  init()
})()
