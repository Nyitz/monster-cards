import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationES from "./locales/es/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationDE from "./locales/de/translation.json";

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
  tr: {
    translation: translationTR,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
};

//i18N Initialization
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", //default language
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;