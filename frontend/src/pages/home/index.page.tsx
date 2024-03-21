import { useEffect } from 'react'
import { stylePageSection } from '@/utils'
import { CategoryDTO } from '@/dtos/Category.dto'
import { Container, Stack, Typography } from '@mui/material'
import { ApiBlogPostResponseDTO } from '@/dtos/BlogPost.dto'
import { useLazyGetAllCategoriesQuery } from '@/redux/api/category.api'
import config from '@/config/config.json'
import AllBlogs from './components/allBlogs/AllBlogs.component'
import AlertBox from '@/components/_ui/alerts/AlertBox.components'
import HeroSection from '@/components/_ui/heroSection/HeroSection.component'
import RecentlyBlogTopThree from './components/RelevantBlog/RecentlyBlogTopThree.component'
import Link from 'next/link'


interface IHomeProps {
  allBlogPostResult: ApiBlogPostResponseDTO
}


export default function Page(props: IHomeProps) {
  const { allBlogPostResult } = props
  const [getAllCategories, { data, isFetching, isError }] = useLazyGetAllCategoriesQuery()

  useEffect(() => {
    getAllCategories({ page: 1, perPage: 20 })
  }, [])



  return (
    <>
      <Container>
        <Stack my={stylePageSection}>
          <HeroSection />
          <RecentlyBlogTopThree />
        </Stack>
      </Container>


      {/* == Category == */}
      <Stack p={4} bgcolor='secondary.dark'>
        <Container>
          <Stack gap={3}>
            <Typography variant='h4' color='white.main' textAlign='center' >All Top Categories</Typography>
            <Stack direction='row' gap={3} flexWrap='wrap' justifyContent='center' alignItems='center'>
              {data?.data && data?.data.map((item: CategoryDTO, index: number) => (
                <Stack
                  key={index}
                  component={Link}
                  href={`/category/search-blog/${item.title}`}
                  sx={{
                    p: 1,
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                    bgcolor: 'transparent',
                    color: 'white.main',
                    transition: 'background-color 0.5s ease',
                    boxShadow: '0px 0px 1px 1px rgba(243, 243, 243, 0.5)',
                    '&:hover': {
                      bgcolor: 'white.main',
                      color: 'text.primary',
                      boxShadow: '0px 0px 10px 0px rgba(32, 32, 32, 0.5)',
                    },
                  }}>

                  <Typography>{item.title}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Stack >


      {/* == All Blogs == */}
      <Container>
        <Stack my={stylePageSection}>
          {allBlogPostResult !== null ? <AllBlogs initialData={allBlogPostResult} /> : <AlertBox variant='error'>Something went wrong</AlertBox>}
        </Stack>
      </Container >
    </>
  )
}



export const getServerSideProps = async () => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/post/getAllPost?page=${1}&perPage=${3}`)

    if (!response.ok) {
      console.error(`Error: API request failed with status ${response.status}`)
      return { props: { allBlogPostResult: null } }
    }

    const allBlogPostResult = await response.json()
    return { props: { allBlogPostResult } }

  } catch (error) {
    console.error('Error:', error);
    return { props: { allBlogPostResult: null } }
  }
};


Page.layoutProps = {
  title: 'Home',
  pageTypes: 'public',
  isProtectedPage: false,
  footer: false
}