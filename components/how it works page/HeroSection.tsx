import {
  Header,
  HeaderText,
  HeaderTitle,
} from "../styled/how it works page/heroHeader";

import {
  HeroSection,
  MainWrapper,
  PhoneWrapper,
  TextWrapperPiece,
  TextWrapperPieceBulletPoint,
  TextWrapperPieceContainer,
  TextWrapperPieceContainerTitle,
  TextWrapper,
} from "../styled/how it works page/heroContent";

import Image from "next/image";

function HeroSection2() {
  return (
    <>
      <HeroSection>
        <Header>
          <HeaderTitle>How it works</HeaderTitle>
          <HeaderText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            dolorum.
          </HeaderText>
        </Header>
        <MainWrapper>
          <PhoneWrapper size="600px" backgroundColor="#AEC2BA">
            <Image
              src="/howitworks.png"
              width="400px"
              height="830px"
              alt="Phone"
            ></Image>
          </PhoneWrapper>
          <TextWrapper>
            <TextWrapperPiece>
              <TextWrapperPieceBulletPoint isHollow={false}>
                <p>01.</p>
              </TextWrapperPieceBulletPoint>
              <TextWrapperPieceContainer>
                <TextWrapperPieceContainerTitle>
                  Install .Pay
                </TextWrapperPieceContainerTitle>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque eveniet ullam sunt debitis tempora quam accusantium
                  incidunt hic saepe repellendus.
                </p>
              </TextWrapperPieceContainer>
            </TextWrapperPiece>
            <TextWrapperPiece>
              <TextWrapperPieceBulletPoint isHollow={true}>
                02.
              </TextWrapperPieceBulletPoint>
              <TextWrapperPieceContainer>
                <TextWrapperPieceContainerTitle>
                  Create your account
                </TextWrapperPieceContainerTitle>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem laboriosam similique debitis distinctio sed accusantium
                  ab adipisci libero. Iste id quo veritatis nemo nostrum labore
                  porro quia facere eos? Nihil.
                </p>
              </TextWrapperPieceContainer>
            </TextWrapperPiece>
            <TextWrapperPiece>
              <TextWrapperPieceBulletPoint isHollow={true}>
                03.
              </TextWrapperPieceBulletPoint>
              <TextWrapperPieceContainer>
                <TextWrapperPieceContainerTitle>
                  Enjoy the features
                </TextWrapperPieceContainerTitle>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem laboriosam similique debitis distinctio sed accusantium
                  ab adipisci libero. Iste id quo veritatis nemo nostrum labore
                  porro quia facere eos? Nihil.
                </p>
              </TextWrapperPieceContainer>
            </TextWrapperPiece>
          </TextWrapper>
        </MainWrapper>
      </HeroSection>
    </>
  );
}

export default HeroSection2;
