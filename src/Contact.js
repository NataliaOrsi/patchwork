import React from "react";
import { useTranslation } from "react-i18next";
import Ivanete from "./img/Ivanete.jpg";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="Contact">
      <section className="header">
        <h2>{t("contactPage.title")}</h2>
      </section>
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-xl-6 d-flex justify-content-end">
            <div className="contact-details">
              <h4 className="mt-4">
                <i className="far fa-envelope"></i> E-mail
              </h4>
              <a
                href="mailto:ivanetedemesquita@hotmail.com"
                title="Send an e-mail to Ivanete"
              >
                ivanetedemesquita@hotmail.com
              </a>
              <h4>
                <i className="fab fa-instagram"></i> Instagram
              </h4>
              <a
                href="https://www.instagram.com/ivaneteorsivieira/"
                title="Send direct to Ivanete"
              >
                @ivaneteorsivieira
              </a>
              <h4>
                <i className="fab fa-facebook"></i> Facebook
              </h4>
              <a
                href="https://www.facebook.com/ivanete.orsivieira"
                title="Send message to Ivanete"
              >
                @ivanete.orsivieira
              </a>
            </div>
          </div>
          <div className="col-xl-6 about-photo d-none d-xl-block">
            <img
              src={Ivanete}
              alt="Colcha em patchwork"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
