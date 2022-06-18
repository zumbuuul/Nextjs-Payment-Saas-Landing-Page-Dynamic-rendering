import styled from "styled-components";

export const MainContentContainer = styled.div`
  width: 70%;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
  justify-content: flex-start;
`;

export const MainContentHeader = styled.h1`
  font-size: 8rem;
  margin-top: -2vh;
  width: 100%;
  @media (max-width: 880px) {
    font-size: 4rem;
  }
`;

export const MainContentDescription = styled.p`
  color: #191d2a;
  width: 80%;
  font-size: 1.5rem;
  margin-top: -5vh;
`;

export const DownloadsWrapper = styled.div`
  width: 90%;
  display: flex;
  @media (max-width: 880px) {
    flex-direction: column;
    width: 200%;
    margin-top: 25px;
  }
`;

export const DownloadLabel = styled.p`
  letter-spacing: 3px;
  font-size: 1.35rem;
  font-weight: bold;
  margin-top: 3vh;
`;

export const DownloadButtonWrapper = styled.div``;

export const DownloadButton = styled.div``;

export const HeroWrapper = styled.div`
  display: flex;
`;
