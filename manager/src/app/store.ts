import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import attributeReducer from "./reducers/attribute.reducer";
import userReducer from "./reducers/user.reducer";

export const store = configureStore({
    reducer: {
        attributeReducer,
        userReducer,
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
