import React from "react";
import { HeroButton } from "../../Button";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  Img,
} from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/style";
import ImgHero from "../../../assets/images/landing-hero.png";

const HeroSection = ({
  lightBg,
  id,
  imgStart,
  headline,
  description,
  buttonLabel,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <HeroContainer id={id} lightBg={lightBg}>
        <HeroWrapper>
          <HeroRow
            className="row container-fluid g-0 justify-content-end"
            imgStart={imgStart}
          >
            <Column1
              className="col-md-6"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <Heading lightBg={lightBg}>{headline}</Heading>
              <Subtitle className="my-4" lightBg={lightBg}>
                {description}
              </Subtitle>
              <HeroButton
                theme={{
                  bgColor: theme.colors.accent,
                  color: theme.colors.light,
                  hoverColor: theme.colors.hover,
                }}
                className="btn"
                type="button"
                to="/syncphonic-frontend/daftar"
              >
                {buttonLabel}
              </HeroButton>
            </Column1>
            <Column2
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Img src={ImgHero} alt="hero" />
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </ThemeProvider>
  );
};

export default HeroSection;
