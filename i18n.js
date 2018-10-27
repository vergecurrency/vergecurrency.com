const Resources = require('./locales/index.js');

const i18n = require('i18next');
const LanguageDetector = require('i18next-browser-languagedetector');
const reactI18nextModule = require('react-i18next');

const languageList = require('./lists/languages').languages;

const options = {
  lng: 'en',
  fallbackLng: 'en',
  load: 'all', // no region specific locals like en-US, de-DE


  ns: ['common', 'home'], // have a common namespace used around the full app
  defaultNS: 'common',

  preload: languageList,

  initImmediate: false,
  appendNamespaceToMissingKey: true,

  resources: Resources,

  debug: false,
  saveMissing: false,
  updateMissing: false,

  interpolation: {
    escapeValue: true,
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },

  react: {
    wait: false,
  },
};

if (process.browser) {
  i18n.use(LanguageDetector);
}

i18n.use(reactI18nextModule);

if (!i18n.isInitialized) i18n.init(options);

module.exports = i18n;
