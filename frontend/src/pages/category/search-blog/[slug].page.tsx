import React, { useEffect } from 'react'
import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import { Page } from '@/types/Page.type'
import { Container, IconButton, InputAdornment, Stack, TextField, useMediaQuery } from '@mui/material'
import { stylePageSection, theme } from '@/utils'
import { MdOutlineSearch } from 'react-icons/md'
import { useLazyGetSimilarPostsByCategoryTitleQuery, useLazySearchByTitleAndContentQuery } from '@/redux/api/blogPost.api'
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
  // const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [getSimilarPostsByCategoryTitle, { data: categorySearchData, isFetching, isError, isLoading }] = useLazyGetSimilarPostsByCategoryTitleQuery()
  // const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

  const router = useRouter()

  let rowStyle: RowStyleType = { direction: 'row', imageHeight: 200, imageWidth: 200 }

  console.log(router)
  useEffect(() => {
    console.log(router.query)
    getSimilarPostsByCategoryTitle({ categoryTitles: router.query.slug as any, page: 1, limit: 30 })
  }, [router.query])


  const onSubmit = (data: FormData) => {
    router.push(`/search?q=${data.search}`)
  }


  return (
    <Stack my={stylePageSection}>
      <Container>


        <Stack spacing={4}>
          {categorySearchData && categorySearchData.map((item: any, index: number) => (
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
        {!categorySearchData?.length && <AlertBox variant='info'>Not Found</AlertBox>}

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