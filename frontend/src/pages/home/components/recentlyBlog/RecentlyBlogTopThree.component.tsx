import BlogCard from '@/components/_ui/card/Card.component'
import { Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function RecentlyBlogTopThree() {
  return (
    <Stack className='section-padding'>
      <Typography variant='h4' fontWeight={600} className='heading-padding-bottom'>Recently Blog</Typography>

      <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={6}>
          <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Stack spacing={4}>
          <BlogCard style={{ direction: 'row', imageHeight: 200 }} />
          <BlogCard style={{ direction: 'row', imageHeight: 200 }} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
