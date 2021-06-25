import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/antd/dist/antd";
import "../node_modules/antd/dist/antd.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";

let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  rerenderEntireTree(store.getState());
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
