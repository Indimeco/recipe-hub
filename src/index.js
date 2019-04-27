// Core
import React from "react";
import ReactDOM from "react-dom";

// Functionality
import { getData } from "./db/utils.js";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { ColorProvider } from "./hocs/withColor";
import App from "./App/App/App";

console.log(getData());

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ColorProvider.Provider value={"root"}>
      <ModalProvider>
        <App book={getData()} />
      </ModalProvider>
    </ColorProvider.Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
