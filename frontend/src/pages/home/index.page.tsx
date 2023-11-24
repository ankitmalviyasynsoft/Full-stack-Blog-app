import { Container, Stack } from '@mui/material'
import RecentlyBlogTopThree from './components/recentlyBlog/RecentlyBlogTopThree.component'
import HeroSection from '@/components/_ui/heroSection/HeroSection.component'
import AllBlogs from './components/allBlogs/AllBlogs.component'


export default function page() {
  return (
    <Container>
      <HeroSection />
      <RecentlyBlogTopThree />
      <AllBlogs />
    </Container>
  )
}
