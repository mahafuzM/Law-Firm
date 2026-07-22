import { Contact } from "lucide-react";
import CaseStudyHero from "../components/Case Study/CaseStudyHero";
import CaseStudyDetails from "../components/CaseStudyDetails";
import ContactSection from "../components/Home/ContactSection";

export default function Page() {
  return (
    <>
        <CaseStudyHero />
      <CaseStudyDetails />
      <ContactSection />
    </>
  );
}