import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import AuthLayout from '@/layout/auth/AuthLayout.layout'



function ForgotPassword() {

  const heading = 'Forgot Password'
  const subTitle = `Enter your email address and we'll send you an email with instructions to reset your password.`
  const imageLink = '/images/forgot-password.jpg'

  return (
    <AuthLayout heading={heading} subTitle={subTitle} sideImage={imageLink} isHeadingCenter={true}>

      {/* Form */}
      <Stack gap={3} component='form'>
        <Stack spacing={0.5}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField id="email" placeholder='Enter your email' type='text' variant='outlined' />
        </Stack>

        <Button variant='contained' fullWidth>Send Link</Button>
      </Stack>


      {/* Sign in Link*/}
      <Box className='center' gap={0.5}>
        <Typography variant='body2'>If already you know your password?</Typography>
        <Typography variant='body3'><Link href='/auth/login'>Login </Link></Typography>
      </Box>

    </AuthLayout >
  )
}

export default ForgotPassword