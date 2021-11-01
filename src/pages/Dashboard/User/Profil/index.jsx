import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { publicRequest } from "../../../../requestMethods";
import { registerStart, registerFailure } from "../../../../redux/userRedux";

import jQuery from "jquery";
import Sidebar from "../../../../components/Dashboard/User/Sidebar/index";
import Navbar from "../../../../components/Dashboard/User/Navbar/index";
import Footer from "../../../../components/Dashboard/User/Footer/index";
// import { FaWarehouse, FaTachometerAlt, FaBlog, FaTrash } from "react-icons/fa";
// import { GiGuitarHead } from "react-icons/gi";
import "./style.css";
import "../style.css";

// import imgLogoTab from "../../../logo-light.svg";
// import imgSignUp from "../../../assets/images/daftar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../../../../assets/images/undraw_profile.svg";

(function ($) {
  "use strict";

  $(function () {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $(window).on("resize", function () {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }

      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        if ($(window).width() > 768) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      }
    );

    $(document).ready(function () {
      // Prepare the preview for profile picture
      $("#wizard-picture").change(function () {
        readURL(this);
      });
    });

    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $("#wizardPicturePreview")
            .attr("src", e.target.result)
            .fadeIn("slow");
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
  });
})(jQuery);

const eye = <FontAwesomeIcon icon={faEye} />;

const Profil = () => {
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
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Yes...",
        text: "Berhasil daftar akun!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Silahkan masuk",
        timer: 1500,
      });
      reset();
      history.push("/syncphonic-frontend/masuk");
    } catch (err) {
      dispatch(registerFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal daftar akun!",
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
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Profil</h1>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="container">
                  <div className="picture-container">
                    <div className="picture">
                      <img
                        src={profilePicture}
                        className="picture-src"
                        id="wizardPicturePreview"
                        alt="profile"
                      />
                      <input type="file" id="wizard-picture" className="" />
                    </div>
                    <button className="btn-picture">Ubah Foto Profil</button>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-4">
                <main className="auth-form-main mx-auto">
                  <div className="auth-form-content">
                    <form
                      onSubmit={handleSubmit(handleClickRegister)}
                      disabled={isFetching}
                    >
                      <div className="form-group">
                        <label className="fw-bolder" htmlFor="inputNamaLengkap">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-signup"
                          id="inputNamaLengkap"
                          {...register("name", {
                            required: true,
                            pattern:
                              /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                            maxLength: 100,
                          })}
                        />
                        {errors.name && errors.name.type === "required" && (
                          <p className="error">Nama lengkap wajib diisi</p>
                        )}
                        {errors.name && errors.name.type === "pattern" && (
                          <p className="error">
                            Nama lengkap hanya berisi huruf
                          </p>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                          <p className="error">
                            Nama lengkap maksimal 100 karakter
                          </p>
                        )}
                      </div>
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
                          Password &nbsp;
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
                        {errors.password &&
                          errors.password.type === "required" && (
                            <p className="error">Password wajib diisi</p>
                          )}
                      </div>
                      <div className="form-group mt-3">
                        <label
                          className="fw-bolder"
                          htmlFor="inputPasswordConfirm"
                        >
                          Konfirmasi Password &nbsp;
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
                              Konfirmasi password wajib sama dengan password
                            </p>
                          )}
                      </div>
                      <div className="form-group mt-3">
                        <label
                          className="fw-bolder"
                          htmlFor="inputNomorTelepon"
                        >
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-signup"
                          id="inputNomorTelepon"
                          {...register("telp_number", {
                            required: true,
                            pattern:
                              /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/i,
                            minLength: 6,
                            maxLength: 12,
                          })}
                        />
                        {errors.telp_number &&
                          errors.telp_number.type === "required" && (
                            <p className="error">Nomor telepon wajib diisi</p>
                          )}
                        {errors.telp_number &&
                          errors.telp_number.type === "pattern" && (
                            <p className="error">
                              Nomor telepon hanya berisi angka
                            </p>
                          )}
                        {errors.telp_number &&
                          errors.telp_number.type === "minLength" && (
                            <p className="error">
                              Nomor telepon minimal 6 angka
                            </p>
                          )}
                        {errors.telp_number &&
                          errors.telp_number.type === "maxLength" && (
                            <p className="error">
                              Nomor telepon maksimal 12 angka
                            </p>
                          )}
                      </div>
                      <div className="form-group mt-3">
                        <label
                          className="fw-bolder"
                          htmlFor="inputJenisKelamin"
                        >
                          Jenis Kelamin
                        </label>
                        <div className="row">
                          <div className="col-6">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlinePria"
                                value="Pria"
                                defaultChecked
                                {...register("gender", { required: true })}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlinePria"
                              >
                                Pria
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineWanita"
                                value="Wanita"
                                {...register("gender", { required: true })}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineWanita"
                              >
                                Wanita
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <label className="fw-bolder" htmlFor="inputAlamat">
                          Alamat
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-signup"
                          id="inputAlamat"
                          {...register("address", {
                            required: true,
                            maxLength: 200,
                          })}
                        />
                        {errors.address &&
                          errors.address.type === "required" && (
                            <p className="error">Alamat wajib diisi</p>
                          )}
                        {errors.address &&
                          errors.address.type === "maxLength" && (
                            <p className="error">
                              Alamat maksimal 200 karakter
                            </p>
                          )}
                      </div>
                      <button type="submit" className="btn-signup py-2">
                        Edit Profil
                      </button>
                    </form>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profil;
