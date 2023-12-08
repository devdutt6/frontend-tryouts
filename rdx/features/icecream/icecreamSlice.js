import {createSlice} from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";

const initialState = {
  numberOfIcecream: 20
}

const icecream = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    buyed: (state) => {
      state.numberOfIcecream--;
    },
    restocked: (state, action) => {
      state.numberOfIcecream += action.payload
    }
  },
  // extraReducers: {
    // ['cake/ordered']: (state, action) => {
    //   state.numberOfIcecream--;
    // },
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numberOfIcecream--;
    })
  }
})

export default icecream.reducer
export const icecreamActions = icecream.actions