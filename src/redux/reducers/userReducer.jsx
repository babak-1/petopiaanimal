import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.user = null;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
});

export default userSlice.reducer;
