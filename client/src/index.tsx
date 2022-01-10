import React from "react";
import { render } from "react-dom";
import App from "./App";

import store from "redux/store";
import { Provider as ReduxProvider } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "globalCSS/global";
import { theme } from "globalCSS/theme";

render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
