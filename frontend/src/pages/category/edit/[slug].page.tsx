import { Page } from '@/types/Page.type'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CircularProgress, Container, Stack } from '@mui/material'
import { useLazyGetCategoryByIdQuery } from '@/redux/api/category.api'
import CategoryForm from '../components/CategoryForm.component'
import PageHeader from '@/components/_ui/pageHeader/PageHeader.components'



const EditPage: Page = () => {

  const router = useRouter()
  const [getCategoryById, { data, isLoading }] = useLazyGetCategoryByIdQuery()

  useEffect(() => {
    if (router?.query?.slug) {
      console.log(router)
      getCategoryById(router?.query?.slug as string)
    }
  }, [router.isReady])

  if (isLoading) return <CircularProgress />

  return (
    <Container>
      <Stack className='section-padding'>
        <PageHeader heading='Edit Category' />
        <CategoryForm mode='edit' data={data} />
      </Stack>
    </Container>
  )
}


EditPage.layoutProps = {
  title: 'Edit Category',
  roles: ['admin'],
  pageTypes: 'authenticate',
  isProtectedPage: true
}


export default EditPage