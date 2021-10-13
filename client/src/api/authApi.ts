import { toast } from 'react-toastify';
import axiosClient, { ResponseType } from './axiosClient';

export const GetUser = async (): Promise<ResponseType> => {
    return await axiosClient.get('/auth/token', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token') as string}`,
        },
    });
};

export const LoginApi = async (username: string, password: string): Promise<ResponseType> => {
    return await axiosClient.post('/auth/login', {
        username,
        password,
    });
};

export const RegisterApi = async (
    username: string,
    name: string,
    password: string,
    phone: string,
    email: string
): Promise<ResponseType> => {
    return await axiosClient.post('/auth/register', {
        username,
        name,
        password,
        phone,
        email,
    });
};
