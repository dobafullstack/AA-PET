import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3500',
    headers: {
        'Content-Type': 'application/json',
        'type': 'aa-pet'
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    //handle token here...

    return config;
});

axiosClient.interceptors.response.use((res) => {
    if (res && res.data){
        return res.data;
    }

    return res.data;
}, err => {
    throw err;
});

export default axiosClient;

export interface ResponseType{
    result: any;
    error?: any;
    status: string;
}