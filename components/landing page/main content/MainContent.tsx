import DownloadButton from "../../reusable components/DownloadButton";
import {
  MainContentHeader,
  MainContentContainer,
  MainContentDescription,
  DownloadLabel,
  DownloadsWrapper,
} from "../../styled/main content/MainContent";

function MainContent() {
  return (
    <>
      <MainContentContainer>
        <MainContentHeader>Transact Money Easily</MainContentHeader>
        <MainContentDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id
          lobortis pretium blandit. Mauris interdum enim ullamcorper consequat,
          nec sed.
        </MainContentDescription>
        <DownloadLabel>DOWNLOAD NOW ON :</DownloadLabel>
        <DownloadsWrapper>
          <DownloadButton
            image="/apple.png"
            storeName="App Store"
          ></DownloadButton>
          <DownloadButton
            image="/googlestore.png"
            storeName="Play Store"
          ></DownloadButton>
        </DownloadsWrapper>
      </MainContentContainer>
    </>
  );
}

export default MainContent;
