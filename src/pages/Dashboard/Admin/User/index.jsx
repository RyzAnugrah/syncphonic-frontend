import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jQuery from "jquery";
import Swal from "sweetalert2";

import { adminRequest } from "../../../../requestMethods";
import { memberStart } from "../../../../redux/memberRedux";
import Spinner from "../../../../components/Spinner";

import Sidebar from "../../../../components/Dashboard/Admin/Sidebar/index";
import Navbar from "../../../../components/Dashboard/Admin/Navbar/index";
import Footer from "../../../../components/Dashboard/Admin/Footer/index";
import { FaWarehouse, FaTachometerAlt, FaBlog, FaTrash } from "react-icons/fa";
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

const User = () => {
  const members = useSelector(
    (state) => state.member && state.member.allMember
  );
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [results, setResults] = useState(members);
  const countPerPage = 10;
  const [count, setCount] = useState(countPerPage);
  const [memberId, setMemberId] = useState();

  const getMember = async (dispatch) => {
    try {
      const res = await adminRequest.get("/userAll");
      dispatch(memberStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMore = () => {
    setCount(members && count < results.length && count + countPerPage);
  };

  const handleDeleteConfirm = (member) => {
    setMemberId(member);
  };

  const handleDeleteMember = async (member) => {
    // console.log(member);
    try {
      const res = await adminRequest.delete(`/user/${member}`);
      console.log(res.data);
      if (res.data === 1) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil menghapus member!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getMember(dispatch);
          setResults(members && members);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal menghapus member!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal menghapus member!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getMember(dispatch);
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setResults(members && members);
  }, [members]);

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        {/* {console.log(members)} */}
        {console.log(results)}
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Member</h1>
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
            </div>
            <div className="row">
              <div>
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-5 col-sm-6 col-6 my-auto">
                        <h2 className="h-100 my-auto">List Member</h2>
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
                          <th className="table-column-text">Foto Profile</th>
                          <th className="table-column-text">Jenis Kelamin</th>
                          <th className="table-column-text">No. Telp</th>
                          <th className="table-column-text">Alamat</th>
                          <th className="table-column-text">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results && results.length !== 0 ? (
                          results.slice(0, count).map((member) => (
                            <tr key={member.id}>
                              <td className="table-column-text">
                                {member.name}
                              </td>
                              <td className="table-column-text">
                                {member.email}
                              </td>
                              <td className="table-column-text">
                                <img
                                  src={
                                    member.photo_profile.includes("http")
                                      ? member.photo_profile
                                      : profilePicture
                                  }
                                  alt="profile"
                                  className="d-block img-fluid"
                                />
                              </td>
                              <td className="table-column-text">
                                {member.gender}
                              </td>
                              <td className="table-column-text">
                                {member.telp_number}
                              </td>
                              <td className="table-column-text">
                                {member.address}
                              </td>
                              <td>
                                <a
                                  href="#deleteUserModal"
                                  className="delete"
                                  data-toggle="modal"
                                  onClick={() => handleDeleteConfirm(member.id)}
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
                            <td colSpan="7" className="table-column-text text-center">
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
                        {count && count < results.length
                          ? count
                          : results.length}
                      </b>
                      &nbsp; dari &nbsp;
                      <b>{results && results.length}</b>
                      &nbsp; data &nbsp;
                      {results && count < results.length && (
                        <span
                          className="px-3 handle-load-more"
                          type="button"
                          onClick={handleLoadMore}
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
          <div id="deleteUserModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Hapus User</h4>
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
                      onClick={() => handleDeleteMember(memberId)}
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

export default User;
