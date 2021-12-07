import { createApi, fetchBaseQuery,  } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants';
import {ResponseType} from '../../api/axiosClient'
import UserModel from '../../models/UserModel'

const headers = {
    type: 'aa-pet',
    authorization: `Bearer ${localStorage.getItem('access_token') as string}`,
};

const createRequest = (url: string) => ({ url, headers });

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMyAccount: builder.query<ResponseType<UserModel>, null>({
            query: () => createRequest('/auth/token'),
        }),
    }),
});

export default authApi;

export const {useGetMyAccountQuery} = authApi
