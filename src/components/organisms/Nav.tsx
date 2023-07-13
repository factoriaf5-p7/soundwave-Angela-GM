import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100px;
background: transparent;



& > ul {
    display: flex;
    gap: 1rem;
    align-items: center;
& > li > a {
    font-size: 0.8rem;
}
}

`

const Nav = () => {
  return (
    <NavStyle>
        <ul>
            <li>
            <Link to="/">
        <img src="logo.png" alt="Logo Soundwave" /> 
      </Link>
      </li>
      <li><Link to="/"><span>Soundwave</span> </Link></li>

           
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
