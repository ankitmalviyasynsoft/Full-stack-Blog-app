import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import InfiniteLoader from '@/components/_ui/infiniteLoader/InfiniteLoader.component';
import { useReduxDispatch } from '@/hooks/redux.hook';
import { useLazyGetAllBlogsDataQuery } from '@/redux/api/blogPost.api';
import { Grid, Skeleton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AllBlogProps } from './AllBlogs.type';
import AlertBox from '@/components/_ui/alerts/AlertBox.components';
import Loader from '@/components/_ui/Loader/Loader.components';
import BlogCardSkeleton from '@/components/_ui/card/skeleton/BlogCardSkeleton.component';



export default function AllBlogs(props: AllBlogProps) {
  const { initialData } = props

  const [page, setPage] = useState<number>(1);
  const [hasLoad, setHasLoad] = useState<boolean>(true);
  const [postsData, setPostsData] = useState<any>(initialData.posts);

  // Fetch initial data using RTK Query on the client
  const [getAllBlogsData, { isFetching, isError, isLoading, isSuccess }] = useLazyGetAllBlogsDataQuery();


  const onLoadMore = async () => {
    if (!hasLoad) return
    const nextPage = page + 1;
    let paylod = { page: nextPage, perPage: 6 }
    const newData = await getAllBlogsData(paylod);

    if (newData.data?.posts?.length) {
      setPostsData([...postsData, ...newData.data?.posts]);
      setPage(nextPage);
    }
    else {
      setHasLoad(false)
    }
  };


  return (
    <Stack className='section-padding-bottom' >
      <Typography variant='h4' className='heading-padding-bottom' fontWeight={600}>All Blogs</Typography>
      <Grid container spacing={4}>


        {postsData && postsData.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard style={{ direction: 'column', imageHeight: 248 }} data={item} />
          </Grid>
        ))}


        {/* Infinite Loader */}
        {!initialData.posts.length &&
          <Grid item xs={12}>
            <AlertBox variant='info'>No Record Found</AlertBox>
          </Grid>
        }


        {isLoading || isFetching &&
          Array.from({ length: 3 }).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <BlogCardSkeleton direction='column' />
            </Grid>
          ))
        }


        {
          isError &&
          <Grid item xs={12}>
            <AlertBox variant='error'>Error loading data</AlertBox>
          </Grid>
        }

        {
          hasLoad &&
          <Grid item xs={12}>
            <InfiniteLoader onLoadMore={onLoadMore} />
          </Grid>
        }

      </Grid>
    </Stack >
  )
}

