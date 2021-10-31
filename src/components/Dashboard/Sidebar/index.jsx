import React from "react";
import logo from "../../../logo-light.svg";
import logoMobile from "../../../logo-favicon-light.svg";
import {
  FaTachometerAlt,
  FaUserEdit,
  FaWarehouse,
  FaBlog,
} from "react-icons/fa";
import { GiGuitarHead } from "react-icons/gi";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <a className="sidebar-brand-text mx-3" href="/syncphonic-frontend">
          <img width="128px" src={logo} alt="logo" />
        </a>
        <a className="sidebar-brand-icon mx-3" href="/syncphonic-frontend">
          <img width="48px" src={logoMobile} alt="logo" />
        </a>
      </div>
      <hr className="sidebar-divider my-2" />
      <li className="nav-item">
        <div className="nav-item-link">
          <a className="nav-link" href="/syncphonic-frontend/dashboard">
            <i>
              <FaTachometerAlt />
            </i>
            <span>Dashboard</span>
          </a>
        </div>
      </li>

      <hr className="sidebar-divider my-2" />

      <li className="nav-item">
        <div className="nav-item-link">
          <a className="nav-link" href="/syncphonic-frontend/dashboard/studio">
            <i>
              <FaWarehouse />
            </i>
            <span>Studio</span>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="nav-item-link">
          <a
            className="nav-link"
            href="/syncphonic-frontend/dashboard/instrument"
          >
            <i>
              <GiGuitarHead />
            </i>
            <span>Instrument</span>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="nav-item-link">
          <a className="nav-link" href="/syncphonic-frontend/dashboard/blog">
            <i>
              <FaBlog />
            </i>
            <span>Blog</span>
          </a>
        </div>
      </li>

      <hr className="sidebar-divider my-2" />

      <li className="nav-item">
        <div className="nav-item-link">
          <a className="nav-link" href="/syncphonic-frontend/dashboard/user">
            <i>
              <FaUserEdit />
            </i>
            <span>Member</span>
          </a>
        </div>
      </li>

      <hr className="sidebar-divider d-none d-md-block my-2" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle my-2" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default Sidebar;
