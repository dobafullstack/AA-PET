import Accessory from "../models/Accessory";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    getAllAccessories: async (
        page?: number,
        page_size?: number
    ): Promise<ResponseType<Accessory[]>> =>
        await axiosClient.get(
            `/accessory?page_index=${page}&page_size=${page_size}`
        ),
    createAccessory: async (body: any): Promise<ResponseType<string>> =>
        await axiosClient.post("/accessory", {
            ...body,
        }),
    deleteAccessory: async (id: string): Promise<ResponseType<string>> =>
        await axiosClient.delete(`/accessory/${id}`),
    getAccessory: async (id: string): Promise<ResponseType<Accessory>> =>
        await axiosClient.get(`/accessory/${id}`),
    updateAccessory: async (
        id: string,
        body: any
    ): Promise<ResponseType<string>> =>
        await axiosClient.put(`/accessory/${id}`, {
            ...body,
        }),
};
