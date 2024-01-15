import React from 'react'
import { Page } from '@/types/Page.type'
import { Box, Button, Container, InputLabel, Stack, TextField } from '@mui/material'
import { MdOutlineImage } from "react-icons/md"
import TextEditor from '@/components/textEditor/TextEditor.component'
import { stylePageSection } from '@/utils'


const BlogCreate: Page = () => {
  return (
    <Container>
      <Stack gap={4} my={stylePageSection}>
        <Box>
          <Button startIcon={MdOutlineImage} variant='outlined'>
            Add Cover Image
          </Button>
        </Box>

        <Stack spacing={1}>
          <InputLabel>New Post Title</InputLabel>
          <TextField variant='outlined' placeholder='New post title here' />
        </Stack>
        <Stack spacing={1}>
          <InputLabel>Category</InputLabel>
          <TextField variant='outlined' placeholder='Category...' />
        </Stack>

        <Stack spacing={1}>
          <InputLabel>Description</InputLabel>
          <TextEditor onChange={() => console.log('event')} placeholder='write your post content here' />
        </Stack>

        <Stack direction='row' justifyContent='end'>
          <Box>
            <Button variant='outlined'>Save</Button>
          </Box>
        </Stack>
      </Stack>


    </Container>
  )
}


BlogCreate.layoutProps = {
  title: 'Create',
  pageTypes: 'protected',
  isProtectedPage: true
}


export default BlogCreate