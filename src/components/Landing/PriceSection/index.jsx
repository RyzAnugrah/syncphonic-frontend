import React from "react";
import { PriceButton1 } from "../../Button";
import { PriceButton2 } from "../../Button";
import {
  PriceContainer,
  PriceWrapper,
  PriceRow,
  Column1,
  Column2,
  Column3,
  Heading,
  Subtitle,
  Img,
  ImgButton,
} from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/style";
import ImgPrice from "../../../assets/images/landing-price.png";
import IconPrice1 from "../../../assets/images/landing-icon-price-1.png";
import IconPrice2 from "../../../assets/images/landing-icon-price-2.png";

const PriceSection = ({
  lightBg,
  id,
  imgStart,
  headline,
  description,
  buttonLabel,
  buttonLabel2,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <PriceContainer id={id} lightBg={lightBg}>
        <PriceWrapper>
          <PriceRow
            className="row container-fluid g-0 justify-content-center"
            imgStart={imgStart}
          >
            <Column1
              className="col-md-6"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <Heading lightBg={lightBg}>{headline}</Heading>
              <Column3 className="col-md-6">
                <div className="column">
                  <div className="float-center">
                    <PriceButton1 className="btn py-1" type="button">
                      <Img className="px-3" src={IconPrice1} alt="price" />
                      {buttonLabel}
                    </PriceButton1>
                  </div>
                  <div className="float-center">
                    <PriceButton2 className="btn py-1" type="button">
                      <Img className="px-3" src={IconPrice2} alt="quality" />
                      {buttonLabel2}
                    </PriceButton2>
                  </div>
                </div>
              </Column3>
              <Subtitle className="my-4" lightBg={lightBg}>
                {description}
              </Subtitle>
            </Column1>

            <Column2
              className="col-md-6"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <div className="column">
                <div className="float-end">
                  <PriceButton1 className="btn py-3" type="button">
                    <ImgButton className="px-3" src={IconPrice1} alt="price" />
                    {buttonLabel}
                  </PriceButton1>
                </div>
                <div className="float-start">
                  <PriceButton2 className="btn py-3" type="button">
                    <ImgButton
                      className="px-3"
                      src={IconPrice2}
                      alt="quality"
                    />
                    {buttonLabel2}
                  </PriceButton2>
                </div>
              </div>
              <Img src={ImgPrice} alt="price" />
            </Column2>
          </PriceRow>
        </PriceWrapper>
      </PriceContainer>
    </ThemeProvider>
  );
};

export default PriceSection;
