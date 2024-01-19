import { Container, Stack } from '@mui/material'
// import RecentlyBlogTopThree from './components/recentlyBlog/RecentlyBlogTopThree.component'
import HeroSection from '@/components/_ui/heroSection/HeroSection.component'
import AllBlogs from './components/allBlogs/AllBlogs.component'
import { stylePageSection } from '@/utils'
import { ApiResponseDTO } from '@/dtos/BlogPost.dto'


export default function page({ allBlogPostResult }: any) {
  console.log('hello ', allBlogPostResult)
  return (
    <Container>
      <Stack my={stylePageSection}>
        <HeroSection />
        {/* <RecentlyBlogTopThree /> */}
        <AllBlogs initialData={allBlogPostResult} />
      </Stack>
    </Container>
  )
}



export const getServerSideProps = (async () => {
  const response: any = await fetch(`http://localhost:5000/api/v1/post/getAllPost?page=${1}&perPage=${3}`);
  const allBlogPostResult: ApiResponseDTO = await response.json();
  console.log(allBlogPostResult)
  // Pass data to the page via props
  return { props: { allBlogPostResult } }
})



page.layoutProps = {
  title: 'Home',
  pageTypes: 'public',
  isProtectedPage: false
}