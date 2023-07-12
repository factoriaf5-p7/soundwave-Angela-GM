import InputForm from "../atoms/InputForm";
import Btn from "../atoms/Btn";
import styled from "styled-components";

const DivJoin = styled.div`
display: flex;
min-height:  calc(100vh - 150px);

main {
  flex: 1;
};
`

const FormStyled = styled.form`
  background-color: #211f27;
  padding: 0.6rem 1.8rem;
  border-radius: 8px;
  & > div  {
    background-color: #211f27;
    > *{
      width: 100%;
    }

    }
`;




function FormJoin() {
  return (
    <DivJoin>
      <main>
      <FormStyled>
      <InputForm type="text" textLabel="Name:" nameInput="name" />
      <InputForm type="email" textLabel="Email:" nameInput="email" />
      <InputForm type="password" textLabel="Password:" nameInput="password" />

      <div>
        <Btn text="Join Now" />
      </div>
    </FormStyled>
      </main>    
    </DivJoin>
  );
}

export default FormJoin;
