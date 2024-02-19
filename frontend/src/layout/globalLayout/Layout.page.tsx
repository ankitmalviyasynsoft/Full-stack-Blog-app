import { Box } from '@mui/material'
import { LayoutProps } from './Layout.type'
import { useAuthentication } from './Layout.hook'
import Head from 'next/head'
import useNProgress from '@/hooks/useNProgress.hook'
import Header from '@/components/header/Header.component'
import Footer from '@/components/footer/footer.component'
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary.component'
import WebsiteLoader from '@/components/websiteLoader/WebsiteLoader.component'



export default function Layout(props: LayoutProps) {
  const { children, title, header, footer } = props
  useNProgress()
  const { isLoading } = useAuthentication(props)

  if (isLoading) return <WebsiteLoader />


  return (
    <>
      <Head>
        <title>{title ? `${title} | Blog` : 'Blog - App'}</title>
      </Head>

      {/* Header */}
      {header !== false && <Header />}

      {/* Error boundary, if any component give an error, so it will show this component*/}
      <ErrorBoundary>
        <Box className='animate__animated animate__fadeIn animate__faster' >
          {children}
        </Box>
      </ErrorBoundary>
      {footer !== false && <Footer />}

    </>
  )
}
