import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productsActions';
// import { CategoriesList.react } from './CategoriesList.react.js';
// import thunk from 'redux-thunk';
import ProductList from './ProductList';
import { fetchProducts } from '../actions/productsActions';

const App = () => {
  const [newProduct, setNewProduct] = useState('')

  // const products = useSelector(state => state.products.value);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct))
    setNewProduct('')
  }

  return (
    <div>
      <h1>HELLO WORLD</h1>
      {/* <input type="text" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} />
      <button onClick={handleAddProduct}>
        Add product to store
      </button> */}
      <button
        onClick={() => dispatch(fetchProducts())}
      >
        fetch products
      </button>

      <ProductList />
    </div >
  );
}

export default App;

// {/* <App /> 
//   On mount dispatch “getProducts” thunk
//   Render <CategoriesList />

// getProducts Thunk fetches products from https://fakestoreapi.com/products
//   Use ‘Thunk’ for data fetching (network requests, async behavior)
//   On success dispatch “POPULATE_PRODUCTS” with products as payload
