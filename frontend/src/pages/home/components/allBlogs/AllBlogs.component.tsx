import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import InfiniteLoader from '@/components/_ui/infiniteLoader/InfiniteLoader.component';
import { useReduxDispatch } from '@/hooks/redux.hook';
import { useGetAllBlogsDataQuery } from '@/redux/api/blogPost.api';
import { fetchData } from '@/redux/slices/blogPost.slice';
import { Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AllBlogProps } from './AllBlogs.config';



export default function AllBlogs(props: AllBlogProps) {
  const { initialData } = props
  const [page, setPage] = useState<number>(2);
  const [postsData, setPostsData] = useState<any>(initialData.posts);
  const dispatch = useReduxDispatch();

  // Fetch initial data using RTK Query on the client
  const { data, isLoading, isError, isSuccess, isFetching, isUninitialized } = useLazyGetAllBlogsDataQuery(page);

  const onLoadMore = async () => {
    const nextPage = page + 1;
    // const newData = await fetchData(nextPage);
    // setPostsData([...data.post]);
    setPage(nextPage);
  };
  console.log("hello", postsData,)


  return (
    <Stack className='section-padding-bottom' >
      <Typography variant='h4' className='heading-padding-bottom' fontWeight={600}>All Blogs</Typography>
      <Grid container spacing={4}>


        {postsData && postsData.map((item: any, index: number) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <BlogCard style={{ direction: 'column', imageHeight: 248 }} />
          </Grid>
        ))}

        {/* Infinite Loader */}
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error loading data</div>}
        {/* {isSuccess && <InfiniteLoader onLoadMore={onLoadMore} />} */}

      </Grid>
    </Stack>
  )
}

