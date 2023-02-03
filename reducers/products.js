import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        productToShow : {}, 
        productsInCart : []
    },
   };

   export const productsSlice = createSlice({
    name: 'products',
   
     initialState,
    reducers: {
      addProductToCart: (state, action) => {
        state.value.productsInCart.push(action.payload);
      },
      removeProductFromCart: (state, action) => {
        state.value.productsInCart = state.value.productsInCart.filter(e => e.name  !== action.payload)
      },
      resetCart : (state, action) => {
        state.value.productsInCart = []
      }, 
      productToShow : (state, action) => {
        state.value.productShown = action.payload
      }, 
      resetProductToShow : (state, action) => {
        state.value.productShown = {}
      }
    },
   });

export const { addProductToCart, removeProductFromCart, resetCart, productToShow, resetProductToShow } = productsSlice.actions;
export default productsSlice.reducer;