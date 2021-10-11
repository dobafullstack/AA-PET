import { createSlice } from '@reduxjs/toolkit';

const initialState = Boolean(localStorage.getItem('category'))
    ? JSON.parse(localStorage.getItem('category') || "")
    : {
        categories: [],
        detail_categories: []
    };

const CategorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        getAllCategories(state, { payload }) {
            state.categories = payload;

            localStorage.setItem('category', JSON.stringify(state));
        },
        getAllDetailCategories(state, { payload }) {
            state.detail_categories = payload;

            localStorage.setItem('category', JSON.stringify(state));
        }
    },
});

export const { getAllCategories, getAllDetailCategories } = CategorySlice.actions;

export default CategorySlice.reducer;
