import {
  HeaderText,
  HeaderWrapepr,
  HeaderTitle,
} from "../../styled/about page/header/aboutPayHeaderStyled";

function AboutPayHeader() {
  return (
    <HeaderWrapepr>
      <HeaderTitle>
        About <span style={{ color: "#FF521C" }}>.Pay</span>
      </HeaderTitle>
      <HeaderText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        itaque.
      </HeaderText>
    </HeaderWrapepr>
  );
}

export default AboutPayHeader;
