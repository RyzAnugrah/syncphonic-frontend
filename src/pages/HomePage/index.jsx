import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgBannerAyo from "../../assets/images/homepage-banner-ayo.png";
import imgBannerPenyedia from "../../assets/images/homepage-banner-penyedia.png";
import imgBannerPrice from "../../assets/images/homepage-banner-price.png";
import imgIconInstagram from "../../assets/images/homepage-icon-instagram.png";
import imgIconYoutube from "../../assets/images/homepage-icon-youtube.png";
import imgIconEmail from "../../assets/images/homepage-icon-email.png";
import imgIconPrice1 from "../../assets/images/homepage-icon-price-1.png";
import imgIconPrice2 from "../../assets/images/homepage-icon-price-2.png";
import imgIconTestimoni from "../../assets/images/homepage-icon-testimoni.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-homepage p-4">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="homepage-title">Ayo, Warnai Duniamu dengan Musik</p>
              <p className="homepage-desc mt-4">
                Gabung dengan kami untuk meningkatkan kemampuan musik anda
              </p>
              <Link
                className="btn-homepage-text"
                to="/syncphonic-frontend/signup"
              >
                <button className="btn btn-homepage mt-4 py-3" type="button">
                  Bergabung Sekarang!
                </button>
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src={imgBannerAyo}
                alt="homepage"
                className="img-fluid img-banner-ayo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-features p-4">
        <div className="row justify-content-center p-4">
          <div className="col-md-6 bg-homepage-features-img">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <Link to="/syncphonic-frontend/kursus">
                  <div className="card homepage-card-bg-1">
                    <div className="card-body d-flex align-items-center mx-auto">
                      <p className="card-title homepage-card-text">
                        Kursus Musik
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/syncphonic-frontend/alat">
                  <div className="card homepage-card-bg-2">
                    <div className="card-body d-flex align-items-center mx-auto">
                      <p className="card-title homepage-card-text">
                        Sewa Alat Musik
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/syncphonic-frontend/studio">
                  <div className="card homepage-card-bg-3">
                    <div className="card-body d-flex align-items-center mx-auto">
                      <p className="card-title homepage-card-text">
                        Sewa Studio
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-1 my-auto">
            <p className="homepage-title-sub mt-4">
              Mulai latih dan kembangkan bakatmu
            </p>
            <p className="homepage-desc-sub mt-4">
              Kami menyediakan beragam pelayanan untuk menunjang bakat musikmu
              mulai dari sewa studio hingga kursus musik
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage p-4">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-md-4 my-auto">
              <p className="homepage-title-sub mt-4">
                Harga terjangkau dan pastinya berkualitas
              </p>
              <p className="homepage-desc-sub mt-4">
                Kami menyediakan beberapa paket pilihan dengan harga yang lebih
                terjangkau dan berkualitas
              </p>
            </div>
            <div className="col-md-6 banner-price">
              <div className="row">
                <div className="col-md-6">
                  <button
                    className="btn btn-homepage-price btn-homepage-price-1 py-2"
                    type="button"
                  >
                    <img
                      src={imgIconPrice1}
                      alt="homepage"
                      className="img-icon-price"
                    />
                    <span className="homepage-price-text">
                      Harga Terjangkau
                    </span>
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-homepage-price btn-homepage-price-2 py-2"
                    type="button"
                  >
                    <img
                      src={imgIconPrice2}
                      alt="homepage"
                      className="img-icon-price"
                    />
                    <span className="homepage-price-text">
                      Kualitas Terbaik
                    </span>
                  </button>
                  <img
                    src={imgBannerPrice}
                    alt="homepage"
                    className="img-fluid img-banner-price"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-features">
        <div className="row">
          <div className="col-md-6">
            <img
              src={imgBannerPenyedia}
              alt="homepage"
              className="img-fluid img-banner-contact"
            />
          </div>
          <div className="col-md-4 offset-md-1 my-auto">
            <p className="homepage-title-sub mt-4">Syncphonic Studio Musik</p>
            <p className="homepage-desc-sub mt-4">
              Penyedia penyewaan studio dan alat musik terlengkap di Cirebon
              menyediakan juga kursus musik bagi pemula
            </p>
            <p className="mt-4">
              <a href="https://instagram.com">
                <img
                  src={imgIconInstagram}
                  alt="icon"
                  className="img-fluid homepage-icon"
                />
              </a>
              <a href="https://youtube.com">
                <img
                  src={imgIconYoutube}
                  alt="icon"
                  className="img-fluid homepage-icon"
                />
              </a>
              <a href="https://gmail.com">
                <img
                  src={imgIconEmail}
                  alt="icon"
                  className="img-fluid homepage-icon"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-testimoni p-4">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-md-12 my-auto">
              <p className="homepage-title-sub mt-4">Testimoni</p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={imgIconTestimoni}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8 my-auto">
                      <p className="homepage-testimoni-desc">
                        "Tempatnya nyaman dan fasilitasnya lengkap, cocok buat
                        latihan band recommended banget ini sih"
                      </p>
                      <p className="homepage-testimoni-user">
                        David Imanuel Manhattan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={imgIconTestimoni}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8 my-auto">
                      <p className="homepage-testimoni-desc">
                        "Tempatnya nyaman dan fasilitasnya lengkap, cocok buat
                        latihan band recommended banget ini sih"
                      </p>
                      <p className="homepage-testimoni-user">
                        David Imanuel Manhattan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-cta p-4">
        <div className="row justify-content-center h-100">
          <div className="col-md-10 my-auto text-center">
            <p className="homepage-title-sub">
              Warnai duniamu dengan musik dan gabung bersama kami
            </p>
            <Link
              className="btn-homepage-text"
              to="/syncphonic-frontend/signup"
            >
              <button className="btn btn-homepage-cta mt-4 py-3" type="button">
                Bergabung Sekarang!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
