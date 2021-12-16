import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import jQuery from "jquery";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner";
import Sidebar from "../../../components/Dashboard/User/Sidebar/index";
import Navbar from "../../../components/Dashboard/User/Navbar/index";
import Footer from "../../../components/Dashboard/User/Footer/index";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
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
  const user = useSelector(
    (state) =>
      state.user && state.user.currentUser && state.user.currentUser.users
  );

  let history = useHistory();

  const [spinner, setSpinner] = useState(true);

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
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Dashboard</h1>
            </div>
            {spinner ? (
              <Spinner />
            ) : (
              <div className="row">
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
                <div className="col-md-6 mb-4">
                  <div className="card border-left-card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters my-auto h-100">
                        <div className="col mr-2 align-items-center my-auto">
                          <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                            Riwayat Pesanan
                          </div>
                        </div>
                        <div className="col-auto align-items-center my-auto">
                          <i className="fa-2x card-dashboard-title">
                            <FaCalendarAlt />
                          </i>
                        </div>
                      </div>
                      <Link
                        to="/syncphonic-frontend/dashboard/pesanan"
                        className="stretched-link"
                      />
                    </div>
                  </div>
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

export default Dashboard;
