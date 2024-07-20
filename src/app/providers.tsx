"use client";

import { persistor, store } from "@/redux/store";
import { TProviders } from "@/types/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/i18n";

export function Providers({ children }: TProviders) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
