import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import CardItem from './CardItem';
import { setProduct } from '../actions/appActions';
import { setSearchTerm } from '../actions/appActions';

const useStyles = makeStyles({
  searchContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    height: '100vh',
  },
  clearResult: {
    color: 'gray',
    textAlign: 'right',
    padding: '10px',
    top: 0,
    fontWeight: 'bold',
    cursor: 'pointer',
  }
});

export default function SearchResultOverlay() {
  const classes = useStyles();
  const { searchValue } = useSelector(state => state.app);
  const { products } = useSelector(state => state.products);
  
  const dispatch = useDispatch();
  const clickHandler = productID => {
    dispatch(setProduct(productID));
  }

  const clearSearchValue = () => {
    dispatch(setSearchTerm(''));
  }
  
  if(searchValue.length===0) {
    return null
  };
  
  const renderSearchedProducts = () => {
    if(searchValue.length < 3) {
      return null
    };

    const matchingProducts = products.filter((product) => {
      const titleMatches = product.title.toLowerCase().includes(searchValue);
      const categoryMatches = product.category.toLowerCase().includes(searchValue);
      const descriptionMatches = product.description.toLowerCase().includes(searchValue);
      return titleMatches || categoryMatches || descriptionMatches;
    });

    return (
      <>
        {
          matchingProducts.map((product, index) => {
            return (
              <CardItem
                key={product.id}
                label={product.title}
                imageURL={product.image}
                onClick={() => clickHandler(product.id)}
              />
            )
          })
        }
      </>
    )
  }
    
  return (
    <div className={classes.searchContainer}>
      <h5 
          className={classes.clearResult}
          onClick={() => clearSearchValue()}>CLEAR SEARCH RESULTS
      </h5>
      <h1>Search Results for "{searchValue}"</h1>
     {renderSearchedProducts()}
    </div>
  )
};
