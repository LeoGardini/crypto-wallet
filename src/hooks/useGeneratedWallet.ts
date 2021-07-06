import * as bip38 from "bip38";
import * as bip39 from "bip39";

import { useSelector, useDispatch } from "react-redux";

import { IStore } from "../redux/reducers";

function useGeneratedWallet(pinCode?: string[]): string {
  const dispatch = useDispatch();
  const store = useSelector((state: IStore) => state.mnemonics);

  !store.pinCode &&
    pinCode[0] === pinCode[1] &&
    dispatch({ type: "SET_PIN_CODE", payload: pinCode[0] });

  const seed = bip39.mnemonicToSeedSync(store.values.join(" "));
  return bip38.encrypt(seed, true, store.pinCode || pinCode[0]);
}

export default useGeneratedWallet;
