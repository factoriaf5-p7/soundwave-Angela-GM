import styled from "styled-components";

const FOOTER = styled.footer`
  height: 50px;
  background-color: var(--color-primary-dark);
  display: flex;
  justify-content: space-evenly;
  align-items: center;


  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media (width > 640px){
      flex-direction: row;
    }

    li {
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      gap: 0.1rem;
    }
  }
`;

const Img = styled.img`
  width: 18px;
  color: white;
`;
function Footer() {
  return (
    <FOOTER className="footer">
      <ul>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      <ul>
        <li>
          <Img src="../../../public/twitter.svg" /> Twitter
        </li>
        <li>
          <Img src="/public/square-facebook.svg" /> Facebook
        </li>
      </ul>
    </FOOTER>
  );
}

export default Footer;
