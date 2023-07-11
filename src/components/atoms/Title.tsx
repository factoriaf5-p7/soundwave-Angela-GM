import styled from "styled-components"

const H1 = styled.h1`
size: 1.4rem;
background-color: transparent;

`

function Title({ text }: { text: string}) {
  return (
    <H1>{ text }</H1>
  )
}

export default Title