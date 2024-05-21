import { USERS_URL } from '../constants.js';
import { apiSlice } from './apiSlice.js';

export const usersAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL / auth,
        method: post,
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersAPISlice;
