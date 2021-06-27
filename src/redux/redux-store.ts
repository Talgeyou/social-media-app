import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profilesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profilesReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export default store;
