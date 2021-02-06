import { slice } from '../reducers/productsReducer';

export const { addProduct, POPULATE_PRODUCTS } = slice.actions;

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  console.log(products);
  dispatch(POPULATE_PRODUCTS(products));
};
