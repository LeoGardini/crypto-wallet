import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, compose } from "redux";

import mnemonics from "./reducers";

const applied = compose(composeWithDevTools());
const combined = combineReducers({ mnemonics });
const store = createStore(combined, {}, applied);

export default store;
