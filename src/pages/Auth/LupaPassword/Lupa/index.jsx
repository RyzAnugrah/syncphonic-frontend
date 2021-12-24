import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { publicRequest } from "../../../../requestMethods";
import {
  forgotPasswordStart,
  forgotPasswordAccepted,
  forgotPasswordFailure,
} from "../../../../redux/userRedux";

import "./style.css";
import imgLogoTab from "../../../../logo-light.svg";
import imgLogin from "../../../../assets/images/reset.png";

import { FaArrowCircleLeft } from "react-icons/fa";

const Masuk = () => {
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

  const forgoted = async (dispatch, emailData) => {
    dispatch(forgotPasswordStart());
    console.log(emailData);
    try {
      const res = await publicRequest.post("/password/email", emailData);
      dispatch(forgotPasswordAccepted(res.data));
      // console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Silakan cek email anda.",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          history.push("/syncphonic-frontend");
        }, 100);
        reset();
      });
    } catch (err) {
      dispatch(forgotPasswordFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Masukkan email dengan benar.",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickForgot = ({ email }) => {
    forgoted(dispatch, { email });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        history.push("/syncphonic-frontend/auth/password/email/reset");
      }, 1500);
    }
  }, [history, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <p className="login-desc-text text-left mt-4">
              <Link
                style={{ textDecoration: "none" }}
                to="/syncphonic-frontend"
              >
                <span className="login-desc-text-login">
                  <FaArrowCircleLeft /> &#00; Kembali ke Beranda
                </span>
              </Link>
            </p>
            <Link to="/syncphonic-frontend/">
              <img src={imgLogoTab} alt="logo" className="my-4 img-footer" />
            </Link>
            <h1 className="login-title">Lupa Password</h1>
            <p className="agreement">
              Masukkan email anda di bawah untuk mendapatkan instruksi untuk
              merubah password anda.
            </p>
            <form onSubmit={handleSubmit(handleClickForgot)}>
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
              <button
                type="submit"
                className="btn btn-login py-2"
                disabled={isFetching}
              >
                Kirim
              </button>
              {/* <a href="/syncphonic-frontend//auth/password/email/reset">
                ini buat ke page reset pass (hapus aja klo udah bisa lewat
                tombol yg atas)
              </a> */}
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Masuk;
