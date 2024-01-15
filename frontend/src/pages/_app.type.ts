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
  header?: boolean
  footer?: boolean
  sidebar?: boolean
  isProtectedPage: boolean,
  pageTypes: string,
  roles?: Roles[],
  title: string | null
}


export type PageAuthLayoutProps = {
  sideImage?: string
  heading?: string
  subTitle?: string
  isHeadingCenter?: boolean
}