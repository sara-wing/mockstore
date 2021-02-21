import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from './CardItem';
import { makeStyles, Typography } from '@material-ui/core';
import { setProduct } from '../actions/appActions';

const useStyles = makeStyles({
  categoryTitle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 500,
    margin: '0 auto',
    padding: 20,
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function Category() {
  const classes = useStyles();

  const { selectedCategory } = useSelector(state => state.app)

  const products = useSelector(
    state => (state.products.productsByCategory || {})[selectedCategory]
  );

  const dispatch = useDispatch();
  const clickHandler = selectedProductID => {
    console.log(selectedProductID);
    dispatch(setProduct(selectedProductID));
  }

  return (
    <div>
      <div className={classes.categoryTitle}>
        <Typography variant='h5' className={classes.titleCase}>
          {selectedCategory}
        </Typography>
      </div>
      <div className={classes.container}>
        {(products || []).map((selectedProductID, index) => (
          <CardItem
            key={selectedProductID.id}
            label={selectedProductID.title}
            imageURL={selectedProductID.image}
            onClick={() => clickHandler(selectedProductID)}
          />
        ))}
      </div>
    </div>
  )
}
