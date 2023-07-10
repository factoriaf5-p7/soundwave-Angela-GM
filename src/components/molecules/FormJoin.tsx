import InputForm from "../atoms/InputForm";
import Btn from "../atoms/Btn";
import styled from "styled-components";

const FormStyled = styled.form`
  background-color: #211f27;
  padding: 0.6rem 1.8rem;
  border-radius: 8px;
  & > div {
    background-color: #211f27;
    }
`;



function FormJoin() {
  return (
    <FormStyled>
      <InputForm type="text" textLabel="Name:" nameInput="name" />
      <InputForm type="email" textLabel="Email:" nameInput="email" />
      <InputForm type="password" textLabel="Password:" nameInput="password" />

      <div>
        <Btn text="Join Now" />
      </div>
    </FormStyled>
  );
}

export default FormJoin;
