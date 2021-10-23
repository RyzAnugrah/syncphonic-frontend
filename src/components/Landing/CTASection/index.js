import React from "react";
import {
  CTAContainer,
  Heading,
} from "./style";
import { CTAButton } from "../../Button";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/style";

const CTASection = ({
  lightBg,
  headline,
  buttonLabel,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CTAContainer className="container-fluid bg-homepage-cta p-3">
        <div className="row justify-content-center h-100">
          <div
            className="col-md-10 my-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
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
              to="/syncphonic-frontend/daftar"
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
