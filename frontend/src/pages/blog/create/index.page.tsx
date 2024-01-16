import React from 'react'
import { Page } from '@/types/Page.type'
import { Box, Button, Container, Grid, InputLabel, Stack, TextField } from '@mui/material'
import { MdOutlineImage } from "react-icons/md"
import TextEditor from '@/components/textEditor/TextEditor.component'
import ImageUpload from '@/components/_ui/imageUpload/ImageUpload.component'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import BlogForm from '../components/blogForm/BlogForm.component'


const BlogCreate: Page = () => {


  return (
    <Container className='section-padding'>
      <BlogForm mode='add' />
    </Container>
  )
}


BlogCreate.layoutProps = {
  title: 'Create',
  pageTypes: 'protected',
  isProtectedPage: true
}


export default BlogCreate