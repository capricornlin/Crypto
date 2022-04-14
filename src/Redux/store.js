import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./CryptoSlice";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    cryptoReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getCurrentMiddlewares) => {
    return getCurrentMiddlewares().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware);
  },
});
