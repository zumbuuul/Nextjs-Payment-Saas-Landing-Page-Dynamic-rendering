import {
  FooterDescription,
  FooterDownloads,
  FooterLegal,
  FooterUsefulLinks,
  FooterWrapper,
  FooterSectionHeaderText,
  FooterBottomText,
} from "../styled/reusable components/footer";

import DownloadButton from "./DownloadButton";

import Image from "next/image";
import Link from "next/link";

function LandingPageFooter() {
  return (
    <>
      <FooterWrapper>
        <FooterDescription>
          <Image
            src="/pay.png"
            alt="Pay logo"
            width="64px"
            height="48px"
          ></Image>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            numquam facere suscipit quis. Velit, placeat porro voluptatibus vel
            optio voluptatum repudiandae deleniti suscipit quibusdam facere nam
            aut nobis. Ex, rem.
          </p>
        </FooterDescription>
        <FooterUsefulLinks>
          <FooterSectionHeaderText>Useful Links</FooterSectionHeaderText>

          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/about-pay">
              <a>About Pay</a>
            </Link>
          </li>
          <li>
            <Link href="/how-it-works">
              <a>How it works</a>
            </Link>
          </li>
        </FooterUsefulLinks>
        <FooterLegal>
          <FooterSectionHeaderText>Legal</FooterSectionHeaderText>
          <li>
            <Link href="">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Terms of Service</a>
            </Link>
          </li>
        </FooterLegal>
        <FooterDownloads>
          <FooterSectionHeaderText>Downloads</FooterSectionHeaderText>
          <DownloadButton
            storeName="Apple Store"
            image="/apple.png"
          ></DownloadButton>
          <DownloadButton
            storeName="Play Store"
            image="/googlestore.png"
          ></DownloadButton>
        </FooterDownloads>
      </FooterWrapper>
      <FooterBottomText>©.Pay2022. All rights reserved.</FooterBottomText>
    </>
  );
}

export default LandingPageFooter;
