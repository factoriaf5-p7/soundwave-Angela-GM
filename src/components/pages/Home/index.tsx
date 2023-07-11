import Title from "../../atoms/Title"
import Btn from "../../atoms/Btn"
import { CircleStyled } from "../../atoms/Circle"
import { styled } from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
`;

const P = styled.p`
background-color: transparent;
`

const Circle1 = styled(CircleStyled)`
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: -1;
`;


const Circle2 = styled(CircleStyled)`
  position: absolute;
  bottom: 20%;
  left: 10%;
  z-index: -1;
`;

const Circle3 = styled(CircleStyled)`
  position: absolute;
  z-index: -1;
`;



function Home() {
  return (
    <HomeContainer>
        <Title text="Feel The Music"/> 
        <P>Stream over 20 thousand songs with one click</P>
        <Btn text="Join Now"/>
        <Circle1 color="blue" size={100} />
        <Circle2 color="pink" size={100} />
        <Circle3 color="blue" size={150} />   
    </HomeContainer>
  )
}

export default Home