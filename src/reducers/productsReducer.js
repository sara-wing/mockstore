// Reducer handles “POPULATE_PRODUCTS” case
//   Adds raw data/products to store
//   In reducer, adds products grouped by category to store
// Create object where key is the category and value is an array of objects within the category

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "products",
  initialState: {
    list: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    POPULATE_PRODUCTS: (state, action) => {
      debugger

      console.log(state, action);
      console.log('in populate_products reducer');
    }
  }
});



// import { POPULATE_PRODUCTS } from './productsActions.js';

// const categories = {
//   category: []
// }


// export default function productsReducer(state= {}, action) {
//   const productsByCategory = <div className=""></div>
// }
