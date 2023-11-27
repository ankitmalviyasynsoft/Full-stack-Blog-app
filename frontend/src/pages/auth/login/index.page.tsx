import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import AuthLayout from '@/layout/auth/AuthLayout.layout'



function Login() {

  const heading = 'Welcome back'
  const subTitle = 'Welcome back! Please enter your details.'
  const imageLink = '/images/login.jpg'


  return (
    <AuthLayout sideImage={imageLink} heading={heading} subTitle={subTitle} isHeadingCenter>
     
        {/* Form */}
        <Stack gap={2} component='form'>
          <Stack spacing={0.5}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField id="email" placeholder='Enter your email' type='text' variant='outlined' />
          </Stack>

          <Stack spacing={0.5}>
            <InputLabel htmlFor="email">Password</InputLabel>
            <TextField placeholder='Enter your email' type='text' variant='outlined' />
          </Stack>

          <Typography className='content-right' variant='body3'><Link href='/auth/forgot-password'>Forgot password</Link></Typography>
          <Button variant='contained' fullWidth>Sign in</Button>

        </Stack>

        {/* Sign up Link*/}
        <Box className='center' gap={0.5}>
          <Typography variant='body2'>Don&apost have an account? </Typography>
          <Typography variant='body3'><Link href='/auth/register'>Sign up</Link></Typography>
        </Box>

    </AuthLayout>
  )
}


Login.layoutProps = {
  isProtectedPage: false,
  title: 'Login',
  header:false
}


export default Login