import { styled } from "styled-components";

interface CircleProps {
  color: "pink" | "blue";
  size: number;
}

const CircleStyled = styled.div<CircleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.color === "pink" ? "#412c41" : "#303047"};
  border-radius: 100%;
`;

function Circle({ color, size }: CircleProps) {
  return (
    <CircleStyled color={color} size={size} className="circle"></CircleStyled>
  );
}

export default Circle;
