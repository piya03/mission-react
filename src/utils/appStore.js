import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartSlice.js';

// we will add slices inside it
const appStore = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default appStore