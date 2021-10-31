import React, { useEffect } from "react";
import "./style.css";

import imgProduct from "../../assets/images/pengembang-product.jpg";
import imgFrontend from "../../assets/images/pengembang-frontend.jpg";
import imgBackend from "../../assets/images/pengembang-backend.jpg";

const Pengembang = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-color-pengembang">
        <div className="row justify-content-center g-0 px-3 py-4 container-content">
          <div>
            <p className="pengembang-title">Tim Pengembang</p>
            <ul
              className="nav nav-pills nav-justified my-4"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-general-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-general"
                  type="button"
                  role="tab"
                  aria-controls="pills-general"
                  aria-selected="true"
                >
                  Pengembang Umum
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-product-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-product"
                  type="button"
                  role="tab"
                  aria-controls="pills-product"
                  aria-selected="false"
                >
                  Product Owner
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-frontend-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-frontend"
                  type="button"
                  role="tab"
                  aria-controls="pills-frontend"
                  aria-selected="false"
                >
                  Frontend Developer
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-backend-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-backend"
                  type="button"
                  role="tab"
                  aria-controls="pills-backend"
                  aria-selected="false"
                >
                  Backend Developer
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-general"
                role="tabpanel"
                aria-labelledby="pills-general-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionGeneral">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneGeneral"
                            aria-expanded="true"
                            aria-controls="collapseOneGeneral"
                          >
                            Siapa tim pengembang website Syncphonic?
                          </button>
                        </h2>
                        <div
                          id="collapseOneGeneral"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionGeneral"
                        >
                          <div className="accordion-body">
                            Tim pengembang website Syncphonic adalah tiga orang
                            mahasiswa semester 7 Universitas Padjadjaran
                            Fakultas Matematika dan Ilmu Pengetahuan Alam prodi
                            Teknik Informatika. Tim pengembang melakukan
                            pengembangan website ini sebagai tugas atau project
                            dari mata kuliah Proyek Perangkat Lunak II.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwoGeneral"
                            aria-expanded="false"
                            aria-controls="collapseTwoGeneral"
                          >
                            Bagaimana pembagian role pada tim pengembang
                            Syncphonic?
                          </button>
                        </h2>
                        <div
                          id="collapseTwoGeneral"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionGeneral"
                        >
                          <div className="accordion-body">
                            Untuk mengembangkan website Syncphonic ini
                            pengembang membagi beberapa tugas untuk tiga orang.
                            Secara garis besar dapat dibagi menjadi Product
                            Owner, Frontend Developer, dan Backend Developer
                            yang dapat dilihat lebih detail pada tab yang lain.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-product"
                role="tabpanel"
                aria-labelledby="pills-product-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionProduct">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneProduct"
                            aria-expanded="true"
                            aria-controls="collapseOneProduct"
                          >
                            Siapa Product Owner pada Syncphonic ini?
                          </button>
                        </h2>
                        <div
                          id="collapseOneProduct"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionProduct"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-4 my-auto">
                                <img
                                  src={imgProduct}
                                  alt="profile"
                                  className="img-fluid pengembang-img"
                                />
                              </div>
                              <div className="col-md-8 my-auto pengembang-text-name">
                                140810180049 - Rizky Anugerah
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-frontend"
                role="tabpanel"
                aria-labelledby="pills-frontend-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionFrontend">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneFrontend"
                            aria-expanded="true"
                            aria-controls="collapseOneFrontend"
                          >
                            Siapa Frontend Developer pada Syncphonic ini?
                          </button>
                        </h2>
                        <div
                          id="collapseOneFrontend"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionFrontend"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-4 my-auto">
                                <img
                                  src={imgFrontend}
                                  alt="profile"
                                  className="img-fluid pengembang-img"
                                />
                              </div>
                              <div className="col-md-8 my-auto pengembang-text-name">
                                140810180005 - Fauzan Akmal Hariz
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-backend"
                role="tabpanel"
                aria-labelledby="pills-backend-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionBackend">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneBackend"
                            aria-expanded="true"
                            aria-controls="collapseOneBackend"
                          >
                            Siapa Backend Developer pada Syncphonic ini?
                          </button>
                        </h2>
                        <div
                          id="collapseOneBackend"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionBackend"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-4 my-auto">
                                <img
                                  src={imgBackend}
                                  alt="profile"
                                  className="img-fluid pengembang-img"
                                />
                              </div>
                              <div className="col-md-8 my-auto pengembang-text-name">
                                140810180013 - Alvin
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
        </div>
      </div>
    </div>
  );
};

export default Pengembang;
