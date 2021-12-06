import LoginInput from "../types/LoginInput";
import RegisterInput from "../types/RegisterInput";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    login: async ({username, password}: LoginInput): Promise<ResponseType<{token: string}>> => {
        return await axiosClient.post('/auth/login', {
            username,
            password
        });
    },
    register: async (registerInput: RegisterInput): Promise<ResponseType<string>> => {
        return await axiosClient.post('/auth/register', {
            ...registerInput
        })
    }
}