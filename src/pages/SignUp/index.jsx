import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgSignUp from "../../assets/images/signup-hero.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-color-login py-4">
        <div className="container py-4">
          <div className="row bg-color-login-row p-4">
            <div className="col-md-6">
              <img
                src={imgSignUp}
                alt="signup"
                className="img-fluid img-hero-signup"
              />
            </div>
            <div className="col-md-6 p-4">
              <p className="signup-title">Daftar</p>
              <form>
                <div className="form-group">
                  <label htmlFor="inputNamaLengkap">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control form-control-signup"
                    id="inputNamaLengkap"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-signup"
                    id="inputEmail"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-signup"
                    id="inputPassword"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputNomorTelepon">Nomor Telepon</label>
                  <input
                    type="tel"
                    className="form-control form-control-signup"
                    id="inputNomorTelepon"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputJenisKelamin">Jenis Kelamin</label>
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
                  <label htmlFor="inputAlamat">Alamat</label>
                  <input
                    type="text"
                    className="form-control form-control-signup"
                    id="inputAlamat"
                  />
                </div>
                <div className="form-group form-check mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="inputCheck"
                  />
                  <label
                    className="form-check-label signup-desc-text"
                    htmlFor="inputCheck"
                  >
                    Dengan mendaftar anda telah menyetujui
                    <Link to="/syncphonic-frontend/kebijakan">
                      <span className="signup-desc-text-login">
                        &#00; Kebijakan Pengguna dan Privasi
                      </span>
                    </Link>
                    &#00; Syncphonic
                  </label>
                </div>
                <button type="submit" className="btn btn-signup py-2">
                  Daftar
                </button>
              </form>
              <p className="signup-desc-text text-center mt-4">
                Sudah mempunyai akun?
                <Link to="/syncphonic-frontend/login">
                  <span className="signup-desc-text-login">&#00; Masuk</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
