import HeroSection from "../components/how it works page/HeroSection";
import Navbar from "../components/landing page/navbar/Navbar";
import LandingPageFooter from "../components/reusable components/Footer";

import { YellowishBody } from "../components/styled/reusable components/reusable";
function HowItWorksPage() {
  return (
    <>
      <YellowishBody />
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <LandingPageFooter></LandingPageFooter>
    </>
  );
}

export default HowItWorksPage;
