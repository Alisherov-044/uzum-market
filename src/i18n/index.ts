import { Language } from "@/types/redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const translations = {
  login: {
    uz: "kirish",
    ru: "войти",
  },
};

function getTrasnslation(key: Language) {
  return Object.assign(
    {},
    ...Object.entries(translations).map((item) => ({
      [item[0]]: item[1][key],
    }))
  );
}

export const resources = {
  uz: {
    translation: getTrasnslation(Language.uz),
  },
  ru: {
    translation: getTrasnslation(Language.ru),
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "uz",
  supportedLngs: ["uz", "ru"],
});

export default i18n;
