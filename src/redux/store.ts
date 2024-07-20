import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { languageSlice } from "./slices/languageSlice";

const config = {
  key: "root",
  storage,
  whitelist: ["lang"],
  blacklist: [],
};

const combinedReducers = combineReducers({
  lang: languageSlice.reducer,
});

const persistedReducers = persistReducer(config, combinedReducers);

export const store = configureStore({
  reducer: persistedReducers,
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
