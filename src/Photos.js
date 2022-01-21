import React from "react";
import bedSmall from "./img/bed_big.jpg";
import embroideredSmall from "./img/embroideredPurse_big.jpg";
import purseSmall from "./img/purse_big.jpg";

import "./Photos.css";

export default function Photos() {
    return (
      <section className="Photos">
        <div className="container-fluid">
          <div className="row featured-photos">
            <div className="col-4 photo-items">
              <img src={bedSmall} alt="Colcha em patchwork" />
            </div>
            <div className="col-4 photo-items">
              <img src={embroideredSmall} alt="Colcha em patchwork" />
            </div>
            <div className="col-4 photo-items">
              <img src={purseSmall} alt="Colcha em patchwork" />
            </div>
          </div>
        </div>
      </section>
    );
}