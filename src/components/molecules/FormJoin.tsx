import InputForm from "../atoms/InputForm"
import Btn from "../atoms/Btn"
import styled from "styled-components"

const FormStyled = styled.form`
background-color: #211f27;
padding: 1rem;
border-radius: 8px;
&Btn {
    display: flex;
    justify-content: center;
}
`

function FormJoin() {
  return (
    <FormStyled>
        <InputForm type="text" textLabel="Name:" nameInput="name" />
        <InputForm type="email" textLabel="Email:" nameInput="email" />
        <InputForm type="password" textLabel="Password:" nameInput="password" />


        <Btn text="Join Now" />


        
    </FormStyled>
  )
}

export default FormJoin