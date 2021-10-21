import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  Img,
  ContactInfo,
  ContactLink,
  ContactImage,
} from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/style";
import ImgContact from "../../../assets/images/landing-contact.png";
import imgIconInstagram from "../../../assets/images/landing-icon-instagram.png";
import imgIconYoutube from "../../../assets/images/landing-icon-youtube.png";
import imgIconEmail from "../../../assets/images/landing-icon-email.png";

const ContactSection = ({
  lightBg,
  id,
  imgStart,
  headline,
  description,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ContactContainer id={id} lightBg={lightBg}>
        <ContactWrapper>
          <ContactRow
            className="row container-fluid g-0 justify-content-end"
            imgStart={imgStart}
          >
            <Column1 className="col-md-6">
              <Heading lightBg={lightBg}>{headline}</Heading>
              <Subtitle className="my-4" lightBg={lightBg}>
                {description}
              </Subtitle>
              <ContactInfo className="mt-4">
                <ContactLink href="https://instagram.com">
                  <ContactImage
                    src={imgIconInstagram}
                    alt="iconInstagram"
                    className="img-fluid"
                  />
                </ContactLink>
                <ContactLink href="https://youtube.com">
                  <ContactImage
                    src={imgIconYoutube}
                    alt="iconYoutube"
                    className="img-fluid"
                  />
                </ContactLink>
                <ContactLink href="https://gmail.com">
                  <ContactImage
                    src={imgIconEmail}
                    alt="iconYoutube"
                    className="img-fluid"
                  />
                </ContactLink>
              </ContactInfo>
            </Column1>
            <Column2 className="col-md-6">
              <Img src={ImgContact} alt="Contact" />
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </ThemeProvider>
  );
};

export default ContactSection;
