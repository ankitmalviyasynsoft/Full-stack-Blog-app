
import { CategoryDTO } from '@/dtos/Category.dto'
import { api } from './api.config'
import { url } from 'inspector'



export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<{ data: CategoryDTO[], totalPages: number }, { page: number, perPage: number }>({
      query: (type) => `/category/getAllCategories?page=${type.page}&perPage=${type.perPage}`,
      transformResponse: (res: any) => res,
      providesTags: ['category'],
    }),

    createCategory: builder.mutation<any, ICategory>({
      query: (data) => ({
        url: '/category/create',
        method: 'POST',
        body: data
      })
    }),

    updateCategory: builder.mutation<any, any>({
      query: ({ id, ...data }) => ({
        url: `/ category / update / ${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['category'],
    }),

    getCategoryById: builder.query<CategoryDTO, string>({
      query: (id) => `/category/getCategoryById/${id}`,
      transformResponse: (res: any) => res.data,
      providesTags: ['category'],
    }),

    deleteCategory: builder.mutation<any, { id: string }>({
      query: (data) => (
        {
          url: `/category/delete/${data.id}`,
          method: 'DELETE'
        }),
      transformResponse: (res: any) => res.data,
      invalidatesTags: ['category'],
    }),

  })
})


export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useLazyGetAllCategoriesQuery,
  useLazyGetCategoryByIdQuery,
  useDeleteCategoryMutation
} = extendedApi



export interface ICategory {
  title: string
  status: boolean
}