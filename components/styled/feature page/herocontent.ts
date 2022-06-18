import styled from "styled-components";

export const HeroMainContent = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 10vh auto;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const HeroPhoneWrapper = styled.div`
  background-color: #d5e1dc;
  border-radius: 50%;
  width: 570px;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 80px;
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const HeroTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 100px;
  width: 20%;
  margin-bottom: 100px;
  @media (max-width: 1060px) {
    width: 100%;
    justify-content: space-between;
    margin-left: 5vw;
  }
`;

export const HeroTextPiece = styled.div`
  width: 100%;
`;

export const HeroTextHeader = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
`;

export const HeroText = styled.p`
  font-size: 1.2rem;
  color: #191d2a;
  width: 80%;
`;
