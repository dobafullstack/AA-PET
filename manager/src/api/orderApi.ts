import Order from "../models/Order";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    getAllOrders: async (status: string = ''): Promise<ResponseType<Order[]>> =>
        await axiosClient.get(`/order?status=${status}`),

    getDetailOrder: async (id: string): Promise<ResponseType<Order>> =>
        await axiosClient.get(`/order/${id}`),
    cancelOrder: async (id: string): Promise<ResponseType<string>> =>
        await axiosClient.put(`/order/cancel/${id}`),
    completeOrder: async (id: string): Promise<ResponseType<string>> =>
        await axiosClient.put(`/order/complete/${id}`),
};
