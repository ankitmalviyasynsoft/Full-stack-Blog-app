import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({url:`posts`, method:'GET'})
    }),

    getPostByName: builder.query({
      query: (id) => ({url:`posts/${id}`, method:'GET'})
    }),

    deletePost: builder.mutation({
      query: (id) => ({url:`posts/${id}`, method:'DELETE'})
    }),

    createPost: builder.mutation({
      query: (id) => ({url:`posts/${id}`,  method: 'POST',})
    }),


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery, useGetPostByNameQuery, useDeletePostMutation, useCreatePostMutation } = postApi