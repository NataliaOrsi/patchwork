import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import bedBig from "./img/bed_big.jpg";
import bedSmall from "./img/bed_small.jpg";
import embroideredBig from "./img/embroideredPurse_big.jpg";
import embroideredSmall from "./img/embroideredPurse_small.jpg";
import purseBig from "./img/purse_big.jpg";
import purseSmall from "./img/purse_small.jpg";

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
    setSource(purseBig);
    setSubtitle("Bolsa Grande em Patchwork");
  }

  return (
    <div className="Projects">
      <section className="header">
        <h2>{t("projectsPage.title")}</h2>
      </section>
      <section className="Photos-projects">
        <div className="featured-portfolio">
          <img src={source} alt={subtitle} className="gallery-highlight" />
          <div className="work-preview">
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
            <img
              src={purseSmall}
              alt="Bolsa Grande em Patchwork"
              onClick={thirdPhotoFeatured}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
