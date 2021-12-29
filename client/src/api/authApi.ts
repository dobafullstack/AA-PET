import LoginInput from '../types/LoginInput';
import RegisterInput from '../types/RegisterInput';
import axiosClient, { ResponseType } from './axiosClient';

export default {
    login: async ({ username, password }: LoginInput): Promise<ResponseType<{ token: string }>> => {
        return await axiosClient.post('/auth/login', {
            username,
            password,
        });
    },
    register: async (registerInput: RegisterInput): Promise<ResponseType<string>> => {
        return await axiosClient.post('/auth/register', {
            ...registerInput,
        });
    },
    updateUser: async (body: any, userId: string): Promise<ResponseType<string>> =>
        await axiosClient.put(`/auth/${userId}`, {
            ...body,
        }),
    changePassword: async (
        newPassword: string,
        oldPassword: string
    ): Promise<ResponseType<string>> =>
        await axiosClient.put('/auth/update/change-password', {
            newPassword,
            oldPassword,
        }),
};
