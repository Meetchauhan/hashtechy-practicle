import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import cartSlice from "../features/cartSlice";
import userSlice from "../features/userSlice";
import sidebarSlice from "../features/sidebarSlice";
import filterSlice from "../features/filterSlice"

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    login: userSlice,
    sidebar: sidebarSlice,
    filter:  filterSlice
  },
});
