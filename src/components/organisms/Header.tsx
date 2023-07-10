import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../templates/Home";
import Discover from "../templates/Discover";
import Join from "../templates/Join";
import { styled } from "styled-components";


// Crear nuevo component con estilos para sustituirlo por Link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const HeaderStyled = styled.header`

display: flex;
justify-content: space-evenly;

`


function Header() {
  return (
    <BrowserRouter>
      <HeaderStyled>
        <StyledLink to="/">
          <img src="/src/assets/logo.png" alt="Logo Soundwave" /> Soundwave
        </StyledLink>
        <nav>
          <StyledLink to="/discover">Discover</StyledLink>
          <StyledLink to="/join">Join</StyledLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </HeaderStyled>
    </BrowserRouter>
  );
}

export default Header;
