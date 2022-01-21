import React from "react";
import { useTranslation } from "react-i18next";
import Ivanete from "./img/Ivanete.jpg";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <section className="header">
        <h2>{t("aboutPage.title")}</h2>
      </section>
      <div className="container-fluid">
        <div className="row align-items-center mb-5 about-content">
          <div className="col-xl-6 about-photo mt-5 mb-5">
            <img src={Ivanete} alt="Colcha em patchwork" />
          </div>
          <div className="col-xl-6 about-paragraph">
            <p>{t("aboutPage.paragraph")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
