import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ResponseType } from '../../api/axiosClient';
import { baseUrl } from '../../constants';
import OrderModel from '../../models/Order';

export const orderReducer = createApi({
    reducerPath: 'orderReducer',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getMyOrder: builder.query<ResponseType<OrderModel[]>, null>({
            query: () => ({
                url: '/order/my-order',
                headers: {
                    'type': 'aa-pet',
                    'authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            })
        })
    })
})

export default orderReducer;

export const {useGetMyOrderQuery} = orderReducer;