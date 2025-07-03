import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const token = JSON.parse(localStorage.getItem("token"));

export const addToCart = createAsyncThunk(
  "addToCart",
  async ({ productId, quantity }) => {
    try {
      const res = await fetch('http://localhost:5000/api/addToCart', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, quantity }),
      });

      const result = await res.json();

      return result;
    } catch (error) {
      console.error("Error in Add to cart API");

    }
  }
);

export const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async ({ productId }) => {
    try {
      const res = await fetch('http://localhost:5000/api/removeFromCart', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId }),
      });

      const result = await res.json();

      return result;
    } catch (error) {
      console.error("Error in Remove from cart API");

    }
  }
);

export const getCart = createAsyncThunk(
  "getCart",
  async () => {
    try {
      const res = await fetch('http://localhost:5000/api/getCart', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      return result;
    } catch (error) {
      console.error("Error in get cart API");

    }
  }
);

export const incrementCartItemQuantity = createAsyncThunk(
  "incrementCartItemQuantity",
  async ({ productId }) => {
    try {
      const res = await fetch('http://localhost:5000/api/incrementCartItemQuantity', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const result = await res.json();

      return result;
    } catch (error) {
      console.error("Error in get cart API");

    }
  }
);

export const decrementCartItemQuantity = createAsyncThunk(
  "decrementCartItemQuantity",
  async ({ productId }) => {
    try {
      const res = await fetch('http://localhost:5000/api/decrementCartItemQuantity', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const result = await res.json();

      return result;
    } catch (error) {
      console.error("Error in get cart API");

    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.items;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add item";
      })

      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch cart";
      })

      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.cart
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to remove item";
      })

      .addCase(incrementCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(incrementCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.cart;
      })
      .addCase(incrementCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to remove item";
      })

      .addCase(decrementCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decrementCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.cart;
      })
      .addCase(decrementCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to remove item";
      })
      ;
  },
});

export default cartSlice.reducer;
