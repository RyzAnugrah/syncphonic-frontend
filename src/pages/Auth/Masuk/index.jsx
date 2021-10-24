import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/apiCalls";
import "./style.css";
import imgLogoTab from "../../../logo-light.svg";
import imgLogin from "../../../assets/images/masuk.png";

const Masuk = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const isFetching = useSelector((state) => state.user.isFetching);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleClickLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  useEffect(() => {
    if (user) {
      history.push("/syncphonic-frontend");
    }
  }, [history, user]);

  return (
    <>
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
                src={imgLogin}
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
              <form onSubmit={handleClickLogin} disabled={isFetching}>
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
                    <span className="login-desc-text-login">
                      Lupa password?
                    </span>
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
    </>
  );
};

export default Masuk;
