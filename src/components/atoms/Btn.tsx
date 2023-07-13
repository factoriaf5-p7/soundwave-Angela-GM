import styled from "styled-components"

const Button = styled.button`
background-color: var(--color-button-background);
    color: white;
    border-radius: 8px;
    margin: 1em 0;
    padding: 9px 22px;
    border: none;
    transition: all .3s ease;
    font-size: 0.5rem;
    font-weight: 100;
    cursor: pointer;

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