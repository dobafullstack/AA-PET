import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseType } from '../../api/axiosClient';
import CategoryModel from '../../models/CategoryModel';
import { baseUrl } from '../../constants';

const headers = {
    type: 'aa-pet'
}

const createRequest = (url: string) => ({ url, headers });

const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<ResponseType<CategoryModel[]>, null>({
      query: () => createRequest('/cate'),
    }),
  }),
});

export default categoryApi;

export const { useGetAllCategoriesQuery } = categoryApi;
