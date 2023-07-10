import InputForm from "../atoms/InputForm"
import Btn from "../atoms/Btn"
function FormJoin() {
  return (
    <form>
        <InputForm type="text" textLabel="Name:" nameInput="name" />
        <InputForm type="email" textLabel="Email:" nameInput="email" />
        <InputForm type="password" textLabel="Password:" nameInput="password" />

        <Btn text="Join Now" />


    </form>
  )
}

export default FormJoin