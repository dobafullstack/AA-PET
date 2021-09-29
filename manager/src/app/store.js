import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.reducer";

const store = configureStore({
    reducer: {},
});

export default store;
