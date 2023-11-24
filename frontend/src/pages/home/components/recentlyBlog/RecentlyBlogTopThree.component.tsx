import BlogCard from '@/components/_ui/card/Card.component'
import { Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function RecentlyBlogTopThree() {
  return (
    <Stack className='section-padding'>
      <Typography variant='h4' fontWeight={600} className='heading-padding-bottom'>Recently Blog</Typography>

      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <BlogCard/>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          asdasda
        </Grid>
      </Grid>
    </Stack>
  )
}
