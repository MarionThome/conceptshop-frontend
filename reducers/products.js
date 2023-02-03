import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    productToShow: null,
    productsInCart: [],
  },
};

export const productsSlice = createSlice({
  name: "products",

  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      if (
        !state.value.productsInCart.find((e) => e.name === action.payload.name)
      ) {
        state.value.productsInCart.push(action.payload);
      } else {
        {
          state.value.productsInCart = state.value.productsInCart.map((e) => {
            if (e.name === action.payload.name) {
              return { ...e, quantity: e.quantity + 1 };
            }
          });
        }
      }
    },
    removeProductFromCart: (state, action) => {

        state.value.productsInCart = state.value.productsInCart.filter(
          (e) => e.name !== action.payload
        );
      
    },
    resetCart: (state, action) => {
      state.value.productsInCart = [];
    },
    selectProductToShow: (state, action) => {
      state.value.productToShow = action.payload;
    },
    resetProductToShow: (state, action) => {
      state.value.productToShow = {};
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  resetCart,
  selectProductToShow,
  resetProductToShow,
} = productsSlice.actions;
export default productsSlice.reducer;
