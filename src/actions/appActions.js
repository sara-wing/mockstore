export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PRODUCT = 'SET_PRODUCT';

export const setCategory = (selectedCategory) => ({
  type: SET_CATEGORY,
  payload: selectedCategory
});

export const setProduct = (selectedProductID) => ({
  type: SET_PRODUCT,
  payload: selectedProductID
});
