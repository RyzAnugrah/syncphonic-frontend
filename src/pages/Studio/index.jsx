import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgCarousel from "../../assets/images/homepage-about.png";
import imgStudioCard from "../../assets/images/homepage-hero-card.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-color-studio py-4">
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselCaption"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselCaption"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselCaption"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={imgCarousel}
                    alt="carousel"
                    className="d-block studio-carousel-img mx-auto"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p className="studio-carousel-title">
                      Sewa Studio Sekarang
                    </p>
                    <p className="studio-carousel-desc">
                      Studio dengan berbagai spesifikasi
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={imgCarousel}
                    alt="carousel"
                    className="d-block studio-carousel-img mx-auto"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p className="studio-carousel-title">
                      Sewa Studio Sekarang
                    </p>
                    <p className="studio-carousel-desc">
                      Studio dengan berbagai spesifikasi
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselCaption"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselCaption"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row bg-color-studio-row m-4 p-4">
          <div className="col-md-12">
            <div className="row p-4">
              <div className="col-md-12">
                <p className="studio-list-title">List Studio</p>
              </div>
            </div>
            <div className="row p-4">
              <div className="col-md-3">
                {/* <p className="studio-list-filter">List Studio</p> */}
              </div>
              <div className="col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card studio-card p-4">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src={imgStudioCard}
                            alt="card"
                            className="img-fluid studio-card-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center mt-2">
                          <p className="studio-card-title">Studio 1</p>
                        </div>
                        <div className="col-md-6">
                          <button className="btn studio-card-btn-user">
                            10 Orang
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button className="btn studio-card-btn-status">
                            Available
                          </button>
                        </div>
                        <div className="col-md-12 mt-2">
                          <ul className="studio-card-list">
                            <li className="studio-card-desc">
                              Active Speaker Merk JK MHD 450
                            </li>
                            <li className="studio-card-desc">
                              Subwoofer Single 18″ Merk JK
                            </li>
                            <li className="studio-card-desc">
                              Mic Wireless (2 pcs)
                            </li>
                            <li className="studio-card-desc">
                              Mic Cable (1 pcs)
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-12">
                          <p className="studio-card-margin-top">
                            <Link
                              to="/syncphonic-frontend"
                              className="studio-card-desc-more"
                            >
                              Lihat lainnya
                            </Link>
                          </p>
                        </div>
                        <div className="col-md-12 text-center">
                          <p className="studio-card-desc-price">
                            Rp.500.000/Jam
                          </p>
                        </div>
                        <div className="col-md-12 text-center">
                          <Link to="/syncphonic-frontend">
                            <button
                              className="btn studio-card-btn-sewa px-4"
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
        </div>
      </div>
    </div>
  );
};

export default index;
