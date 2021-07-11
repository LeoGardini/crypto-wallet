import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, compose } from "redux";

import mnemonics from "./reducers";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const combined = combineReducers({ mnemonics });
const store = IS_PRODUCTION
  ? createStore(combined)
  : createStore(combined, {}, compose(composeWithDevTools()));

export default store;
