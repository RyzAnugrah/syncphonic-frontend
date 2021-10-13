import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-navbar py-3 px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/syncphonic-frontend/">
            Syncphonic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContentComponent"
            aria-controls="navbarContentComponent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContentComponent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-3 active">
                <Link className="nav-link" to="/syncphonic-frontend/">
                  Beranda
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/syncphonic-frontend/studio">
                  Sewa Studio
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/syncphonic-frontend/alat">
                  Sewa Alat
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/syncphonic-frontend/kursus">
                  Kursus Musik
                </Link>
              </li>
            </ul>
            <span>
              <Link className="nav-signup mx-3" to="/syncphonic-frontend/login">
                Masuk
              </Link>
            </span>
            <button className="btn btn-nav ml-3 px-3" type="button">
              <Link className="btn-nav-text" to="/syncphonic-frontend/signup">
                Daftar
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default index;
