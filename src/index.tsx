import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { SearchProvider } from "./providers/SearchProvider";
import { AuthContextProvider } from "./providers/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AuthContextProvider>
    <SearchProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </SearchProvider>
  </AuthContextProvider>
);
