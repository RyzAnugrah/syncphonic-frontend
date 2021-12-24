import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { publicRequest } from "../../../../requestMethods";
import {
  resetPasswordStart,
  resetPasswordAccepted,
  resetPasswordFailure,
} from "../../../../redux/userRedux";

import "./style.css";
import imgLogoTab from "../../../../logo-light.svg";
import imgSignUp from "../../../../assets/images/reset.png";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const Daftar = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordConfirmVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const user = useSelector((state) => state.user && state.user.currentUser);
  const isFetching = useSelector(
    (state) => state.user && state.user.isFetching
  );
  const dispatch = useDispatch();
  let history = useHistory();

  const queryParams = new URLSearchParams(window.location.search);
  const tokenPassword = queryParams.get("token");

  const reseted = async (
    dispatch,
    { email, password, password_confirmation }
  ) => {
    dispatch(resetPasswordStart());
    console.log({ email, password, password_confirmation });
    try {
      const res = await publicRequest.post(
        `https://server-syncphonic.herokuapp.com/api/password/reset?token=${tokenPassword}&email=${email}&password=${password}&password_confirmation=${password_confirmation}`
      );
      dispatch(resetPasswordAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil merubah password!",
        text: "Silahkan masuk kembali.",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          history.push("/syncphonic-frontend/masuk");
        }, 100);
        reset();
      });
    } catch (err) {
      dispatch(resetPasswordFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal merubah password!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickReset = ({ email, password, password_confirmation }) => {
    reseted(dispatch, {
      email,
      password,
      password_confirmation,
    });
  };

  useEffect(() => {
    if (user) {
      history.push("/syncphonic-frontend");
    }
  }, [history, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="main-container">
      {console.log(tokenPassword)}
      <section className="auth-sidebar">
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
      <section className="auth-form">
        <main className="auth-form-main">
          <div className="auth-form-content">
            <p className="signup-desc-text text-left mt-4">
              <Link
                style={{ textDecoration: "none" }}
                to="/syncphonic-frontend"
              >
                <span className="signup-desc-text-signup">
                  <FaArrowCircleLeft /> &#00; Kembali ke Beranda
                </span>
              </Link>
            </p>
            <Link to="/syncphonic-frontend/">
              <img src={imgLogoTab} alt="logo" className="mb-4 img-footer" />
            </Link>
            <h1 className="signup-title">Reset Password</h1>
            <p className="agreement">
              Masukkan password baru anda di bawah, pastikan untuk selalu
              mengingat password baru anda.
            </p>
            <form onSubmit={handleSubmit(handleClickReset)}>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputEmail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-signup"
                  id="inputEmail"
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
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputPassword">
                  Password Baru &nbsp;
                  <i onClick={togglePasswordVisiblity}>{eye}</i>
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control form-control-signup"
                  id="inputPassword"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="error">Password wajib diisi</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="error">Password minimal 8 karakter</p>
                )}
              </div>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputPasswordConfirm">
                  Konfirmasi Password Baru &nbsp;
                  <i onClick={togglePasswordConfirmVisiblity}>{eye}</i>
                </label>
                <input
                  type={passwordConfirmShown ? "text" : "password"}
                  className="form-control form-control-signup"
                  id="inputPasswordConfirm"
                  {...register("password_confirmation", {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.password_confirmation &&
                  errors.password_confirmation.type === "required" && (
                    <p className="error">Konfirmasi password wajib diisi</p>
                  )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="error">
                    Konfirmasi password minimal 8 karakter
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-signup py-2"
                disabled={isFetching}
              >
                Reset Password
              </button>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Daftar;
