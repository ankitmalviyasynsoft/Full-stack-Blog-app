import React, { useEffect } from 'react'
import { Page } from '@/types/Page.type'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import { useLazyGetBlogDataByIdQuery } from '@/redux/api/blogPost.api'
import BlogForm from '../components/blogForm/BlogForm.component'




const BlogCreate: Page = () => {
  const [getBlogDataById, { data }] = useLazyGetBlogDataByIdQuery()
  const router = useRouter()

  console.log(data)

  useEffect(() => {
    if (router.query.slug)
      getBlogDataById({ id: router.query.slug as string })
  }, [router.query.slug])


  return (
    <Container className='section-padding'>
      {data && <BlogForm mode='edit' data={data} />}
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