import React from 'react'
import BlogForm from '../components/blogForm/BlogForm.component'
import { Page } from '@/types/Page.type'
import { Container } from '@mui/material'



const BlogCreate: Page = () => {


  return (
    <Container className='section-padding'>
      <BlogForm mode='add' />
    </Container>
  )
}


BlogCreate.layoutProps = {
  title: 'Create',
  pageTypes: 'authenticate',
  roles: ['admin', 'user'],
  isProtectedPage: true
}


export default BlogCreate