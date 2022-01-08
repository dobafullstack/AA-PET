import { toast } from "react-toastify";
import authApi from "../../api/authApi";
import {
    createStaff,
    getListUsers,
    getUserFail,
    getUserRequired,
} from "../reducers/user.reducer";
import { AppDispatch } from "./../store";

export const getAllUsersAction =
    (token: string) => async (dispatch: AppDispatch) => {
        dispatch(getUserRequired());

        try {
            const { code, result, error } = await authApi.getAllUsers(token);

            if (code === 200) {
                dispatch(getListUsers(result));
            } else {
                dispatch(getUserFail(error?.message as string));
            }
        } catch (error: any) {
            dispatch(getUserFail(error.message));
        }
    };

export const createStaffAction = (user: any) => async (dispatch: AppDispatch) => {
    dispatch(getUserRequired());

    try {
        const { result, code } = await authApi.createStaff(user);

        if (code === 201) {
            toast.success(result);
            dispatch(createStaff(result));
        }else{
            toast.error(result);
            dispatch(getUserFail(result));
        }
    } catch (error: any) {
        dispatch(getUserFail(error.message));
    }
};
