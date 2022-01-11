import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .use(Backend)

  .init({
    react: {
      // By default useSuspense is set to true so React needs fallback UI.
      // Setting useSuspense to false will solve your problem as React will not need fallback UI anymore.
      useSuspense: false,
    },
    // reference: https://www.i18next.com/how-to/add-or-load-translations#load-using-a-backend-plugin
    backend: {
      fallbackLng: "pt",
      supportedLngs: ["en", "pt"],
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
