import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from '@/utils'
import config from '@/config/config.json'



export const api = createApi({
  reducerPath: 'apis',
  tagTypes: ['profile', 'postblog', 'uploafFile', 'category'],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiBaseUrl,
    prepareHeaders: (headers, { }) => {
      if (headers.get('Authorization') === 'false') headers.delete('Authorization')
      else headers.set('Authorization', `Bearer ${getCookie('token')}`)
      return headers
    }
  }),
  endpoints: (builder) => ({}),
})