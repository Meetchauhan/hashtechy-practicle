import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login", async ({ email, password }) => {
  const response = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const result = await response.json();
  return result;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    pending: true,
    data: [],
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.data = [];
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.pending = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.pending = false;
        state.data = action.payload;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(login.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.error;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
