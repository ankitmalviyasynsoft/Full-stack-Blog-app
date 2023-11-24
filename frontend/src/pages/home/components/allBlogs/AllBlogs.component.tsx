import BlogCard from '@/components/_ui/card/Card.component'
import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'



export default function AllBlogs() {

  return (
    <Stack className='section-padding-bottom'>
      <Typography variant='h4' className='heading-padding-bottom' fontWeight={600}>All Blogs</Typography>
      <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={4}>
          <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
        </Grid>
      </Grid>
    </Stack>
  )
}
