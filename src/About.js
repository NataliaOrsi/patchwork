import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <section className="header">
        <h2>{t("aboutPage.title")}</h2>
      </section>
      <div className="about-paragraph">
        <p>{t("aboutPage.paragraph")}</p>
      </div>
    </div>
  );
}
