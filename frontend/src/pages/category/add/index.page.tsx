import { Container, Stack } from '@mui/material'
import { Page } from '@/types/Page.type'
import CategoryForm from '../components/CategoryForm.component'
import PageHeader from '@/components/_ui/pageHeader/PageHeader.components'



const AddPage: Page = () => {


  return (
    <Container>
      <Stack className='section-padding'>
        <PageHeader heading='Add Category' />
        <CategoryForm mode='add' />
      </Stack>
    </Container>
  )
}


AddPage.layoutProps = {
  title: 'Add Category',
  roles: ['admin'],
  pageTypes: 'authenticate',
  isProtectedPage: true
}


export default AddPage