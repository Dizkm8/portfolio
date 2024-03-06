import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true, // TODO: Set to false in production
    resources: {
        en: {
            translation: enTranslations,
        },
        es: {
            translation: esTranslations,
        },
    },
});

export default i18n;
