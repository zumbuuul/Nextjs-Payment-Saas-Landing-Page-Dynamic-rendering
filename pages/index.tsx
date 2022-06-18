import MainContent from "../components/landing page/main content/MainContent";
import Navbar from "../components/landing page/navbar/Navbar";
import PhoneSection from "../components/landing page/phone body/PhoneSection";
import LandingPageFooter from "../components/reusable components/Footer";
import { HeroWrapper } from "../components/styled/main content/MainContent";

function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <HeroWrapper>
        <MainContent></MainContent>
        <PhoneSection></PhoneSection>
      </HeroWrapper>
      <LandingPageFooter></LandingPageFooter>
    </>
  );
}

export default LandingPage;
