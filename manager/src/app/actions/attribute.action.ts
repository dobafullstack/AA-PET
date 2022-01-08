import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import accessoryApi from "../../api/accessoryApi";
import {
    createAttribute,
    deleteAttribute,
    editAttribute,
    getAttributeFailed,
    getAttributeRequired,
    getDetailAttribute,
    getListAttributes,
} from "../reducers/attribute.reducer";
import { AppDispatch } from "../store";

export const getAllAttributesAction =
    (page: number, setTotalPage: Dispatch<SetStateAction<number>>) =>
    async (dispatch: AppDispatch) => {
        dispatch(getAttributeRequired());

        try {
            const { code, result, page_count } =
                await accessoryApi.getAllAccessories(page);

            if (code === 200) {
                setTotalPage(page_count);
                dispatch(getListAttributes(result));
            }
        } catch (error: any) {
            dispatch(getAttributeFailed(error.message));
        }
    };

export const getDetailAttributeAction =
    (id: string) => async (dispatch: AppDispatch) => {
        dispatch(getAttributeRequired());

        try {
            const { code, result } = await accessoryApi.getAccessory(id);

            if (code === 200) {
                dispatch(getDetailAttribute(result));
            }
        } catch (error: any) {
            dispatch(getAttributeFailed(error.message));
        }
    };

export const deleteAttributeAction =
    (id: string) => async (dispatch: AppDispatch) => {
        dispatch(getAttributeRequired());

        try {
            const { code, result } = await accessoryApi.deleteAccessory(id);

            if (code === 200) {
                toast.success(result);
                dispatch(deleteAttribute(id));
            } else {
                toast.error(result);
            }
        } catch (error: any) {
            dispatch(getAttributeFailed(error.message));
        }
    };

export const createAttributeAction =
    (
        name: string,
        field: string,
        types: Array<{ name: string; _id: string }>
    ) =>
    async (dispatch: AppDispatch) => {
        try {
            const { result, code } = await accessoryApi.createAccessory({
                name,
                field,
                types,
            });

            if (code !== 201) {
                toast.error(result);
            } else {
                dispatch(createAttribute({ name, field, types }));
                toast.success(result);
            }
        } catch (error: any) {
            dispatch(getAttributeFailed(error.message));
        }
    };

export const editAttributeAction =
    (
        id: string,
        name: string,
        field: string,
        types: Array<{ name: string; _id: string }>
    ) =>
    async (dispatch: AppDispatch) => {
        dispatch(getAttributeRequired());

        try {
            const { code, result } = await accessoryApi.updateAccessory(id, {
                name,
                field,
                types,
            });

            if (code === 200) {
                toast.success(result);
                dispatch(
                    editAttribute({
                        _id: id,
                        name,
                        field,
                        types,
                    })
                );
            } else {
                toast.error(result);
            }
        } catch (error: any) {
            dispatch(getAttributeFailed(error.message));
        }
    };
