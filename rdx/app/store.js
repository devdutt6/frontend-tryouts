import {configureStore} from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";
import icecreamSlice from "../features/icecream/icecreamSlice.js";
import logger from "redux-logger";
import userSlice from "../features/user/userSlice.js";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream: icecreamSlice,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store