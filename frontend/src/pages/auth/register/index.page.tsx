import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import AuthLayout from '@/layout/auth/AuthLayout.layout'



function Register() {

  const heading = 'Sign Up'
  const subTitle = `Enter your detail below to create your account and get started`
  const imageLink = 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  

  return (
    <AuthLayout  heading={heading} subTitle={subTitle} sideImage={imageLink}>

      {/* Form */}
      <Stack gap={2} component='form'>
        <Stack spacing={0.5}>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <TextField id='name' placeholder='Enter your name' type='text' variant='outlined' />
        </Stack>

        <Stack spacing={0.5}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <TextField id='email' placeholder='Enter your email' type='text' variant='outlined' />
        </Stack>

        <Stack spacing={0.5}>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <TextField id='password' placeholder='Create a password' type='text' variant='outlined' />
        </Stack>

        <Button variant='contained' fullWidth>Get started</Button>
      </Stack>

      {/* Sign In Link*/}
      <Box className='center' gap={0.5}>
        <Typography variant='body2'>Already have an account? </Typography>
        <Typography variant='body3'><Link href='/auth/login'>Login </Link></Typography>
      </Box>

    </AuthLayout>
  )
}

export default Register