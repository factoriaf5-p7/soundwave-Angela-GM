import styled from "styled-components"
const Img = styled.img`
width: 18px;
color: white;
`
function Footer() {
  return (
    <div className="footer">
        <ul>
            <li>About Us</li>
            <li>Contact</li>
        </ul>

        <ul>
            <li><Img src="/src/assets/twitter.svg" />  Twitter</li>
            <li><Img src="/src/assets/square-facebook.svg" /> Facebook</li>
        </ul>
    </div>

  )
}

export default Footer