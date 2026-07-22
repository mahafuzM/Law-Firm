
import Hero from "./components/Home/Hero"; 
import About from "./components/Home/About"; 
import Services from "./components/Home/Services";
import Team from "./components/Home/Team";
import WorkProcess from "./components/Home/WorkProcess";
import CaseStudy from "./components/Home/CaseStudy";
import ReviewSection from "./components/Home/ReviewSection";   
import BlogSection from "./components/Home/BlogSection";
import FAQSection from "./components/Home/FAQSection";
import ContactSection from "./components/Home/ContactSection";




export default function Home() {
  return (
    <>
     
      <Hero />
      <About />
      <Services />
      <Team />
      <WorkProcess />
      <CaseStudy />
      <ReviewSection />   
      <BlogSection />
      <FAQSection />
      <ContactSection />
   
     
    </>
  );
}