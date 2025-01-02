// app/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonTR from '../public/locales/tr/common.json';
import commonEN from '../public/locales/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        common: commonTR,
      },
      en: {
        common: commonEN,
      },
    },
    lng: 'tr', 
    fallbackLng: 'tr',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
