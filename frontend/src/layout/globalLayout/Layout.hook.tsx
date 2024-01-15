import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLazyGetUserByTokenQuery } from '@/redux/api/auth.api'
import { LayoutProps } from './Layout.type'
import { getCookie } from '@/utils'



export const useAuthentication = (props: LayoutProps) => {
  const { pageTypes } = props
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [getUserByToken, { isError }] = useLazyGetUserByTokenQuery()

  let token: string | null = null
  if (typeof window !== 'undefined') token = getCookie('token') || null


  {/* === Check User === */ }
  useEffect(() => {
    if (token) {
      getUserByToken(token).unwrap().finally(() => {
        setLoading(false)
      })
    }
  }, [])


  {/* === Redirection === */ }
  useEffect(() => {
    if (!token && pageTypes === 'protected') {
      router.replace('/auth/login')
    }
    else if (token && pageTypes === 'auth') {
      router.push('/')
    }
    else {
      setLoading(false)
    }
  }, [router.pathname])


  return {
    isLoading: loading,
    isError,
  }
}