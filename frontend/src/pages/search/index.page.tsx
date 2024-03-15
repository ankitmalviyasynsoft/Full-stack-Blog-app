import React, { useEffect } from 'react'
import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import { Page } from '@/types/Page.type'
import { Container, IconButton, InputAdornment, Stack, TextField, useMediaQuery } from '@mui/material'
import { stylePageSection, theme } from '@/utils'
import { MdOutlineSearch } from 'react-icons/md'
import { useLazySearchByTitleAndContentQuery } from '@/redux/api/blogPost.api'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import Loader from '@/components/_ui/Loader/Loader.components'
import AlertBox from '@/components/_ui/alerts/AlertBox.components'
import BlogCardSkeleton from '@/components/_ui/card/skeleton/BlogCardSkeleton.component'


type RowStyleType = {
  direction: 'row' | 'column',
  imageHeight: number,
  imageWidth: number
}

interface FormData {
  search: string;
}

const Search: Page = () => {
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchByTitleAndContent, { data: searchData, isFetching, isError, isLoading }] = useLazySearchByTitleAndContentQuery()
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

  const router = useRouter()

  let rowStyle: RowStyleType = { direction: 'row', imageHeight: 200, imageWidth: 200 }

  useEffect(() => {
    searchByTitleAndContent({ query: router.query.q as string, page: 1, perPage: 10 })
  }, [router.query])


  const onSubmit = (data: FormData) => {
    router.push(`/search?q=${data.search}`)
  }


  return (
    <Stack my={stylePageSection}>
      <Container>
        {isMobileDevice &&
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack flex={{ xs: 1, md: 2 }} display='block' mb={3}>
              <Controller name="search" control={control}
                render={({ field }) => (
                  <TextField {...field} variant="outlined" placeholder="Search..."
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton type="submit">
                            <MdOutlineSearch />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Stack>
          </form>
        }

        <Stack spacing={4}>
          {searchData && searchData.map((item: any, index: number) => (
            <Stack key={index}>
              <BlogCard style={rowStyle} data={item} isCategory isContent />
            </Stack>
          ))}
        </Stack>


        {isLoading || isFetching &&
          <Stack gap={1}>
            <BlogCardSkeleton direction='row' />
            <BlogCardSkeleton direction='row' />
            <BlogCardSkeleton direction='row' />
          </Stack>
        }
        {isError && <AlertBox variant='error'>Error loading data</AlertBox>}
        {router.isReady && !searchData?.length && !isLoading && !isFetching && <AlertBox variant='info'>Not Found</AlertBox>}

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