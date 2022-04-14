import Header from "../../Component/Header";
import Loading from "../../Component/Loading";
import CryptoItem from "../../Component/CryptoItem";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router";
const Crypto = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <>
      <Header />
      <CryptoItem simple={false} />
      {/* <Loading /> */}
    </>
  ) : (
    <Navigate to="/Signin" />
  );
};

export default Crypto;
