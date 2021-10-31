import React from "react";
import jQuery from "jquery";
import Sidebar from "../../../components/Dashboard/Sidebar/index";
import Navbar from "../../../components/Dashboard/Navbar/index";
import Footer from "../../../components/Dashboard/Footer/index";
import {
  FaWarehouse,
  FaTachometerAlt,
  FaBlog,
  FaTrash,
} from "react-icons/fa";
import { GiGuitarHead } from "react-icons/gi";
import "../style.css";

(function ($) {
  "use strict";
  $(function () {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function () {
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

function User() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Blog</h1>
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
                    <a
                      href="/syncphonic-frontend/dashboard"
                      class="stretched-link"
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
                    <a
                      href="/syncphonic-frontend/dashboard/studio"
                      class="stretched-link"
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
                    <a
                      href="/syncphonic-frontend/dashboard/instrument"
                      class="stretched-link"
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
                    <a
                      href="/syncphonic-frontend/dashboard/blog"
                      class="stretched-link"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="table-wrapper">
                  <div class="table-title">
                    <div class="row">
                      <div class="col-md-5 col-sm-6 col-6 my-auto">
                        <h2 class="h-100 my-auto">List User</h2>
                      </div>
                    </div>
                  </div>
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th class="table-column-text">Nama</th>
                        <th class="table-column-text">Email</th>
                        <th class="table-column-text">Password</th>
                        <th class="table-column-text">Jenis Kelamin</th>
                        <th class="table-column-text">No. Telp</th>
                        <th class="table-column-text">Alamat</th>
                        <th class="table-column-text">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="table-column-text">
                          Alvin
                        </td>
                        <td class="table-column-text">alvin@gmail.com</td>
                        <td class="table-column-text">alvin123</td>
                        <td class="table-column-text">Laki-Laki</td>
                        <td class="table-column-text">081314726492</td>
                        <td class="table-column-text">Cirebon</td>
                        <td>
                          <a
                            href="#deleteUserModal"
                            class="delete"
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
                  <div class="clearfix">
                    <div class="hint-text">
                      Menampilkan <b>1</b> dari <b>1</b> data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="deleteUserModal" class="modal fade">
            <div class="modal-dialog mx-auto align-items-center">
              <div class="modal-content">
                <form>
                  <div class="modal-header">
                    <h4 class="modal-title">Hapus User</h4>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Apakah Anda yakin ingin menghapus data ini?</p>
                    <p class="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div class="modal-footer">
                    <input
                      type="button"
                      class="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      class="btn btn-modal-add"
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
}

export default User;
