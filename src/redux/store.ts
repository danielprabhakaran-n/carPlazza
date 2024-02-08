import {configureStore} from "@reduxjs/toolkit";
import brandReducer from "../pages/Home/components/Brands/brandSlice";

export const store = configureStore({
  reducer: {
    brands: brandReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;