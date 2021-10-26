import React, { useEffect } from "react";
import "../../App.css";
import HeroSection from "../../components/Landing/HeroSection";
import ServicesSection from "../../components/Landing/ServicesSection";
import PriceSection from "../../components/Landing/PriceSection";
import TestimonialSection from "../../components/Landing/TestimonialSection";
import ContactSection from "../../components/Landing/ContactSection";
import CTASection from "../../components/Landing/CTASection";
import { Hero } from "../../components/Landing/Data";
import { Services } from "../../components/Landing/Data";
import { Price } from "../../components/Landing/Data";
import { Testimonial } from "../../components/Landing/Data";
import { Contact } from "../../components/Landing/Data";
import { CTA } from "../../components/Landing/Data";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection {...Hero} />
      <ServicesSection {...Services} />
      <PriceSection {...Price} />
      <TestimonialSection {...Testimonial} />
      <ContactSection {...Contact} />
      <CTASection {...CTA} />
    </>
  );
}

export default Home;
