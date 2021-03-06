import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  resultContainer: {
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
  const { productsByID, selectedCategory } = useSelector(state => state.products);

  if(searchValue.length > 0) {
    return (
      <div className={classes.overlayContainer}>
        <h1>Search Results for "{searchValue}"</h1>
      </div>
    )
  } else {
    return null
  }
  if(searchValue.length > 2) {
    return (
      <div className={classes.resultContainer}>
        <div>{productsByID.includes(searchValue)}</div>
      </div>
      )
    }
}
