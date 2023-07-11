import styled from "styled-components"

const Button = styled.button`
background-color: var(--color-button-background);
color: white;
border-radius: 8px;
margin: 1em 0;
padding: 4px 12px;
border: none;
transition: all .3s ease;
font-size: 0.8rem;
cursor: pointer;
/* width: 100%; */

&:hover {
  background-color: var(--color-button-hover);
}

&:focus {
  background-color: var(--color-button-focus);
}





`


function Btn({ text }: { text: string}) {
  return (
    
    <Button type="submit">{ text }</Button>
    
  )
}

export default Btn