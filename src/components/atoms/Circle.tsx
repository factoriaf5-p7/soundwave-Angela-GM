import { styled } from "styled-components";

interface CircleProps {
  color: "pink" | "blue";
  size: number;
}

export const CircleStyled = styled.div<CircleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.color === "pink" ? "var(--color-circle-pink)" : "var(--color-circle-blue)"};
  border-radius: 100%;
`;

function Circle({ color, size }: CircleProps) {
  return (
    <CircleStyled color={color} size={size} className="circle" ></CircleStyled>
  );
}

export default Circle;
