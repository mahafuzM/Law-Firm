import React from 'react';
import AboutHero from "../components/About/AboutHero";
import About from "../components/Home/About"; 
import AboutStats from '../components/About/AboutStats';
import AboutTruust from '../components/About/AboutTrust';
import AboutConsultation from '../components/About/AboutConsultation';
import AboutExperienced from '../components/About/AboutExperienced';
import WorkProcess from "../components/Home/WorkProcess";
import Aboutlocation from '../components/About/Aboutlocation';
import ContactSection from "../components/Home/ContactSection";



export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <About />
      <AboutStats />
        <AboutTruust />
      <AboutConsultation />
       <AboutExperienced />
        <WorkProcess />
        <Aboutlocation />
        <ContactSection />
    </main>
  );
}