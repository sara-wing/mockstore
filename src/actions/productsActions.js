import { slice } from '../reducers/productsReducer';

export const { addProduct, POPULATE_PRODUCTS } = slice.actions;

export const fetchProducts = () => async (dispatch) => {
  // setTimeout(() => {
  //   console.log('getting products');
  //   // dispatch(incrementByAmount(amount));
  // }, 1000);
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  console.log(products);
  dispatch(POPULATE_PRODUCTS(products));
};
