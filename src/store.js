import { configureStore } from '@reduxjs/toolkit';
import { slice as productsSlice } from './reducers/productsReducer';

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
}); 
