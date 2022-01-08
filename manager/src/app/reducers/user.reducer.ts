import User from "../../models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
    users: User[];
    user: User;
    loading: boolean;
    message: string;
};

const initialState: StateType = {
    users: [],
    user: {
        _id: "",
        name: "",
        address: "",
        email: "",
        gender: "",
        phone: "",
        role: "",
        username: "",
        typeStaff: 'fulltime',
        active: true,
        salary: 0
    },
    loading: false,
    message: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserRequired(state) {
            state.loading = true;
        },
        getUserFail(state, { payload }: PayloadAction<string>) {
            state.message = payload;
            state.loading = false;
        },
        getListUsers(state, { payload }: PayloadAction<User[]>) {
            state.users = [];

            state.users = payload;
            state.loading = false;
        },
        getDetailUser(state, { payload }: PayloadAction<User>) {
            state.user = payload;
        },
        createStaff(state, { payload }: PayloadAction<string>) {
            state.loading = false;
        },
    },
});

export default userSlice.reducer;

export const {
    getUserRequired,
    getListUsers,
    getDetailUser,
    getUserFail,
    createStaff,
} = userSlice.actions;
