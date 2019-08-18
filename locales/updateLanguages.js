const fs = require('fs');
const https = require('https');
const fetch = require('isomorphic-unfetch');
const deepfilter = require('deep-filter');

if (process && process.env && !process.env.PO_TOKEN) {
  console.warn('Process enviroment variable PO_TOKEN wasn`t supplied, so we skip the language update process.');
  process.exit(0);
}

const TOKEN = process.env.PO_TOKEN;
const ID = '214541';

const unfetchPOEditor = (url, data = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: encodeFormURL({ ...data, api_token: TOKEN, id: ID }),
}).then(res => res.ok && res.json());

const encodeFormURL = (data) => {
  const formBody = [];
  for (const key in data) {
    formBody.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
  }
  return formBody.join('&');
};

const createDirIfNotExisits = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

const writeJsonToFile = (path, obj) => {
  fs.writeFileSync(path, JSON.stringify(obj));
};

const camelCaseToDash = str =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

unfetchPOEditor('https://api.poeditor.com/v2/languages/list')
  .then(response =>
    response &&
      response.result &&
      response.result.languages instanceof Array &&
      response.result.languages.filter(lang => lang.percentage >= 85))
  .then(languages =>
    Promise.all(languages.map(language =>
      unfetchPOEditor('https://api.poeditor.com/v2/projects/export', {
        language: language.code,
        type: 'key_value_json',
      })
        .then(({ result }) =>
          fetch(result.url).then(res => res.ok && res.json()))
        .then((languageData) => {
          createDirIfNotExisits(`./locales/${language.code}`);
          const keys = Object.keys(languageData);
          keys.forEach((key) => {
            writeJsonToFile(
              `./locales/${language.code}/${camelCaseToDash(key)}.json`,
              deepfilter(languageData[key], value => !!value),
            );
          });
          return language.code;
        }))))
  .then(languagesSupported =>
    writeJsonToFile('./lists/languages.json', { languages: languagesSupported }));
