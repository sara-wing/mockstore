import React from 'react';
import { CategoriesList.react } from './CategoriesList.react.js';

function App() {
  return <>HELLO WORLD</>;
  <CategoriesList />
}

export default App;

// {/* <App /> 
//   On mount dispatch “getProducts” thunk
//   Render <CategoriesList />

// getProducts Thunk fetches products from https://fakestoreapi.com/products
//   Use ‘Thunk’ for data fetching (network requests, async behavior)
//   On success dispatch “POPULATE_PRODUCTS” with products as payload
