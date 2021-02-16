const populateProducts = products => {
  return ({
    type: `POPULATE_PRODUCTS`,
    payload: products,
  })
}

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch('https://fakestoreapi.com/products');
  const json = await res.json();
  dispatch(populateProducts(json));
};


export const getProducts = () => dispatch => {
  fetch('https://fakestoreapi.com/products')
    .then(res =>
      res.json()
    )
    .then(json => {
      dispatch(populateProducts(json));
    });
}
