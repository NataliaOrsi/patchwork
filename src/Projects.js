import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import bedBig from "./img/bed_big.jpg";
import bedSmall from "./img/bed_small.jpg";
import embroideredBig from "./img/embroideredPurse_big.jpg";
import purseBig from "./img/purse_big.jpg";
import cushionsBig from "./img/cushions_big.jpg";
import necessaireBig from "./img/necessaire_big.jpg";
import tableBig from "./img/table_big.jpg";
import colchaBig from "./img/colcha_big.png";
import placematBig from "./img/placemat_big.jpg";
import purse2Big from "./img/purse2_big.jpg";
import basketBig from "./img/basket_big.jpg";
import groupOfNecessairesBig from "./img/groupofnecessaires_big.jpg";
import cushions2Big from "./img/cushions2_big.jpg";
import necessaire2 from "./img/necessaire2.jpg";
import tricotBasket from "./img/tricot_basket.jpg";
import purse3 from "./img/purse3.jpg";
import necessaire3 from "./img/necessaire3.jpg";
import sewingBag from "./img/sewing_bag.jpg";
import tricotBasket2 from "./img/tricot_basket2.jpg";

import "./Photos.css";

export default function Projects() {
  const { t } = useTranslation();

  let [source, setSource] = useState(bedBig);
  let [subtitle, setSubtitle] = useState(t("projectsPage.item1"));

  const items = [
    {
      title: embroideredBig,
      subtitle: t("projectsPage.item2"),
    },
    {
      title: purseBig,
      subtitle: t("projectsPage.item3"),
    },
    {
      title: cushionsBig,
      subtitle: t("projectsPage.item5"),
    },
    {
      title: necessaireBig,
      subtitle: t("projectsPage.item6"),
    },
    {
      title: tableBig,
      subtitle: t("projectsPage.item7"),
    },
    { title: colchaBig, subtitle: t("projectsPage.item1") },
    { title: placematBig, subtitle: t("projectsPage.item8") },
    {
      title: purse2Big,
      subtitle: t("projectsPage.item4"),
    },
    {
      title: basketBig,
      subtitle: t("projectsPage.item9"),
    },
    {
      title: groupOfNecessairesBig,
      subtitle: t("projectsPage.item6"),
    },
    {
      title: cushions2Big,
      subtitle: t("projectsPage.item5"),
    },
    {
      title: necessaire2,
      subtitle: t("projectsPage.item6"),
    },
    {
      title: tricotBasket,
      subtitle: t("projectsPage.item10"),
    },
    {
      title: purse3,
      subtitle: t("projectsPage.item3"),
    },
    {
      title: necessaire3,
      subtitle: t("projectsPage.item6"),
    },
    {
      title: sewingBag,
      subtitle: t("projectsPage.item11"),
    },
    {
      title: tricotBasket2,
      subtitle: t("projectsPage.item10"),
    },
  ];

  const images = items.map((itemns) => (
    <img
      key={itemns}
      src={itemns.title}
      alt={itemns.subtitle}
      className="img-fluid"
      onClick={() => {
        setSource(itemns.title);
        setSubtitle(itemns.subtitle);
      }}
    />
  ));

  function firstPhotoFeatured() {
    setSource(bedBig);
    setSubtitle(t("projectsPage.item1"));
  }

  return (
    <div className="Projects">
      <section className="header">
        <h2>{t("projectsPage.title")}</h2>
      </section>
      <section className="Photos-projects">
        <div className="container-fluid featured-portfolio">
          <div className="row">
            <div className="col-xl-6">
              <img src={source} alt={subtitle} className="gallery-highlight" />
              <p>{subtitle}</p>
            </div>
            <div className="col-xl-6 work-gallery">
              <div className="work-preview mb-3">
                <img
                  src={bedSmall}
                  alt={t("projectsPage.item1")}
                  className="img-fluid work-active"
                  onClick={firstPhotoFeatured}
                />
                {images[0]}
              </div>
              <div className="work-preview mb-3">
                {images[1]}
                {images[2]}
              </div>
              <div className="work-preview">
                {images[3]}
                {images[4]}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 work-gallery">
              <div className="work-preview mb-3">
                {images[5]}
                {images[6]}
              </div>
              <div className="work-preview mb-3">
                {images[7]}
                {images[8]}
              </div>
              <div className="work-preview">
                {images[9]}
                {images[10]}
              </div>
            </div>
            <div className="col-xl-6 work-gallery">
              <div className="work-preview mb-3">
                {images[11]}
                {images[12]}
              </div>
              <div className="work-preview mb-3">
                {images[13]}
                {images[14]}
              </div>
              <div className="work-preview">
                {images[15]}
                {images[16]}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
