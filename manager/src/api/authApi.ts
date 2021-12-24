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
                'authorization': `Bearer ${token}` 
            }
        }),
};
