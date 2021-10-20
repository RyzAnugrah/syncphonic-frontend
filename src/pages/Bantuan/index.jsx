import React from "react";
import "./style.css";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-color-bantuan p-4">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <p className="bantuan-title">Bantuan</p>
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
                  Umum
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Informasi Kontak
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
                  <div className="col-md-10 mt-4">
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
                            Apa itu Syncphonic?
                          </button>
                        </h2>
                        <div
                          id="collapseOneGeneral"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionGeneral"
                        >
                          <div className="accordion-body">
                            Syncphonic merupakan sebuah platform website all in
                            one yang akan memenuhi berbagai kebutuhan
                            orang-orang akan dunia musik, karena website ini
                            dapat memfasilitasi orang-orang yang ingin menyewa
                            alat musik, menyewa studio musik, dan kursus
                            memainkan alat musik. Hanya dalam satu platform,
                            tentunya website ini juga memberikan banyak
                            kemudahan baik bagi pengelola studio musik maupun
                            para pengguna/pelanggan karena dapat diakses dengan
                            berbagai perangkat dan dapat diakses dimana saja dan
                            kapan saja.
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
                            Apa tujuan dari Syncphonic?
                          </button>
                        </h2>
                        <div
                          id="collapseTwoGeneral"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionGeneral"
                        >
                          <div className="accordion-body">
                            Aplikasi ini merupakan sebuah website untuk suatu
                            usaha studio yang digunakan untuk melayani para
                            pelanggannya dalam hal penyewaan studio musik dan
                            alat musik yang mereka miliki dan juga tersedia les
                            musik yang semua pelayanannya dilakukan melalui
                            website, dengan menggunakan metode ini diharapkan
                            dapat meningkatkan pelayanan studio tersebut
                            terutama dalam penjadwalan penyewaan studio yang
                            lebih mudah dan transparan.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="col-md-10 mt-4">
                    <div className="accordion" id="accordionContact">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneContact"
                            aria-expanded="true"
                            aria-controls="collapseOneContact"
                          >
                            Alamat
                          </button>
                        </h2>
                        <div
                          id="collapseOneContact"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionContact"
                        >
                          <div className="accordion-body">
                            Jl. Pangeran Drajat Gg. Kr. Mulya V No.01, Drajat,
                            Kesambi, Cirebon City, Jawa Barat 45133
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwoContact"
                            aria-expanded="false"
                            aria-controls="collapseTwoContact"
                          >
                            Nomor Telepon
                          </button>
                        </h2>
                        <div
                          id="collapseTwoContact"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionContact"
                        >
                          <div className="accordion-body">0812-3456-7891</div>
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
