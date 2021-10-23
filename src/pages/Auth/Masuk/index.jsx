import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../../redux/apiCalls";
import "./style.css";
import imgLogoTab from "../../../logo-light.svg";
import imgLogin from "../../../assets/images/masuk.png";

const Masuk = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  const handleClickTemp = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

  return (
    <div id="main-container">
      <section
        className="auth-sidebar"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <main className="auth-form-sidebar">
          <div className="auth-sidebar-content">
            <img src={imgLogin} alt="login" className="img-fluid img-sidebar" />
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
              <img src={imgLogoTab} alt="logo" className="my-4 img-footer" />
            </Link>
            <h1 className="login-title">Masuk</h1>
            <p className="agreement">
              Dengan melanjutkan, Anda menyetujui&nbsp;
              <a href="/syncphonic-frontend/kebijakan">
                Perjanjian Pengguna dan Kebijakan Privasi&nbsp;
              </a>
              kami.
            </p>
            <form onSubmit={handleClick} disabled={isFetching}>
              <div className="form-group">
                <label className="fw-bolder" htmlFor="emailInput">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-login"
                  id="emailInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-4">
                <label className="fw-bolder" htmlFor="passwordInput">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-login mb-2"
                  id="passwordInput"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link
                  style={{ textDecoration: "none" }}
                  to="/syncphonic-frontend/daftar"
                >
                  <span className="login-desc-text-login">Lupa password?</span>
                </Link>
              </div>
              <hr className="divider mt-5" />
              <button type="submit" className="btn btn-login py-2">
                Masuk
              </button>
              {error && <p>Something went wrong...</p>}
            </form>
            <p className="login-desc-text text-left mt-4">
              Belum punya akun?
              <Link
                style={{ textDecoration: "none" }}
                to="/syncphonic-frontend/daftar"
              >
                <span className="login-desc-text-login">&#00; Daftar</span>
              </Link>
            </p>
            <button onClick={handleClickTemp}>Logout</button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Masuk;
