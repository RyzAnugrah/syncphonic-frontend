import styled from "styled-components";
import Bg from "../../../assets/images/bg-landing-cta.png";

export const CTAContainer = styled.div`
  background-image: url(${Bg});
  background-color: ${({ lightBg, theme: { backgroundColors } }) =>
    lightBg ? "#fff" : backgroundColors.primary};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 650px;

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

export const CTAWrapper = styled.div`
  z-index: 1;
  height: auto;
  width: 100%;

  @media screen and (max-width: 767.98px) {
    height: auto;
  }
`;

export const CTARow = styled.div`
  grid-auto-columns: minmax(auto, 1fr);
  white-space: pre-wrap;
  align-items: center;
  width: 100%;
  padding-right: 0;
  margin-right: 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "")};

  @media screen and (max-width: 767.98px) {
    display: grid !important;
    justify-items: center;
  }
`;

export const Column1 = styled.div`
  padding: 24px 16px 24px 24px;
  max-width: 600px;

  @media screen and (max-width: 767.98px) {
    padding: 24px 16px !important;
    max-width: 100%;
  }
`;

export const Column2 = styled.div`
  padding: 48px 24px 0 0;
  text-align: left;

  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  padding: 48px 0;
  font-size: 36.49px;
  line-height: 1.3;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  color: ${({ lightBg, theme: { colors } }) =>
    lightBg ? colors.dark : colors.light};

  @media screen and (max-width: 767.98px) {
    font-size: 32.44px;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 28.83px;
  }
`;

export const Subtitle = styled.p`
  font-size: 22.78px;
  color: ${({ lightBg, theme: { colors } }) =>
    lightBg ? colors.dark : colors.light};

  @media screen and (max-width: 991.98px) {
    font-size: 18px;
  }
`;

export const BtnWrap = styled.div``;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
