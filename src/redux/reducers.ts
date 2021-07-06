const INITIAL_STATE = { values: [] };

type IAction = { type: string; payload: any };
export type IStore = { mnemonics: { values: string[] } };

function reducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case "SET_MNEMONICS":
      return { ...state, values: action.payload };
    case "RESET_STORE":
      return { ...INITIAL_STATE };
    default:
      return { ...state };
  }
}

export default reducer;
