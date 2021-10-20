import React from "react";
import {
  CTAContainer,
  CTAWrapper,
  CTARow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  Img,
} from "./style";
import { CTAButton } from "../../Button";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/style";
import ImgCTA from "../../../assets/images/bg-landing-cta.png";

const CTASection = ({
  lightBg,
  id,
  imgStart,
  headline,
  description,
  buttonLabel,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CTAContainer className="container-fluid bg-homepage-cta p-3">
        <div className="row justify-content-center h-100">
          <div className="col-md-10 my-auto text-center">
            <Heading className="row justify-content-center" lightBg={lightBg}>
              {headline}
            </Heading>
            <CTAButton
              theme={{
                bgColor: theme.colors.accent,
                color: theme.colors.light,
                hoverColor: theme.colors.hover,
              }}
              className="btn"
              type="button"
              to="/syncphonic-frontend/signup"
            >
              {buttonLabel}
            </CTAButton>
          </div>
        </div>
      </CTAContainer>
    </ThemeProvider>
  );
};

export default CTASection;
