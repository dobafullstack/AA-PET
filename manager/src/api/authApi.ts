import User from "../models/User";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    login: async (
        username: string,
        password: string
    ): Promise<ResponseType<{ token: string }>> =>
        await axiosClient.post("/auth/login", { username, password }),
    getUser: async (token: string): Promise<ResponseType<User>> =>
        await axiosClient.get("/auth/token", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }),
    getAllUsers: async (token: string): Promise<ResponseType<User[]>> =>
        await axiosClient.get("/auth/users", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }),
    createStaff: async (user: any): Promise<ResponseType<string>> =>
        await axiosClient.post("/auth/register", {
            ...user,
        }),
    updateUser: async (
        body: any,
        userId: string
    ): Promise<ResponseType<string>> =>
        await axiosClient.put(`/auth/${userId}`, {
            ...body,
        }),
    changePassword: async (
        newPassword: string,
        oldPassword: string
    ): Promise<ResponseType<string>> =>
        await axiosClient.put("/auth/update/change-password", {
            newPassword,
            oldPassword,
        }),
};
