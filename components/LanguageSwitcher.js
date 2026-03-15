import React from 'react';
import i18n from 'i18next';

const languageList = require('../lists/languages').languages;

class LanguageSwitcher extends React.Component {
  state = {
    language: i18n.language || 'en',
  };

  updateRightToLeftSupport() {
    if (
      i18n.language === 'ar' ||
      i18n.language === 'ku' ||
      i18n.language === 'fa'
    ) {
      document.body.style.direction = 'rtl';
    } else {
      document.body.style.direction = 'ltr';
    }
  }
  componentDidMount() {
    this.updateRightToLeftSupport();
    i18n.on('languageChanged', this.handleLanguageChanged);

    const savedLanguage = window.localStorage.getItem('verge-language');

    if (savedLanguage && savedLanguage !== i18n.language && languageList.includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
    }
  }

  componentWillUnmount() {
    i18n.off('languageChanged', this.handleLanguageChanged);
  }

  handleLanguageChanged = (language) => {
    this.setState({ language });
    this.updateRightToLeftSupport();
  };

  render() {
    const changeDetection = (e) => {
      const { value } = e.target;
      window.localStorage.setItem('verge-language', value);
      i18n.changeLanguage(value);
    };

    const { language } = this.state;

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
          value={language}
        >
          {languages}
        </select>
        <span className="arrow" />
      </div>
    );
  }
}

export default LanguageSwitcher;
