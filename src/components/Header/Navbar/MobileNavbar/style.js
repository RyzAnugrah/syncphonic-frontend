import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '100%')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 100;
`;

export const MobileNavbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 80%;
  height: 100%;
  background-color: ${({ light, theme: { backgroundColors } }) =>
    light ? "#fff" : backgroundColors.secondary};
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 5px;
  right: 16px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: ${({ light, theme: { colors } }) =>
    light ? colors.dark : colors.light};
`;

export const NavLogo = styled(RouterLink)`
  text-decoration: none;
  position: absolute;
  top: 5px;
  left: 16px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileNavbarWrapper = styled.div`
  color: #fff;
`;

export const MobileNavbarMenu = styled.ul`
  padding: 32px 16px 0px 16px;
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
  text-align: left;
`;

export const MobileNavbarLink = styled(RouterLink)`
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.p};
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${({ light, theme: { colors } }) =>
    light ? colors.dark : colors.light};
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
    transition: 0.2s ease-in-out;
  }
`;

export const MobileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;