import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import LineChart from "../LineChart";
import HTMlReactParser from "html-react-parser";
import { useGetCryptosDetailQuery, useGetCryptosHistoryQuery } from "../../services/cryptoApi";
import millify from "millify";
import { RiMoneyDollarCircleLine, RiNumbersFill } from "react-icons/ri";
import { CgHashtag } from "react-icons/cg";
import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineCheck, AiOutlineExclamationCircle } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import Loading from "../Loading";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isLoading } = useGetCryptosDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptosHistoryQuery({ coinId, timePeriod });
  const cryptodetail = data?.data?.coin;
  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const { currentUser } = useAuth();

  if (isLoading) return <Loading />;

  return currentUser ? (
    <>
      <Header />
      <div className="text-5xl font-extrabold text-center my-[100px]">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          {cryptodetail?.name}({cryptodetail?.symbol})
        </span>
      </div>
      <select
        className="w-[10%] ml-[20%] rounded-md focus:border-cyan-500"
        onChange={(e) => setTimePeriod(e.target.value)}
        name="timeStamp"
        id="timeStamp"
      >
        {time.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      {/*TODO: line chart */}
      <div className="w-[60%] mx-auto">
        <LineChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptodetail?.price)}
          coinName={cryptodetail?.name}
        />
      </div>
      <div className="text-2xl font-extrabold text-center my-[50px]">
        <span className=" bg-clip-text text-3xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          {cryptodetail?.name} Value Statistics
        </span>
      </div>
      <div>
        {/* TODO: table */}

        <div className="flex flex-wrap justify-center">
          <div className="basis-1/3 justify-center min-w-[300px] my-5 mx-2">
            <div className="text-2xl mb-[20px] text-center ">{cryptodetail?.name} Value Statistics</div>

            <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <RiMoneyDollarCircleLine className="text-cyan-500 mx-1" />
                  Price to USD
                </div>
                <div className="font-medium">$ {millify(cryptodetail?.price)}</div>
              </div>
            </div>

            <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <CgHashtag className="text-cyan-500 mx-1" />
                  Rank
                </div>
                <div className="font-medium">{cryptodetail?.rank}</div>
              </div>
            </div>

            <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <RiMoneyDollarCircleLine className="text-cyan-500 mx-1" />
                  Market Cap
                </div>
                <div className="font-medium">$ {millify(cryptodetail?.marketCap)}</div>
              </div>
            </div>

            <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GiTrophyCup className="text-cyan-500 mx-1" />
                  All time high
                </div>
                <div className="font-medium">$ {millify(cryptodetail?.allTimeHigh?.price)}</div>
              </div>
            </div>
          </div>

          <div className="basis-1/3 min-w-[300px] my-5 mx-2">
            <div className="text-2xl mb-[20px] text-center">Other Statistics</div>

            <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <VscGraphLine className="text-cyan-500 mx-1" />
                  Number of Markets
                </div>
                <div className="font-medium">{millify(cryptodetail?.numberOfMarkets)}</div>
              </div>
            </div>

            <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <RiNumbersFill className="text-cyan-500 mx-1" />
                  Number of Exchanges
                </div>
                <div className="font-medium">{cryptodetail?.numberOfExchanges}</div>
              </div>
            </div>

            {/* <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <AiOutlineExclamationCircle className="text-cyan-500 mx-1" />
                  Total Supply
                </div>

                <div className="font-medium">$ {millify(cryptodetail?.supply?.total)}</div>)
                <div className="font-medium">$ {millify(cryptodetail?.supply?.total)}</div>
              </div>
            </div> */}

            <div className=" text-xl border-b-2 py-4 border-gray-200">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <AiOutlineExclamationCircle className="text-cyan-500 mx-1" />
                  Circulating Supply
                </div>
                <div className="font-medium">$ {millify(cryptodetail?.supply?.circulating)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-[100px] mb-[150px]">
          <div className="w-1/2 min-w-[400px]">
            <div className="mx-8 text-2xl font-medium">What is {cryptodetail?.name}</div>
            <div className="desc">{HTMlReactParser(cryptodetail?.description)}</div>
          </div>
          <div className="w-1/2 min-w-[400px]">
            <div className="mx-8 text-2xl font-semibold my-4 text-center">{cryptodetail?.name} Links</div>
            {cryptodetail?.links.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="flex hover:cursor-pointer justify-between rounded-md max-w-[500px] mx-auto hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 duration-100 shadow-sm my-2 p-6 group"
                >
                  <div className="mx-2 font-medium group-hover:text-white">{link.type}</div>
                  <div className="hover:cursor-pointer text-cyan-500 font-medium group-hover:text-white">
                    {link.name}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/Signin" />
  );
};

export default CryptoDetail;
