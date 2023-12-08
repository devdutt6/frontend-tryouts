import { icecreamReducer } from "./icecream/icecreamReducers";
import { cakeReducer } from "./cake/cakeReducers";
import { userReducer } from "./user/userReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  users: userReducer
})
