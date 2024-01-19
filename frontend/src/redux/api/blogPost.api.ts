import { BlogPostDTO } from '@/dtos/BlogPost.dto'
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

    getAllBlogsData: builder.query<any, number>({
      query: (page) => `/post/getAllPost?page=${page}&perPage=${3}`,
    }),

  })
})


export const {
  useCreateBlogPostMutation,
  useGetAllBlogsDataQuery,
} = extendedApi

