import Title from "../../atoms/Title"
import Btn from "../../atoms/Btn"
import Circle from "../../atoms/Circle"

function Home() {
  return (
    <div className="Home">
        <Title text="Feel The Music"/> 
        <p>Stream over 20 thousand songs with one click</p>
        <Btn text="Join Now"/>

        <Circle color="pink" size={200} />

        


    </div>
  )
}

export default Home