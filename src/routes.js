// import Home from "./Pages/Home";
// import News from "./Pages/News";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Crypto from "./Pages/Crypto";
import CryptoDetail from "./Component/CryptoDetail";
const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/News",
    element: <News />,
    children: [],
  },
  {
    path: "/Cryptocurrencies",
    element: <Crypto />,
    children: [],
  },
  {
    path: "/Cryptocurrencies/:coinId",
    element: <CryptoDetail />,
    children: [],
  },
];

export default routes;
