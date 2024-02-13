import { ApiBlogPostResponseDTO, BlogPostDTO } from '@/dtos/BlogPost.dto'
import { api } from './api.config'


export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    CreateBanner: builder.mutation<any, any>({
      query: (data) => ({
        url: '/banner/create',
        method: 'POST',
        body: data
      }),
      invalidatesTags: (result, error) => error ? [] : ['postblog'],
    }),


    getBannerIsTrue: builder.query<any, any>({
      query: () => `/banner/getBannerIsTrue`,
      transformResponse: (res: any) => res.data,
    }),

  })
})


export const {
  useCreateBannerMutation,
  useGetBannerIsTrueQuery,
} = extendedApi

