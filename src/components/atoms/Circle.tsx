import { styled } from "styled-components";

export interface CircleProps {
  color: "pink" | "blue";
  size: number;
}

export const CircleStyled = styled.div<CircleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.color === "pink" ? "var(--color-circle-pink)" : "var(--color-circle-blue)"};
  border-radius: 100%;
  @media (width > 640px){
    width: ${(props) => props.size*1.3}px;
    height: ${(props) => props.size*1.3}px;
  }
  
  @media (width > 748px){
    width: ${(props) => props.size*1.6}px;
    height: ${(props) => props.size*1.6}px;
  }

  @media (width > 1024px){
    width: ${(props) => props.size*1.8}px;
    height: ${(props) => props.size*1.8}px;
  }

  @media (width > 1280px){
    width: ${(props) => props.size*2}px;
    height: ${(props) => props.size*2}px;

  }

`;
