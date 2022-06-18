import styled from "styled-components";

export const NavbarElement = styled.div`
  display: flex;
  padding: 5vh 10vw;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  top: 0;
`;

export const NavbarText = styled.p`
  color: #191d2a;
  font-size: 1rem;
  padding: 0 15px;
  font-size: 1.5rem;

  @media (max-width: 1060px) {
    font-size: 1rem;
    padding: 0 5px;
  }
`;

export const NavbarDownloadButton = styled.button`
  color: #191d2a;
  font-size: 1.15rem;
  font-weight: bold;
  background-color: white;
  border: none;
  padding: 1vw 2vw;
  border-radius: 20px;
  @media (max-width: 1060px) {
    font-size: 1rem;
  }
`;

export const NavbarSpaceElementBig = styled.div`
  flex-grow: 30;
  @media (max-width: 720px) {
    flex-grow: 1;
  }
`;

export const NavbarSpaceElementSmall = styled.div`
  flex-grow: 3;
`;
