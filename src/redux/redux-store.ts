import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profilesReducer";

let reducers = combineReducers({
  profiles: profilesReducer,
  dialogs: dialogsReducer,
});

let store = createStore(reducers);

export default store;
