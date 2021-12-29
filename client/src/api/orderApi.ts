import OrderModel from "../models/Order";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    createOrder: async (body: any): Promise<ResponseType<OrderModel>> => await axiosClient.post('/order', {
        ...body
    })
}