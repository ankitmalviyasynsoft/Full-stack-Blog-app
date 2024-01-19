import { api } from './api.config'


export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation<any, any>({
      query: (data) => ({
        url: '/files/uploads',
        method: 'POST',
        body: data,
        headers: { hideToast: 'true' },
      }),
      invalidatesTags: (result, error) => error ? [] : ['uploafFile'],
    }),

  })
})


export const {
  useUploadFileMutation,
} = extendedApi

