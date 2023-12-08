import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numberOfIcecreams: 10
}

export const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1
      }
    default:
      return state
  }
}