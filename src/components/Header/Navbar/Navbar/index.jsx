import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaBars, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import Swal from "sweetalert2";

import { logout } from "../../../../redux/apiCalls";
import { NavButton } from "../../../Button";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
} from "./style";
import theme from "../../../../assets/styles/style";
import logo from "../../../../logo-light.svg";

export const LightTheme = false;

const Navbar = ({ toggle, light }) => {
  const user = useSelector((state) => state.user && state.user.currentUser);
  const dispatch = useDispatch();
  let history = useHistory();

  const dropdownButton = {
    fontSize: "16px",
  };

  const dropdownMenu = {
    backgroundColor: "#242323",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    margin: "1rem 0.5rem 0 0.5rem",
  };

  const dropdownDivider = {
    height: "0",
    margin: "0.5rem 0",
    overflow: "hidden",
    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
  };

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
    <ThemeProvider theme={theme}>
      <Nav light={light}>
        <NavbarContainer light={light}>
          <MobileIcon light={light} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavLogo to="/syncphonic-frontend">
            <img width="128px" src={logo} alt="logo" />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink
                light={light}
                to="/syncphonic-frontend/studio"
                className={
                  window.location.href.includes("/syncphonic-frontend/studio")
                    ? "active"
                    : ""
                }
              >
                Sewa Studio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                light={light}
                to="/syncphonic-frontend/instrument"
                className={
                  window.location.href.includes(
                    "/syncphonic-frontend/instrument"
                  )
                    ? "active"
                    : ""
                }
              >
                Sewa Instrument
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                light={light}
                to="/syncphonic-frontend/blog"
                className={
                  window.location.href.includes("/syncphonic-frontend/blog")
                    ? "active"
                    : ""
                }
              >
                Blog
              </NavLink>
            </NavItem>
          </NavMenu>
          {!user ? (
            <NavBtn>
              <NavLink light={light} to="/syncphonic-frontend/masuk">
                Masuk
              </NavLink>
              <NavButton
                theme={{
                  bgColor: theme.colors.accent,
                  color: theme.colors.light,
                  hoverColor: theme.colors.hover,
                }}
                to="/syncphonic-frontend/daftar"
                className="btn"
                type="button"
              >
                Daftar
              </NavButton>
            </NavBtn>
          ) : (
            <div className="dropdown">
              <NavBtn
                id="dropdownUser"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <NavButton
                  theme={{
                    bgColor: theme.colors.accent,
                    color: theme.colors.light,
                    hoverColor: theme.colors.hover,
                  }}
                  className="btn dropdown-toggle"
                  type="button"
                  to="#"
                  style={dropdownButton}
                >
                  {`Akun Saya`}
                </NavButton>
              </NavBtn>
              <ul
                className="dropdown-menu"
                style={dropdownMenu}
                aria-labelledby="dropdownUser"
              >
                <li>
                  <NavLink
                    light={light}
                    to="/syncphonic-frontend/dashboard"
                    className="dropdown-item mt-2"
                  >
                    <FaTachometerAlt /> &ensp;Dashboard
                  </NavLink>
                </li>
                <div style={dropdownDivider}></div>
                <li>
                  <NavLink
                    light={light}
                    to="#"
                    className="dropdown-item mt-2"
                    onClick={handleClickLogout}
                  >
                    <FaSignOutAlt /> &ensp;Keluar
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </NavbarContainer>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;
