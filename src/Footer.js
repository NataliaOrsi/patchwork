import React from "react";

export default function Footer() {
  return (
    <div className="Footer bg-light">
      <footer>
        <div className="footer-information">
          <h5>Trabalhos em Patchwork</h5>
          <a
            href="mailto:ivanetedemesquita@hotmail.com"
            target="_blank"
            rel="noreferrer"
            title="E-mail"
          >
            ivanetedemesquita@hotmail.com
          </a>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/ivanete.orsivieira"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/ivaneteorsivieira/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="mailto:ivanetedemesquita@hotmail.com"
            target="_blank"
            rel="noreferrer"
            title="E-mail"
          >
            <i className="far fa-envelope"></i>
          </a>
        </div>
        <small>
          This website was coded by Natalia de Mesquita Orsi Vieira and is
          open-sourced in GitHub
        </small>
      </footer>
    </div>
  );
}
