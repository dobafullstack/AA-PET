import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authApi from './reducers/auth.reducer';
import cartReducer from './reducers/cart.reducer';
import categoryApi from './reducers/category.reducer';
import orderReducer from './reducers/order.reducer';
import productReducer, { productApi } from './reducers/product.reducer';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderReducer.reducerPath]: orderReducer.reducer
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
