import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants';
import { ResponseType } from '../../api/axiosClient';
import UserModel from '../../models/UserModel';

const headers = {
    type: 'aa-pet',
    authorization: `Bearer ${localStorage.getItem('access_token')}`,
};

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMyAccount: builder.query<ResponseType<UserModel>, null>({
            query: (token) => ({
                url: `${baseUrl}/auth/token`,
                headers: {
                    type: 'aa-pet',
                    authorization: `Bearer ${token}`,
                },
            }),
            keepUnusedDataFor: 5
        }),
    }),
});

export default authApi;

export const { useGetMyAccountQuery } = authApi;
