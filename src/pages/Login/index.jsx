import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgLogin from "../../assets/images/login-hero.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-color-login py-4">
        <div className="container py-4">
          <div className="row bg-color-login-row p-4">
            <div className="col-md-6">
              <img
                src={imgLogin}
                alt="login"
                className="img-fluid img-hero-login"
              />
            </div>
            <div className="col-md-6 p-4">
              <p className="login-title">Masuk</p>
              <form>
                <div className="form-group">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-login"
                    id="emailInput"
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="passwordInput">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-login"
                    id="passwordInput"
                  />
                </div>
                <button type="submit" className="btn btn-login py-2">
                  Masuk
                </button>
              </form>
              <p className="login-desc-text text-center mt-4">
                Belum mempunyai akun?
                <Link to="/syncphonic-frontend/signup">
                  <span className="login-desc-text-signup">&#00; Daftar</span>
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
