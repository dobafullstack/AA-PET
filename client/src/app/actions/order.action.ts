import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';
import { getAllOrdersApi } from './../../api/orderApi';
import CreateOrderInput from '../../types/CreateOrderInput';
import { AppDispatch } from '../store';
import { getAllOrders } from '../reducers/order.reducer';

export const GetAllOrderAction = () => async (dispatch: AppDispatch) => {
    const decode: any = jwt.decode(localStorage.getItem('access_token') as string);

    try {
        const { code, result, error } = await getAllOrdersApi(decode._id);

        if (error !== null) {
            toast.error(error?.message);
            return;
        }

        if (code !== 200) {
            toast.error(result);
            return;
        }

        console.log(result)

        dispatch(getAllOrders(result));
    } catch (error: any) {
        console.log(error.message);
    }
};
