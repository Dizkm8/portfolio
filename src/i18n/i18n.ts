import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: {
            translation: enTranslations, // Set English translations from JSON file
        },
        es: {
            translation: esTranslations, // Set Spanish translations from JSON file
        },
    },
});

export default i18n;
