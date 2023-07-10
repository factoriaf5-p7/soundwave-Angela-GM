import Title from "../atoms/Title"
import Btn from "../atoms/Btn"

function Home() {
  return (
    <div className="Home">
        <Title text="Feel The Music"/> 
        <p>Stream over 20 thousand songs with one click</p>
        <Btn text="Join Now"/>

    </div>
  )
}

export default Home