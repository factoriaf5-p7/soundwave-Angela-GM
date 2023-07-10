import { BrowserRouter } from "react-router-dom";
import Router from "./components/pages/routes";
import Nav from "./components/organisms/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
};
export default App;
