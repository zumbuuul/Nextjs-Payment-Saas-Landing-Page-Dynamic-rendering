import {
  DownloadButtonStoreName,
  DownloadButtonText,
  DownloadButtonWrapper,
  TextWrapper,
} from "../styled/reusable components/downloadButton";

import Image from "next/image";

interface IDownloadButton {
  image: string;
  storeName: string;
}

function DownloadButton({ image, storeName }: IDownloadButton): JSX.Element {
  return (
    <>
      <DownloadButtonWrapper>
        <Image
          src={image}
          width="23px"
          height="28px"
          alt={`Download on ${storeName}`}
        ></Image>
        <TextWrapper>
          <DownloadButtonText>Available on</DownloadButtonText>
          <DownloadButtonStoreName>{storeName}</DownloadButtonStoreName>
        </TextWrapper>
      </DownloadButtonWrapper>
    </>
  );
}

export default DownloadButton;
