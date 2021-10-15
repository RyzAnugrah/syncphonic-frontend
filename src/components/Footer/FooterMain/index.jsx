import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-footer py-3">
        <div className="row justify-content-center py-3">
          <div className="col-md-4 mt-4">
            <span>
              <Link className="footer-title" to="/syncphonic-frontend/">
                Syncphonic
              </Link>
            </span>
            <p className="footer-desc mt-4">
              Penyedia penyewaan studio dan alat musik terlengkap di Cirebon
              menyediakan juga kursus musik bagi pemula.
            </p>
          </div>
          <div className="col-md-2 mt-4">
            <p className="footer-menu">Pelayanan</p>
            <ul className="footer-list-ul mt-4">
              <li className="mt-3">
                <Link
                  className="footer-menu-list"
                  to="/syncphonic-frontend/studio"
                >
                  Sewa Studio
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="footer-menu-list"
                  to="/syncphonic-frontend/alat"
                >
                  Sewa Alat
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="footer-menu-list"
                  to="/syncphonic-frontend/kursus"
                >
                  Kursus Musik
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mt-4">
            <p className="footer-menu">Lainnya</p>
            <ul className="footer-list-ul mt-4">
              <li className="mt-3">
                <Link
                  className="footer-menu-list"
                  to="/syncphonic-frontend/faq"
                >
                  FAQ
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="footer-menu-list"
                  to="/syncphonic-frontend/bantuan"
                >
                  Bantuan
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="footer-menu-list"
                  to="/syncphonic-frontend/kebijakan"
                >
                  Kebijakan Pengguna
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="footer-menu-list"
                  to="/syncphonic-frontend/pengembang"
                >
                  Tim Pengembang
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-4">
            <p className="footer-menu">Alamat</p>
            <p className="footer-desc mt-4">
              Jl. Pangeran Drajat Gg. Kr. Mulya V No.01, Drajat, Kesambi,
              Cirebon City, Jawa Barat 45133
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;