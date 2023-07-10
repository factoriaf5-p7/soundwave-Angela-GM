import styled from "styled-components"

const DivStyled = styled.div `
display: flex;
flex-direction: column;
background-color:  #211f27;
padding: 0px 25px;
`
const LabelStyled = styled.label`
background-color:  #211f27;
font-size: 0.8rem;
margin-top: 1rem;
`

const InputStyled = styled.input`
background-color:  #211f27;
border-radius: 4px;
border: 1px solid #2E3852;
font-size: 0.8rem;
padding: 8px;
&:focus {
  border: 1px solid #596da0;
  background-color:   #2E3852;
}
&:active {
  background-color: #596da0;
}


`

function InputForm({type, textLabel, nameInput}: {type:string, textLabel:string, nameInput:string}) {
  return (
    <DivStyled>
    <LabelStyled htmlFor={ nameInput }>{ textLabel }</LabelStyled>
    <InputStyled type={ type } name={ nameInput } autoComplete="off"  />
    </DivStyled>

  )
}

export default InputForm