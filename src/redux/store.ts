import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, compose, AnyAction, Store } from "redux";

import mnemonics from "./reducers";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

let store: Store<any, AnyAction>;
const combined = combineReducers({ mnemonics });
if (!IS_PRODUCTION) {
  store = createStore(combined, {}, compose(composeWithDevTools()));
} else {
  store = createStore(combined, {});
}

export default store;
