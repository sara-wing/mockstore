const populateProducts = products => {
  return ({
    type: `POPULATE_PRODUCTS`,
    payload: products,
  })
}

export const getProducts = () => dispatch => {
  fetch('https://fakestoreapi.com/products')
    .then(res =>
      res.json()
    )
    .then(json => {
      dispatch(populateProducts(json));
    });
}
