import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { userVerification } from "./reducers/userRegister";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userVerf: userVerification,
  },
});
