import Title from "../../atoms/Title";
import Btn from "../../atoms/Btn";
import { CircleStyled } from "../../atoms/Circle";
import { styled } from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background-color: transparent;
  & img {
    background: transparent;
    display: none;
    max-height: 600px;

    @media (width > 768px) {
      display: block;
    }
  }
`;

const P = styled.p`
  background-color: transparent;
`;

const Circle1 = styled(CircleStyled)`
  position: absolute;
  z-index: -1;
  top: 5%;
  left: 30%;
`;

const Circle2 = styled(CircleStyled)`
  position: absolute;
  z-index: -1;
  bottom: 10%;
  left: 5%;
`;

const Circle3 = styled(CircleStyled)`
  position: absolute;
  z-index: -1;
  right: -10%;
  bottom: 5%;
`;

const DIV = styled.div`
  background: transparent;
  width: 80%;
  @media (width > 640px){
    width: 70%;
  }
  @media (width > 768px){
    width: 60%;
  }
`;

const DIVIMG = styled.div`
  background: transparent;
  align-self: flex-end;


`

function Home() {
  return (
    <HomeContainer>
      {/* girl image */}
      <DIVIMG>
        <img src="/src/assets/landing-page-girl.png" alt="image hero girl" />
      </DIVIMG>

      <DIV>
        <Title text="Feel The Music" />
        <P>Stream over 20 thousand songs with one click</P>
        <Btn text="Join Now" />
      </DIV>

      {/* Circles background */}
      <Circle1 color="blue" size={120} />
      <Circle2 color="pink" size={120} />
      <Circle3 color="blue" size={180} />
    </HomeContainer>
  );
}

export default Home;
