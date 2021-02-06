// Reducer handles “POPULATE_PRODUCTS” case
//   Adds raw data/products to store
//   In reducer, adds products grouped by category to store
// Create object where key is the category and value is an array of objects within the category 

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case 'POPULATE_PRODUCTS':
      const productsByCategory = action.payload.reduce(
        (accumulator, product) => {
          const category = product.cateogry;
          return {
            ...accumulator,
            [category]: [...(accumulator[category]) || [], product],
          };
        },
        {}
      );
      return { ...state, productsByCategory };

    default:
      return state;
  }
}
