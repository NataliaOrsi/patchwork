import React from "react";
import Photos from "./Photos";

export default function Home() {
    return (
      <div className="Home">
        <section className="header">
          <h1>Trabalhos em Patchwork</h1>
          <h2>por Ivanete de Mesquita Orsi Vieira</h2>
        </section>
        <Photos />
      </div>
    );
}