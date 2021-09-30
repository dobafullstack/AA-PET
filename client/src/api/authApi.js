import axiosClient from './axiosClient';
import { toast } from 'react-toastify';

export const GetUser = async (username, password) => {
    let access_token = '';

    try {
        const data = await axiosClient.post('/auth/login', {
            username,
            password,
        });

        console.log(data);

        if (data.error !== null) {
            toast.error(data.error.message);
        } else {
            access_token = data.result.accessToken;
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
