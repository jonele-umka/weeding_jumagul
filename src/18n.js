import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import kgTranslation from "./components/locales/kg/translation.json";
import ruTranslation from "./components/locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    kg: { translation: kgTranslation },
    ru: { translation: ruTranslation },
  },
  lng: "kg",
  fallbackLng: "kg",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
