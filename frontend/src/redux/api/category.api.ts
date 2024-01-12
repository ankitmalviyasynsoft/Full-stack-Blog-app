import { api } from './api.config'


export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // authLogin: builder.mutation<ProfileDTO, { email: String, password: String }>({
    //   query: (data) => ({
    //     url: '/users/login',
    //     method: 'POST',
    //     body: data
    //   }),
    //   invalidatesTags: (result, error) => error ? [] : ['profile'],
    // }),

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
  // useGetuserByTokenQuery,
} = extendedApi

