import React from 'react'
import { Page } from '@/types/Page.type'
import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import { Container, Stack } from '@mui/material'
import { stylePageSection } from '@/utils'



const Search: Page = () => {

  const data123 = [
    {
      _id: "123123",
      categories: [{ _id: '12312', title: 'a2asd', status: true }]
    }
  ]

  return (
    <Stack my={stylePageSection}>
      <Container>
        <Stack spacing={4}>
          {/* <BlogCard data={data123} style={{ direction: 'row', imageHeight: 200 }} />
          <BlogCard data={data123} style={{ direction: 'row', imageHeight: 200 }} /> */}
        </Stack>
      </Container>
    </Stack >
  )
}

Search.layoutProps = {
  title: 'Search',
  pageTypes: 'public',
  isProtectedPage: false,
}


export default Search