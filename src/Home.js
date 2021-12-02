import React from "react";
import Photos from "./Photos";

export default function Home() {
    return (
      <div className="Home">
        <section className="header">
          <h1>Trabalhos em Patchwork</h1>
          <h3>por Ivanete de Mesquita Orsi Vieira</h3>
        </section>
        <Photos />
      </div>
    );
}