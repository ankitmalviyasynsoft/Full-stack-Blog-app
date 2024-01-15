import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useReduxDispatch, useReduxSelector } from '@/hooks/redux.hook'
import { useLazyGetUserByTokenQuery } from '@/redux/api/auth.api'
import { LayoutProps } from './Layout.type'
import { handleWebsiteLoader } from '@/redux/slices/layout.slice'
import { getCookie } from '@/utils'



export const useAuthentication = (props: LayoutProps) => {
  const { isProtectedPage, roles } = props
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isRole, setIsRole] = useState(true)

  const dispatch = useReduxDispatch()
  const user = useReduxSelector(state => state.user)
  // const isVerifyOtpPage = router.pathname.includes('/auth/verify-account')
  const [getUserByToken, { isSuccess, isError, isLoading, isUninitialized }] = useLazyGetUserByTokenQuery()


  {/* === Check User === */ }
  useEffect(() => {
    console.log(getUserByToken(getCookie('token')))
    // if (!isUninitialized && !isLoading) {
    //   if (isError) setError(true)
    //   if (isSuccess && user.profile._id) {
    //     if (isProtectedPage && !user.profile.isVerified && !isVerifyOtpPage) {
    //       const returnTo = sessionStorage.getItem('returnTo')
    //       if (returnTo) sessionStorage.removeItem('returnTo')
    //       router.replace(`/auth/verify-account${returnTo ? `?returnTo=${returnTo}` : ''}`)
    //     }
    //     else if (roles && !user.roles.some(role => roles.includes(role))) setIsRole(false)
    //     else setIsRole(true)
    //   }
    // }
  }, [])


  // {/* === Handle Loader === */ }
  // useEffect(() => {
  //   const shouldRemoveLoader = (
  //     error ||
  //     (!isProtectedPage && !isLoading) ||
  //     (isProtectedPage && isSuccess && user.profile.isVerified) ||
  //     (isProtectedPage && isSuccess && !user.profile.isVerified && isVerifyOtpPage)
  //   ) && router.isReady

  //   setLoading(!shouldRemoveLoader)
  // }, [error, user, isSuccess, router.pathname, router.isReady])


  // useEffect(() => {
  //   if (!loading) dispatch(handleWebsiteLoader(loading))
  // }, [loading])


  // {/* === Redirection === */ }
  // useEffect(() => {
  //   const returnTo = sessionStorage.getItem('returnTo')
  //   if (router.query.auth && returnTo && !loading) {
  //     router.replace(returnTo)
  //     sessionStorage.removeItem('returnTo')
  //   }
  // }, [router.query.auth, loading])


  return {
    isLoading: !!isProtectedPage && loading,
    isError: error,
    isRole
  }
}