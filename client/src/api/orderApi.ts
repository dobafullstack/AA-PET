import CreateOrderInput from '../types/CreateOrderInput';
import axiosClient, { ResponseType } from './axiosClient';

export const createOrderApi = async (body: CreateOrderInput): Promise<ResponseType> => {
    return await axiosClient.post('/order', { ...body });
};

export const getAllOrdersApi = async (id: string): Promise<ResponseType> => {
    return await axiosClient.get(`/order/user/${id}`);
};
