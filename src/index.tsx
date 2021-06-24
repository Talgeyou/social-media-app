import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/antd/dist/antd";
import "../node_modules/antd/dist/antd.css";
import state from "./redux/state";
import { rerenderEntireTree } from "./render";
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
