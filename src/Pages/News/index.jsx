import Header from "../../Component/Header";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import Loading from "../../Component/Loading";
import CryptoNewsItem from "../../Component/CryptoNewsItem";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router";
const News = () => {
  const { currentUser } = useAuth();
  const { data, isLoading } = useGetCryptoNewsQuery({ newsCategory: "crypto", count: 50 });
  // console.log("CryptoNews", data);

  if (isLoading) return <Loading />;
  return currentUser ? (
    <>
      <Header />
      <CryptoNewsItem simple={false} />
    </>
  ) : (
    <Navigate to="/Signin" />
  );
};

export default News;
