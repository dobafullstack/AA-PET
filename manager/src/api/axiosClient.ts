import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: "http://localhost:3500",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
        type: "aa-pet",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    //handle token here...

    return config;
});

axiosClient.interceptors.response.use(
    (res) => {
        if (res && res.data) {
            return res.data;
        }

        return res.data;
    },
    (err) => {
        throw err;
    }
);

export default axiosClient;

export type ResponseType<T> = {
    status: string;
    code: number;
    result: T;
    error: {
        message: string;
    } | null;
    page_index: number;
    page_size: number;
    total: number;
    page_count: number;
};
