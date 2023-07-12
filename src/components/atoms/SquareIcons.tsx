import { styled } from "styled-components"


const Square = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: var(--color-primary-dark);
padding: 0.7rem 0.8rem;
aspect-ratio: 1/1;
width: 100px;




p {
  font-size: 0.7rem;
}




`


function SquareIcons({ image, text }: { image: string, text: string}) {
  return (
    <Square className="square">
        <img src={ image } alt={ text } />
        <p>{ text }</p>
    </Square>
  )
}

export default SquareIcons