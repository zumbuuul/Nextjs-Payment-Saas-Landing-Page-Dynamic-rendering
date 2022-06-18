import styled from "styled-components";

import Image from "next/image";

export const PhoneSectionBackground = styled.div`
  background-color: #aec2ba;
  width: 40%;
  height: 100vh;
  z-index: -99;
  overflow: hidden;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  top: 150px;
  right: 10vw;
  width: 130%;
`;
