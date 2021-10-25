import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgHeroCard from "../../assets/images/homepage-hero-card.png";
import imgIntro from "../../assets/images/homepage-intro.png";
import imgPrice from "../../assets/images/homepage-price.png";
import imgAbout from "../../assets/images/homepage-about.png";
import imgIconInstagram from "../../assets/images/homepage-icon-instagram.png";
import imgIconYoutube from "../../assets/images/homepage-icon-youtube.png";
import imgIconEmail from "../../assets/images/homepage-icon-email.png";
import imgIconTestimoni from "../../assets/images/homepage-icon-testimoni.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-homepage-hero">
        <div className="row justify-content-center homepage-hero-row">
          <div className="col-md-5 offset-md-1 my-auto">
            <p className="homepage-title">Ayo, Warnai Duniamu dengan Musik</p>
            <p className="homepage-desc mt-4">
              Gabung dengan kami untuk meningkatkan kemampuan musik anda
            </p>
            <Link to="/syncphonic-frontend/signup">
              <button className="btn btn-homepage mt-4 py-2" type="button">
                Bergabung Sekarang!
              </button>
            </Link>
          </div>
          <div className="col-md-6 homepage-hero-img my-auto">
            <div className="row">
              <div className="col-md-5 offset-md-2">
                <div className="card homepage-hero-card p-2">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={imgHeroCard}
                        alt="card"
                        className="img-fluid homepage-hero-card-img"
                      />
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-md-12 text-center mt-2">
                      <p className="homepage-hero-card-title">Studio 1</p>
                    </div>
                    <div className="col-md-6">
                      <button className="btn homepage-hero-card-btn-user">
                        10 Orang
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn homepage-hero-card-btn-status">
                        Available
                      </button>
                    </div>
                    <div className="col-md-12 text-center mt-3">
                      <p className="homepage-hero-card-desc-price">
                        Rp.500.000/Jam
                      </p>
                    </div>
                    <div className="col-md-12 text-center">
                      <Link to="/syncphonic-frontend/studio/1">
                        <button
                          className="btn homepage-hero-card-btn-detail px-4"
                          type="button"
                        >
                          Detail
                        </button>
                      </Link>
                    </div>
                    <div className="col-md-12 text-center mt-3">
                      <Link to="/syncphonic-frontend/studio/1">
                        <button
                          className="btn homepage-hero-card-btn-sewa px-4"
                          type="button"
                        >
                          Sewa
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-intro">
        <div className="row homepage-intro-row">
          <div className="col-md-6 my-auto">
            <img
              src={imgIntro}
              alt="card"
              className="img-fluid homepage-intro-img"
            />
          </div>
          <div className="col-md-4 offset-md-1 my-auto">
            <p className="homepage-title-intro mt-4">
              Mulai latih dan kembangkan bakatmu
            </p>
            <p className="homepage-desc-intro mt-4">
              Kami menyediakan beragam pelayanan untuk menunjang bakat musikmu
              mulai dari sewa studio hingga blog musik
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-price">
        <div className="row justify-content-center homepage-price-row">
          <div className="col-md-4 my-auto order-2 order-md-1">
            <p className="homepage-title-intro mt-4">
              Harga terjangkau dan pastinya berkualitas
            </p>
            <p className="homepage-desc-intro mt-4">
              Kami menyediakan beberapa paket pilihan dengan harga yang lebih
              terjangkau dan berkualitas
            </p>
          </div>
          <div className="col-md-6 my-auto order-1 order-md-2">
            <img
              src={imgPrice}
              alt="card"
              className="img-fluid homepage-price-img"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-about">
        <div className="row homepage-about-row">
          <div className="col-md-6 my-auto">
            <img
              src={imgAbout}
              alt="card"
              className="img-fluid homepage-about-img"
            />
          </div>
          <div className="col-md-4 offset-md-1 my-auto">
            <p className="homepage-title-intro mt-4">Syncphonic Studio Musik</p>
            <p className="homepage-desc-intro mt-4">
              Penyedia penyewaan studio dan alat musik terlengkap di Cirebon
              menyediakan juga blog musik bagi pemula
            </p>
            <p className="mt-4">
              <a href="https://instagram.com">
                <img
                  src={imgIconInstagram}
                  alt="icon"
                  className="img-fluid homepage-about-icon"
                />
              </a>
              <a href="https://youtube.com">
                <img
                  src={imgIconYoutube}
                  alt="icon"
                  className="img-fluid homepage-about-icon"
                />
              </a>
              <a href="https://gmail.com">
                <img
                  src={imgIconEmail}
                  alt="icon"
                  className="img-fluid homepage-about-icon"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-homepage-testimoni">
        <div className="row justify-content-center homepage-testimoni-row">
          <div className="col-md-10 my-auto">
            <p className="homepage-title-intro mt-4">Testimoni</p>
            <div className="row">
              <div className="col-md-6 mt-4">
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
              <div className="col-md-6 mt-4">
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
      <div className="container-fluid bg-homepage-cta">
        <div className="row justify-content-center homepage-cta-row">
          <div className="col-md-10 my-auto text-center">
            <p className="homepage-cta-title">
              Warnai duniamu dengan musik dan gabung bersama kami
            </p>
            <Link to="/syncphonic-frontend/signup">
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
