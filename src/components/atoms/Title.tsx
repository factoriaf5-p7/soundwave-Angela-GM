import styled from "styled-components"

const H1 = styled.h1`
background-color: transparent;
font-size: 2.2rem;
@media (width > 640px){
  font-size: 2.6rem;
}


`

function Title({ text }: { text: string}) {
  return (
    <H1>{ text }</H1>
  )
}

export default Title