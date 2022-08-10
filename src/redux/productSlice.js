import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: null,
  pagesCount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showProduct: (state, action) => {
      state.item = action.payload;
    },
    incPagesCount: (state) => {
      state.pagesCount += 1;
    },
    decPagesCount: (state) => {
      state.pagesCount -= 1;
    },
  },
});

export const { showProduct, incPagesCount, decPagesCount } =
  productSlice.actions;

export default productSlice.reducer;
