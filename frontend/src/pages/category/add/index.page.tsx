import { Container, Stack } from '@mui/material'
import React from 'react'
import CategoryForm from '../components/CategoryForm.component'
import PageHeader from '@/components/_ui/pageHeader/PageHeader.components'
import { stylePageSection } from '@/utils'



export default function AddPage() {


  return (
    <Container>
      <Stack className='section-padding'>
        <PageHeader heading='Add Category' />
        <CategoryForm mode='add' />
      </Stack>
    </Container>
  )
}