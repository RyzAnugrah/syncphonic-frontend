import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jQuery from "jquery";
import Swal from "sweetalert2";

import { userRequest } from "../../../../requestMethods";
import { studioMyBookingStart } from "../../../../redux/studioRedux";
import { instrumentMyBookingStart } from "../../../../redux/instrumentRedux";
import Spinner from "../../../../components/Spinner";

import Sidebar from "../../../../components/Dashboard/User/Sidebar/index";
import Navbar from "../../../../components/Dashboard/User/Navbar/index";
import Footer from "../../../../components/Dashboard/User/Footer/index";
import { FaUserAlt, FaTachometerAlt } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import "../style.css";

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

const Pesanan = () => {
  const user = useSelector(
    (state) =>
      state.user && state.user.currentUser && state.user.currentUser.users
  );
  const myBookingStudiosList = useSelector(
    (state) =>
      state.studio &&
      state.studio.myBookingStudio &&
      state.studio.myBookingStudio.booking
  );
  const myBookingInstrumentsList = useSelector(
    (state) =>
      state.instrument &&
      state.instrument.myBookingInstrument &&
      state.instrument.myBookingInstrument.booking
  );
  const dispatch = useDispatch();
  let history = useHistory();

  const countPerPage = 10;
  const [spinner, setSpinner] = useState(true);
  const [resultsBookingStudiosList, setResultsBookingStudiosList] =
    useState(myBookingStudiosList);
  const [countBookingStudiosList, setCountBookingStudiosList] =
    useState(countPerPage);
  const [bookingStudioListId, setBookingStudioListId] = useState();
  const [resultsBookingInstrumentsList, setResultsBookingInstrumentsList] =
    useState(myBookingInstrumentsList);
  const [countBookingInstrumentsList, setCountBookingInstrumentsList] =
    useState(countPerPage);
  const [bookingInstrumentListId, setBookingInstrumentListId] = useState();

  const getBookingStudioList = async (dispatch) => {
    try {
      const res = await userRequest.get(`/mystudio/${user.id}`);
      dispatch(studioMyBookingStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMoreStudiosList = () => {
    setCountBookingStudiosList(
      myBookingStudiosList &&
        resultsBookingStudiosList &&
        countBookingStudiosList < resultsBookingStudiosList.length &&
        countBookingStudiosList + countPerPage
    );
  };

  const handleBookingStudioListConfirm = (bookingStudioIdList) => {
    setBookingStudioListId(bookingStudioIdList);
  };

  const handleCancelBookingStudio = async (bookingStudioIdList) => {
    // console.log(studioBooking);
    try {
      const res = await userRequest.put(
        `/booking/studio/cancel/${bookingStudioIdList}`
      );
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil membatalkan booking studio!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getBookingStudioList(dispatch);
          setResultsBookingStudiosList(
            myBookingStudiosList && myBookingStudiosList
          );
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal membatalkan booking studio!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal membatalkan booking studio!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const getBookingInstrumentList = async (dispatch) => {
    try {
      const res = await userRequest.get(`/myinstrument/${user.id}`);
      dispatch(instrumentMyBookingStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMoreInstrumentsList = () => {
    setCountBookingInstrumentsList(
      myBookingInstrumentsList &&
        resultsBookingInstrumentsList &&
        countBookingInstrumentsList < resultsBookingInstrumentsList.length &&
        countBookingInstrumentsList + countPerPage
    );
  };

  const handleBookingInstrumentListConfirm = (bookingInstrumentIdList) => {
    setBookingInstrumentListId(bookingInstrumentIdList);
  };

  const handleCancelBookingInstrument = async (bookingInstrumentIdList) => {
    // console.log(instrumentBooking);
    try {
      const res = await userRequest.put(
        `/booking/instrument/cancel/${bookingInstrumentIdList}`
      );
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil membatalkan booking instrument!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getBookingInstrumentList(dispatch);
          setResultsBookingInstrumentsList(
            myBookingInstrumentsList && myBookingInstrumentsList
          );
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal membatalkan booking instrument!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal membatalkan booking instrument!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    const getBookingStudioListFirst = async (dispatch) => {
      try {
        const res = await userRequest.get(`/mystudio/${user.id}`);
        dispatch(studioMyBookingStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    getBookingStudioListFirst(dispatch);

    const getBookingInstrumentListFirst = async (dispatch) => {
      try {
        const res = await userRequest.get(`/myinstrument/${user.id}`);
        dispatch(instrumentMyBookingStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    getBookingInstrumentListFirst(dispatch);
  }, [dispatch, user]);

  useEffect(() => {
    setResultsBookingStudiosList(myBookingStudiosList && myBookingStudiosList);
    setResultsBookingInstrumentsList(
      myBookingInstrumentsList && myBookingInstrumentsList
    );
  }, [myBookingStudiosList, myBookingInstrumentsList]);

  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Oops ... Anda belum masuk",
        text: "Silahkan masuk terlebih dahulu!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          history.push("/syncphonic-frontend/masuk");
        }, 100);
      });
    }

    if (user) {
      if (user && user.isAdmin === "1") {
        Swal.fire({
          icon: "success",
          title: "Hallo Admin!",
          text: "Pergi ke dashboard admin",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setTimeout(() => {
            history.push("/syncphonic-frontend/dashboard/admin");
          }, 100);
        });
      }
    }
  }, [history, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return (
    <div id="wrapper">
      {console.log(resultsBookingStudiosList)}
      {console.log(resultsBookingInstrumentsList)}
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Riwayat Pesanan</h1>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
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
                      to="/syncphonic-frontend/dashboard"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          Profil
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaUserAlt />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/profil"
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
                        <h2 className="h-100 my-auto">List Pesanan Studio</h2>
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
                          <th className="table-column-text">Email</th>
                          <th className="table-column-text">Nama Studio</th>
                          <th className="table-column-text">Harga Studio</th>
                          <th className="table-column-text">Tanggal</th>
                          <th className="table-column-text">Durasi</th>
                          <th className="table-column-text">Total</th>
                          <th className="table-column-text">Status Pesanan</th>
                          <th className="table-column-text">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsBookingStudiosList &&
                        resultsBookingStudiosList.length !== 0 ? (
                          resultsBookingStudiosList
                            .filter(
                              (bookingStudioList) =>
                                user && bookingStudioList.user_id === user.id
                            )
                            .slice(0, countBookingStudiosList)
                            .map((bookingStudioList) => (
                              <tr key={bookingStudioList.id}>
                                <td className="table-column-text">
                                  {bookingStudioList.name}
                                </td>
                                <td className="table-column-text">
                                  {bookingStudioList.email}
                                </td>
                                <td className="table-column-text">
                                  {bookingStudioList.studio_name}
                                </td>
                                <td className="table-column-text">
                                  {bookingStudioList.studio_price}
                                </td>
                                <td className="table-column-text">
                                  {bookingStudioList.date}
                                </td>
                                <td className="table-column-text">
                                  {bookingStudioList.duration}
                                </td>
                                <td className="table-column-text">
                                  {bookingStudioList.total}
                                </td>
                                <td className="table-column-text">
                                  {bookingStudioList.status_booking}
                                </td>
                                <td>
                                  {bookingStudioList.status_booking.toLowerCase() ===
                                    "pending" && (
                                    <a
                                      href="#cancelStudioModal"
                                      className="delete"
                                      data-toggle="modal"
                                      onClick={() =>
                                        handleBookingStudioListConfirm(
                                          bookingStudioList.id
                                        )
                                      }
                                    >
                                      <i data-toggle="tooltip" title="Batal">
                                        <FcCancel />
                                      </i>
                                    </a>
                                  )}
                                </td>
                              </tr>
                            ))
                        ) : (
                          <tr>
                            <td
                              colSpan="9"
                              className="table-column-text text-center"
                            >
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
                        {countBookingStudiosList &&
                        resultsBookingStudiosList &&
                        countBookingStudiosList <
                          resultsBookingStudiosList.length
                          ? countBookingStudiosList
                          : resultsBookingStudiosList &&
                            resultsBookingStudiosList.length}
                      </b>
                      &nbsp; dari &nbsp;
                      <b>
                        {resultsBookingStudiosList &&
                          resultsBookingStudiosList.length}
                      </b>
                      &nbsp; data &nbsp;
                      {resultsBookingStudiosList &&
                        countBookingStudiosList <
                          resultsBookingStudiosList.length && (
                          <span
                            className="px-3 handle-load-more"
                            type="button"
                            onClick={handleLoadMoreStudiosList}
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
                      <div className="col-md-5 col-sm-6 col-6 my-auto">
                        <h2 className="h-100 my-auto">
                          List Pesanan Instrument
                        </h2>
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
                          <th className="table-column-text">Email</th>
                          <th className="table-column-text">Nama Instrument</th>
                          <th className="table-column-text">
                            Harga Instrument
                          </th>
                          <th className="table-column-text">Tanggal</th>
                          <th className="table-column-text">Durasi</th>
                          <th className="table-column-text">Total</th>
                          <th className="table-column-text">Status Pesanan</th>
                          <th className="table-column-text">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsBookingInstrumentsList &&
                        resultsBookingInstrumentsList.length !== 0 ? (
                          resultsBookingInstrumentsList
                            .filter(
                              (bookingInstrumentList) =>
                                user &&
                                bookingInstrumentList.user_id === user.id
                            )
                            .slice(0, countBookingInstrumentsList)
                            .map((bookingInstrumentList) => (
                              <tr key={bookingInstrumentList.id}>
                                <td className="table-column-text">
                                  {bookingInstrumentList.name}
                                </td>
                                <td className="table-column-text">
                                  {bookingInstrumentList.email}
                                </td>
                                <td className="table-column-text">
                                  {bookingInstrumentList.instrument_name}
                                </td>
                                <td className="table-column-text">
                                  {bookingInstrumentList.instrument_price}
                                </td>
                                <td className="table-column-text">
                                  {bookingInstrumentList.date}
                                </td>
                                <td className="table-column-text">
                                  {bookingInstrumentList.duration}
                                </td>
                                <td className="table-column-text">
                                  {bookingInstrumentList.total}
                                </td>
                                <td className="table-column-text">
                                  {bookingInstrumentList.status_booking}
                                </td>
                                <td>
                                  {bookingInstrumentList.status_booking.toLowerCase() ===
                                    "pending" && (
                                    <a
                                      href="#cancelInstrumentModal"
                                      className="delete"
                                      data-toggle="modal"
                                      onClick={() =>
                                        handleBookingInstrumentListConfirm(
                                          bookingInstrumentList.id
                                        )
                                      }
                                    >
                                      <i data-toggle="tooltip" title="Batal">
                                        <FcCancel />
                                      </i>
                                    </a>
                                  )}
                                </td>
                              </tr>
                            ))
                        ) : (
                          <tr>
                            <td
                              colSpan="9"
                              className="table-column-text text-center"
                            >
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
                        {countBookingInstrumentsList &&
                        resultsBookingInstrumentsList &&
                        countBookingInstrumentsList <
                          resultsBookingInstrumentsList.length
                          ? countBookingInstrumentsList
                          : resultsBookingInstrumentsList &&
                            resultsBookingInstrumentsList.length}
                      </b>
                      &nbsp; dari &nbsp;
                      <b>
                        {resultsBookingInstrumentsList &&
                          resultsBookingInstrumentsList.length}
                      </b>
                      &nbsp; data &nbsp;
                      {resultsBookingInstrumentsList &&
                        countBookingInstrumentsList <
                          resultsBookingInstrumentsList.length && (
                          <span
                            className="px-3 handle-load-more"
                            type="button"
                            onClick={handleLoadMoreInstrumentsList}
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
          <div id="cancelStudioModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Batalkan Pesanan Studio</h4>
                    <button
                      type="button"
                      className="close"
                      aria-hidden="true"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin membatalkan pesanan ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      value="Batal"
                      data-dismiss="modal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Yakin"
                      data-dismiss="modal"
                      onClick={() =>
                        handleCancelBookingStudio(bookingStudioListId)
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="cancelInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Batalkan Pesanan Instrument</h4>
                    <button
                      type="button"
                      className="close"
                      aria-hidden="true"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin membatalkan pesanan ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      value="Batal"
                      data-dismiss="modal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Yakin"
                      data-dismiss="modal"
                      onClick={() =>
                        handleCancelBookingInstrument(bookingInstrumentListId)
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

export default Pesanan;
