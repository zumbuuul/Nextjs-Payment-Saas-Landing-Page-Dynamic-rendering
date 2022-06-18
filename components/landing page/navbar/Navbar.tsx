import {
  NavbarElement,
  NavbarText,
  NavbarDownloadButton,
  NavbarSpaceElementBig,
  NavbarSpaceElementSmall,
} from "../../styled/navbar/navbar";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <NavbarElement>
      <Image src="/pay.png" alt="Pay Logo" width="64px" height="64px"></Image>
      <NavbarSpaceElementSmall></NavbarSpaceElementSmall>
      <NavbarText>
        <Link href="/">
          <a>Home</a>
        </Link>
      </NavbarText>
      <NavbarText>
        <Link href="/features">
          <a>Features</a>
        </Link>
      </NavbarText>
      <NavbarText>
        <Link href="/about-pay">
          <a>About Pay</a>
        </Link>
      </NavbarText>
      <NavbarText>
        <Link href="/how-it-works">
          <a>How it works</a>
        </Link>
      </NavbarText>
      <NavbarSpaceElementBig></NavbarSpaceElementBig>
      <NavbarDownloadButton>DOWNLOAD</NavbarDownloadButton>
    </NavbarElement>
  );
}

export default Navbar;
