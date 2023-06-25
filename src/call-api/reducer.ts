import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";

const rootReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
