import React from "react";
import Photos from "./Photos";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();

    return (
      <div className="Home">
        <section className="header">
          <h1>{t('mainPage.title')}</h1>
          <h3>{t('mainPage.subtitle')}</h3>
        </section>
        <Photos />
      </div>
    );
}