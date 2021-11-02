import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import jQuery from "jquery";
import Swal from "sweetalert2";
import qs from "qs";

import {
  publicRequest,
  adminRequest,
  adminRequestPut,
} from "../../../../requestMethods";
import {
  studioStart,
  studioPostStart,
  studioPostAccepted,
  studioPostFailure,
  studioPutStart,
  studioPutAccepted,
  studioPutFailure,
  studioDetailStart,
} from "../../../../redux/studioRedux";
import Spinner from "../../../../components/Spinner";

import Sidebar from "../../../../components/Dashboard/Admin/Sidebar/index";
import Navbar from "../../../../components/Dashboard/Admin/Navbar/index";
import Footer from "../../../../components/Dashboard/Admin/Footer/index";
import {
  FaUserEdit,
  FaTachometerAlt,
  FaBlog,
  FaPlus,
  FaTrash,
  FaPen,
  FaCheck,
} from "react-icons/fa";
import { GiGuitarHead } from "react-icons/gi";
import "../style.css";

import profilePicture from "../../../../assets/images/undraw_profile.svg";

(function ($) {
  $(function () {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function () {
      $("body").toggleClassName("sidebar-toggled");
      $(".sidebar").toggleClassName("toggled");
      if ($(".sidebar").hasClassName("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $(window).on("resize", function () {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }

      if ($(window).width() < 480 && !$(".sidebar").hasClassName("toggled")) {
        $("body").addClassName("sidebar-toggled");
        $(".sidebar").addClassName("toggled");
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
  });
})(jQuery);

const Studio = () => {
  const studiosList = useSelector(
    (state) => state.studio && state.studio.allStudio
  );
  const studioDetailList = useSelector(
    (state) =>
      state.studio &&
      state.studio.detailStudio &&
      state.studio.detailStudio.result
  );
  const isFetching = useSelector(
    (state) => state.studio && state.studio.isFetching
  );
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const countPerPage = 10;
  const [spinner, setSpinner] = useState(true);
  const [resultsList, setResultsList] = useState(studiosList);
  const [resultsDetailList, setResultsDetailList] = useState(studioDetailList);
  const [countList, setCountList] = useState(countPerPage);
  const [studioListId, setStudioListId] = useState();

  const [studioNameUpdate, setStudioNameUpdate] = useState(
    resultsDetailList && resultsDetailList.studio_name
  );
  const [studioCapacityUpdate, setStudioCapacityUpdate] = useState(
    resultsDetailList && resultsDetailList.studio_capacity
  );
  const [studioPriceUpdate, setStudioPriceUpdate] = useState(
    resultsDetailList && resultsDetailList.studio_price
  );
  const [studioImgUpdate, setStudioImgUpdate] = useState(
    resultsDetailList && resultsDetailList.studio_img
  );
  const [studioAvailableDayUpdate, setStudioAvailableDayUpdate] = useState(
    resultsDetailList && resultsDetailList.studio_available_day
  );
  const [studioStatusUpdate, setStudioStatusUpdate] = useState(
    resultsDetailList && resultsDetailList.studio_status
  );
  const [studioDescUpdate, setStudioDescUpdate] = useState(
    resultsDetailList && resultsDetailList.studio_desc
  );

  const getStudioList = async (dispatch) => {
    try {
      const res = await publicRequest.get("/studio");
      dispatch(studioStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMoreList = () => {
    setCountList(
      studiosList && countList < resultsList.length && countList + countPerPage
    );
  };

  const handleStudioListConfirm = (studioIdList) => {
    setStudioListId(studioIdList);
  };

  const studioPosted = async (dispatch, studioDataList) => {
    dispatch(studioPostStart());
    console.log(studioDataList);
    try {
      const res = await adminRequest.post("/studio", studioDataList);
      dispatch(studioPostAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil tambah studio!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          reset();
          getStudioList(dispatch);
          setResultsList(studiosList && studiosList);
        }, 100);
      });
    } catch (err) {
      dispatch(studioPostFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal tambah studio!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickStudioPost = ({
    studio_name,
    studio_capacity,
    studio_price,
    studio_img,
    studio_available_day,
    studio_status,
    studio_desc,
  }) => {
    const dataStudio = new FormData();
    dataStudio.append("studio_name", studio_name);
    dataStudio.append("studio_capacity", studio_capacity);
    dataStudio.append("studio_price", studio_price);
    dataStudio.append("studio_img", studio_img[0]);
    dataStudio.append("studio_available_day", studio_available_day);
    dataStudio.append("studio_status", studio_status);
    dataStudio.append("studio_name", studio_name);
    dataStudio.append("studio_desc", studio_desc);
    studioPosted(dispatch, dataStudio);
  };

  const studioUpdated = async (dispatch, studioDataList) => {
    dispatch(studioPutStart());
    // console.log(studioDataList);
    console.log(qs.stringify(studioDataList));
    try {
      const res = await adminRequestPut.put(
        `/studio/${studioListId}`,
        qs.stringify(studioDataList)
      );
      dispatch(studioPutAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil update studio!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          getStudioList(dispatch);
          setResultsList(studiosList && studiosList);
        }, 100);
      });
    } catch (err) {
      dispatch(studioPutFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal update studio!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickStudioUpdate = (e) => {
    e.preventDefault();
    const studio_name = studioNameUpdate;
    const studio_capacity = studioCapacityUpdate;
    const studio_price = studioPriceUpdate;
    const studio_img = studioImgUpdate;
    const studio_available_day = studioAvailableDayUpdate;
    const studio_status = studioStatusUpdate;
    const studio_desc = studioDescUpdate;

    studioUpdated(dispatch, {
      studio_name,
      studio_capacity,
      studio_price,
      studio_img,
      studio_available_day,
      studio_status,
      studio_desc,
    });
  };

  const handleDeleteStudioList = async (studioIdList) => {
    // console.log(studioList);
    try {
      const res = await adminRequest.delete(`/studio/${studioIdList}`);
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil menghapus studio!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getStudioList(dispatch);
          setResultsList(studiosList && studiosList);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal menghapus studio!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal menghapus studio!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getStudioList(dispatch);

    const getStudioDetailList = async (dispatch) => {
      try {
        const res = await publicRequest.get(`/studio/${studioListId}`);
        dispatch(studioDetailStart(res.data));
        // console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getStudioDetailList(dispatch);
  }, [dispatch, studioListId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setResultsList(studiosList && studiosList);
    setResultsDetailList(studioDetailList && studioDetailList);
    setStudioNameUpdate(resultsDetailList && resultsDetailList.studio_name);
    setStudioCapacityUpdate(
      resultsDetailList && resultsDetailList.studio_capacity
    );
    setStudioPriceUpdate(resultsDetailList && resultsDetailList.studio_price);
    setStudioImgUpdate(resultsDetailList && resultsDetailList.studio_img);
    setStudioAvailableDayUpdate(
      resultsDetailList && resultsDetailList.studio_available_day
    );
    setStudioStatusUpdate(resultsDetailList && resultsDetailList.studio_status);
    setStudioDescUpdate(resultsDetailList && resultsDetailList.studio_desc);
  }, [studiosList, studioDetailList, resultsDetailList]);

  return spinner ? (
    <Spinner />
  ) : (
    <div id="wrapper">
      {console.log(resultsList)}
      {console.log(studioDetailList)}
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Studio</h1>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          Dashboard
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaTachometerAlt />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Instrument
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <GiGuitarHead />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/instrument"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Blog
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaBlog />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/blog"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Member
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaUserEdit />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/user"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-5 col-sm-6 col-6 my-auto">
                        <h2 className="h-100 my-auto">List Studio</h2>
                      </div>
                      <div className="col-md-7 col-sm-6 col-6">
                        <a
                          href="#addStudioModal"
                          className="btn btn-add"
                          data-toggle="modal"
                        >
                          <i>
                            <FaPlus />
                          </i>
                          <span>Tambah</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th className="table-column-text">Nama</th>
                        <th className="table-column-text">Kapasitas</th>
                        <th className="table-column-text">Harga</th>
                        <th className="table-column-text">Gambar</th>
                        <th className="table-column-text">Ketersediaan</th>
                        <th className="table-column-text">Status</th>
                        <th className="table-column-text">Deskripsi</th>
                        <th className="table-column-text">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultsList && resultsList.length !== 0 ? (
                        resultsList.slice(0, countList).map((studioList) => (
                          <tr key={studioList.id}>
                            <td className="table-column-text">
                              {studioList.studio_name}
                            </td>
                            <td className="table-column-text">
                              {studioList.studio_capacity}
                            </td>
                            <td className="table-column-text">
                              {`Rp.${studioList.studio_price}`}
                            </td>
                            <td className="table-column-text">
                              <img
                                src={
                                  studioList.studio_img.includes("http")
                                    ? studioList.studio_img.replace('"', "")
                                    : profilePicture
                                }
                                alt="profile"
                                className="d-block img-fluid"
                              />
                            </td>
                            <td className="table-column-text">
                              {studioList.studio_available_day}
                            </td>
                            <td className="table-column-text">
                              {studioList.studio_status}
                            </td>
                            <td className="table-column-text">
                              {studioList.studio_desc}
                            </td>
                            <td>
                              <a
                                href="#editStudioModal"
                                className="edit"
                                data-toggle="modal"
                                onClick={() =>
                                  handleStudioListConfirm(studioList.id)
                                }
                              >
                                <i data-toggle="tooltip" title="Edit">
                                  <FaPen />
                                </i>
                              </a>
                              <a
                                href="#deleteStudioModal"
                                className="delete"
                                data-toggle="modal"
                                onClick={() =>
                                  handleStudioListConfirm(studioList.id)
                                }
                              >
                                <i data-toggle="tooltip" title="Hapus">
                                  <FaTrash />
                                </i>
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="table-column-text">Tidak ada data</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">
                      Menampilkan &nbsp;
                      <b>
                        {countList && countList < resultsList.length
                          ? countList
                          : resultsList.length}
                      </b>
                      &nbsp; dari &nbsp;
                      <b>{resultsList && resultsList.length}</b>
                      &nbsp; data &nbsp;
                      {resultsList && countList < resultsList.length && (
                        <span
                          className="px-3 handle-load-more"
                          type="button"
                          onClick={handleLoadMoreList}
                        >
                          Load more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-5 my-auto">
                        <h2 className="h-100 my-auto">Pesanan Studio</h2>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th className="table-column-text">Nama Studio</th>
                        <th className="table-column-text">Harga</th>
                        <th className="table-column-text">Ketersediaan</th>
                        <th className="table-column-text">Nama Pemesan</th>
                        <th className="table-column-text">Email</th>
                        <th className="table-column-text">No. Telp</th>
                        <th className="table-column-text">Alamat</th>
                        <th className="table-column-text">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-column-text">Studio Jazz</td>
                        <td className="table-column-text">700000</td>
                        <td className="table-column-text">Rabu</td>
                        <td className="table-column-text">Alvin</td>
                        <td className="table-column-text">alvin@gmail.com</td>
                        <td className="table-column-text">084146172644</td>
                        <td className="table-column-text">Cirebon</td>
                        <td>
                          <a
                            href="#confirmStudioModal"
                            className="confirm"
                            data-toggle="modal"
                          >
                            <i data-toggle="tooltip" title="Konfirmasi">
                              <FaCheck />
                            </i>
                          </a>
                          <a
                            href="#deleteBookingModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i data-toggle="tooltip" title="Hapus">
                              <FaTrash />
                            </i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">
                      Menampilkan <b>1</b> dari <b>1</b> data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="addStudioModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form onSubmit={handleSubmit(handleClickStudioPost)}>
                  <div className="modal-header">
                    <h4 className="modal-title">Tambah Studio</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="inputStudioName">Nama Studio</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputStudioName"
                        {...register("studio_name", {
                          required: true,
                          pattern:
                            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                          maxLength: 100,
                        })}
                      />
                      {errors.studio_name &&
                        errors.studio_name.type === "required" && (
                          <p className="error">Nama studio wajib diisi</p>
                        )}
                      {errors.studio_name &&
                        errors.studio_name.type === "pattern" && (
                          <p className="error">
                            Nama studio hanya berisi huruf
                          </p>
                        )}
                      {errors.studio_name &&
                        errors.studio_name.type === "maxLength" && (
                          <p className="error">
                            Nama studio maksimal 100 karakter
                          </p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputStudioCapacity">Kapasitas</label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        id="inputStudioCapacity"
                        {...register("studio_capacity", {
                          required: true,
                        })}
                      />
                      {errors.studio_capacity &&
                        errors.studio_capacity.type === "required" && (
                          <p className="error">Kapasitas wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputStudioPrice">Harga</label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        id="inputStudioPrice"
                        {...register("studio_price", {
                          required: true,
                        })}
                      />
                      {errors.studio_price &&
                        errors.studio_price.type === "required" && (
                          <p className="error">Harga wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inputStudioImg">
                        Gambar
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-dashboard"
                        id="inputStudioImg"
                        {...register("studio_img", {
                          required: true,
                        })}
                      />
                      {errors.studio_img &&
                        errors.studio_img.type === "required" && (
                          <p className="error">Gambar wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputStudioAvailableDay">
                        Ketersediaan
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputStudioAvailableDay"
                        {...register("studio_available_day", {
                          required: true,
                        })}
                      />
                      {errors.studio_available_day &&
                        errors.studio_available_day.type === "required" && (
                          <p className="error">Ketersediaan wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputStudioStatus">Status</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputStudioStatus"
                        {...register("studio_status", {
                          required: true,
                        })}
                      />
                      {errors.studio_status &&
                        errors.studio_status.type === "required" && (
                          <p className="error">Status wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputStudioDesc">Deskripsi</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        id="inputStudioDesc"
                        {...register("studio_desc", {
                          required: true,
                        })}
                      />
                      {errors.studio_desc &&
                        errors.studio_desc.type === "required" && (
                          <p className="error">Deskripsi wajib diisi</p>
                        )}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      disabled={isFetching}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="confirmStudioModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Konfirmasi Pesanan</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin memvalidasi pesanan ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Konfirmasi"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="editStudioModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form onSubmit={handleClickStudioUpdate}>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Studio</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="updateStudioName">Nama Studio</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        id="updateStudioName"
                        value={studioNameUpdate}
                        onChange={(e) => setStudioNameUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Kapasitas</label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        required
                        value={studioCapacityUpdate}
                        onChange={(e) =>
                          setStudioCapacityUpdate(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Harga</label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        required
                        value={studioPriceUpdate}
                        onChange={(e) => setStudioPriceUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="updateImg">
                        Gambar
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="updateImg"
                        required
                        value={studioImgUpdate}
                        onChange={(e) => setStudioImgUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Ketersediaan</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        value={studioAvailableDayUpdate}
                        onChange={(e) =>
                          setStudioAvailableDayUpdate(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Status</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        value={studioStatusUpdate}
                        onChange={(e) => setStudioStatusUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Deskripsi</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        required
                        value={studioDescUpdate}
                        onChange={(e) => setStudioDescUpdate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      disabled={isFetching}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="deleteStudioModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Hapus Studio</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin menghapus data ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="button"
                      className="btn btn-modal-add"
                      value="Hapus"
                      data-dismiss="modal"
                      onClick={() => handleDeleteStudioList(studioListId)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="deleteBookingModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Hapus Pesanan</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin menghapus pesanan ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Hapus"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Studio;
