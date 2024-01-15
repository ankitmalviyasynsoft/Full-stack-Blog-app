import { Container, Stack } from '@mui/material'
import RecentlyBlogTopThree from './components/recentlyBlog/RecentlyBlogTopThree.component'
import HeroSection from '@/components/_ui/heroSection/HeroSection.component'
import AllBlogs from './components/allBlogs/AllBlogs.component'
import { stylePageSection } from '@/utils'


export default function page() {
  return (
    <Container>
      <Stack my={stylePageSection}>
        <HeroSection />
        <RecentlyBlogTopThree />
        <AllBlogs />
      </Stack>
    </Container>
  )
}



page.layoutProps = {
  title: 'Home',
  pageTypes: 'public',
  isProtectedPage: false
}