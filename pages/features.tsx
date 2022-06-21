import FeatureHero from "../components/features page/FeatureHero";
import Navbar from "../components/landing page/navbar/Navbar";
import LandingPageFooter from "../components/reusable components/Footer";

function FeaturesPage() {
  return (
    <>
      <Navbar></Navbar>
      <FeatureHero></FeatureHero>
      <LandingPageFooter></LandingPageFooter>
      <style jsx global>{`
        body {
          background-color: #ffffff;
        }
      `}</style>
    </>
  );
}

export default FeaturesPage;
