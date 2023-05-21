import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { setupStore } from "@/store/store";
import { Provider } from "react-redux";
import { useAppSelector } from "@/hooks/redux";

import { BrowserRouter as Router } from "react-router-dom";
const store = setupStore();

// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={SetThemeMode()}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </Provider>
  );
}

// const SetThemeMode = () => {
//   const { themeMode } = useAppSelector((state) => state.ThemeReducer);

//   const theme = themeMode.themeMode === "light" ? darkTheme : lightTheme;

//   return theme;
// };
