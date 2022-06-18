import styled from "styled-components";

export const HeroHeader = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25vh;
  justify-content: space-evenly;
  row-gap: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 25vh auto;
    align-items: center;
  }
`;

export const HeroHeaderMainText = styled.span`
  font-size: 4.25rem;
  font-weight: bold;
  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const HeroHeaderSmallText = styled.p`
  width: 30vw;
  color: #191d2a;
  align-self: center;
  font-size: 1.25rem;
  @media (max-width: 900px) {
    width: 75%;
  }
`;

export const HeroHeaderColoredText = styled.span`
  color: #ff521c;
`;
