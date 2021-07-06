import * as bip39 from "bip39";

import { useSelector, useDispatch } from "react-redux";

import { IStore } from "../redux/reducers";

function useMnemonics(): string[] {
  const dispatch = useDispatch();
  const store = useSelector((state: IStore) => state);
  const mnemonics = bip39.generateMnemonic().split(" ");

  if (!store.mnemonics.values.length) {
    dispatch({ type: "SET_MNEMONICS", payload: mnemonics });
  }

  return store.mnemonics.values;
}

export default useMnemonics;
