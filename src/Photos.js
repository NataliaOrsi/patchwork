import React, { useState } from "react";
import bedBig from "./img/bed_big.jpg";
import bedSmall from "./img/bed_small.jpg";
import embroideredBig from "./img/embroideredPurse_big.jpg";
import embroideredSmall from "./img/embroideredPurse_small.jpg";
import purseBig from "./img/purse_big.jpg";
import purseSmall from "./img/purse_small.jpg";

import "./Photos.css";

export default function Photos() {

    let [source, setSource] = useState(bedBig);
    let [subtitle, setSubtitle]= useState("Colcha em Patchwork")

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
      <section className="Photos">
        <div className="portfolio-introduction">
          <h4>Meu portifolio</h4>
          <p>Trabalhos feito a mão, com foco em bordado e patchwork.</p>
        </div>
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
    );
}