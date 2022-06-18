import {
  PhoneSectionBackground,
  ImageContainer,
} from "../../styled/phone body/PhoneSection";

import Image from "next/image";

function PhoneSection() {
  return (
    <PhoneSectionBackground>
      <ImageContainer>
        <Image
          alt="Hand"
          src="/Illustration.png"
          width="5000px"
          height="7000px"
        ></Image>
      </ImageContainer>
    </PhoneSectionBackground>
  );
}

export default PhoneSection;
