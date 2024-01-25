import { Container } from '@mui/material'
import React from 'react'
import CategoryForm from '../components/CategoryForm.component'



export default function AddPage() {


  return (
    <Container>
      <CategoryForm mode='add' />
    </Container>
  )
}
