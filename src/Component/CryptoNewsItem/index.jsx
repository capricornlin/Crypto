import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loading from "../../Component/Loading";
import { useState } from "react";
import moment from "moment";
// import Image from '../../Assets'

const CryptoNewsItem = ({ simple }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data, isLoading } = useGetCryptoNewsQuery({ newsCategory, count: simple ? 8 : 20 });
  const { data: currencyList } = useGetCryptosQuery(100);
  //   console.log("newsCategory", newsCategory);

  console.log(data);
  if (isLoading) return <Loading />;
  return (
    <>
      <div className="my-10">
        <select
          className="ml-5 rounded-md focus:border-cyan-500 focus:ring-cyan-500"
          name="select"
          id="select"
          onChange={(e) => setNewsCategory(e.target.value)}
        >
          {/* <input type="text" name="list" id="list" list="cryptolist" onChange={(e) => setNewsCategory(e.target.value)} /> */}
          {/* <datalist id="cryptolist"> */}
          <option value="Cryptocurrency">Cryptocurrency</option>
          {currencyList?.data?.coins.map((coin, index) => (
            <option key={index} value={coin.name}>
              {coin.name}
            </option>
          ))}
          {/* </datalist> */}
        </select>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 mx-auto p-[20px] ">
        {data.value?.map((news, index) => (
          <div
            key={index}
            className=" rounded-lg hover:scale-105 duration-150 hover:shadow-lg shadow-md hover:cursor-pointer min-h-[200px] p-5 "
          >
            <a href={news.url} target="_blank">
              <div className="flex">
                <div className="w-2/3 font-medium mr-2  ">{news.name}</div>
                <div className="w-1/3">
                  <img className="object-cover w-[70%] " src={news?.image?.thumbnail?.contentUrl} alt="news" />
                </div>
              </div>

              <p className="">{news.description > 30 ? `${news.description.substring(0, 20)}...` : news.description}</p>
              <div className="flex my-2">
                <div className="text-cyan-800 mr-2 ">{news.provider[0].name}</div>
                <div className=" text-cyan-600 ">{moment(news.datePublished).startOf("ss").fromNow()}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default CryptoNewsItem;
