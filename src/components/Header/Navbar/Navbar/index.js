import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaBars } from "react-icons/fa";
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
  const user = useSelector((state) => state.user.currentUser);
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
          title: "Yes...",
          text: "Berhasil keluar akun!",
          confirmButtonColor: "#A6711F",
          confirmButtonText: "Sampai jumpa",
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
              <NavLink light={light} to="/syncphonic-frontend/studio">
                Sewa Studio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink light={light} to="/syncphonic-frontend/alat">
                Sewa Alat
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink light={light} to="/syncphonic-frontend/blog">
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
            <NavBtn>
              <NavButton
                theme={{
                  bgColor: theme.colors.accent,
                  color: theme.colors.light,
                  hoverColor: theme.colors.hover,
                }}
                className="btn"
                type="button"
                to="#"
                onClick={handleClickLogout}
              >
                Keluar
              </NavButton>
            </NavBtn>
          )}
        </NavbarContainer>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;
