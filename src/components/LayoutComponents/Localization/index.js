import { LocaleProvider } from 'antd';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import english from '../../../locales/en-US';

addLocaleData(english.localeData)

const locales = {
  'en-US': english
}

class Localization extends React.Component {
  render() {
    const {
      children
    } = this.props
    const currentLocale = locales['en-US']
    return (
      <LocaleProvider locale={currentLocale.antdData}>
        <IntlProvider locale={currentLocale.locale} messages={currentLocale.messages}>
          {children}
        </IntlProvider>
      </LocaleProvider>
    )
  }
}

export default Localization