import React from 'react';
import i18n from 'i18next';

const languageList = require('../lists/languages').languages;
// const i18n = require('i18next');

class LanguageSwitcher extends React.Component {
  render() {
    const changeDetection = (e) => {
      i18n.changeLanguage(e.target.value);
    };

    const languages = languageList.map(x => (
      <option
        className="language"
        key={x}
        value={x}
      >
        {x}
      </option>
    ));

    return (
      <div className="language">
        <select
          className="language--select"
          onChange={changeDetection}
          value={i18n.language}
        >
          {languages}
        </select>
      </div>
    );
  }
}

export default LanguageSwitcher;
