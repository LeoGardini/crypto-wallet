import * as bip39 from "bip39";
import { useSelector } from "react-redux";

import { IStore } from "../redux/reducers";

function useGeneratedWallet(): string {
  const { values, pinCode } = useSelector((state: IStore) => state.mnemonics);

  // Generate the wallet hash using the mnemonics and the pin code
  return bip39.mnemonicToSeedSync(values.join(" "), pinCode).toString("hex");
}

export default useGeneratedWallet;
