import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { publicRequest } from "../../../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../redux/userRedux";

import "./style.css";
import imgLogoTab from "../../../logo-light.svg";
import imgLogin from "../../../assets/images/masuk.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Masuk = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const user = useSelector((state) => state.user.currentUser);
  const isFetching = useSelector((state) => state.user.isFetching);
  const dispatch = useDispatch();
  let history = useHistory();

  const login = async (dispatch, user) => {
    dispatch(loginStart());
    console.log(user);
    try {
      const res = await publicRequest.post("/login", user);
      dispatch(loginSuccess(res.data));
      // console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Yes...",
        text: "Berhasil masuk akun!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Ke home",
        timer: 1500,
      });
      reset();
    } catch (err) {
      dispatch(loginFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal masuk akun!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickLogin = ({ email, password }) => {
    login(dispatch, { email, password });
  };

  useEffect(() => {
    if (user) {
      history.push("/syncphonic-frontend");
      window.location.reload();
    }
  }, [history, user]);

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
            <form
              onSubmit={handleSubmit(handleClickLogin)}
              disabled={isFetching}
            >
              <div className="form-group">
                <label className="fw-bolder" htmlFor="emailInput">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-login"
                  id="emailInput"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="error">Email wajib diisi</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="error">Email tidak valid</p>
                )}
              </div>
              <div className="form-group mt-4">
                <label className="fw-bolder" htmlFor="passwordInput">
                  Password &nbsp; <i onClick={togglePasswordVisiblity}>{eye}</i>
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control form-control-login mb-2"
                  id="passwordInput"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="error">Password wajib diisi</p>
                )}
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
