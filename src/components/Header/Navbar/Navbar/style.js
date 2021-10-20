import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${({ lightTheme, theme: { backgroundColors } }) =>
    lightTheme ? "#fff" : backgroundColors.secondary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.p};
  position: -webkit-sticky;
  position: sticky;
  top: 0 !important;
  z-index: 10;

  @media only screen and (max-width: 767.98px) {
    height: 70px;
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  align-items: center;
  max-width: 1200px;
  padding: 0 1rem 0 1rem;
`;

export const NavLogo = styled(RouterLink)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  @media only screen and (max-width: 767.98px) {
    display: grid;
    padding-right: 32px;
    padding-top: 5px;
    width: 100%;
    justify-items: center;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media only screen and (max-width: 767.98px) {
    display: block;
    top: 0;
    right: 0;
    font-size: 2rem;
    cursor: pointer;
    color: ${({ lightTheme, theme: { colors } }) => (lightTheme ? colors.dark : colors.light)};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  list-style: none;
  margin-left: 24px;
  width: 100vw;
  white-space: nowrap;

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
`;

export const NavLink = styled(RouterLink)`
  color: ${({ lightTheme, theme: { colors } }) =>
    lightTheme ? colors.dark : colors.light};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;
