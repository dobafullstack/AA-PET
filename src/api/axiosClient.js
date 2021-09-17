import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseUrl: 'http://localhost:3500',
    headers: {
        'Content-Type': 'application/json'
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

    return res;
}, err => {
    throw err;
});

export default axiosClient;