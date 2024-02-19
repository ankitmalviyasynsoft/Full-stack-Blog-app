import { Roles } from '@/types/Roles.type'
import { NextPage } from 'next'
import type { AppProps as AppPropsType } from 'next/app'


export type AppProps = AppPropsType & {
  Component: NextPageWithLayoutProps
}


type NextPageWithLayoutProps<P = {}, IP = P> = NextPage<P, IP> & {
  layoutProps: PageLayoutProps
}


export type PageLayoutProps = {
  title: string | null
  header?: boolean
  footer?: boolean
  sidebar?: boolean
  roles?: Roles[],
  pageTypes: string,
  isAuthenticated?: boolean,
  isProtectedPage?: boolean,
}


export type PageAuthLayoutProps = {
  sideImage?: string
  heading?: string
  subTitle?: string
  isHeadingCenter?: boolean
}