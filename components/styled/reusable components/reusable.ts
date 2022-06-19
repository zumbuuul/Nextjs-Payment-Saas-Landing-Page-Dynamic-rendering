import styled, { StyledProps } from "styled-components";

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
