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
    
//maybe if you put an if statement before this to check for document like
    //if (document) {
      if(i18n.language == "ru" || i18n.language == "fr") {
        document.body.style.direction = "rtl"
      } else {
        document.body.style.direction = null
      }
      //end the document if
      //}

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
