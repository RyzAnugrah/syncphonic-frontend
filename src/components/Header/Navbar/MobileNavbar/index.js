import React from "react";
import {
  Overlay,
  MobileNavbarContainer,
  Icon,
  NavLogo,
  MobileNavbarWrapper,
  MobileNavbarMenu,
  MobileNavbarLink,
  MobileBtnWrap
} from './style';
import { MobileNavButton } from "../../../Button";
import { MobileNavOutlineButton } from "../../../Button";
import { FaTimes } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../assets/styles/style";
import logo from "../../../../logo-light.svg";

const MobileNavbar = ({ isOpen, toggle, lightTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Overlay isOpen={isOpen}>
        <MobileNavbarContainer lightTheme={lightTheme} isOpen={isOpen}>
          <Icon lightTheme={lightTheme} onClick={toggle}>
            <FaTimes />
          </Icon>
          <NavLogo to="/syncphonic-frontend/">
            <img width="128px" src={logo} alt="logo" onClick={toggle} />
          </NavLogo>
          <MobileNavbarWrapper>
            <MobileNavbarMenu>
              <MobileNavbarLink
                lightTheme={lightTheme}
                to="/syncphonic-frontend/studio"
                onClick={toggle}
              >
                Sewa Studio
              </MobileNavbarLink>
              <MobileNavbarLink
                lightTheme={lightTheme}
                to="/syncphonic-frontend/alat"
                onClick={toggle}
              >
                Sewa Alat
              </MobileNavbarLink>
              <MobileNavbarLink
                lightTheme={lightTheme}
                to="/syncphonic-frontend/kursus"
                onClick={toggle}
              >
                Kursus
              </MobileNavbarLink>
            </MobileNavbarMenu>
            <MobileBtnWrap>
              <MobileNavOutlineButton
                theme={{
                  bgColor: theme.colors.accent,
                  color: theme.colors.light,
                  hoverColor: theme.colors.hover,
                }}
                lightTheme={lightTheme}
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
          </MobileNavbarWrapper>
        </MobileNavbarContainer>
      </Overlay>
    </ThemeProvider>
  );
};

export default MobileNavbar;
