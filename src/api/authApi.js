import axiosClient from './axiosClient';
import { toast } from 'react-toastify';

export const GetUser = async (username, password) => {
    let access_token = '';

    try {
        const { result } = await axiosClient.post('/auth/login', {
            username,
            password,
        });

        if (!result.accessToken) {
            toast.error(result);
        } else {
            access_token = result.accessToken;
        }
    } catch (error) {
        console.log(error.message);
    }

    return access_token;
};

export const RegisterApi = async (username, name, password, phone, email) => {
    let message = null;

    try {
        const { result } = await axiosClient.post('/auth/register', {
            username,
            name,
            password,
            phone,
            email
        });

        message = result;
    } catch (error) {
        console.log(error.message);
    }

    return message;
};
