import React from 'react';
import i18n from 'i18next';

const languageList = require('../lists/languages').languages;

class LanguageSwitcher extends React.Component {
  updateRightToLeftSupport() {
    if (
      i18n.language == 'ar' ||
      i18n.language == 'ku' ||
      i18n.language == 'fa'
    ) {
      document.body.style.direction = 'rtl';
    } else {
      document.body.style.direction = null;
    }
  }

  componentDidMount() {
    i18n.changeLanguage(localStorage.getItem('language') || 'en', () => {
      this.updateRightToLeftSupport();
    });
  }

  componentWillUpdate() {
    this.updateRightToLeftSupport();
    localStorage.setItem('language', i18n.language);
  }

  render() {
    const changeDetection = e => {
      i18n.changeLanguage(e.target.value);
    };

    const languages = languageList.map(x => (
      <option className="language" key={x} value={x}>
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
