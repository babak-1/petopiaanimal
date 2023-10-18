import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "user/fetchUser",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/users/login`,
        data
      );
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/users/profile`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
