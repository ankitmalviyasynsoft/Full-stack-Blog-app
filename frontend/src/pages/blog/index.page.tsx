import React from 'react'
import { Page } from '@/types/Page.type'



const Blog: Page = () => {
  return (
    <div>Blog</div>
  )
}



Blog.layoutProps = {
  title: 'Blog',
  pageTypes: 'public',
  isProtectedPage: false
}


export default Blog