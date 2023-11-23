import Head from 'next/head'
import { LayoutProps } from './Layout.type'
import React from 'react'
import Header from '@/components/header/Header.component'
import { Box } from '@mui/material'



export default function Layout({ children, title, header }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Blog` : 'Blog - App'}</title>
      </Head>
      {header !== false && <Header />}
      <Box className='animate__animated animate__fadeIn animate__faster' >
        {children}
      </Box>
    </>
  )
}
