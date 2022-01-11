import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
};

export default function NavigationBar() {
  const { t, i18n } = useTranslation();
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse justify-content-end navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">{t("navBar.title1")}</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">{t("navBar.title2")}</Link>
              </li>
              <li className="nav-item">
                <Link to="/order">{t("navBar.title3")}</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">{t("navBar.title4")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}