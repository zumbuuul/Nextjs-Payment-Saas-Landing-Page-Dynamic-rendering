import AboutPayHeader from "../components/about page/header/AboutPayHeader";
import AboutPayHero from "../components/about page/hero/AboutPayHero";
import Navbar from "../components/landing page/navbar/Navbar";
import LandingPageFooter from "../components/reusable components/Footer";

function AboutPayPage() {
  return (
    <>
      <Navbar></Navbar>
      <AboutPayHeader></AboutPayHeader>
      <AboutPayHero></AboutPayHero>
      <LandingPageFooter></LandingPageFooter>
      <style jsx global>{`
        body {
          background-color: #ecf1ef;
        }
      `}</style>
    </>
  );
}

//#ECF1EF;

export default AboutPayPage;
