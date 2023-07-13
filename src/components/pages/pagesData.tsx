import { routerType } from "../../types/router.types";
import Home from "./Home";
import Discover from "./Discover";
import Join from "./Join";
const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home"
  },
  {
    path: "/discover",
    element: <Discover />,
    title: "discover"
  },
  {
    path: "/join",
    element: <Join />,
    title: "join"
  }
];

export default pagesData;