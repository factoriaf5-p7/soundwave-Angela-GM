import Footer from "../../organisms/Footer"
import Title from "../../atoms/Title"
import SquareIcons from "../../atoms/SquareIcons"
import { styled } from "styled-components";



const DiscoverSection = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 1.5rem;
flex-wrap: wrap;
margin: 0 20%;
@media (width > 1440px){
  height: calc(100vh - 150px);
  margin: 0;
}


> div >  :not(.squares) {
    margin: 20px 0;
  }
`
const DivImage = styled.div`
max-width: 320px;
`

const DIV = styled.div`
display: flex;
gap: 10px;

`
const IMG = styled.img`
width: 100%;
`







function Discover() {
  return (
    <section className="discover">
      
      <DiscoverSection>
      <div>
        <Title text="Discover new music" />
        <DIV className="squares">
          <SquareIcons image="microphone.svg" text="Charts" />
          <SquareIcons image="albums.svg" text="Albums" />
          <SquareIcons image="more.svg" text="More" />
        </DIV>
        <p>By joining you can benefit by listening to the latest albums released.</p>
      </div>
      <DivImage>
        <IMG src="covers.jpg" alt="covers image" />
      </DivImage>
      </DiscoverSection>

    
      <Footer />
    </section>
        
    
  )
}

export default Discover