import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/types/configStore";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
