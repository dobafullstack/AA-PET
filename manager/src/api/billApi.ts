import Bill from "../models/Bill";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    createBill: async (orderId: string): Promise<ResponseType<string>> =>
        await axiosClient.post("/bill", { orderId }),
    getAllBills: async (): Promise<ResponseType<Bill[]>> =>
        await axiosClient.get("/bill"),
    getDetailBill: async (id: string): Promise<ResponseType<Bill>> =>
        await axiosClient.get(`/bill/${id}`),
};
