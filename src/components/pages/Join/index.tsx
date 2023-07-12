import Footer from "../../organisms/Footer";
import FormJoin from "../../molecules/FormJoin";
import { styled } from "styled-components";
import { CircleStyled } from "../../atoms/Circle";


const Section = styled.section`
position: relative;

  div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: flex-start;

    @media (width > 648px) {
      align-content: space-around;
    }
  }
`;
const Title = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  span {
    color: var(--pink);
    font-size: 2.2rem;
  }
`;

const Circle1 = styled(CircleStyled)`
  position: absolute;
  z-index: -1;
  top: -15%;
  left: 22%;
  @media (width > 700px){
    width: 300px;
    height: 300px;
  }
  @media (width > 768px){
    width: 400px;
    height: 400px;
  }
  @media (width > 1024px){
    width: 500px;
    height: 500px;
  }
`;

const Circle2 = styled(CircleStyled)`
  position: absolute;
  z-index: -1;
  bottom: 4%;
  left: -8%;
  @media (width > 648px){
    width: 300px;
    height: 300px;
  }
  @media (width > 768px){
    width: 400px;
    height: 400px;
  }
  @media (width > 1024px){
    width: 500px;
    height: 500px;
  }
`;

function Join() {
  return (
    <Section className="join">
      <Circle1 color="blue" size={120} />
      <Circle2 color="pink" size={120} />
      <div>
        <div>
          <Title>
            Join the <span>fun.</span>
          </Title>
        </div>

        <div>
          <FormJoin />
        </div>
      </div>

      <Footer />
    </Section>
  );
}

export default Join;
