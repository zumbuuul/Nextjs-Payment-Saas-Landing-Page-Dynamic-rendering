import {
  HeroHeader,
  HeroHeaderColoredText,
  HeroHeaderMainText,
  HeroHeaderSmallText,
} from "../styled/feature page/header";

import {
  HeroMainContent,
  HeroTextSection,
  HeroPhoneWrapper,
} from "../styled/feature page/herocontent";

import FeatureComponent from "./FeatureComponent";

import Image from "next/image";
import { NextPage } from "next";

type Feature = {
  featureTitle: string;
  featureDescription: string;
};

type obj = {
  data: Feature[];
};

const FeatureHero: NextPage<obj> = ({ data }): JSX.Element => {
  if (!data) return <></>;

  return (
    <>
      <HeroHeader>
        <HeroHeaderMainText>
          Premium <br></br> features of
          <HeroHeaderColoredText>.Pay</HeroHeaderColoredText>
        </HeroHeaderMainText>
        <HeroHeaderSmallText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eius mollitia vero voluptatem ex eaque voluptate suscipit consectetur
          fuga doloremque.
        </HeroHeaderSmallText>
      </HeroHeader>
      <></>
      <HeroMainContent>
        <HeroTextSection>
          {data.slice(0, 2).map((feature) => (
            <FeatureComponent
              key={feature.featureTitle}
              featureData={feature}
            ></FeatureComponent>
          ))}
        </HeroTextSection>
        <HeroPhoneWrapper size="600px" backgroundColor="#D5E1DC">
          <Image
            src="/feature.png"
            alt="Feature phones"
            width="401px"
            height="632px"
          ></Image>
        </HeroPhoneWrapper>
        <HeroTextSection>
          {data.slice(2, 4).map((feature) => (
            <FeatureComponent
              key={feature.featureTitle}
              featureData={feature}
            ></FeatureComponent>
          ))}
        </HeroTextSection>
      </HeroMainContent>
    </>
  );
};

export default FeatureHero;
