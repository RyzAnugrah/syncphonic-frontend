import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import imgLogoTab from "../../../logo-light.svg";
import imgSignUp from "../../../assets/images/daftar.png";

const Daftar = () => {
  return (
    <div>
      <div id="main-container">
        <section
          className="auth-sidebar"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <main className="auth-form-sidebar">
            <div className="auth-sidebar-content">
              <img
                src={imgSignUp}
                alt="login"
                className="img-fluid img-sidebar"
              />
            </div>
          </main>
        </section>
        <section
          className="auth-form"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <main className="auth-form-main">
            <div className="auth-form-content">
              <Link to="/syncphonic-frontend/">
                <img src={imgLogoTab} alt="logo" className="mb-4 img-footer" />
              </Link>
              <h1 className="login-title">Masuk</h1>
              <p className="agreement">
                Dengan melanjutkan, Anda menyetujui&nbsp;
                <a href="/syncphonic-frontend/kebijakan">
                  Perjanjian Pengguna dan Kebijakan Privasi&nbsp;
                </a>
                kami.
              </p>
              <form>
                <div className="form-group">
                  <label className="fw-bolder" htmlFor="inputNamaLengkap">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-signup"
                    id="inputNamaLengkap"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-signup"
                    id="inputEmail"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-signup"
                    id="inputPassword"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputNomorTelepon">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-signup"
                    id="inputNomorTelepon"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputJenisKelamin">
                    Jenis Kelamin
                  </label>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlinePria"
                          value="Pria"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlinePria"
                        >
                          Pria
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineWanita"
                          value="Wanita"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineWanita"
                        >
                          Wanita
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputAlamat">
                    Alamat
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-signup"
                    id="inputAlamat"
                  />
                </div>
                <hr className="divider mt-5" />
                <button type="submit" className="btn btn-signup py-2">
                  Daftar
                </button>
              </form>
              <p className="login-desc-text text-left mt-4">
                Sudah punya akun?
                <Link
                  style={{ textDecoration: "none" }}
                  to="/syncphonic-frontend/masuk"
                >
                  <span className="login-desc-text-signup">&#00; Masuk</span>
                </Link>
              </p>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Daftar;
