import Category from "../models/Category";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    getAllCategories: async (): Promise<ResponseType<Category[]>> =>
        await axiosClient.get("/cate"),
    getCategoryDetail: async (
        categoryId: string
    ): Promise<ResponseType<Category>> =>
        await axiosClient.get(`/cate/${categoryId}`),
    createCategory: async (body: any): Promise<ResponseType<string>> =>
        await axiosClient.post("/cate", { ...body }),
    addChild: async (
        categoryId: string,
        body: any
    ): Promise<ResponseType<string>> =>
        await axiosClient.post(`/cate/child/${categoryId}?nodeId=${categoryId}`, { ...body }),
    updateCategory: async (
        categoryId: string,
        body: any
    ): Promise<ResponseType<string>> =>
        await axiosClient.put(`/cate/${categoryId}`, { ...body }),
    deleteCategory: async (categoryId: string): Promise<ResponseType<string>> =>
        await axiosClient.delete(`/cate/${categoryId}`),
};
