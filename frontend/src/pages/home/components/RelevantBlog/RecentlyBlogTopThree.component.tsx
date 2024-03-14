import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import { Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AlertBox from '@/components/_ui/alerts/AlertBox.components'
import { useLazyGetRecentPostDataQuery } from '@/redux/api/blogPost.api'
import BlogCardSkeleton from '@/components/_ui/card/skeleton/BlogCardSkeleton.component'



type RowStyleType = {
  direction: 'row' | 'column',
  imageHeight: number,
  imageWidth: number
}


export default function RecentlyBlogTopThree() {
  let rowStyle: RowStyleType = { direction: 'row', imageHeight: 200, imageWidth: 200 }
  const [getRecentPostData, { data, isLoading, isFetching, isSuccess, isError }] = useLazyGetRecentPostDataQuery()
  console.log(data)

  useEffect(() => {
    getRecentPostData('')
  }, [])

  return (
    <Stack className='section-padding'>
      <Typography variant='h4' fontWeight={600} className='heading-padding-bottom'>Recently Blog</Typography>

      <Grid container spacing={4}>

        {
          isFetching && isLoading && <>
            <Grid item xs={12} sm={12} md={6}>
              <BlogCardSkeleton direction='column' />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Stack spacing={4}>
                <BlogCardSkeleton direction='row' />
                <BlogCardSkeleton direction='row' />
              </Stack>
            </Grid>

          </>
        }

        {
          !isLoading && !isFetching && !data?.length && <Grid item xs={12}>
            <AlertBox variant='info'>No Record Found</AlertBox>
          </Grid>
        }


        {isSuccess && data?.length &&
          <>
            <Grid item xs={12} md={6}>
              {data[0] && <BlogCard style={{ direction: 'column', imageHeight: 248 }} data={data[0]} />}
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                {data[1] && <BlogCard style={rowStyle} data={data[1]} />}
                {data[2] && <BlogCard style={rowStyle} data={data[2]} />}
              </Stack>
            </Grid>
          </>
        }

      </Grid>
    </Stack>
  )
}
