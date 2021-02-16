import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { addProduct } from '../actions/productsActions';
import CategoriesList from './CategoriesList';
// import thunk from 'redux-thunk';
// import ProductList from './ProductList';
import { fetchProducts } from '../actions/productsActions';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  }
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  return (
    <div className={styleMedia.app}>
      <CategoriesList />
    </div>
  );
}

export default App;

// {/* <App /> 
//   On mount dispatch “getProducts” thunk
//   Render <CategoriesList />

// getProducts Thunk fetches products from https://fakestoreapi.com/products
//   Use ‘Thunk’ for data fetching (network requests, async behavior)
//   On success dispatch “POPULATE_PRODUCTS” with products as payload
