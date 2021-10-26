import React, { useEffect } from "react";
import "./style.css";

const Kebijakan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-color-kebijakan">
        <div className="row justify-content-center g-0 px-3 py-4 container-content">
          <div
            className="text-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <p className="kebijakan-title">Kebijakan Pengguna</p>
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
                  id="pills-kebijakan-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-kebijakan"
                  type="button"
                  role="tab"
                  aria-controls="pills-kebijakan"
                  aria-selected="false"
                >
                  Kebijakan
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
                <div className="row justify-content-center g-0 mt-4 container-content">
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
                            Apa itu kebijakan?
                          </button>
                        </h2>
                        <div
                          id="collapseOneGeneral"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionGeneral"
                        >
                          <div className="accordion-body">
                            Kebijakan adalah rangkaian konsep dan asas yang
                            menjadi pedoman dan dasar rencana dalam pelaksanaan
                            suatu pekerjaan, kepemimpinan, dan cara bertindak.
                            Istilah ini dapat diterapkan pada pemerintahan,
                            organisasi dan kelompok sektor swasta, serta
                            individu. Kebijakan berbeda dengan peraturan dan
                            hukum. Jika hukum dapat memaksakan atau melarang
                            suatu perilaku (misalnya suatu hukum yang
                            mengharuskan pembayaran pajak penghasilan),
                            kebijakan hanya menjadi pedoman tindakan yang paling
                            mungkin memperoleh hasil yang diinginkan.
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
                            Apa tujuan dari kebijakan penggunaan?
                          </button>
                        </h2>
                        <div
                          id="collapseTwoGeneral"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionGeneral"
                        >
                          <div className="accordion-body">
                            Kebijakan penggunaan ini bertujuan untuk memberikan
                            batasan yang jelas tentang hal-hal tidak diizinkan
                            bagi pelanggan dalam penggunaan layanan website
                            Syncphonic
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-kebijakan"
                role="tabpanel"
                aria-labelledby="pills-kebijakan-tab"
              >
                <div className="row justify-content-center mt-4">
                  <div className="mt-4">
                    <div className="accordion" id="accordionKebijakan">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOneKebijakan"
                            aria-expanded="true"
                            aria-controls="collapseOneKebijakan"
                          >
                            Pelanggan tidak diperkenankan menggunakan layanan
                            website Syncphonic baik secara sengaja maupun tidak
                            yang terkait dengan?
                          </button>
                        </h2>
                        <div
                          id="collapseOneKebijakan"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionKebijakan"
                        >
                          <div className="accordion-body">
                            Pelanggaran terhadap peraturan dan
                            perundang-undangan Indonesia, pelanggaran terhadap
                            peraturan dan kebijakan regulasi industri musik yang
                            terkait dengan layanan Syncphonic. Pornografi,
                            perjudian, SARA, penghinaan, penistaan, dan
                            kesusilaan umum. Hal-hal yang menyebabkan keresahan,
                            teror, dan ajakan makar. Materi yang memiliki hak
                            cipta. Web proxy, mail proxy, dan jenis – jenis
                            proxy lainnya. Melakukan DDOS, port scanning,
                            sniffing, dan exploit system dan Melakukan
                            tindakan-tindakan yang dapat merugikan pihak lain.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwoKebijakan"
                            aria-expanded="false"
                            aria-controls="collapseTwoKebijakan"
                          >
                            Penghentian layanan?
                          </button>
                        </h2>
                        <div
                          id="collapseTwoKebijakan"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionKebijakan"
                        >
                          <div className="accordion-body">
                            Syncphonic berhak untuk melakukan penghentian
                            layanan tanpa kewajiban untuk pengembalian
                            pembayaran dan menolak segala jenis klaim terhadap
                            jaminan layanan apabila pelanggan melanggar
                            kebijakan penggunaan. Syncphonic berhak melakukan
                            penghentian layanan tanpa pemberitahuan sebelumnya
                            apabila pelanggan melanggar kebijakan penggunaan
                            yang berpontensi merugikan pihak lain. Synpchonic
                            berhak tidak bertanggungjawab terhadap kerugian
                            material dan imaterial yang diderita oleh pelanggan
                            akibat penghentian layanan atas alasan pelanggaran
                            terhadap Kebijakan Penggunaan dan Synpchonic berhak
                            untuk memberlakukan denda untuk Pelanggan yang
                            dengan sengaja melakukan pelanggaran.
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

export default Kebijakan;
