import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { publicRequest } from "../../../../requestMethods";
import {
  registerStart,
  registerFailure,
  registerAccepted,
} from "../../../../redux/userRedux";

import "./style.css";
import imgLogoTab from "../../../../logo-light.svg";
import imgSignUp from "../../../../assets/images/reset.png";

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
    watch,
  } = useForm();

  const user = useSelector((state) => state.user.currentUser);
  const isFetching = useSelector((state) => state.user.isFetching);
  const dispatch = useDispatch();
  let history = useHistory();

  const registered = async (dispatch, user) => {
    dispatch(registerStart());
    console.log(user);
    try {
      const res = await publicRequest.post("/register", user);
      // dispatch(registerSuccess(res.data));
      dispatch(registerAccepted());
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
      dispatch(registerFailure());
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

  const handleClickRegister = ({
    name,
    email,
    password,
    gender,
    telp_number,
    address,
  }) => {
    registered(dispatch, {
      name,
      email,
      password,
      gender,
      telp_number,
      address,
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
            <Link to="/syncphonic-frontend/">
              <img src={imgLogoTab} alt="logo" className="mb-4 img-footer" />
            </Link>
            <h1 className="signup-title">Reset Password</h1>
            <p className="agreement">
              Masukkan password baru anda di bawah, pastikan untuk selalu mengingat password baru anda.
            </p>
            <form
              onSubmit={handleSubmit(handleClickRegister)}
              disabled={isFetching}
            >
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
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="error">Password wajib diisi</p>
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
                  {...register("password_confirm", {
                    validate: (value) => value === watch("password"),
                  })}
                />
                {errors.password_confirm &&
                  errors.password_confirm.type === "validate" && (
                    <p className="error">
                      Konfirmasi password baru wajib sama dengan password
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
