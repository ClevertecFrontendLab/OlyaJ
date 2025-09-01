// query/create-api.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './base';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
