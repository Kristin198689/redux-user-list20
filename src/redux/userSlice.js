// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Khristina" },
    { id: 2, name: "Marina" },
    { id: 3, name: "Olia" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
