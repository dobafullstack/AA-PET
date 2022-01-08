import { toast } from "react-toastify";
import ProductApi from "../../api/ProductApi";
import Product from "../../models/Product";
import { createProduct, getProductRequired } from "../reducers/product.reducer";
import { AppDispatch } from "./../store";
export const createProductAction =
    (body: any) => async (dispatch: AppDispatch) => {
        dispatch(getProductRequired());
        try {
            const { code, result } = await ProductApi.createProducts({
                ...body
            });

            if (code !== 201) {
                toast.error(result);
                dispatch(createProduct(body))
            } else {
                toast.success(result);
            }
        } catch (error) {
            console.log(error);
        }
    };
