import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import jQuery from "jquery";
import Swal from "sweetalert2";
import qs from "qs";

import { userRequest, userRequestPut } from "../../../../requestMethods";
import {
  userDetailStart,
  profilePutStart,
  profilePutAccepted,
  profilePutFailure,
} from "../../../../redux/userRedux";
import Spinner from "../../../../components/Spinner";

import Sidebar from "../../../../components/Dashboard/User/Sidebar/index";
import Navbar from "../../../../components/Dashboard/User/Navbar/index";
import Footer from "../../../../components/Dashboard/User/Footer/index";
import "./style.css";
import "../style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { IoReloadCircle } from "react-icons/io5";
import profilePicture from "../../../../assets/images/undraw_profile.svg";

(function ($) {
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
    watch,
  } = useForm();

  const user = useSelector(
    (state) =>
      state.user && state.user.currentUser && state.user.currentUser.users
  );
  const userDetail = useSelector(
    (state) => state.user && state.user.detailUser
  );
  const isFetching = useSelector(
    (state) => state.user && state.user.isFetching
  );
  const dispatch = useDispatch();
  let history = useHistory();

  const [spinner, setSpinner] = useState(true);
  const [resultDetailUser, setResultDetailUser] = useState(userDetail);

  const getUserDetailList = async (dispatch) => {
    try {
      const res = await userRequest.get(`/user/${user.id}`);
      dispatch(userDetailStart(res.data));
      // console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const updated = async (dispatch, userData) => {
    dispatch(profilePutStart());
    console.log(userData);
    try {
      const res = await userRequestPut.put(
        `/user/${resultDetailUser.id}`,
        qs.stringify(userData)
      );
      dispatch(profilePutAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Yes...",
        text: "Berhasil update akun!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          getUserDetailList(dispatch);
          setResultDetailUser(userDetail && userDetail);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        }, 100);
      });
    } catch (err) {
      dispatch(profilePutFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal update akun!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickUpdate = ({
    name,
    email,
    gender,
    telp_number,
    address,
    photo_profile,
    password,
  }) => {
    updated(dispatch, {
      name,
      email,
      gender,
      telp_number,
      address,
      photo_profile,
      password,
    });
  };

  const handleReloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    if (!user) {
      history.push("/syncphonic-frontend");
    }
  }, [history, user]);

  useEffect(() => {
    const getUserDetailListFirst = async (dispatch) => {
      try {
        const res = await userRequest.get(`/user/${user.id}`);
        dispatch(userDetailStart(res.data));
        // console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUserDetailListFirst(dispatch);
  }, [user, dispatch]);

  useEffect(() => {
    setResultDetailUser(userDetail && userDetail);
  }, [userDetail]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return (
    <div id="wrapper">
      {console.log(resultDetailUser)}
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Profil</h1>
              <IoReloadCircle
                className="icon-reload"
                onClick={handleReloadPage}
              />
            </div>
            {spinner ? (
              <Spinner />
            ) : (
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="container">
                    <div className="picture-container">
                      <img
                        src={
                          resultDetailUser &&
                          resultDetailUser.photo_profile &&
                          resultDetailUser.photo_profile.includes("http")
                            ? resultDetailUser.photo_profile.replace('"', "")
                            : profilePicture
                        }
                        alt="profile"
                        className="picture-src"
                        id="wizardPicturePreview"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 mb-4">
                  <main className="auth-form-main mx-auto">
                    <div className="auth-form-content">
                      <form onSubmit={handleSubmit(handleClickUpdate)}>
                        <div className="form-group">
                          <label
                            className="fw-bolder"
                            htmlFor="inputNamaLengkap"
                          >
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
                              value: resultDetailUser && resultDetailUser.name,
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
                              value: resultDetailUser && resultDetailUser.email,
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
                              value:
                                resultDetailUser &&
                                resultDetailUser.telp_number,
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
                                  {...register("gender", {
                                    required: true,
                                    value:
                                      resultDetailUser &&
                                      resultDetailUser.gender,
                                  })}
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
                                  {...register("gender", {
                                    required: true,
                                    value:
                                      resultDetailUser &&
                                      resultDetailUser.gender,
                                  })}
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
                              value:
                                resultDetailUser && resultDetailUser.address,
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
                        <div className="form-group mt-3">
                          <label
                            className="fw-bolder"
                            htmlFor="inputPhotoProfile"
                          >
                            Foto Profil
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-signup"
                            id="inputPhotoProfile"
                            {...register("photo_profile", {
                              required: true,
                              value:
                                resultDetailUser &&
                                resultDetailUser.photo_profile,
                            })}
                          />
                          {errors.photo_profile &&
                            errors.photo_profile.type === "required" && (
                              <p className="error">Foto Profil wajib diisi</p>
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
                            <i onClick={togglePasswordConfirmVisiblity}>
                              {eye}
                            </i>
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
                        <button
                          type="submit"
                          className="btn-signup py-2"
                          disabled={isFetching}
                        >
                          Edit Profil
                        </button>
                      </form>
                    </div>
                  </main>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profil;
