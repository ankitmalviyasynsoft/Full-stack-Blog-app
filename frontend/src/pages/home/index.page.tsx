import { Container, Stack } from '@mui/material'
import { stylePageSection } from '@/utils'
import { ApiBlogPostResponseDTO } from '@/dtos/BlogPost.dto'
import config from '@/config/config.json'
import AllBlogs from './components/allBlogs/AllBlogs.component'
import AlertBox from '@/components/_ui/alerts/AlertBox.components'
import HeroSection from '@/components/_ui/heroSection/HeroSection.component'
import RecentlyBlogTopThree from './components/RelevantBlog/RecentlyBlogTopThree.component'


interface IHomeProps {
  allBlogPostResult: ApiBlogPostResponseDTO
}


export default function page(props: IHomeProps) {
  const { allBlogPostResult } = props


  return (
    <Container>

      <Stack my={stylePageSection}>
        <HeroSection />
        {
          allBlogPostResult !== null ?
            <>
              <RecentlyBlogTopThree initialData={allBlogPostResult} />
              <AllBlogs initialData={allBlogPostResult} />
            </>
            : <AlertBox variant='error'>Something went wrong</AlertBox>
        }
      </Stack>
    </Container>
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


page.layoutProps = {
  title: 'Home',
  pageTypes: 'public',
  isProtectedPage: false
}