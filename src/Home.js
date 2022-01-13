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
            <div className="col-6 artist-paragraph">
              <p>
                Inspirada por minha mae, interessei-me e aprendi algumas formas
                de artesanato desde cedo. Ao buscar novas formas de expressar
                artes manuais, conheci o patchwork em 2005 e me apaixonei. Desde
                entao, dedico-me a aprender e aperfeicoar cada vez mais essa
                arte.
              </p>
              <button>
                <a href="/about" title="About">
                  Saiba mais
                </a>
              </button>
            </div>
            <div className="col-6 artist-photo">
              <img src={Ivanete} alt="Colcha em patchwork" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
