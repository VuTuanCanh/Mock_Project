import {
    createSlice,
    SerializedError,
  } from "@reduxjs/toolkit";
import { ProductType } from "../components/productDetail/product-list/Interface";

  interface ProductState {
    isLoading: boolean;
    error: SerializedError | null;
    products: ProductType[];
}
  
  const initialState:ProductState = {
    isLoading: false,
    error: null,
    products: [],
  };
  
  const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      getProductFetch: (state) => {
        state.isLoading = true;
      },
      getProductSuccess: (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      },
      getProductFailure: (state) => {
        state.isLoading = false;
        state.error = new Error();
      } ,
    },
    
  });
  export const {   getProductFetch, getProductSuccess, getProductFailure  } = productSlice.actions;
  
   export default productSlice.reducer;
  