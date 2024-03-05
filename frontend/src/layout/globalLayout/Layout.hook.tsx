import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLazyGetUserByTokenQuery } from '@/redux/api/auth.api'
import { LayoutProps } from './Layout.type'
import { getCookie } from '@/utils'
import { ProfileDTO } from '@/dtos/Profile.dto'
import { Roles } from '@/types/Roles.type'



export const useAuthentication = (props: LayoutProps) => {
  const { pageTypes, roles = [], isProtectedPage } = props
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<ProfileDTO>()
  const [getUserByToken, { isError, isLoading, isFetching }] = useLazyGetUserByTokenQuery()

  let token: string | null = null
  if (typeof window !== 'undefined') token = getCookie('token') || null


  {/* === Check User === */ }
  useEffect(() => {
    if (token) {
      getUserByToken(token).unwrap()
        .then((res) => {
          setUserData(res)
        })
    }
  }, [])


  {/* === Redirection === */ }
  useEffect(() => {
    if (!token && isProtectedPage) {
      router.replace('/auth/login')
    }
    else if (token && pageTypes === 'auth') {
      router.push('/')
    }
    else if (isProtectedPage) {
      if (!isLoading && userData?.role) {
        if (!userData?.role.filter(item => roles.includes(item)).length) {
          router.push('/')
        }
        else {
          setLoading(false)
        }
      }
    }
    else {
      setLoading(false)
    }
  }, [router.pathname, userData?.role])


  return {
    isLoading: isProtectedPage && loading,
    isError,
  }
}