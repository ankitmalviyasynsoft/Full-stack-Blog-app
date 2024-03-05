import React from 'react'
import BlogForm from '../components/blogForm/BlogForm.component'
import { Page } from '@/types/Page.type'
import { Container } from '@mui/material'
import { useGetBlogDataByIdQuery } from '@/redux/api/blogPost.api'



const BlogCreate: Page = () => {

  // const [getBlogDataById, { isFeacting }] = useGetBlogDataByIdQuery()

  return (
    <Container className='section-padding'>
      <BlogForm mode='edit' />
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