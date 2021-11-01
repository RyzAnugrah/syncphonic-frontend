import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import profilePicture from "../../../../assets/images/undraw_profile.svg";

import { logout } from "../../../../redux/apiCalls";

const Navbar = () => {
  const user = useSelector(
    (state) =>
      state.user && state.user.currentUser && state.user.currentUser.users
  );
  const dispatch = useDispatch();
  let history = useHistory();

  const handleClickLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "warning",
      title: "Anda yakin?",
      text: "Tekan tombol ya jika ingin keluar!",
      confirmButtonColor: "#A6711F",
      confirmButtonText: "Ya",
      showCancelButton: true,
      cancelButtonColor: "#52000D",
      cancelButtonText: "Tidak",
      timer: 5000,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Berhasil keluar akun!",
          text: "Sampai jumpa",
          showConfirmButton: false,
          timer: 1500,
        });
        logout(dispatch);
        history.push("/syncphonic-frontend");
      } else if (result.isDismissed) {
        Swal.fire({
          icon: "info",
          title: "Yes...",
          text: "Berhasil kembali!",
          confirmButtonColor: "#A6711F",
          confirmButtonText: "Ok",
          timer: 1500,
        });
      }
    });
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-dark topbar static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link btn-link-toogle d-md-none mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>
      <Link to="/syncphonic-frontend/dashboard">
        <p className="d-none d-md-inline-block justify-content-center my-auto navbar-title">
          {`Hallo, ${user && user.name ? user.name : "User"}!`}
        </p>
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-3 d-none d-lg-inline profile-name">
              {user && user.name ? user.name : "User"}
            </span>
            <img
              className="img-profile rounded-circle"
              src={profilePicture}
              alt="profile"
            />
          </Link>

          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link
              className="dropdown-item"
              to="/syncphonic-frontend/dashboard/profil"
            >
              <i className="fas fa-user fa-sm fa-fw mr-2 icon-dropdown-profile"></i>
              Profil
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/syncphonic-frontend">
              <i className="fas fa-home fa-sm fa-fw mr-2 icon-dropdown-profile"></i>
              Home
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#" onClick={handleClickLogout}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 icon-dropdown-profile"></i>
              Keluar
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
