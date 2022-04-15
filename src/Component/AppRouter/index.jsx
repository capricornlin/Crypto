import { Routes, Navigate, Route } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Home from "../../Pages/Home";
import Ctypto from "../../Pages/Crypto";
import News from "../../Pages/News";
import CryptoDetail from "../../Component/CryptoDetail";
import Signin from "../Signin";
import Register from "../Register";
import NotFound from "../NotFound";

export default function Approuter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Cryptocurrencies" element={<Ctypto />} />
        <Route path="/Cryptocurrencies/:coinId" element={<CryptoDetail />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
