import { NextPage } from "next";
import FeatureHero from "../components/features page/FeatureHero";
import Navbar from "../components/landing page/navbar/Navbar";
import LandingPageFooter from "../components/reusable components/Footer";

import { getAllFeatures } from "../fake-api/featuresApi";

type Feature = {
  featureTitle: string;
  featureDescription: string;
};

type obj = {
  data: Feature[];
};

const FeaturesPage: NextPage<obj> = ({ data }): JSX.Element => {
  return (
    <>
      <Navbar></Navbar>
      <FeatureHero data={data}></FeatureHero>
      <LandingPageFooter></LandingPageFooter>
      <style jsx global>{`
        body {
          background-color: #ffffff;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps() {
  const data = await getAllFeatures();
  return { props: { data } };
}

export default FeaturesPage;
