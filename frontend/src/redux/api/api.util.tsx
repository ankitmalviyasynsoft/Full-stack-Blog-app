import { removeCookie } from '@/utils'
import { isRejectedWithValue, isFulfilled } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'



export const rtkQueryLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const status = action.meta.baseQueryMeta.response?.status
    const errorMessage = getErrorMessage(status, action.payload)
    if (status === 401) {
      window.location.reload()
      removeCookie('token')
    }
    else {
      toast.error(<div dangerouslySetInnerHTML={{ __html: errorMessage || 'Sorry! Something went wrong' }} />)
    }
    console.error(`😲 OMG Api Failed - Details: `, action.meta.baseQueryMeta.response)
  }

  if (isFulfilled(action)) {
    const method = action.meta.baseQueryMeta.request.method
    console.log(action.meta.baseQueryMeta.request.headers.get('hideToast') === 'true')
    const hideToast = action.meta.baseQueryMeta.request.headers.get('hideToast') === 'true'
    if (!hideToast && (method === 'POST' || method === 'PUT') && action.payload?.message) {
      toast.success(<div dangerouslySetInnerHTML={{ __html: action.payload.message }} />)
    }
  }

  return next(action)
}


const getErrorMessage = (status: number, payload: any) => {
  switch (status) {
    case 0:
      return 'Server unreachable. Check your internet connection.'
    case 429:
      return 'Too many requests: You have exceeded the rate limit.'
    case 503:
      return 'Service temporarily unavailable: Please try again later.'
    default:
      if (status >= 400 && status <= 499) {
        return payload?.data?.message || payload?.data?.msg
      } else if (status >= 500) {
        return payload?.data?.message || payload?.data?.msg || 'Sorry! something went wrong with server'
      }
      return 'Sorry! Something went wrong'
  }
}
