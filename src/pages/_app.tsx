import "src/styles/globals.css";
import type { AppProps } from "next/app";

import { setupStore } from "@/store/store";
import { Provider } from "react-redux";

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
