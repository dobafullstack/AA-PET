import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authApi from './reducers/auth.reducer';
import cartReducer from './reducers/cart.reducer';
import categoryApi from './reducers/category.reducer';
import productReducer, { productApi } from './reducers/product.reducer';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
