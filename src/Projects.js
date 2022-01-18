import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import bedBig from "./img/bed_big.jpg";
import bedSmall from "./img/bed_small.jpg";
import embroideredBig from "./img/embroideredPurse_big.jpg";
import embroideredSmall from "./img/embroideredPurse_small.jpg";
import purseBig from "./img/purse_big.jpg";
import purseSmall from "./img/purse_small.jpg";
import cushionsBig from "./img/cushions_small.jpg";
import cushionsSmall from "./img/cushions_small.jpg";
import necessaireBig from "./img/necessaire_big.jpg";
import necessaireSmall from "./img/necessaire_small.jpg";
import tableBig from "./img/table_big.jpg";
import tableSmall from "./img/table_small.jpg";

import "./Photos.css";

export default function Projects() {
  const { t } = useTranslation();

  let [source, setSource] = useState(bedBig);
  let [subtitle, setSubtitle] = useState("Colcha em Patchwork");

  function firstPhotoFeatured() {
    setSource(bedBig);
    setSubtitle("Colcha em Patchwork");
  }

  function secondPhotoFeatured() {
    setSource(embroideredBig);
    setSubtitle("Bolsa Pequena Bordada");
  }

  function thirdPhotoFeatured() {
    setSource(cushionsBig);
    setSubtitle("Almofadas em Patchwork");
  }

  function forthPhotoFeatured() {
    setSource(purseBig);
    setSubtitle("Bolsa Grande em Patchwork");
  }

  function fifthPhotoFeatured() {
    setSource(necessaireBig);
    setSubtitle("Necessaire em Patchwork")
  }

  function sixthPhotoFeatured() {
    setSource(tableBig);
    setSubtitle("Toalha de mesas em Patchwork");
  }

  return (
    <div className="Projects">
      <section className="header">
        <h2>{t("projectsPage.title")}</h2>
      </section>
      <section className="Photos-projects">
        <div className="container-fluid featured-portfolio">
          <div className="row">
            <div className="col-6">
              <img src={source} alt={subtitle} className="gallery-highlight" />
            </div>
            <div className="col-6 work-gallery">
              <div className="work-preview mb-3">
                <img
                  src={bedSmall}
                  alt="Colcha em patchwork"
                  className="work-active"
                  onClick={firstPhotoFeatured}
                />
                <img
                  src={embroideredSmall}
                  alt="Bolsa Pequena Bordada"
                  onClick={secondPhotoFeatured}
                />
              </div>
              <div className="work-preview mb-3">
                <img
                  src={cushionsSmall}
                  alt="Bolsa Pequena Bordada"
                  onClick={thirdPhotoFeatured}
                />
                <img
                  src={purseSmall}
                  alt="Bolsa Grande em Patchwork"
                  onClick={forthPhotoFeatured}
                />
              </div>
              <div className="work-preview">
                <img
                  src={necessaireSmall}
                  alt="Necessaire em Patchwork"
                  onClick={fifthPhotoFeatured}
                />
                <img
                  src={tableSmall}
                  alt="Toalha de mesas em Patchwork"
                  onClick={sixthPhotoFeatured}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
