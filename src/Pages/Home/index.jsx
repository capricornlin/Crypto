import { useGetCryptosQuery } from "../../services/cryptoApi";
import Header from "../../Component/Header";
import Loading from "../../Component/Loading";
import millify from "millify";
import CryptoItem from "../../Component/CryptoItem";
import { useNavigate } from "react-router-dom";
import CryptoNewsItem from "../../Component/CryptoNewsItem";

const Home = () => {
  const go = useNavigate();
  //error,isLoading
  const { data, error, isLoading } = useGetCryptosQuery(10);
  //   console.log("isLoading", isLoading);
  //   console.log(data);
  const GlobalData = data?.data?.stats;
  if (isLoading) return <Loading />;

  return (
    <>
      <Header />
      <div className="my-[50px] text-4xl font-extrabold text-center ">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          Global Crypto Currency
        </span>
      </div>

      <div className="w-2/3 mx-auto mb-[30px]">
        <div className=" md:grid  md:grid-cols-2 gap-y-2">
          <div className="text-center ">
            <span className="text-xl font-medium">Total Cryptocurrencies</span>
            <div className="text-xl my-2 text-cyan-500">{GlobalData.total}</div>
          </div>
          <div className="text-center">
            <span className="text-xl font-medium">Total Exchanges</span>
            <div className="text-xl my-2 text-cyan-500">{GlobalData.totalExchanges}</div>
          </div>

          <div className="text-center">
            <span className="text-xl font-medium">Total Market Cap</span>
            <div className="text-xl my-2 text-cyan-500">{millify(GlobalData.totalMarketCap)}</div>
          </div>
          <div className="text-center">
            <span className="text-xl font-medium">Total 24h Volume</span>
            <div className="text-xl my-2 text-cyan-500">{millify(GlobalData.total24hVolume)}</div>
          </div>

          <div className="text-center">
            <span className="text-xl font-medium">Total Market</span>
            <div className="text-xl my-2 text-cyan-500">{GlobalData.totalMarkets}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-center p-[20px] ">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Top 10 CryptoCurrencies in the World
          </span>
        </div>
        {/* <div className="text-3xl p-[20px]">Top 10 CryptoCurrencies in the World</div> */}
        <div className="px-[20px]">
          <div
            className=" hover:cursor-pointer mx-[50px] text-cyan-600 hover:scale-105 duration-100"
            onClick={() => {
              go("/Cryptocurrencies");
            }}
          >
            Show more
          </div>
        </div>
      </div>
      <CryptoItem simple />
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-center p-[20px] ">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Latest Crypto News
          </span>
        </div>
        {/* <div className="text-3xl p-[20px]">Latest Crypto News</div> */}
        <div
          className=" hover:cursor-pointer mx-[50px] text-cyan-600 hover:scale-105 duration-100"
          onClick={() => {
            go("/News");
          }}
        >
          Show more
        </div>
      </div>
      <CryptoNewsItem simple />
    </>
  );
};

export default Home;
