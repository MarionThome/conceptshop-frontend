import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    productToShow: null,
    productsInCart: [],
    favoriteProducts : [],
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
    productInFavs : (state, action) => {
      if (
        state.value.favoriteProducts && state.value.favoriteProducts.find((e) => e.name === action.payload.name)
        ) {
        state.value.favoriteProducts = state.value.favoriteProducts.filter((e) => e.name !== action.payload.name)
      } else {
        state.value.favoriteProducts.push(action.payload);
      }
    },
    productInFavsFromDB : (state, action) => {
      state.value.favoriteProducts = action.payload
    }
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  resetCart,
  selectProductToShow,
  resetProductToShow,
  productInFavs, 
  productInFavsFromDB 
} = productsSlice.actions;
export default productsSlice.reducer;
