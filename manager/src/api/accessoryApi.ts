import Accessory from "../models/Accessory";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    getAllAccessories: async (): Promise<ResponseType<Accessory[]>> => await axiosClient.get("/accessory"),
};