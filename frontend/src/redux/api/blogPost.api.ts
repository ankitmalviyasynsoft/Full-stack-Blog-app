import { ApiBlogPostResponseDTO, BlogPostDTO } from '@/dtos/BlogPost.dto'
import { api } from './api.config'



export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBlogPost: builder.mutation<BlogPostDTO, any>({
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
      providesTags: ['postblog']
    }),

    getRecentPostData: builder.query<any, any>({
      query: (data) => `/post/getRecentPost`,
      transformResponse: (res: any) => res.recentPosts,
    }),

    searchByTitleAndContent: builder.query<any, { query: string, page: number, perPage: number }>({
      query: (data) => `/post/searchByTitleAndContent?query=${data.query}&page=${data.page}&perPage=${data.perPage}`,
      transformResponse: (res: any) => res,
    }),

    getBlogDataById: builder.query<any, { id: string }>({
      query: (data) => `/post/getPostById/${data.id}`,
      transformResponse: (res: any) => res.data,
    }),

    getSimilarPostsByCategoryTitle: builder.query<any, { categoryTitles?: String[], page: number, limit: number }>({
      query: (data) => `/post/getSimilarPostsByCategoryTitle?categoryTitles=${data.categoryTitles}&page=${data.page}&limit=${data.limit}`,
      transformResponse: (res: any) => res,
    }),

    getViewsCount: builder.query<any, any>({
      query: () => `/post/getViewCount`,
      transformResponse: (res: any) => res,
    }),

    deletePostById: builder.mutation<any, { id: number }>({
      query: (data) => ({
        url: `/post/deletePostById/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['postblog']
    }),

    updateBlogPost: builder.mutation<any, { id: string, title: string, content: string, profileURL: string, categories: any }>({
      query: (data) => ({
        url: `/post/update/${data.id}`,
        method: 'PUT',
        body: data

      }),
      invalidatesTags: ['postblog']
    }),

    updateBlogPostViewCount: builder.mutation<any, { id: string }>({
      query: (data) => ({
        url: `/post/views/${data.id}`,
        method: 'POST',
        headers: {
          hideToast: 'true'
        }
      }),
    }),

  })
})


export const {
  useCreateBlogPostMutation,
  useLazyGetAllBlogsDataQuery,
  useLazyGetRecentPostDataQuery,
  useLazySearchByTitleAndContentQuery,
  useLazyGetSimilarPostsByCategoryTitleQuery,
  useLazyGetBlogDataByIdQuery,
  useDeletePostByIdMutation,
  useUpdateBlogPostMutation,
  useUpdateBlogPostViewCountMutation,
  useLazyGetViewsCountQuery,
} = extendedApi

