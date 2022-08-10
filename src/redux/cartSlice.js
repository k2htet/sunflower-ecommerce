import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCart: 0,
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const exists = state.cartItem.find((x) => x.id === action.payload.id);

      if (!exists) {
        state.totalCart += 1;
        state.cartItem = [...state.cartItem, action.payload];
      } else {
        return state;
      }
    },
    incrementQty: (state, action) => {
      state.cartItem = state.cartItem.map((item) =>
        item.id === action.payload && item.qty < 10
          ? { ...item, qty: item.qty + 1, total: item.total + item.amount }
          : item
      );
    },
    decrementQty: (state, action) => {
      state.cartItem = state.cartItem.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1, total: item.total - item.amount }
          : item
      );
    },
    removeCartItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.totalCart -= 1;
    },
    cleanCartItem: (state) => {
      state.cartItem = [];
      state.totalCart = 0;
    },
    confirm: (state) => {
      state.totalCart = 0;
      state.cartItem = [];
    },
  },
});

export const {
  addCart,
  incrementQty,
  decrementQty,
  removeCartItem,
  cleanCartItem,
  confirm,
} = cartSlice.actions;

export default cartSlice.reducer;
