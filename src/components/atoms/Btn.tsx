import styled from "styled-components"

const Button = styled.button`
background-color: #1761a6;
color: white;
border-radius: 8px;
margin: 1em 0;
padding: 4px 12px;
border: none;
transition: all .3s ease;
font-size: 0.8rem;
cursor: pointer;

&:hover {
  background-color: #2080d8;
}

&:focus {
  background-color: #2695ff;
}





`


function Btn({ text }: { text: string}) {
  return (
    
    <Button type="submit">{ text }</Button>
    
  )
}

export default Btn