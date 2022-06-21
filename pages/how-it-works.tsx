import dynamic from "next/dynamic";
import HeroSection from "../components/how it works page/HeroSection";
import Navbar from "../components/landing page/navbar/Navbar";
import LandingPageFooter from "../components/reusable components/Footer";

import { YellowishBody } from "../components/styled/reusable components/reusable";

const SSR = typeof window === undefined;
function HowItWorksPage() {
  return (
    <>
      {!SSR ? (
        <div>
          <YellowishBody />
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <LandingPageFooter></LandingPageFooter>
        </div>
      ) : null}
      <style jsx global>{`
        body {
          background-color: #ededed;
        }
      `}</style>
    </>
  );
}

export default HowItWorksPage;
