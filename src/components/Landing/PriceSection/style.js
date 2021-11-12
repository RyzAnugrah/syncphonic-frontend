import styled from "styled-components";
import Bg1 from "../../../assets/images/bg-landing-1.png";

export const PriceContainer = styled.div`
  background-image: url(${Bg1});
  background-color: ${({ lightBg, theme: { backgroundColors } }) =>
    lightBg ? "#fff" : backgroundColors.primary};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

export const PriceWrapper = styled.div`
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 767.98px) {
    height: auto;
  }
`;

export const PriceRow = styled.div`
  grid-auto-columns: minmax(auto, 1fr);
  white-space: pre-wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "")};

  @media screen and (max-width: 767.98px) {
    display: grid !important;
    justify-items: center;
  }
`;

export const Column1 = styled.div`
  padding: 24px 16px 24px 16px;
  max-width: 600px;

  @media screen and (max-width: 767.98px) {
    padding: 24px 16px !important;
    max-width: 100%;
  }
`;

export const Column2 = styled.div`
  padding: 48px 0 0 24px;
  text-align: center;

  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const Column3 = styled.div`
  @media (min-width: 767.98px) {
    display: none;
  }

  @media screen and (max-width: 767.98px) {
    padding: 24px 0 0 0;
    text-align: center;
    max-width: 100%;
  }
`;

export const Heading = styled.h1`
  text-align: left;
  font-size: 58.45px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ lightBg, theme: { colors } }) =>
    lightBg ? colors.dark : colors.light};

  @media screen and (max-width: 1199.98px) {
    font-size: 51.96px;
  }

  @media screen and (max-width: 991.98px) {
    font-size: 41.05px;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 36.49px;
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

export const ImgButton = styled.img`
  width: 80px;
  height: auto;

  @media screen and (max-width: 767.98px) {
    max-width: 80px;
  }
`;