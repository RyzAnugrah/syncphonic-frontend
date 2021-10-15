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
                alt="signup"
                className="img-fluid img-banner-signup"
              />
            </div>
            <div className="col-md-6 bg-color-white p-4">
              <p className="signup-title">Sign Up</p>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstNameInput">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstNameInput"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastNameInput">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastNameInput"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="passwordInput">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label htmlFor="telpNumberInput">Telp Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telpNumberInput"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="genderInput">Gender</label>
                    <select id="genderInput" className="form-control">
                      <option value="man" defaultValue>
                        Man
                      </option>
                      <option value="woman">Woman</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div className="form-group mt-3">
                  <label for="photoInput" class="form-label">
                    Photo Profile
                  </label>
                  <input class="form-control" type="file" id="photoInput" />
                </div>
                <div className="form-group form-check mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkInput"
                  />
                  <label className="form-check-label" htmlFor="checkInput">
                    Remember Me
                  </label>
                </div>
                <button className="btn btn-signup-google mt-3">
                  <FcGoogle /> Google Sign Up
                </button>
                <button type="submit" className="btn btn-signup mt-4">
                  Sign Up
                </button>
              </form>
              <div className="row justify-content-center mt-3">
                <div className="col-md-3 text-center">
                  <Link to="/syncphonic-frontend/login">
                    <p>Login</p>
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
