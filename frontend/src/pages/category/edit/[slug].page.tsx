import { CircularProgress, Container, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import CategoryForm from '../components/CategoryForm.component'
import PageHeader from '@/components/_ui/pageHeader/PageHeader.components'
import { useRouter } from 'next/router'
import { useLazyGetCategoryByIdQuery } from '@/redux/api/category.api'



export default function EditPage() {

  const router = useRouter()
  const [getCategoryById, { data, isLoading }] = useLazyGetCategoryByIdQuery()
  console.log(data)

  useEffect(() => {
    if (router?.query?.slug) {
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
