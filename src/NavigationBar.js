import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const lngs = {
  en: { flag: "🇺🇸" },
  pt: { flag: "🇧🇷" },
};

export default function NavigationBar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("🌎");
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            {t("mainPage.title")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/about">
                {t("navBar.title1")}
              </Nav.Link>
              <Nav.Link  href="/projects">
                {t("navBar.title2")}
              </Nav.Link>
              <Nav.Link href="/order">
                {t("navBar.title3")}
              </Nav.Link>
              <Nav.Link href="/contact">
                {t("navBar.title4")}
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                className="justify-content-end"
                title={language}
                id="basic-nav-dropdown"
              >
                {Object.keys(lngs).map((lng) => (
                  <NavDropdown.Item
                    key={lng}
                    style={{
                      fontWeight:
                        i18n.resolvedLanguage === lng ? "bold" : "normal",
                    }}
                    type="submit"
                    onClick={() => {i18n.changeLanguage(lng); setLanguage(lngs[lng].flag)}}
                  >
                    {lngs[lng].flag}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}