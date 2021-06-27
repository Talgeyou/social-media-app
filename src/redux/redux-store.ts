import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profilesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profilesReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
