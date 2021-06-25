import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/antd/dist/antd";
import "../node_modules/antd/dist/antd.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, Store } from "./redux/state";

let rerenderEntireTree = (store: Store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        onNewPostTextChange={store.updateNewPostText.bind(store)}
        addPost={store.addPost.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
        sendMessage={store.sendMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
