import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/antd/dist/antd";
import "../node_modules/antd/dist/antd.css";

import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
store.subscribe(() => {
  rerenderEntireTree();
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
