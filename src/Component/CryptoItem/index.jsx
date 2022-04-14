import millify from "millify";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../Component/Loading";

const CryptoItem = ({ simple }) => {
  const count = simple ? 10 : 100;
  const { data, error, isLoading } = useGetCryptosQuery(count);
  const [ctyptos, setCryptos] = useState([]);
  const [searchCryto, setSearchCryto] = useState("");

  useEffect(() => {
    const filterCoins = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchCryto.toLowerCase()));
    setCryptos(filterCoins);
  }, [data, searchCryto]);
  // console.log(searchCryto);
  const go = useNavigate();
  console.log(ctyptos);
  if (isLoading) return <Loading />;

  return (
    <>
      {!simple && (
        <div className="flex justify-center mt-[100px] mb-[50px]  ">
          <input
            className="w-1/5 rounded-md focus:ring-cyan-500 focus:border-none focus:border-2"
            type="text"
            placeholder="Search Crypto..."
            onChange={(e) => setSearchCryto(e.target.value)}
          />
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 mx-auto p-[20px] ">
        {ctyptos?.map((item) => (
          <div
            key={item.uuid}
            className="shadow-md rounded-lg  hover:scale-105 duration-150   hover:shadow-lg hover:cursor-pointer "
            onClick={() => go(`/Cryptocurrencies/${item.uuid}`)}
          >
            <div className="flex justify-between border-b-2 p-6 my-[20px]">
              <div className="flex items-center">
                <div className="mx-2 text-2xl">{item.rank}</div>
                <div className="w-[20px] h-[20px]">
                  <img src={item.iconUrl} alt={item.name} />
                </div>
              </div>
              <div className="text-center text-2xl mx-2">{item.name}</div>
            </div>
            <div className="text-center my-5">Price: {millify(item.price)} USD</div>
            <div className="text-center my-5">Market Cap: {millify(item.marketCap)}</div>
            <div className="text-center my-5 ">
              Daily Change:
              {/* conditional expression */}
              <span className={item.change >= 0 ? "text-green-500 ml-2" : "text-red-500 ml-2"}>
                {millify(item.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CryptoItem;
