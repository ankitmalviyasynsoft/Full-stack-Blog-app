import React from 'react'
import { Page } from '@/types/Page.type'
import BlogCard from '@/components/_ui/card/Card.component'
import { Container, Stack } from '@mui/material'
import { stylePageSection } from '@/utils'



const Search: Page = () => {


  return (
    <Stack my={stylePageSection}>
      <Container>
        <Stack spacing={4}>
          <BlogCard style={{ direction: 'row', imageHeight: 200}} />
          <BlogCard style={{ direction: 'row', imageHeight: 200}} />
        </Stack>
      </Container>
    </Stack >
  )
}

Search.layoutProps = {
  isProtectedPage: false,
  title: 'Search'
}


export default Search