import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, compose, AnyAction, Store } from "redux";

import mnemonics from "./reducers";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

let store: Store<any, AnyAction>;
if (!IS_PRODUCTION) {
  const applied = compose(composeWithDevTools());
  const combined = combineReducers({ mnemonics });
  store = createStore(combined, {}, applied);
} else {
  const combined = combineReducers({ mnemonics });
  store = createStore(combined, {});
}

export default store;
