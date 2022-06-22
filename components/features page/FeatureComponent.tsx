import { NextPage } from "next";
import {
  HeroTextPiece,
  HeroTextHeader,
  HeroText,
} from "../styled/feature page/herocontent";

type Feature = {
  featureTitle: string;
  featureDescription: string;
};

type obj = {
  featureData: Feature;
};

const FeatureComponent: NextPage<obj> = ({ featureData }): JSX.Element => {
  return (
    <>
      <HeroTextPiece>
        <HeroTextHeader>{featureData.featureTitle}</HeroTextHeader>
        <HeroText>{featureData.featureDescription}</HeroText>
      </HeroTextPiece>
    </>
  );
};

export default FeatureComponent;
