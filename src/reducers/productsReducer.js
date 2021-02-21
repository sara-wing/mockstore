export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case 'POPULATE_PRODUCTS':
      const productsByCategory = action.payload.reduce(
        (accumulator, product) => {
          const category = product.category;
          return {
            ...accumulator,
            [category]: [...(accumulator[category]) || [], product],
          };
        },
        {}
      );

      // const productsByID = {}

      return {
        ...state,
        products: action.payload,
        productsByCategory,
        // productsByID:
      }

    default:
      return state;
  }
}
