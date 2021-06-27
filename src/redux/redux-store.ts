import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profilesReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profilesReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
