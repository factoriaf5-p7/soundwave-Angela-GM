function InputForm({type, textLabel, nameInput}: {type:string, textLabel:string, nameInput:string}) {
  return (
    <>
    <label htmlFor={ nameInput }>{ textLabel }</label>
    <input type={ type } name={ nameInput }   />
    </>

  )
}

export default InputForm