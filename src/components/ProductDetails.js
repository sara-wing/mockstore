import React from 'react'
import { useSelector } from 'react-redux';
import { CardMedia, Typography, makeStyles, InputLabel, MenuItem, FormControl, Select, Button } from "@material-ui/core";
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
    margin: 10,
  },
  formControl: {
    margin: 10,
    minWidth: 100,
  },
  productInfo: {
    margin: 10,
    maxWidth: 500
  },
  sizeSelect: {
    height: 50,
    width: 80,
    padding: 10,
  },
  titleCase: {
    textTransform: 'capitalize',
  },
  description: {
    color: grey,
    padding: 10,
  }
});

export default function ProductDetails() {
  const classes = useStyles();
  const { selectedProductID, selectedCategory } = useSelector(state => state.app)

  const productsByID = useSelector(state => state.products.productsByID)
  const selectedProduct = productsByID[selectedProductID];

  const renderSelectSize = () => {
    if (!["men clothing", "women clothing"].includes(selectedCategory)) { return null }

    return (
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="select-size">Size</InputLabel>
        <Select
          labelId="select-size"
          id="select-size"
          defaultValue=""
        >
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="L">L</MenuItem>
          <MenuItem value="XL">XL</MenuItem>
        </Select>
      </FormControl>
    )
  }

  return (
    <div class={classes.container}>
      <div class={classes.image}>
        <CardMedia
          className={classes.image}
          image={selectedProduct.image}
          title="product image"
        />
      </div>
      <div className={classes.productInfo}>
        <div className={classes.productTitle}>
          <Typography variant='h6' className={classes.titleCase}>
            {selectedProduct.title}
          </Typography>
        </div>
        <div className={classes.price}>
          <Typography variant='h8'>
            ${selectedProduct.price}
          </Typography>
        </div>
        {renderSelectSize()}
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="select-quantity">Quantity</InputLabel>
          <Select
            labelId="select-quantity"
            id="select-quantity"
            defaultValue=""
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.description}>
          <Typography variant='h8'>
            {selectedProduct.description}
          </Typography>
        </div>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </div>
    </div >
  )
}
