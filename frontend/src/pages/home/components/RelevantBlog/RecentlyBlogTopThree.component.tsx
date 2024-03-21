import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import { Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AlertBox from '@/components/_ui/alerts/AlertBox.components'
import { useLazyGetRecentPostDataQuery, useLazyGetViewsCountQuery } from '@/redux/api/blogPost.api'
import BlogCardSkeleton from '@/components/_ui/card/skeleton/BlogCardSkeleton.component'
import { BlogPostDTO } from '@/dtos/BlogPost.dto'



type RowStyleType = {
  direction: 'row' | 'column',
  imageHeight: number,
  imageWidth: number
}


export default function RecentlyBlogTopThree() {
  let rowStyle: RowStyleType = { direction: 'row', imageHeight: 200, imageWidth: 200 }
  const [getRecentPostData, { data, isLoading, isFetching, isSuccess, isError }] = useLazyGetRecentPostDataQuery()
  const [getViewsCount, { data: viewsCountData, isLoading: viewsCountIsLoading,
    isFetching: viewsCountIsFetching, isError: viewsCountIsError, isSuccess: viewsCountDataIsSuccess }] = useLazyGetViewsCountQuery()

  useEffect(() => {
    getRecentPostData('')
    getViewsCount('')
  }, [])


  return (
    <Stack className='section-padding'>
      <Grid container spacing={4}>

        {/* == Latest posts == */}
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <Typography variant='h2' className='heading-padding-bottom'>Latest posts</Typography>

          {/* == Data Fetching == */}
          <Grid container spacing={4}>
            {isSuccess && data?.length &&
              data.map((item: BlogPostDTO, index: number) =>
                <Grid key={index} item xs={12} sm={6} md={6}>
                  <BlogCard style={{ direction: 'column', imageHeight: 148 }} data={item} isCategory isContent />
                </Grid>
              )}

            {/* == Data Fetching == */}
            {isLoading && isFetching &&
              Array.from({ length: 6 }).map((_, index: number) =>
                <Grid key={index} item xs={12} sm={6} md={6}>
                  <BlogCardSkeleton direction='column' />
                </Grid>
              )}

            {isError && <Grid item xs={12}><AlertBox variant='info'>Something Went Wrong</AlertBox></Grid>}


            {/* == No Record Found == */}
            {
              !isLoading && !isFetching && !data?.length && <Grid item xs={12}>
                <AlertBox variant='info'>No Record Found</AlertBox>
              </Grid>
            }
          </Grid>
        </Grid>


        {/* == Most popular posts == */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Typography variant='h2' className='heading-padding-bottom'>Most popular posts</Typography>
          <Stack gap={3} >
            {viewsCountDataIsSuccess && viewsCountData?.length &&
              viewsCountData.map((item: BlogPostDTO, index: number) =>
                <BlogCard key={index} style={{ direction: 'row', imageHeight: 100 }} data={item} />
              )}

            {viewsCountIsLoading && viewsCountIsFetching && <Stack gap={3}>
              <BlogCardSkeleton direction='row' />
              <BlogCardSkeleton direction='row' />
              <BlogCardSkeleton direction='row' />
            </Stack>
            }

            {viewsCountIsError && <Grid item xs={12}>
              <AlertBox variant='info'>Something Went Wrong</AlertBox>
            </Grid>
            }


            {/* == No Record Found == */}
            {
              !viewsCountIsLoading && !viewsCountIsFetching && !viewsCountData?.length && <Grid item xs={12}>
                <AlertBox variant='info'>No Record Found</AlertBox>
              </Grid>
            }
          </Stack>

        </Grid>





      </Grid>
    </Stack>
  )
}
