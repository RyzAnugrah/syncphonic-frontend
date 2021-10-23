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
        <div className="row m-4 studio-list-container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <p className="studio-list-title">Studio</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <p className="studio-list-filter">Filter</p>
              </div>
              <div className="col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card studio-card p-2">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src={imgStudioCard}
                            alt="card"
                            className="img-fluid studio-card-img"
                          />
                        </div>
                      </div>
                      <div className="row p-2">
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
                            Open
                          </button>
                        </div>
                        <div className="col-md-12 text-center mt-3">
                          <p className="studio-card-desc-price">
                            Rp.500.000/Jam
                          </p>
                        </div>
                        <div className="col-md-12 text-center">
                          <Link to="/syncphonic-frontend/studio/1">
                            <button
                              className="btn studio-card-btn-detail px-4"
                              type="button"
                            >
                              Detail
                            </button>
                          </Link>
                        </div>
                        <div className="col-md-12 text-center mt-3">
                          <Link to="/syncphonic-frontend/studio/1">
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
                  <div className="col">
                    <div className="card studio-card p-2">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src={imgStudioCard}
                            alt="card"
                            className="img-fluid studio-card-img"
                          />
                        </div>
                      </div>
                      <div className="row p-2">
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
                            Open
                          </button>
                        </div>
                        <div className="col-md-12 text-center mt-3">
                          <p className="studio-card-desc-price">
                            Rp.500.000/Jam
                          </p>
                        </div>
                        <div className="col-md-12 text-center">
                          <Link to="/syncphonic-frontend/studio/1">
                            <button
                              className="btn studio-card-btn-detail px-4"
                              type="button"
                            >
                              Detail
                            </button>
                          </Link>
                        </div>
                        <div className="col-md-12 text-center mt-3">
                          <Link to="/syncphonic-frontend/studio/1">
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
