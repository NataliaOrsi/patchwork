import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="Contact">
      <section className="header">
        <h2>{t('contactPage.title')}</h2>
      </section>
      <div className="contact-details">
        <h4>E-mail</h4>
        <a
          href="mailto:ivanetedemesquita@hotmail.com"
          title="Send an e-mail to Ivanete"
        >
          ivanetedemesquita@hotmail.com
        </a>
        <h4>Instagram</h4>
        <a
          href="https://www.instagram.com/ivaneteorsivieira/"
          title="Send direct to Ivanete"
        >
          @ivaneteorsivieira
        </a>
        <h4>Facebook</h4>
        <a
          href="https://www.facebook.com/ivanete.orsivieira"
          title="Send message to Ivanete"
        >
          @ivanete.orsivieira
        </a>
      </div>
    </div>
  );
}
