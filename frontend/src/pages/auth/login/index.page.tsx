import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import AuthLayout from '@/layout/auth/AuthLayout.layout'



function Login() {

  const heading = 'Welcome back'
  const subTitle = 'Welcome back! Please enter your details.'
  const imageLink = 'https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


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
          <Typography variant='body2'>Don’t have an account? </Typography>
          <Typography variant='body3'><Link href='/auth/register'>Sign up</Link></Typography>
        </Box>

    </AuthLayout>
  )
}

export default Login