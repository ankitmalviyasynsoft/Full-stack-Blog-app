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
      invalidatesTags: (result, error, id) => ['postblog'],
    }),


    getAllBlogsData: builder.query<ApiBlogPostResponseDTO, { page: number, perPage: number }>({
      query: (data) => `/post/getAllPost?page=${data.page}&perPage=${data.perPage}`,
      providesTags: (result, error, id) => ['postblog'],
      transformResponse: (res: any) => res,
    }),

    deleteBlogPost: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `post/deleteById/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => ['postblog'],
    }),
  })
})


export const {
  useCreateBlogPostMutation,
  useLazyGetAllBlogsDataQuery,
  useDeleteBlogPostMutation,
} = extendedApi

