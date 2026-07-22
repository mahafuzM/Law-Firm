import CaseStudyHero from "../components/Case Study/CaseStudyHero";
import CaseStudyTrusted from "../components/Case Study/CaseStudyTrusted";
import ContactSection from "../components/Home/ContactSection";
import AllCaseStudy from "../components/Case Study/AllCaseStudy";





export default function CaseStudyPage() {
  return (
    <main>
      <CaseStudyHero />
      <AllCaseStudy />
      <CaseStudyTrusted />
      <ContactSection />
    </main>
  );
}