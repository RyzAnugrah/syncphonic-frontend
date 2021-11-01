import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiPhone, FiYoutube, FiTwitter, FiFacebook } from "react-icons/fi";
import { SiMaildotru } from "react-icons/si";
import imgLogoTab from "../../logo-light.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-fluid bg-footer py-1">
        <div className="row justify-content-between py-3 gx-0">
          <div className="col-md-4 col-footer mt-4 px-1">
            <p>
              <Link to="/syncphonic-frontend/">
                <img src={imgLogoTab} alt="logo" className="img-footer" />
              </Link>
            </p>
            <p className="footer-desc mt-4">
              Penyedia penyewaan studio dan alat musik terlengkap di Cirebon.
              Menyediakan juga blog musik bagi pemula.
            </p>
            <div className="mt-5">
              <p className="footer-menu">Alamat</p>
              <p className="footer-desc mt-4">
                Jl. Pangeran Drajat Gg. Kr. Mulya V No.01, Drajat, Kesambi, Kota
                Cirebon, Jawa Barat 45133
              </p>
            </div>
          </div>
          <div className="col-md-2 col-6 mt-4 px-1">
            <p className="footer-menu">Pelayanan</p>
            <ul className="footer-list-ul mt-4">
              <li className="mt-3">
                <Link
                  to="/syncphonic-frontend/studio"
                  className="footer-menu-list"
                >
                  Sewa Studio
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/syncphonic-frontend/instrument"
                  className="footer-menu-list"
                >
                  Sewa Instrument
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/syncphonic-frontend/blog"
                  className="footer-menu-list"
                >
                  Blog Musik
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6 mt-4 px-1">
            <p className="footer-menu">Lainnya</p>
            <ul className="footer-list-ul mt-4">
              <li className="mt-3">
                <Link
                  to="/syncphonic-frontend/faq"
                  className="footer-menu-list"
                >
                  FAQ
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/syncphonic-frontend/bantuan"
                  className="footer-menu-list"
                >
                  Bantuan
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/syncphonic-frontend/kebijakan"
                  className="footer-menu-list"
                >
                  Kebijakan Pengguna
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/syncphonic-frontend/pengembang"
                  className="footer-menu-list"
                >
                  Tim Pengembang
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mt-4 px-1">
            <div>
              <p className="footer-menu">Hubungi Kami</p>
              <ul className="footer-list-ul mt-4">
                <li className="mt-3">
                  <a href="mailto:syncphonictrial@gmail.com">
                    <SiMaildotru
                      alt="iconEmail"
                      className="img-fluid footer-contact-icon"
                      style={{ color: "#A6711F" }}
                    />
                  </a>
                  <a
                    className="footer-menu-list"
                    href="mailto:syncphonictrial@gmail.com"
                  >
                    syncphonictrial@gmail.com
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://wa.me/6281250002000">
                    <FaWhatsapp
                      alt="iconFacebook"
                      className="img-fluid footer-contact-icon"
                      style={{ color: "#A6711F" }}
                    />
                  </a>
                  <a
                    className="footer-menu-list"
                    href="https://wa.me/6281250002000"
                  >
                    081250002000
                  </a>
                </li>
                <li className="mt-3">
                  <a href="tel:0231500200">
                    <FiPhone
                      alt="iconEmail"
                      className="img-fluid footer-contact-icon"
                      style={{ color: "#A6711F" }}
                    />
                  </a>
                  <a className="footer-menu-list" href="tel:0231500200">
                    (0231) 500200
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-hide mt-5">
              <p className="footer-menu">Ikuti Kami</p>
              <p className="mt-4">
                <a href="https://www.instagram.com/syncphonictrial/">
                  <FaInstagram
                    alt="iconInstagram"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCSIjJzT-fFLKsImjRG_gVBg">
                  <FiYoutube
                    alt="iconYoutube"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
                <a href="https://web.facebook.com/profile.php?id=100074331225066">
                  <FiFacebook
                    alt="iconFacebook"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
                <a href="https://twitter.com/SyncphonicTRIAL">
                  <FiTwitter
                    alt="iconTwitter"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6 col-mobile mt-4 px-3">
            <div className="">
              <p className="footer-menu">Ikuti Kami</p>
              <p className="mt-4">
                <a href="https://www.instagram.com/syncphonictrial/">
                  <FaInstagram
                    alt="iconInstagram"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCSIjJzT-fFLKsImjRG_gVBg">
                  <FiYoutube
                    alt="iconYoutube"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
                <a href="https://web.facebook.com/profile.php?id=100074331225066">
                  <FiFacebook
                    alt="iconFacebook"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
                <a href="https://twitter.com/SyncphonicTRIAL">
                  <FiTwitter
                    alt="iconTwitter"
                    className="img-fluid footer-contact-icon"
                    style={{ color: "#A6711F" }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between py-3">
          <p className="footer-copyright mb-1">Copyright © 2021 Syncphonic.</p>
          <p className="footer-copyright">All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
