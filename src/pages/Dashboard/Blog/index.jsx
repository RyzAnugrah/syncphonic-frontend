import React from "react";
import jQuery from "jquery";
import Sidebar from "../../../components/Dashboard/Sidebar/index";
import Navbar from "../../../components/Dashboard/Navbar/index";
import Footer from "../../../components/Dashboard/Footer/index";
import {
  FaUserEdit,
  FaWarehouse,
  FaTachometerAlt,
  FaPlus,
  FaTrash,
  FaPen,
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

function Instrument() {
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
                          List Member
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaUserEdit />
                        </i>
                      </div>
                    </div>
                    <a
                      href="/syncphonic-frontend/dashboard/user"
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
                        <h2 class="h-100 my-auto">List Blog</h2>
                      </div>
                      <div class="col-md-7 col-sm-6 col-6">
                        <a
                          href="#addBlogModal"
                          class="btn btn-add"
                          data-toggle="modal"
                        >
                          <i>
                            <FaPlus />
                          </i>{" "}
                          <span>Tambah</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th class="table-column-text">Judul</th>
                        <th class="table-column-text">Kategori</th>
                        <th class="table-column-text">Tanggal</th>
                        <th class="table-column-text">Gambar</th>
                        <th class="table-column-text">Konten</th>
                        <th class="table-column-text">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="table-column-text">
                          Kiat Kiat Kompak Dengan Teman Band
                        </td>
                        <td class="table-column-text">tips</td>
                        <td class="table-column-text">2021-10-27</td>
                        <td class="table-column-text"></td>
                        <td class="table-column-text">haihihaihihhhihihi</td>
                        <td>
                          <a
                            href="#editBlogModal"
                            class="edit"
                            data-toggle="modal"
                          >
                            <i data-toggle="tooltip" title="Edit">
                              <FaPen />
                            </i>
                          </a>
                          <a
                            href="#deleteBlogModal"
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
          <div id="addBlogModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div class="modal-header">
                    <h4 class="modal-title">Tambah Blog</h4>
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
                    <div class="form-group">
                      <label>Judul</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Kategori</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Tanggal</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="customFile">
                        Gambar
                      </label>
                      <input
                        type="file"
                        class="form-control form-control-dashboard"
                        id="customFile"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Konten</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      class="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      class="btn btn-modal-add"
                      value="Tambah"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="editBlogModal" class="modal fade">
            <div class="modal-dialog mx-auto align-items-center">
              <div class="modal-content">
                <form>
                  <div class="modal-header">
                    <h4 class="modal-title">Edit Blog</h4>
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
                    <div class="form-group">
                      <label>Judul</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Kategori</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Tanggal</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="customFile">
                        Gambar
                      </label>
                      <input
                        type="file"
                        class="form-control form-control-dashboard"
                        id="customFile"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Konten</label>
                      <input
                        type="text"
                        class="form-control form-control-dashboard"
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      class="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      class="btn btn-modal-add"
                      value="Edit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="deleteBlogModal" class="modal fade">
            <div class="modal-dialog mx-auto align-items-center">
              <div class="modal-content">
                <form>
                  <div class="modal-header">
                    <h4 class="modal-title">Hapus Blog</h4>
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

export default Instrument;
