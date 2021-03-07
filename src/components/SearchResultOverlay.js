import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import CardItem from './CardItem';
import { setProduct } from '../actions/appActions';

const useStyles = makeStyles({
  searchContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100vh',
  }
});

export default function SearchResultOverlay() {
  const classes = useStyles();
  const { searchValue } = useSelector(state => state.app);
  const { products } = useSelector(state => state.products);
  
  // const matchingProduct = useSelector(state => state.products.productsByCategory[selectedCategory]);

  const dispatch = useDispatch();
  const clickHandler = selectedProductID => {
    dispatch(setProduct(selectedProductID));
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
    console.log(`matchingProducts`, matchingProducts);

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
  console.log('rendering SearchResultOverlay... searchValue: ', searchValue);
    
  return (
    <div className={classes.searchContainer}>
      <h1>Search Results for "{searchValue}"</h1>
     {renderSearchedProducts()}
    </div>
  )
};
