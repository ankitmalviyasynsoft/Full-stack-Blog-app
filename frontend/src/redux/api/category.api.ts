
import { CategoryDTO } from '@/dtos/Category.dto'
import { api } from './api.config'



export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<{ data: CategoryDTO[], totalPages: number }, { page: number, perPage: number }>({
      query: (type) => `/category/getAllCategories?page=${type.page}&perPage=${type.perPage}`,
      transformResponse: (res: any) => res
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
      })
    }),

    getCategoryById: builder.query<CategoryDTO, string>({
      query: (id) => `/ category / getCategoryById / ${id}`,
      transformResponse: (res: any) => res.data,
      providesTags: ['category'],
    }),

  })
})


export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useLazyGetAllCategoriesQuery,
  useLazyGetCategoryByIdQuery,
} = extendedApi



export interface ICategory {
  title: string
  status: boolean
}