import Head from 'next/head'
import { LayoutProps } from './Layout.type'
import React from 'react'
import Header from '@/components/header/Header.component'
import { Box, Container } from '@mui/material'
import Footer from '@/components/footer/footer.component'
import useNProgress from '@/hooks/useNProgress.hook'
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary.component'
import WebsiteLoader from '@/components/websiteLoader/WebsiteLoader.component'
import { useAuthentication } from './Layout.hook'



export default function Layout(props: LayoutProps) {
  const { children, title, header, footer } = props
  useNProgress()
  const { isLoading, isError, isRole } = useAuthentication(props)

  console.log('isloading ', isLoading, 'isError', isError, 'isRole', isRole)
  return (
    <>
      <Head>
        <title>{title ? `${title} | Blog` : 'Blog - App'}</title>
      </Head>

      {isLoading && <WebsiteLoader />}

      {/* Header */}
      {header !== false && <Header />}


      {/* Error boundary, if any component give an error, so it will show this component*/}
      <ErrorBoundary isError={isError}>

        {/* this is a children */}
        <Box className='animate__animated animate__fadeIn animate__faster' >
          {children}
        </Box>
      </ErrorBoundary>
      {footer !== false && <Footer />}

    </>
  )
}
