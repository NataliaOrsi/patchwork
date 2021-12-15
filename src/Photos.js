import React from "react";
import bedBig from "./img/bed_big.jpg";
import bedSmall from "./img/bed_small.jpg";
import embroideredBig from "./img/embroideredPurse_big.jpg";
import embroideredSmall from "./img/embroideredPurse_small.jpg";
import purseBig from "./img/purse_big.jpg";
import purseSmall from "./img/purse_small.jpg";

import "./Photos.css";

export default function Photos() {
    return (
      <section className="Photos">
        <div className="portfolio-introduction">
          <h4>Meu portifolio</h4>
          <p>Trabalhos feito a mão, com foco em bordado e patchwork.</p>
        </div>
        <div className="featured-portfolio">
          <img
            src={bedBig}
            alt="colcha em patchwork"
            className="gallery-highlight"
          />
          <div className="work-preview">
            <img src={bedSmall} alt="Toalha de Mesa" className="work-active" />
            <img src={embroideredSmall} alt="Bolsa Pequena Bordada" />
            <img src={purseSmall} alt="Bolsa Grande em Patchwork" />
          </div>
        </div>
      </section>
    );
}