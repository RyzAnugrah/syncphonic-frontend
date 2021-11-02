import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import jQuery from "jquery";
import Swal from "sweetalert2";

import Spinner from "../../../components/Spinner";
import Sidebar from "../../../components/Dashboard/Admin/Sidebar/index";
import Navbar from "../../../components/Dashboard/Admin/Navbar/index";
import Footer from "../../../components/Dashboard/Admin/Footer/index";
import { FaUserEdit, FaWarehouse, FaBlog } from "react-icons/fa";
import { GiGuitarHead } from "react-icons/gi";
import "./style.css";

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

const Dashboard = () => {
  const [spinner, setSpinner] = useState(true);

  const user = useSelector(
    (state) =>
      state.user && state.user.currentUser && state.user.currentUser.users
  );

  let history = useHistory();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Oops ... Akses terbatas",
        text: "Hanya admin yang boleh masuk!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          history.push("/syncphonic-frontend/masuk");
        }, 100);
      });
    }

    if (user) {
      if (user && user.name.toLowerCase() !== "admin") {
        Swal.fire({
          icon: "warning",
          title: "Oops ... Akses terbatas",
          text: "Hanya admin yang boleh masuk!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setTimeout(() => {
            history.push("/syncphonic-frontend/dashboard");
          }, 100);
        });
      } else {
        window.scrollTo(0, 0);
        setTimeout(() => setSpinner(false), 1000);
      }
    }
  }, [history, user]);

  return spinner ? (
    <Spinner />
  ) : (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Dashboard</h1>
            </div>
            <div className="row">
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
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
