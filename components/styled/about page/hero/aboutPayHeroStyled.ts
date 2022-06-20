import styled from "styled-components";

import { ColoredCircle } from "../../reusable components/reusable";

interface IBubbleFontSize {
  readonly fontSize: string;
}

interface IStatisticsBubble {
  readonly topMargin: string;
  readonly translate: string;
}

export const HeroMainWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  margin-top: 10vh;
`;

export const BubbleWrapper = styled.div`
  width: 60%;
  height: 90%;
  position: relative;
`;

export const TestWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const StatisticBubble = styled(ColoredCircle)<IStatisticsBubble>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => props.topMargin};
  transform: translate(${(props) => props.translate});
`;

export const StatisticBubbleTitle = styled.h1<IBubbleFontSize>`
  color: #191d2a;
  font-size: ${(props) => props.fontSize};
  font-weight: bolder;
  margin: 0px;
`;

export const StatisticBubbleText = styled.p<IBubbleFontSize>`
  color: #13213b;
  font-size: ${(props) => props.fontSize};
  margin: 0px;
`;
