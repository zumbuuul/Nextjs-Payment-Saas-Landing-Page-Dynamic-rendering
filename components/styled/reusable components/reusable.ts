import styled, { createGlobalStyle } from "styled-components";

interface IColoredCircle {
  readonly backgroundColor: string;
  readonly size: string;
}

export const ColoredCircle = styled.div<IColoredCircle>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(props: any): string => props.backgroundColor};
  width: ${(props: any): string => props.size};
  height: ${(props: any): string => props.size};
`;

export const YellowishBody = createGlobalStyle`
body,html{
  background-color:#f2f2f2;
  margin:0;
  width:100%
}

*{
  box-sizing:border-box ;
}
`;

export const GreenishBody = createGlobalStyle`
body,html{
  background-color:#ECF1EF;
  margin:0;
  width:100%
}

*{
  box-sizing:border-box ;
}`;
