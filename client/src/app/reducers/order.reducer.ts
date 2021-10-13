import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
};

const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getAllOrders(state, { payload }) {
            state.orders = payload;
        },
    },
});

export const { getAllOrders } = OrderSlice.actions;

export default OrderSlice.reducer;
