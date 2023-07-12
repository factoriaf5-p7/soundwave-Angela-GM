import Footer from "../../organisms/Footer"
import Title from "../../atoms/Title"
import SquareIcons from "../../atoms/SquareIcons"
import { styled } from "styled-components"


const DIV = styled.div`
display: flex;
gap: 10px;

`
function Discover() {
  return (
    <div className="discover">
      <div>
        <Title text="Discover new music" />
        <DIV className="squares">
          <SquareIcons image="/src/assets/microphone.svg" text="Charts" />
          <SquareIcons image="/src/assets/albums.svg" text="Albums" />
          <SquareIcons image="/src/assets/more.svg" text="More" />
        </DIV>
        <p>By joining you can benefit by listening to the latest albums released.</p>
      </div>
      <div>
        <img src="/src/assets/covers.jpg" alt="covers image" />
      </div>

    
    <Footer />
    </div>
    
  )
}

export default Discover