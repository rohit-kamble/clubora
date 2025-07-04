import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import GlobalExpertiseSection from "../components/sections/GlobalExpertiseSection";
import FeaturedClientsSection from "../components/sections/FeaturedClientsSection";
import BestPracticesSection from "../components/sections/BestPracticesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import WhatSetsUsApartSection from "@/components/sections/WhatSetsUsApartSection";
import ServicePartnerSection from "../components/sections/ServicePartnerSection";
import AssociatePartnerSection from "@/components/sections/AssociatePartnerSection";
import Footer2 from "@/components/Footer2";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WhatSetsUsApartSection />
      <BestPracticesSection />
      <ServicePartnerSection />
      <AssociatePartnerSection />
      <GlobalExpertiseSection />
      <FeaturedClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer2 />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
