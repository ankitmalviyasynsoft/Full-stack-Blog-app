import { ApiBlogPostResponseDTO, BlogPostDTO } from '@/dtos/BlogPost.dto'
import { api } from './api.config'


export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBlogPost: builder.mutation<BlogPostDTO, BlogPostDTO>({
      query: (data) => ({
        url: '/post/create',
        method: 'POST',
        body: data
      }),
      invalidatesTags: (result, error) => error ? [] : ['postblog'],
    }),


    getAllBlogsData: builder.query<ApiBlogPostResponseDTO, { page: number, perPage: number }>({
      query: (data) => `/post/getAllPost?page=${data.page}&perPage=${data.perPage}`,
      transformResponse: (res: any) => res,
    }),

  })
})


export const {
  useCreateBlogPostMutation,
  useLazyGetAllBlogsDataQuery,
} = extendedApi

