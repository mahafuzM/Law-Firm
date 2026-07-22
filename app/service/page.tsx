import React from 'react';
import ServiceHero from '../components/service/ServiceHero';
import Services from "../components/Home/Services";
import ContactSection from "../components/Home/ContactSection";



export default function ServicePage() {
  return (
    <main>
      <ServiceHero />
      <Services />
        <ContactSection />
    </main>
  );
}
      
   