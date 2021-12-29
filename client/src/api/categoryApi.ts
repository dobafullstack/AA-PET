import CategoryModel from "../models/CategoryModel";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    getAllCategories: async (): Promise<ResponseType<CategoryModel[]>> => axiosClient.get('/cate')
}