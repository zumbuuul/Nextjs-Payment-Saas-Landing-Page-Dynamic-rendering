import {
  HeroHeader,
  HeroHeaderColoredText,
  HeroHeaderMainText,
  HeroHeaderSmallText,
} from "../styled/feature page/header";

import {
  HeroMainContent,
  HeroText,
  HeroTextHeader,
  HeroTextSection,
  HeroTextPiece,
  HeroPhoneWrapper,
} from "../styled/feature page/herocontent";

import { ColoredCircle } from "../styled/reusable components/reusable";

import Image from "next/image";

function FeatureHero(props: {}) {
  return (
    <>
      <HeroHeader>
        <HeroHeaderMainText>
          Premium <br></br> features of{" "}
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
          <HeroTextPiece>
            <HeroTextHeader>Send Money</HeroTextHeader>
            <HeroText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              fugit aliquid dolores cumque eos facilis.
            </HeroText>
          </HeroTextPiece>
          <HeroTextPiece>
            <HeroTextHeader>Money Request</HeroTextHeader>
            <HeroText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              ratione repudiandae officiis quibusdam reprehenderit non.
            </HeroText>
          </HeroTextPiece>
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
          <HeroTextPiece>
            <HeroTextHeader>Pay Bill</HeroTextHeader>
            <HeroText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              eligendi, fuga aut necessitatibus aliquid enim.
            </HeroText>
          </HeroTextPiece>
          <HeroTextPiece>
            <HeroTextHeader>Mobile Recharge</HeroTextHeader>
            <HeroText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              quidem aperiam, illo repellendus ex aliquam.
            </HeroText>
          </HeroTextPiece>
        </HeroTextSection>
      </HeroMainContent>
    </>
  );
}

export default FeatureHero;
