import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// require("dotenv").config();
const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "4a340bd792msh0c6521626bb7a17p1e797djsne5c1c7258dc7",
  // "X-RapidAPI-Key": process.env.React_APP_CRYPTOAPI_RAPIDAPI_KEY,
  // "X-RapidAPI-Key": process.env.React_App_CRYPTOAPI_RAPIDAPI_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetail: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptosHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

//靠杯 這邊打錯XD
export const { useGetCryptosQuery, useGetCryptosDetailQuery, useGetCryptosHistoryQuery } = cryptoApi;
