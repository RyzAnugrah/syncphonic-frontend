import React from "react";
import profilePicture from "../../../assets/images/undraw_profile.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-dark topbar static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link btn-link-toogle d-md-none mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>
      <p className="d-none d-md-inline-block justify-content-center my-auto navbar-title">
        Dashboard Admin
      </p>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-3 d-none d-lg-inline profile-name">Admin</span>
            <img className="img-profile rounded-circle" src={profilePicture} />
          </a>

          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <a
              className="dropdown-item"
              href="/syncphonic-frontend/dashboard/profil"
            >
              <i className="fas fa-user fa-sm fa-fw mr-2 icon-dropdown-profile"></i>
              Profil
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              href="/syncphonic-frontend"
              // data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 icon-dropdown-profile"></i>
              Keluar
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
