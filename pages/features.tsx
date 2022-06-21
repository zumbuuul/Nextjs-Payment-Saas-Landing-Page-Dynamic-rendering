import FeatureHero from "../components/features page/FeatureHero";
import Navbar from "../components/landing page/navbar/Navbar";
import LandingPageFooter from "../components/reusable components/Footer";

import { getAllFeatures } from "../fake-api/featuresApi";

interface IProps {
  num: number;
}

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

export async function getServerSideProps() {
  const data = await getAllFeatures();

  return { props: { data } };
}

export default FeaturesPage;
