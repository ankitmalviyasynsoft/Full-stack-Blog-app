import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import { Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { RelevantBlogProps } from './RecentlyBlog.type'
import AlertBox from '@/components/_ui/alerts/AlertBox.components'



type RowStyleType = {
  direction: 'row' | 'column',
  imageHeight: number,
  imageWidth: number
}


export default function RecentlyBlogTopThree({ initialData }: RelevantBlogProps) {
  let rowStyle: RowStyleType = { direction: 'row', imageHeight: 200, imageWidth: 200 }

  return (
    <Stack className='section-padding'>
      <Typography variant='h4' fontWeight={600} className='heading-padding-bottom'>Recently Blog</Typography>

      <Grid container spacing={4}>
        {!initialData?.posts?.length ?
          <Grid item xs={12}>
            <AlertBox variant='info'>No Record Found</AlertBox>
          </Grid>
          :
          <>
            <Grid item xs={12} sm={12} md={6}>
              {initialData.posts[0] && <BlogCard style={{ direction: 'column', imageHeight: 248 }} data={initialData.posts[0]} />}
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Stack spacing={4}>
                {initialData?.posts[1] && <BlogCard style={rowStyle} data={initialData.posts[1]} />}
                {initialData?.posts[2] && <BlogCard style={rowStyle} data={initialData.posts[2]} />}
              </Stack>
            </Grid>
          </>
        }

      </Grid>
    </Stack>
  )
}
