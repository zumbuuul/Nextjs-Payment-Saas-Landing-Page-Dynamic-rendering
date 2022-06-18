import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  padding: 10vh 10vw 10vh 10vw;
  column-gap: 50px;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const FooterDescription = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const FooterUsefulLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  row-gap: 20px;
  margin-bottom: 50px;
`;

export const FooterLegal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  row-gap: 10px;
  margin-bottom: 50px;
`;

export const FooterDownloads = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterSectionHeaderText = styled.p`
  font-size: 1.15rem;
  font-weight: bold;
`;

export const FooterBottomText = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: #191d2a;
`;
