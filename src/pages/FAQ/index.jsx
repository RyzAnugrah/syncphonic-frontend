import React, { useEffect } from "react";
import "./style.css";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-color-faq">
        <div className="row justify-content-center g-0 px-3 py-4 container-content">
          <div>
            <p className="faq-title">FAQ</p>
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
                  FAQ Umum
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-studio-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-studio"
                  type="button"
                  role="tab"
                  aria-controls="pills-studio"
                  aria-selected="false"
                >
                  Sewa Studio
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-alat-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-alat"
                  type="button"
                  role="tab"
                  aria-controls="pills-alat"
                  aria-selected="false"
                >
                  Sewa Alat
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-blog-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-blog"
                  type="button"
                  role="tab"
                  aria-controls="pills-blog"
                  aria-selected="false"
                >
                  Blog Musik
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
                            className="accordion-button fw-bolder"
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
                            alat musik, menyewa studio musik, dan blog memainkan
                            alat musik. Hanya dalam satu platform, tentunya
                            website ini juga memberikan banyak kemudahan baik
                            bagi pengelola studio musik maupun para
                            pengguna/pelanggan karena dapat diakses dengan
                            berbagai perangkat dan dapat diakses dimana saja dan
                            kapan saja.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed fw-bolder"
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
                id="pills-studio"
                role="tabpanel"
                aria-labelledby="pills-studio-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionStudio">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button fw-bolder"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneStudio"
                            aria-expanded="true"
                            aria-controls="collapseOneStudio"
                          >
                            Bagaimana cara sewa studio di Syncphonic?
                          </button>
                        </h2>
                        <div
                          id="collapseOneStudio"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionStudio"
                        >
                          <div className="accordion-body">
                            Dalam melakukan hal tersebut pengguna harus
                            terdaftar sebagai member studio dan setelah itu
                            pengguna dapat memilih beberapa spesifikasi studio
                            yang yang ada, pengguna akan diarahkan ke dalam
                            formulir pendaftaran sewa serta memilih jadwal yang
                            tersedia dan memilih metode pembayaran, setelah itu
                            pengguna mengirimkan formulir tersebut dan pengguna
                            akan mendapatkan invoice yang menjadi tanda bukti
                            transaksi penyewaan.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-alat"
                role="tabpanel"
                aria-labelledby="pills-alat-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionAlat">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button fw-bolder"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneAlat"
                            aria-expanded="true"
                            aria-controls="collapseOneAlat"
                          >
                            Bagaimana cara sewa alat musik di Syncphonic?
                          </button>
                        </h2>
                        <div
                          id="collapseOneAlat"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionAlat"
                        >
                          <div className="accordion-body">
                            Sama halnya dengan sewa studio pengguna juga harus
                            terdaftar sebagai member studio dan melakukan
                            pengisian form penyewaan yang disediakan dalam
                            website.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-blog"
                role="tabpanel"
                aria-labelledby="pills-blog-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionBlog">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button fw-bolder"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneBlog"
                            aria-expanded="true"
                            aria-controls="collapseOneBlog"
                          >
                            Bagaimana cara ikut blog musik di Syncphonic?
                          </button>
                        </h2>
                        <div
                          id="collapseOneBlog"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionBlog"
                        >
                          <div className="accordion-body">
                            Di fitur ini pengguna juga wajib sudah terdaftar
                            menjadi member studio, di dalam fitur ini pengguna
                            dapat mendaftar untuk mengikuti blog yang disediakan
                            studio, bentuk blog tersebut dapat berupa pelatihan
                            offline maupun online melalui website, hal itu
                            bergantung pada ketersedian dari studio itu sendiri.
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

export default FAQ;
