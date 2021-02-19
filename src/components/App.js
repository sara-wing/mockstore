import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesList from './CategoriesList';
import { getProducts } from '../actions/productsActions';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  }
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
    <div className={styleMedia.app}>
      <CategoriesList />
    </div>
  );
}

export default App;
