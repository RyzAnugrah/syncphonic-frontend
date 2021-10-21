import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavButton = styled(Link)`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColor} !important;
  white-space: nowrap;
  padding: 10px 25px;
  margin-left: 16px;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.hoverColor} !important;
    box-shadow: inset 0 1px 1px ${({ theme }) => theme.hoverColor},
      0 0 8px ${({ theme }) => theme.hoverColor};
  }
`;

export const MobileNavButton = styled(Link)`
  margin: 10px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.bgColor} !important;
  white-space: nowrap;
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: ${({ theme }) => theme.hoverColor} !important;
    box-shadow: inset 0 1px 1px ${({ theme }) => theme.hoverColor},
      0 0 8px ${({ theme }) => theme.hoverColor};
  }
`;

export const MobileNavOutlineButton = styled(Link)`
  margin: 10px 16px;
  border: 2px solid black;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.bgColor};
  white-space: nowrap;
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.bgColor};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: ${({ theme }) => theme.hoverColor} !important;
    box-shadow: inset 0 1px 1px ${({ theme }) => theme.hoverColor},
      0 0 8px ${({ theme }) => theme.hoverColor};
  }
`;

export const HeroButton = styled(Link)`
  border-radius: 5px;
  background: ${({ theme }) => theme.bgColor} !important;
  white-space: nowrap;
  display: block;
  width: 100%;
  padding: 24px;
  text-align: center;
  color: #fff;
  font-size: 22.78px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: ${({ theme }) => theme.hoverColor} !important;
    box-shadow: inset 0 1px 1px ${({ theme }) => theme.hoverColor}, 0 0 8px ${({ theme }) => theme.hoverColor};
  }

  @media screen and (max-width: 991.98px) {
    padding: 16px;
    font-size: 20.25px;
  }

  @media screen and (max-width: 767.98px) {
    padding: 16px;
    font-size: 18px;
  }
`;

export const PriceButton1 = styled.button`
  background-color: #fff !important;
  color: #000;
  border-radius: 50px;
  white-space: nowrap;
  text-align: center;
  font-size: 22.78px;
  font-weight: 600;
  outline: none;
  border: none;
  text-decoration: none;

  &:hover {
    cursor: auto;
  }

  @media screen and (max-width: 991.98px) {
    padding: 16px;
    font-size: 20.25px;
  }

  @media screen and (max-width: 767.98px) {
    width: 100%;
    padding: 16px;
    font-size: 16px;
  }
`;

export const PriceButton2 = styled.button`
  background-color: #fff !important;
  color: #000;
  border-radius: 50px;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  font-size: 22.78px;
  font-weight: 600;
  outline: none;
  border: none;
  text-decoration: none;
  margin-top: 48px;

  &:hover {
    cursor: auto;
  }

  @media screen and (max-width: 991.98px) {
    padding: 16px;
    font-size: 20.25px;
  }

  @media screen and (max-width: 767.98px) {
    width: 100%;
    margin-top: 16px;
    padding: 16px;
    font-size: 16px;
  }
`;

export const CTAButton = styled(Link)`
  border-radius: 5px;
  background: ${({ theme }) => theme.bgColor} !important;
  white-space: nowrap;
  display: block;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  text-align: center;
  color: #fff;
  font-size: 22.78px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: ${({ theme }) => theme.hoverColor} !important;
    box-shadow: inset 0 1px 1px ${({ theme }) => theme.hoverColor},
      0 0 8px ${({ theme }) => theme.hoverColor};
  }

  @media screen and (max-width: 767.98px) {
    padding: 16px;
    font-size: 18px;
  }
`;