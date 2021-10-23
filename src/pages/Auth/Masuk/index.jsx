import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import imgLogoTab from "../../../logo-light.svg";
import imgLogin from "../../../assets/images/masuk.png";
import { loginAPI } from "../../../axios/authAPI";

const Masuk = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [data, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    loginAPI
      .post("/login", payload)
      .then((res) => {
        console.log(res.data);
        history.push("/syncphonic-frontend/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div id="main-container">
      <section className="auth-sidebar">
        <main className="auth-form-sidebar">
          <div className="auth-sidebar-content">
            <img src={imgLogin} alt="login" className="img-fluid img-sidebar" />
          </div>
        </main>
      </section>
      <section className="auth-form">
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="fw-bolder" htmlFor="emailInput">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-login"
                  id="emailInput"
                  value={email}
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
                  value={password}
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
          </div>
        </main>
      </section>
    </div>
  );
};

export default Masuk;
