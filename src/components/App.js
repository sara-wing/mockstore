import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesAll from './CategoriesAll';
import Category from './Category';
import { getProducts } from '../actions/productsActions';
import { makeStyles } from '@material-ui/core';
// import  SET_CATEGORY  from '../actions/appActions';
// import { SET_PRODUCT } from '../actions/appActions';
import ProductDetails from './ProductDetails';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  }
});

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { activePage } = useSelector(state => state.app);

  console.log(`rendering App. activePage is`, activePage);


  useEffect(() => dispatch(getProducts()), [dispatch]);

  function activePageSwitch() {
    switch (activePage) {
      case 'category':
        return <Category />
      case 'product':
        return <ProductDetails />
      case 'categories-all':
        return <CategoriesAll />
      default:
        return null;
    }
  }

  return (
    <div className={classes.app}>
      {activePageSwitch()}
    </div>
  );
}

export default App;
