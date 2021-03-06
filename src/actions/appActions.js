export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PRODUCT = 'SET_PRODUCT';
export const NAVIGATE_HOME = 'NAVIGATE_HOME';
export const SET_SEARCH = 'SET_SEARCH';
 
export const setCategory = selectedCategory => ({
  type: SET_CATEGORY,
  payload: selectedCategory
});

export const setProduct = selectedProductID => ({
  type: SET_PRODUCT,
  payload: selectedProductID
});

export const setSearchTerm = searchValue => ({
  type: SET_SEARCH,
  payload: searchValue
});
