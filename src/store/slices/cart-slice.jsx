/** @format */

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    categories: [],
    subCategories: [],
    products: [],
    listItems: [],
    cartItems: [],
    loader: false,
  },
  reducers: {
    allCategories(state, action) {
      state.categories = action.payload;
    },
    subCategories(state, action) {
      state.subCategories = action.payload;
    },
    products(state, action) {
      state.products = action.payload;
    },
    addItem(state, action) {
      console.log(action.payload);
      state.cartItems = [...state.cartItems, ...action.payload];
    },
    removeItem(state, action) {},
    clearCart(state, action) {
      state.cartItems = [];
    },
    LoaderVisiblity(state, action) {
      state.loader = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const {
  allCategories,
  subCategories,
  products,
  addItem,
  removeItem,
  clearCart,
  LoaderVisiblity,
} = cartSlice.actions;
