import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesList from './CategoriesList';
import Category from './Category';
import { getProducts } from '../actions/productsActions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  }
});

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { selectedCategory } = useSelector(state => state.app);

  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
    <div className={classes.app}>
      {selectedCategory != null ? (
        <Category selectedCategory={selectedCategory} />
      ) : (
          <CategoriesList />
        )}
    </div>
  );
}

export default App;
