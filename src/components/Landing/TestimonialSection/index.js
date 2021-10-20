import React from "react";
import {
  TestimonialContainer,
  TestimonialWrapper,
  TestimonialRow,
  TestimonialContentRow,
  Heading,
  Quote,
  Person,
} from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/style";
import ImgTestimonial1 from "../../../assets/images/landing-icon-testimoni.png";
import ImgTestimonial2 from "../../../assets/images/landing-icon-testimoni.png";
import ImgTestimonial3 from "../../../assets/images/landing-icon-testimoni.png";
import ImgTestimonial4 from "../../../assets/images/landing-icon-testimoni.png";

const TestimonialSection = ({
  lightBg,
  id,
  headline,
  description1,
  description2,
  description3,
  description4,
  person1,
  person2,
  person3,
  person4,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <TestimonialContainer id={id} lightBg={lightBg}>
        <TestimonialWrapper className="container-fluid g-0">
          <Heading className="container-fluid">{headline}</Heading>
          <TestimonialRow className="row container-fluid g-0 justify-content-center">
            <TestimonialContentRow className="row container-fluid g-0 justify-content-center">
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={ImgTestimonial1}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8 my-auto">
                      <Quote>{description1}</Quote>
                      <Person>{person1}</Person>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={ImgTestimonial1}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8 my-auto">
                      <Quote>{description1}</Quote>
                      <Person>{person1}</Person>
                    </div>
                  </div>
                </div>
              </div>
            </TestimonialContentRow>
            <TestimonialContentRow className="row container-fluid g-0 justify-content-center">
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={ImgTestimonial1}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8 my-auto">
                      <Quote>{description1}</Quote>
                      <Person>{person1}</Person>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={ImgTestimonial1}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8 my-auto">
                      <Quote>{description1}</Quote>
                      <Person>{person1}</Person>
                    </div>
                  </div>
                </div>
              </div>
            </TestimonialContentRow>
          </TestimonialRow>
        </TestimonialWrapper>
      </TestimonialContainer>
    </ThemeProvider>
  );
};

export default TestimonialSection;
