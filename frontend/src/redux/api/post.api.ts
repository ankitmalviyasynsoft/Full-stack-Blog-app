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

  })
})


export const {
  useCreateBlogPostMutation,
} = extendedApi

