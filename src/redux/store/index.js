import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import userReducer from "../reducers/userReducer";
import clientReducer from "../reducers/clientReducer";

const persistConfig = {
  // 3
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "react",
    }),
  ],
  blacklist: ['userReducer']
};

const mergedReducers = combineReducers({
  user: userReducer,
  client: clientReducer
});

const persistedReducer = persistReducer(persistConfig, mergedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
