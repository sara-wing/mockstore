import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  categoryTitle: {
    display: 'flex',
    justifyContet: 'center',
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

export default function Category({ selectedCategory }) {
  const classes = useStyles();

  const products = useSelector(
    state => state.products.productsByCategory[selectedCategory]
  );

  return (
    <div>
      <div className={classes.categoryTitle}>
        <Typography variant='h2' className={classes.titleCase}>
          {selectedCategory}
        </Typography>
      </div>
      <div className={classes.container}>
        {products.map((product, index) => (
          <CardItem
            key={product.id}
            label={product.title}
            imageURL={product.image}
            clickHandler={() => { }}
          />
        ))}
      </div>
    </div>
  )
}
