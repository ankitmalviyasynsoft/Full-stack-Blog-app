import { api } from './api.config'
import { ProfileDTO } from '@/dtos/Profile.dto'
import { updateProfile } from '../slices/user.slice'
import { setCookie } from '@/utils'



export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation<any, { email: String, password: String }>({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: data
      }),
      transformResponse: (res: any) => {
        saveUser(res.token)
      },
    }),

    authRegister: builder.mutation<any, IRegister>({
      query: (data) => ({
        url: '/users/signup',
        method: 'POST',
        body: data
      }),
      transformResponse: (res: any) => {
        saveUser(res.token)
      },
    }),

    updateUser: builder.mutation<any, any>({
      query: (data) => ({
        url: '/users/updateUser',
        method: 'PUT',
        body: data
      }),
      transformResponse: (res: any) => res.data,
      invalidatesTags: ['profile'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled.then(({ data }) => dispatch(updateProfile(data)))
      }
    }),

    getuserByToken: builder.query<ProfileDTO, string>({
      query: (id) => `/users/getuserByToken`,
      transformResponse: (res: any) => res.data,
      providesTags: ['profile'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled.then(({ data }) => dispatch(updateProfile(data)))
      }
    }),

  })
})


const saveUser = (token: string) => {
  if (!!token) {
    setCookie('token', token, 30)
    window.location.href = '/'
  }
}



export const {
  useAuthLoginMutation,
  useAuthRegisterMutation,
  useUpdateUserMutation,
  useGetuserByTokenQuery,
} = extendedApi


export interface IRegister {
  email: string
  password: string
  role: string
  username: string
}