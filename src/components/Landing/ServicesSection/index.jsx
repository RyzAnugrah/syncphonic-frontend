import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  Img,
} from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/style";
import ImgServices from "../../../assets/images/landing-services.png";

const ServicesSection = ({
  lightBg,
  id,
  imgStart,
  headline,
  description,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ServicesContainer id={id} lightBg={lightBg}>
        <ServicesWrapper>
          <ServicesRow
            className="row container-fluid g-0 justify-content-end"
            imgStart={imgStart}
          >
            <Column1
              className="col-md-6"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <Heading lightBg={lightBg}>{headline}</Heading>
              <Subtitle className="my-4" lightBg={lightBg}>
                {description}
              </Subtitle>
            </Column1>
            <Column2
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <Img src={ImgServices} alt="Services" />
            </Column2>
          </ServicesRow>
        </ServicesWrapper>
      </ServicesContainer>
    </ThemeProvider>
  );
};

export default ServicesSection;
