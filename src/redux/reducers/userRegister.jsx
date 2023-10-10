import { createSlice } from "@reduxjs/toolkit";
import { getVerification } from "../actions/user";

export const userVerification = createSlice({
  name: "userVerf",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getVerification.pending]: (state) => {
      state.loading = true;
    },
    [getVerification.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.user = null;
    },
    [getVerification.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.user = payload;
    },
  },
});

export default userVerification.reducer;
