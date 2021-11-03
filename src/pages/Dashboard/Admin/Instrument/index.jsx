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
  instrumentStart,
  instrumentDetailStart,
  instrumentAllBookingStart,
  instrumentPostStart,
  instrumentPostAccepted,
  instrumentPostFailure,
  instrumentPutStart,
  instrumentPutAccepted,
  instrumentPutFailure,
} from "../../../../redux/instrumentRedux";
import Spinner from "../../../../components/Spinner";

import Sidebar from "../../../../components/Dashboard/Admin/Sidebar/index";
import Navbar from "../../../../components/Dashboard/Admin/Navbar/index";
import Footer from "../../../../components/Dashboard/Admin/Footer/index";
import {
  FaUserEdit,
  FaWarehouse,
  FaBlog,
  FaTachometerAlt,
  FaPlus,
  FaTrash,
  FaPen,
  FaCheck,
} from "react-icons/fa";
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

const Instrument = () => {
  const instrumentsList = useSelector(
    (state) => state.instrument && state.instrument.allInstrument
  );
  const instrumentDetailList = useSelector(
    (state) =>
      state.instrument &&
      state.instrument.detailInstrument &&
      state.instrument.detailInstrument.result
  );
  const instrumentsBooking = useSelector(
    (state) =>
      state.instrument &&
      state.instrument.allBookingInstrument &&
      state.instrument.allBookingInstrument["List booking"]
  );
  const isFetching = useSelector(
    (state) => state.instrument && state.instrument.isFetching
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
  const [resultsList, setResultsList] = useState(instrumentsList);
  const [resultDetailList, setResultDetailList] =
    useState(instrumentDetailList);
  const [countList, setCountList] = useState(countPerPage);
  const [instrumentListId, setInstrumentListId] = useState();
  const [resultsBooking, setResultsBooking] = useState(instrumentsBooking);
  const [countBooking, setCountBooking] = useState(countPerPage);
  const [instrumentBookingId, setInstrumentBookingId] = useState();

  const [instrumentNameUpdate, setInstrumentNameUpdate] = useState(
    resultDetailList && resultDetailList.instrument_name
  );
  const [instrumentCountUpdate, setInstrumentCountUpdate] = useState(
    resultDetailList && resultDetailList.instrument_count
  );
  const [instrumentPriceUpdate, setInstrumentPriceUpdate] = useState(
    resultDetailList && resultDetailList.instrument_price
  );
  const [instrumentImgUpdate, setInstrumentImgUpdate] = useState(
    resultDetailList && resultDetailList.instrument_img
  );
  const [instrumentBrandUpdate, setInstrumentBrandUpdate] = useState(
    resultDetailList && resultDetailList.instrument_brand
  );
  const [instrumentStatusUpdate, setInstrumentStatusUpdate] = useState(
    resultDetailList && resultDetailList.instrument_status
  );
  const [instrumentDescUpdate, setInstrumentDescUpdate] = useState(
    resultDetailList && resultDetailList.instrument_desc
  );

  const getInstrumentList = async (dispatch) => {
    try {
      const res = await publicRequest.get("/instrument");
      dispatch(instrumentStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMoreList = () => {
    setCountList(
      instrumentsList &&
        countList < resultsList.length &&
        countList + countPerPage
    );
  };

  const handleInstrumentListConfirm = (instrumentIdList) => {
    setInstrumentListId(instrumentIdList);
  };

  const instrumentPosted = async (dispatch, instrumentDataList) => {
    dispatch(instrumentPostStart());
    console.log(instrumentDataList);
    try {
      const res = await adminRequest.post("/instrument", instrumentDataList);
      dispatch(instrumentPostAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil tambah instrument!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          reset();
          getInstrumentList(dispatch);
          setResultsList(instrumentsList && instrumentsList);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        }, 100);
      });
    } catch (err) {
      dispatch(instrumentPostFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal tambah instrument!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickInstrumentPost = ({
    instrument_name,
    instrument_count,
    instrument_price,
    instrument_img,
    instrument_brand,
    instrument_status,
    instrument_desc,
  }) => {
    const dataInstrument = new FormData();
    dataInstrument.append("instrument_name", instrument_name);
    dataInstrument.append("instrument_count", instrument_count);
    dataInstrument.append("instrument_price", instrument_price);
    dataInstrument.append("instrument_img", instrument_img[0]);
    dataInstrument.append("instrument_brand", instrument_brand);
    dataInstrument.append("instrument_status", instrument_status);
    dataInstrument.append("instrument_desc", instrument_desc);
    instrumentPosted(dispatch, dataInstrument);
  };

  const instrumentUpdated = async (dispatch, instrumentDataList) => {
    dispatch(instrumentPutStart());
    // console.log(instrumentDataList);
    console.log(qs.stringify(instrumentDataList));
    try {
      const res = await adminRequestPut.put(
        `/instrument/${instrumentListId}`,
        qs.stringify(instrumentDataList)
      );
      dispatch(instrumentPutAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil update instrument!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          getInstrumentList(dispatch);
          setResultsList(instrumentsList && instrumentsList);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        }, 100);
      });
    } catch (err) {
      dispatch(instrumentPutFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal update instrument!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickInstrumentUpdate = (e) => {
    e.preventDefault();
    const instrument_name = instrumentNameUpdate;
    const instrument_count = instrumentCountUpdate;
    const instrument_price = instrumentPriceUpdate;
    const instrument_img = instrumentImgUpdate;
    const instrument_brand = instrumentBrandUpdate;
    const instrument_status = instrumentStatusUpdate;
    const instrument_desc = instrumentDescUpdate;

    instrumentUpdated(dispatch, {
      instrument_name,
      instrument_count,
      instrument_price,
      instrument_img,
      instrument_brand,
      instrument_status,
      instrument_desc,
    });
  };

  const handleDeleteInstrumentList = async (instrumentIdList) => {
    // console.log(instrumentList);
    try {
      const res = await adminRequest.delete(`/instrument/${instrumentIdList}`);
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil menghapus instrument!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getInstrumentList(dispatch);
          setResultsList(instrumentsList && instrumentsList);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal menghapus instrument!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal menghapus instrument!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const getInstrumentBooking = async (dispatch) => {
    try {
      const res = await adminRequest.get("/booking/instrument/all");
      dispatch(instrumentAllBookingStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMoreBooking = () => {
    setCountBooking(
      instrumentsBooking &&
        countBooking < resultsBooking.length &&
        countBooking + countPerPage
    );
  };

  const handleInstrumentBookingConfirm = (instrumentIdBooking) => {
    setInstrumentBookingId(instrumentIdBooking);
  };

  const handleApprovedInstrumentBooking = async (instrumentIdBooking) => {
    // console.log(instrumentBooking);
    try {
      const res = await adminRequest.put(
        `/booking/instrument/approved/${instrumentIdBooking}`
      );
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil mengapprove booking instrument!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getInstrumentBooking(dispatch);
          setResultsBooking(instrumentsBooking && instrumentsBooking);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal mengapprove booking instrument!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal mengapprove booking instrument!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeleteInstrumentBooking = async (instrumentIdBooking) => {
    // console.log(instrumentBooking);
    try {
      const res = await adminRequest.delete(
        `/booking/instrument/delete/${instrumentIdBooking}`
      );
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil menghapus booking instrument!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getInstrumentBooking(dispatch);
          setResultsBooking(instrumentsBooking && instrumentsBooking);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal menghapus booking instrument!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal menghapus booking instrument!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getInstrumentList(dispatch);

    const getInstrumentDetailList = async (dispatch) => {
      try {
        const res = await publicRequest.get(`/instrument/${instrumentListId}`);
        dispatch(instrumentDetailStart(res.data));
        // console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getInstrumentDetailList(dispatch);

    getInstrumentBooking(dispatch);
  }, [dispatch, instrumentListId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setResultsList(instrumentsList && instrumentsList);
    setResultDetailList(instrumentDetailList && instrumentDetailList);
    setInstrumentNameUpdate(
      resultDetailList && resultDetailList.instrument_name
    );
    setInstrumentCountUpdate(
      resultDetailList && resultDetailList.instrument_count
    );
    setInstrumentPriceUpdate(
      resultDetailList && resultDetailList.instrument_price
    );
    setInstrumentImgUpdate(resultDetailList && resultDetailList.instrument_img);
    setInstrumentBrandUpdate(
      resultDetailList && resultDetailList.instrument_brand
    );
    setInstrumentStatusUpdate(
      resultDetailList && resultDetailList.instrument_status
    );
    setInstrumentDescUpdate(
      resultDetailList && resultDetailList.instrument_desc
    );

    setResultsBooking(instrumentsBooking && instrumentsBooking);
  }, [
    instrumentsList,
    instrumentDetailList,
    resultDetailList,
    instrumentsBooking,
  ]);

  return (
    <div id="wrapper">
      {console.log(resultsList)}
      {console.log(instrumentDetailList)}
      {console.log(resultsBooking)}
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Instrument</h1>
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
                          List Studio
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaWarehouse />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/studio"
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
                        <h2 className="h-100 my-auto">List Instrument</h2>
                      </div>
                      <div className="col-md-7 col-sm-6 col-6">
                        <a
                          href="#addInstrumentModal"
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
                          <th className="table-column-text">Jumlah</th>
                          <th className="table-column-text">Harga</th>
                          <th className="table-column-text">Gambar</th>
                          <th className="table-column-text">Kategori</th>
                          <th className="table-column-text">Status</th>
                          <th className="table-column-text">Deskripsi</th>
                          <th className="table-column-text">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsList && resultsList.length !== 0 ? (
                          resultsList
                            .slice(0, countList)
                            .map((instrumentList) => (
                              <tr key={instrumentList.id}>
                                <td className="table-column-text">
                                  {instrumentList.instrument_name}
                                </td>
                                <td className="table-column-text">
                                  {instrumentList.instrument_count}
                                </td>
                                <td className="table-column-text">{`Rp.${instrumentList.instrument_price}`}</td>
                                <td className="table-column-text">
                                  <img
                                    src={
                                      instrumentList.instrument_img.includes(
                                        "http"
                                      )
                                        ? instrumentList.instrument_img.replace(
                                            '"',
                                            ""
                                          )
                                        : profilePicture
                                    }
                                    alt="profile"
                                    className="d-block img-fluid"
                                  />
                                </td>
                                <td className="table-column-text">
                                  {instrumentList.instrument_brand}
                                </td>
                                <td className="table-column-text">
                                  {instrumentList.instrument_status}
                                </td>
                                <td className="table-column-text">
                                  {instrumentList.instrument_desc}
                                </td>
                                <td>
                                  <a
                                    href="#editInstrumentModal"
                                    className="edit"
                                    data-toggle="modal"
                                    onClick={() =>
                                      handleInstrumentListConfirm(
                                        instrumentList.id
                                      )
                                    }
                                  >
                                    <i data-toggle="tooltip" title="Edit">
                                      <FaPen />
                                    </i>
                                  </a>
                                  <a
                                    href="#deleteInstrumentModal"
                                    className="delete"
                                    data-toggle="modal"
                                    onClick={() =>
                                      handleInstrumentListConfirm(
                                        instrumentList.id
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
                        <h2 className="h-100 my-auto">Pesanan Instrument</h2>
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
                          <th className="table-column-text">Email</th>
                          <th className="table-column-text">Nama Instrument</th>
                          <th className="table-column-text">
                            Harga Instrument
                          </th>
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
                            .map((instrumentBooking) => (
                              <tr key={instrumentBooking.id}>
                                <td className="table-column-text">
                                  {instrumentBooking.name}
                                </td>
                                <td className="table-column-text">
                                  {instrumentBooking.email}
                                </td>
                                <td className="table-column-text">
                                  {instrumentBooking.instrument_name}
                                </td>
                                <td className="table-column-text">
                                  {instrumentBooking.instrument_price}
                                </td>
                                <td className="table-column-text">
                                  {instrumentBooking.date}
                                </td>
                                <td className="table-column-text">
                                  {instrumentBooking.duration}
                                </td>
                                <td className="table-column-text">
                                  {instrumentBooking.total}
                                </td>
                                <td className="table-column-text">
                                  {instrumentBooking.status_booking}
                                </td>
                                <td>
                                  <a
                                    href="#confirmInstrumentModal"
                                    className="confirm"
                                    data-toggle="modal"
                                    onClick={() =>
                                      handleInstrumentBookingConfirm(
                                        instrumentBooking.id
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
                                      handleInstrumentBookingConfirm(
                                        instrumentBooking.id
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
          <div id="addInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form onSubmit={handleSubmit(handleClickInstrumentPost)}>
                  <div className="modal-header">
                    <h4 className="modal-title">Tambah Instrument</h4>
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
                      <label htmlFor="inputInstrumentName">
                        Nama Instrument
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputInstrumentName"
                        {...register("instrument_name", {
                          required: true,
                          pattern:
                            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                          maxLength: 100,
                        })}
                      />
                      {errors.instrument_name &&
                        errors.instrument_name.type === "required" && (
                          <p className="error">Nama instrument wajib diisi</p>
                        )}
                      {errors.instrument_name &&
                        errors.instrument_name.type === "pattern" && (
                          <p className="error">
                            Nama instrument hanya berisi huruf
                          </p>
                        )}
                      {errors.instrument_name &&
                        errors.instrument_name.type === "maxLength" && (
                          <p className="error">
                            Nama instrument maksimal 100 karakter
                          </p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputInstrumentCount">
                        Sisa Instrument
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        id="inputInstrumentCount"
                        {...register("instrument_count", {
                          required: true,
                        })}
                      />
                      {errors.instrument_count &&
                        errors.instrument_count.type === "required" && (
                          <p className="error">Sisa instrument wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputInstrumentPrice">Harga</label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        id="inputInstrumentPrice"
                        {...register("instrument_price", {
                          required: true,
                        })}
                      />
                      {errors.instrument_price &&
                        errors.instrument_price.type === "required" && (
                          <p className="error">Harga wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="inputInstrumentImg"
                      >
                        Gambar
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-dashboard"
                        id="inputInstrumentImg"
                        {...register("instrument_img", {
                          required: true,
                        })}
                      />
                      {errors.instrument_img &&
                        errors.instrument_img.type === "required" && (
                          <p className="error">Gambar wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputInstrumentBrand">Kategori</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputInstrumentBrand"
                        {...register("instrument_brand", {
                          required: true,
                        })}
                      />
                      {errors.instrument_brand &&
                        errors.instrument_brand.type === "required" && (
                          <p className="error">Kategori wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputInstrumentStatus">Status</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputInstrumentStatus"
                        {...register("instrument_status", {
                          required: true,
                        })}
                      />
                      {errors.instrument_status &&
                        errors.instrument_status.type === "required" && (
                          <p className="error">Status wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputInstrumentDesc">Deskripsi</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        id="inputInstrumentDesc"
                        {...register("instrument_desc", {
                          required: true,
                        })}
                      />
                      {errors.instrument_desc &&
                        errors.instrument_desc.type === "required" && (
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
          <div id="confirmInstrumentModal" className="modal fade">
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
                        handleApprovedInstrumentBooking(instrumentBookingId)
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="editInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form onSubmit={handleClickInstrumentUpdate}>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Instrument</h4>
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
                      <label htmlFor="updateInstrumentName">
                        Nama Instrument
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        id="updateInstrumentName"
                        value={instrumentNameUpdate}
                        onChange={(e) =>
                          setInstrumentNameUpdate(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Sisa Instrument</label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        required
                        value={instrumentCountUpdate}
                        onChange={(e) =>
                          setInstrumentCountUpdate(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Harga</label>
                      <input
                        type="number"
                        className="form-control form-control-dashboard"
                        required
                        value={instrumentPriceUpdate}
                        onChange={(e) =>
                          setInstrumentPriceUpdate(e.target.value)
                        }
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
                        value={instrumentImgUpdate}
                        onChange={(e) => setInstrumentImgUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Kategori</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        value={instrumentBrandUpdate}
                        onChange={(e) =>
                          setInstrumentBrandUpdate(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Status</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        value={instrumentStatusUpdate}
                        onChange={(e) =>
                          setInstrumentStatusUpdate(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Deskripsi</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        required
                        value={instrumentDescUpdate}
                        onChange={(e) =>
                          setInstrumentDescUpdate(e.target.value)
                        }
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
          <div id="deleteInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Hapus Instrument</h4>
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
                      type="submit"
                      className="btn btn-modal-add"
                      value="Hapus"
                      data-dismiss="modal"
                      onClick={() =>
                        handleDeleteInstrumentList(instrumentListId)
                      }
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
                      onClick={() =>
                        handleDeleteInstrumentBooking(instrumentBookingId)
                      }
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

export default Instrument;
