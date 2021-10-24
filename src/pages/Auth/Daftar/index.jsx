import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/apiCalls";
import "./style.css";
import imgLogoTab from "../../../logo-light.svg";
import imgSignUp from "../../../assets/images/daftar.png";

const Daftar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [telp, setTelp] = useState("");
  const [address, setAddress] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const isFetching = useSelector((state) => state.user.isFetching);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleClickRegister = (e) => {
    e.preventDefault();
    register(dispatch, {
      name,
      email,
      password,
      gender,
      telp_number: telp,
      address,
    });
  };

  useEffect(() => {
    if (user) {
      history.push("/syncphonic-frontend");
    }
  }, [history, user, error, isFetching]);

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
              <h1 className="login-title">Daftar</h1>
              <p className="agreement">
                Dengan melanjutkan, Anda menyetujui&nbsp;
                <a href="/syncphonic-frontend/kebijakan">
                  Perjanjian Pengguna dan Kebijakan Privasi&nbsp;
                </a>
                kami.
              </p>
              <form onSubmit={handleClickRegister} disabled={isFetching}>
                <div className="form-group">
                  <label className="fw-bolder" htmlFor="inputNamaLengkap">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-signup"
                    id="inputNamaLengkap"
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    onChange={(e) => setTelp(e.target.value)}
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
                          onChange={(e) => setGender(e.target.value)}
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
                          onChange={(e) => setGender(e.target.value)}
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
                    onChange={(e) => setAddress(e.target.value)}
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
