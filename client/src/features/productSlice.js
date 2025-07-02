import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("http://localhost:5000/api/getProducts");
  const result = await response.json();
  return result;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    pending: true,
    data: [],
    error: null,
  },
  reducers: () => {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
