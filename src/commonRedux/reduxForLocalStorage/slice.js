import { createSlice } from "@reduxjs/toolkit";

const initState = {
  appName: "React Dashboard",
};

export const localStorageSlice = createSlice({
  name: "localStorage",
  initialState: initState,
  reducers: {
    setAppName: (state, action) => {
      const { payload } = action;
      state.appName = payload;
    },
  },
});
