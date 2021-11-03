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
  studioDetailStart,
  studioAllBookingStart,
  studioPostStart,
  studioPostAccepted,
  studioPostFailure,
  studioPutStart,
  studioPutAccepted,
  studioPutFailure,
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
  const studiosBooking = useSelector(
    (state) =>
      state.studio &&
      state.studio.allBookingStudio &&
      state.studio.allBookingStudio["List booking"]
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
  const [resultDetailList, setResultDetailList] = useState(studioDetailList);
  const [countList, setCountList] = useState(countPerPage);
  const [studioListId, setStudioListId] = useState();
  const [resultsBooking, setResultsBooking] = useState(studiosBooking);
  const [countBooking, setCountBooking] = useState(countPerPage);
  const [studioBookingId, setStudioBookingId] = useState();

  const [studioNameUpdate, setStudioNameUpdate] = useState(
    resultDetailList && resultDetailList.studio_name
  );
  const [studioCapacityUpdate, setStudioCapacityUpdate] = useState(
    resultDetailList && resultDetailList.studio_capacity
  );
  const [studioPriceUpdate, setStudioPriceUpdate] = useState(
    resultDetailList && resultDetailList.studio_price
  );
  const [studioImgUpdate, setStudioImgUpdate] = useState(
    resultDetailList && resultDetailList.studio_img
  );
  const [studioAvailableDayUpdate, setStudioAvailableDayUpdate] = useState(
    resultDetailList && resultDetailList.studio_available_day
  );
  const [studioStatusUpdate, setStudioStatusUpdate] = useState(
    resultDetailList && resultDetailList.studio_status
  );
  const [studioDescUpdate, setStudioDescUpdate] = useState(
    resultDetailList && resultDetailList.studio_desc
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
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
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
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
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

  const getStudioBooking = async (dispatch) => {
    try {
      const res = await adminRequest.get("/booking/studio/all");
      dispatch(studioAllBookingStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMoreBooking = () => {
    setCountBooking(
      studiosBooking &&
        countBooking < resultsBooking.length &&
        countBooking + countPerPage
    );
  };

  const handleStudioBookingConfirm = (studioIdBooking) => {
    setStudioBookingId(studioIdBooking);
  };

  const handleApprovedStudioBooking = async (studioIdBooking) => {
    // console.log(studioBooking);
    try {
      const res = await adminRequest.put(
        `/booking/studio/approved/${studioIdBooking}`
      );
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil mengapprove booking studio!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getStudioBooking(dispatch);
          setResultsBooking(studiosBooking && studiosBooking);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal mengapprove booking studio!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal mengapprove booking studio!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeleteStudioBooking = async (studioIdBooking) => {
    // console.log(studioBooking);
    try {
      const res = await adminRequest.delete(
        `/booking/studio/delete/${studioIdBooking}`
      );
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil menghapus booking studio!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getStudioBooking(dispatch);
          setResultsBooking(studiosBooking && studiosBooking);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal menghapus booking studio!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal menghapus booking studio!",
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

    getStudioBooking(dispatch);
  }, [dispatch, studioListId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setResultsList(studiosList && studiosList);
    setResultDetailList(studioDetailList && studioDetailList);
    setStudioNameUpdate(resultDetailList && resultDetailList.studio_name);
    setStudioCapacityUpdate(
      resultDetailList && resultDetailList.studio_capacity
    );
    setStudioPriceUpdate(resultDetailList && resultDetailList.studio_price);
    setStudioImgUpdate(resultDetailList && resultDetailList.studio_img);
    setStudioAvailableDayUpdate(
      resultDetailList && resultDetailList.studio_available_day
    );
    setStudioStatusUpdate(resultDetailList && resultDetailList.studio_status);
    setStudioDescUpdate(resultDetailList && resultDetailList.studio_desc);

    setResultsBooking(studiosBooking && studiosBooking);
  }, [studiosList, studioDetailList, resultDetailList, studiosBooking]);

  return (
    <div id="wrapper">
      {console.log(resultsList)}
      {console.log(studioDetailList)}
      {console.log(resultsBooking)}
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
                  {spinner ? (
                    <Spinner />
                  ) : (
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
                            <td className="table-column-text">
                              Tidak ada data
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
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
                  {spinner ? (
                    <Spinner />
                  ) : (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th className="table-column-text">Nama Pemesan</th>
                          <th className="table-column-text">Nama Studio</th>
                          <th className="table-column-text">Harga Studio</th>
                          <th className="table-column-text">Tanggal</th>
                          <th className="table-column-text">Durasi</th>
                          <th className="table-column-text">Total</th>
                          <th className="table-column-text">Status Booking</th>
                          <th className="table-column-text">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsBooking && resultsBooking.length !== 0 ? (
                          resultsBooking
                            .slice(0, countBooking)
                            .map((studioBooking) => (
                              <tr key={studioBooking.id}>
                                <td className="table-column-text">
                                  {studioBooking.name}
                                </td>
                                <td className="table-column-text">
                                  {studioBooking.studio_name}
                                </td>
                                <td className="table-column-text">
                                  {studioBooking.studio_price}
                                </td>
                                <td className="table-column-text">
                                  {studioBooking.date}
                                </td>
                                <td className="table-column-text">
                                  {studioBooking.duration}
                                </td>
                                <td className="table-column-text">
                                  {studioBooking.total}
                                </td>
                                <td className="table-column-text">
                                  {studioBooking.status_booking}
                                </td>
                                <td>
                                  <a
                                    href="#confirmStudioModal"
                                    className="confirm"
                                    data-toggle="modal"
                                    onClick={() =>
                                      handleStudioBookingConfirm(
                                        studioBooking.id
                                      )
                                    }
                                  >
                                    <i data-toggle="tooltip" title="Konfirmasi">
                                      <FaCheck />
                                    </i>
                                  </a>
                                  <a
                                    href="#deleteBookingModal"
                                    className="delete"
                                    data-toggle="modal"
                                    onClick={() =>
                                      handleStudioBookingConfirm(
                                        studioBooking.id
                                      )
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
                            <td className="table-column-text">
                              Tidak ada data
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
                  <div className="clearfix">
                    <div className="hint-text">
                      Menampilkan &nbsp;
                      <b>
                        {countBooking && countBooking < resultsBooking.length
                          ? countBooking
                          : resultsBooking.length}
                      </b>
                      &nbsp; dari &nbsp;
                      <b>{resultsBooking && resultsBooking.length}</b>
                      &nbsp; data &nbsp;
                      {resultsBooking && countBooking < resultsBooking.length && (
                        <span
                          className="px-3 handle-load-more"
                          type="button"
                          onClick={handleLoadMoreBooking}
                        >
                          Load more
                        </span>
                      )}
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
                      data-dismiss="modal"
                      onClick={() =>
                        handleApprovedStudioBooking(studioBookingId)
                      }
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
                      data-dismiss="modal"
                      onClick={() => handleDeleteStudioBooking(studioBookingId)}
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
