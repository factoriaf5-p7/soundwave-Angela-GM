import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../templates/Home";
import Discover from "../templates/Discover";
import Join from "../templates/Join";

function Header() {
  return (
    <BrowserRouter>
      <header>
      <Link to="/">
            <img src="/src/assets/logo.png" alt="Logo Soundwave" />
          </Link>
        <nav>
          
          <Link to="/discover">Discover</Link>
          <Link to="/join">Join</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </header>
    </BrowserRouter>
  )
}

export default Header