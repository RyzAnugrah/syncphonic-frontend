import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
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
import { ThemeProvider } from "styled-components";
import theme from "../../../../assets/styles/style";
import logo from "../../../../logo-light.svg";

export const LightTheme = false;

const Navbar = ({ toggle, light }) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClickLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
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
              <NavLink light={light} to="/syncphonic-frontend/kursus">
                Kursus
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
                Logout
              </NavButton>
            </NavBtn>
          )}
        </NavbarContainer>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;
