import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { FcGoogle } from "react-icons/fc";
import imgBannerPenyedia from "../../assets/images/homepage-banner-penyedia.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-color-primary p-4">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src={imgBannerPenyedia}
                alt="login"
                className="img-fluid img-banner-login"
              />
            </div>
            <div className="col-md-6 bg-color-white p-4">
              <p className="login-title">Login</p>
              <form>
                <div className="form-group">
                  <label htmlFor="emailInput">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember Me
                  </label>
                </div>
                <button className="btn btn-login-google">
                  <FcGoogle /> Google Login
                </button>
                <button type="submit" className="btn btn-login mt-4">
                  Login
                </button>
              </form>
              <div className="row mt-4 justify-content-center">
                <div className="col-md-3 text-center">
                  <Link to="/syncphonic-frontend/signup">
                    <p>Sign Up</p>
                  </Link>
                </div>
                <div className="col-md-4 text-center">
                  <Link to="#">
                    <p>Forgot Password</p>
                  </Link>
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
