import {RootState} from './../redux/store';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const partnersApi = createApi({
  reducerPath: 'partners',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://playground.alfonsino.delivery/api/',
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.token;

      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  tagTypes: ['Partners'],

  endpoints: builder => ({
    partners: builder.query<GetPartnersResponse, Pagination>({
      query: ({page, partnersPerPage}) => {
        return `partners?skip=${
          (page - 1) * partnersPerPage
        }&per_page=${partnersPerPage}`;
      },
      providesTags: ['Partners'],
    }),
    addPartner: builder.mutation<AddPartnerResponse, AddPartnerRequest>({
      query: partner => ({
        url: 'partners',
        method: 'POST',
        body: partner,
      }),
      invalidatesTags: ['Partners'],
    }),
  }),
});

export const {usePartnersQuery, useAddPartnerMutation} = partnersApi;
