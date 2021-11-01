import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">Home</Link>
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
                <Link to="/about">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">Projetos</Link>
              </li>
              <li className="nav-item">
                <Link to="/order">Encomenda</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}