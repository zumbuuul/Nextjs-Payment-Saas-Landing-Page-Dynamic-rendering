import {
  BubbleWrapper,
  HeroMainWrapper,
  StatisticBubble,
  StatisticBubbleText,
  StatisticBubbleTitle,
  TestWrapper,
} from "../../styled/about page/hero/aboutPayHeroStyled";

import Image from "next/image";

function AboutPayHero() {
  return (
    <>
      <HeroMainWrapper>
        <BubbleWrapper>
          <StatisticBubble
            size="300px"
            backgroundColor="#F7F9F8"
            topMargin="80px"
            translate="7vw"
          >
            <StatisticBubbleTitle fontSize="5rem">5k</StatisticBubbleTitle>
            <StatisticBubbleText fontSize="1.25rem">
              Active users
            </StatisticBubbleText>
          </StatisticBubble>
          <StatisticBubble
            size="250px"
            backgroundColor="#E8FFFD"
            topMargin="200px"
            translate="27vw"
          >
            <StatisticBubbleTitle fontSize="4.5rem">10k</StatisticBubbleTitle>
            <StatisticBubbleText fontSize="1rem">Downloads</StatisticBubbleText>
          </StatisticBubble>
          <StatisticBubble
            size="215px"
            backgroundColor="#F5FFEF"
            topMargin="450px"
            translate="15vw"
          >
            <StatisticBubbleTitle fontSize="4rem">12k+</StatisticBubbleTitle>
            <StatisticBubbleText fontSize="0.9rem">Reviews</StatisticBubbleText>
          </StatisticBubble>
          <StatisticBubble
            size="190px"
            backgroundColor="#FFFCF2"
            topMargin="550px"
            translate="30vw"
          >
            <StatisticBubbleTitle fontSize="3.75rem">09</StatisticBubbleTitle>
            <StatisticBubbleText fontSize="0.9rem">Awards</StatisticBubbleText>
          </StatisticBubble>
        </BubbleWrapper>
        <TestWrapper>
          <Image
            src="/aboutpay.png"
            alt="Phone image"
            width="400px"
            height="809px"
          ></Image>
        </TestWrapper>
      </HeroMainWrapper>
    </>
  );
}

export default AboutPayHero;
