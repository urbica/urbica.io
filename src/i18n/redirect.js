/* eslint-disable */
import { PureComponent } from 'react';
import { withPrefix } from 'gatsby-link';
import browserLang from 'browser-lang';
import { languages } from './index';

const checkRuLanguage = (lang) => {
  if ('ru-RU' === lang) {
    return 'ru';
  }

  return lang;
};

class Redirect extends PureComponent {
  constructor(props) {
    super(props);

    const { pathname } = props.location;

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const detected = window.localStorage.getItem('language') ||
        checkRuLanguage(browserLang({
          languages: ['en', 'ru', 'ru-RU'],
          fallback: 'en',
        }));

      const newUrl = withPrefix(`/${detected}${pathname}`);
      window.localStorage.setItem('language', detected);
      window.location.replace(newUrl);
    }
  }

  render() {
    return null;
  }
}

export default Redirect;
