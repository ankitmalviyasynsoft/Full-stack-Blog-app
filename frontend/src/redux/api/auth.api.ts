import { api } from './api.config'
import { ProfileDTO } from '@/dtos/Profile.dto'
import { Roles } from '@/types/Roles.type'



export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation<ProfileDTO, { email: String, password: String }>({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: data
      }),
      invalidatesTags: (result, error) => error ? [] : ['profile'],
    }),

    authRegister: builder.mutation<any, IRegister>({
      query: (data) => ({
        url: '/users/signup',
        method: 'POST',
        body: data
      })
    }),

  })
})


export const {
  useAuthLoginMutation,
  useAuthRegisterMutation,
} = extendedApi


export interface IRegister {
  email: string
  password: string
  role: string
  username: string
}