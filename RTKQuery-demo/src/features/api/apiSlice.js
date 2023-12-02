import { createSlice, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createSlice({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  tagTypes: ['Todos'],
  endPoints: (builder) => ({}),
});
