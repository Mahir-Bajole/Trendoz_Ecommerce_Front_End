import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice';  // Correct default import for productSlice
import cartReducer from './CartSlice';  // Default import for cartSlice

const store = configureStore({
  reducer: {
    products: productReducer,  // Use the default exported reducer from ProductSlice
    carts: cartReducer,  // Use the default exported reducer from CartSlice
  },
});

export default store;
