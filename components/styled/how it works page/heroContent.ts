import styled from "styled-components";

import { ColoredCircle } from "../reusable components/reusable";

interface ITextWrapperPieceBulletPoint {
  readonly isHollow: boolean;
}

export const HeroSection = styled.div`
  margin-top: 20vh;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20vh;
  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    row-gap: 100px;
  }
`;

export const PhoneWrapper = styled(ColoredCircle)``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const TextWrapperPiece = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const TextWrapperPieceBulletPoint = styled.div<ITextWrapperPieceBulletPoint>`
  width: 100px;
  height: 100px;
  position: absolute;
  font-size: 1.25rem;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${(props) => (props.isHollow ? "orange" : "white")};
  background-color: ${(props) => (props.isHollow ? "white" : "orange")};
  border-color: ${(props) => (props.isHollow ? "orange" : "white")};
`;

export const TextWrapperPieceContainer = styled.div``;

export const TextWrapperPieceContainerTitle = styled.h1`
  font-weight: bolder;
  font-size: 3rem;
  text-align: center;
`;

export const TextWrapperPieceContainerText = styled.p``;
