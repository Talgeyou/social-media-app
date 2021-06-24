import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  addPost,
  sendMessage,
  State,
  updateNewMessageText,
  updateNewPostText,
} from "./redux/state";

export let rerenderEntireTree = (state: State) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        onNewPostTextChange={updateNewPostText}
        addPost={addPost}
        updateNewMessageText={updateNewMessageText}
        sendMessage={sendMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
