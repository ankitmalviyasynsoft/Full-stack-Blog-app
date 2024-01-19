
import { CategoryDTO } from '@/dtos/Category.dto'
import { api } from './api.config'


export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoryDTO[], any>({
      query: (type) => `/category/getAllCategories`,
      transformResponse: (res: any) => res.data
    }),

    // authRegister: builder.mutation<any, IRegister>({
    //   query: (data) => ({
    //     url: '/users/signup',
    //     method: 'POST',
    //     body: data
    //   })
    // }),

    // getuserByToken: builder.query<ProfileDTO, string>({
    //   query: (id) => `/users/getuserByToken`,
    //   transformResponse: (res: any) => res.data,
    //   providesTags: ['profile'],
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     await queryFulfilled.then(({ data }) => dispatch(updateProfile(data)))
    //   }
    // }),

  })
})


export const {
  // useAuthLoginMutation,
  // useAuthRegisterMutation,
  useGetAllCategoriesQuery,
} = extendedApi

