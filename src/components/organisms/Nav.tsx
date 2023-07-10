import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;

& > ul {
    display: flex;
    gap: 1rem;
    align-items: center;
}
`

const Nav = () => {
  return (
    <NavStyle>
        <ul>
            <li>
            <Link to="/">
        <img src="/src/assets/logo.png" alt="Logo Soundwave" /> 
      </Link>
      </li>
      <li><span>Soundwave</span></li>

           
        </ul>
      

      <ul>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/join">Join</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
