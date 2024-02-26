import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import AuthLayout from '@/layout/auth/AuthLayout.layout'
import { FormData, schema } from './forgotPassword.config'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { Page } from '@/types/Page.type'
import UnderConstruction from '@/components/_ui/underConstruction/UnderConstruction.component'



const ForgotPassword: Page = () => {

  const heading = 'Forgot Password'
  const subTitle = `Enter your email address and we'll send you an email with instructions to reset your password.`
  const imageLink = '/images/forgot-password.jpg'

  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  if(process.env.UND_CON || true) return <UnderConstruction/>

  return (
    <AuthLayout heading={heading} subTitle={subTitle} sideImage={imageLink} isHeadingCenter={true}>

      {/* Form */}
      <Stack gap={3} component='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={0.5}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Controller control={control} name='email'
            render={({ field }) => (
              <TextField id="email" {...field} placeholder='Enter your email' type='text' variant='outlined' />
            )}
          />
        </Stack>

        <Button variant='contained' type='submit' fullWidth>Send Link</Button>
      </Stack>


      {/* Sign in Link*/}
      <Box className='center' gap={0.5}>
        <Typography variant='body2'>If already you know your password?</Typography>
        <Typography variant='body3'><Link href='/auth/login'>Login </Link></Typography>
      </Box>

    </AuthLayout >
  )
}


ForgotPassword.layoutProps = {
  header: false,
  footer: false,
  title: 'Forgot Password',
  pageTypes: 'auth',
  isProtectedPage: false,
}


export default ForgotPassword