import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaTimes } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import Swal from "sweetalert2";

import { logout } from "../../../../redux/apiCalls";
import {
  Overlay,
  MobileNavbarContainer,
  Icon,
  NavLogo,
  MobileNavbarWrapper,
  MobileNavbarMenu,
  MobileNavbarLink,
  MobileBtnWrap,
} from "./style";
import { MobileNavButton } from "../../../Button";
import { MobileNavOutlineButton } from "../../../Button";
import { theme } from "../../../../assets/styles/style";
import logo from "../../../../logo-light.svg";

const MobileNavbar = ({ isOpen, toggle, light }) => {
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
        toggle();
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
      <Overlay isOpen={isOpen}>
        <MobileNavbarContainer light={light} isOpen={isOpen}>
          <Icon light={light} onClick={toggle}>
            <FaTimes />
          </Icon>
          <NavLogo to="/syncphonic-frontend">
            <img width="128px" src={logo} alt="logo" onClick={toggle} />
          </NavLogo>
          <MobileNavbarWrapper>
            <MobileNavbarMenu>
              <MobileNavbarLink
                light={light}
                to="/syncphonic-frontend/studio"
                onClick={toggle}
              >
                Sewa Studio
              </MobileNavbarLink>
              <MobileNavbarLink
                light={light}
                to="/syncphonic-frontend/alat"
                onClick={toggle}
              >
                Sewa Alat
              </MobileNavbarLink>
              <MobileNavbarLink
                light={light}
                to="/syncphonic-frontend/kursus"
                onClick={toggle}
              >
                Kursus
              </MobileNavbarLink>
            </MobileNavbarMenu>
            {!user ? (
              <>
                <MobileBtnWrap>
                  <MobileNavOutlineButton
                    theme={{
                      bgColor: theme.colors.accent,
                      color: theme.colors.light,
                      hoverColor: theme.colors.hover,
                    }}
                    light={light}
                    to="/syncphonic-frontend/masuk"
                    onClick={toggle}
                  >
                    Masuk
                  </MobileNavOutlineButton>
                </MobileBtnWrap>
                <MobileBtnWrap>
                  <MobileNavButton
                    theme={{
                      bgColor: theme.colors.accent,
                      color: theme.colors.light,
                      hoverColor: theme.colors.hover,
                    }}
                    to="/syncphonic-frontend/daftar"
                    onClick={toggle}
                  >
                    Daftar
                  </MobileNavButton>
                </MobileBtnWrap>
              </>
            ) : (
              <MobileBtnWrap>
                <MobileNavButton
                  theme={{
                    bgColor: theme.colors.accent,
                    color: theme.colors.light,
                    hoverColor: theme.colors.hover,
                  }}
                  to="#"
                  onClick={handleClickLogout}
                >
                  Keluar
                </MobileNavButton>
              </MobileBtnWrap>
            )}
          </MobileNavbarWrapper>
        </MobileNavbarContainer>
      </Overlay>
    </ThemeProvider>
  );
};

export default MobileNavbar;
