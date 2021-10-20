import styled from "styled-components";
import Bg2 from "../../../assets/images/bg-landing-2.png";

export const TestimonialContainer = styled.div`
  background-image: url(${Bg2});
  background-color: ${({ lightBg, theme: { backgroundColors } }) =>
    lightBg ? "#fff" : backgroundColors.primary};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

export const TestimonialWrapper = styled.div`
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: 767.98px) {
    height: auto;
  }
`;

export const TestimonialRow = styled.div`
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

export const TestimonialContentRow = styled.div`
  @media screen and (max-width: 767.98px) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  text-align: left;
  padding: 48px 0 0 16px;
  font-size: 58.45px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ lightBg, theme: { colors } }) =>
    lightBg ? colors.dark : colors.light};

  @media screen and (max-width: 1199.98px) {
    font-size: 51.96px;
    padding: 24px 0 0 16px;
  }

  @media screen and (max-width: 991.98px) {
    font-size: 46.18px;
  }

  @media screen and (max-width: 767.98px) {
    font-size: 41.05px;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 36.49px;
  }
`;

export const Quote = styled.q`
  font-size: 16px;
  color: ${({ lightBg, theme: { colors } }) =>
    lightBg ? colors.dark : colors.light};

  @media screen and (max-width: 767.98px) {
    padding-top: 16px;
  }
`;

export const Person = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.p};
  font-weight: 700;
  margin-top: 16px;
  color: ${({ lightBg, theme: { colors } }) =>
    lightBg ? colors.dark : colors.light};

  @media screen and (max-width: 767.98px) {
    margin-bottom: 48px;
  }
`;

export const BtnWrap = styled.div``;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
