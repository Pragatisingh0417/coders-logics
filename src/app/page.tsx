import Image from "next/image";
import ITCompanyBanner from "./components/ITCompanyBanner";
import About from "./components/About-us";
import Services from "./components/Our-servives";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactCTA from "./components/ContactCTA";
import AboutFeaturesSection from "./components/AboutFeaturesSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <ITCompanyBanner />
     <About />
     <Services /> 
     <AboutFeaturesSection />    
     <WhyChooseUs />
     <Testimonials />
     <ContactCTA />
    
    </div>
  );
}
