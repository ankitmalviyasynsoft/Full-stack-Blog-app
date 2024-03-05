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

    getRecentPostData: builder.query<any, any>({
      query: (data) => `/post/getRecentPost`,
      transformResponse: (res: any) => res.recentPosts,
    }),

    searchByTitleAndContent: builder.query<any, { query: string, page: number, perPage: number }>({
      query: (data) => `/post/searchByTitleAndContent?query=${data.query}&page=${data.page}&perPage=${data.perPage}`,
      transformResponse: (res: any) => res,
    }),

    getBlogDataById: builder.query<ApiBlogPostResponseDTO, { id?: string }>({
      query: (data) => `/post/getPostById/${data.id}`,
      transformResponse: (res: any) => res,
    }),

    getSimilarPostsByCategoryTitle: builder.query<any, { categoryTitles?: String[], page: number, limit: number }>({
      query: (data) => `/post/getSimilarPostsByCategoryTitle?categoryTitles=${data.categoryTitles}&page=${data.page}&limit=${data.limit}`,
      transformResponse: (res: any) => res,
    }),

  })
})


export const {
  useCreateBlogPostMutation,
  useLazyGetAllBlogsDataQuery,
  useLazyGetRecentPostDataQuery,
  useLazySearchByTitleAndContentQuery,
  useLazyGetSimilarPostsByCategoryTitleQuery,
  useGetBlogDataByIdQuery,
} = extendedApi

