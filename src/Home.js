import React from "react";
import Photos from "./Photos";
import Ivanete from "./img/Ivanete.jpg";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <Photos />
      <section className="header">
        <h1>{t("mainPage.title")}</h1>
        <h3>{t("mainPage.subtitle")}</h3>
      </section>
      <section className="artist">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 artist-paragraph">
              <p>{t("mainPage.aboutParagraph")}</p>
              <button>
                <a href="/about" title="About">
                  {t("mainPage.aboutButton")}
                </a>
              </button>
            </div>
            <div className="col-xl-6 artist-photo d-none d-xl-block">
              <img src={Ivanete} alt="Colcha em patchwork" />
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row d-none d-lg-flex justify-content-between align-items-center contact-box">
          <div className="col-9">
            <h4>{t("mainPage.contactBoxText1")}</h4>
            <h5>{t("mainPage.contactBoxText2")}</h5>
          </div>
          <div className="col-3">
            <button>
              <a href="/order">{t("mainPage.contactBoxButton")}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
