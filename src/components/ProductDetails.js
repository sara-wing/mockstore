import React from 'react'
import { useSelector } from 'react-redux';
import { Typography, makeStyles, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
  },
  sizeSelect: {
    height: 50,
    width: 80,
    padding: 20,
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function ProductDetails() {
  const classes = useStyles();
  const { selectedProductID } = useSelector(state => state.app)
  const selectedProduct = useSelector(state => state.products.productsByID[selectedProductID]);

  console.log(selectedProduct.description);


  return (
    <div>
      <div className={classes.categoryTitle}>
        <Typography variant='h5' className={classes.titleCase}>
          {/* {selectedCategory} */}
        </Typography>
      </div>
      <FormControl variant="filled" className={classes.sizeSelect}>
        <InputLabel id="select-size">Size</InputLabel>
        <Select
          labelId="select-size"
          id="select-size"
        >
          <MenuItem>XS</MenuItem>
          <MenuItem>S</MenuItem>
          <MenuItem>M</MenuItem>
          <MenuItem>L</MenuItem>
          <MenuItem>XL</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.quantitySelect}>
        <InputLabel id="select-quantity">Quantity</InputLabel>
        <Select
          labelId="select-quantity"
          id="select-quantity"
        >
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
          <MenuItem>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
