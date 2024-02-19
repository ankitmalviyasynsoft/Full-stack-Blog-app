import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import AuthLayout from '@/layout/auth/AuthLayout.layout'
import { FormData, schema } from './login.config'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthLoginMutation } from '@/redux/api/auth.api'


function Login() {

  const heading = 'Welcome back'
  const subTitle = 'Welcome back! Please enter your details.'
  const imageLink = '/images/login.jpg'
  const [authLogin, { isLoading }] = useAuthLoginMutation()

  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })


  const onSubmit = async (data: FormData) => {
    await authLogin(data)
  }


  return (
    <AuthLayout sideImage={imageLink} heading={heading} subTitle={subTitle} isHeadingCenter>

      {/* Form */}
      <Stack gap={2} component='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={0.5}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Controller control={control} name="email"
            render={({ field }) => (
              <TextField  {...field} id="email" placeholder='Enter your email' helperText={errors.email?.message} error={!!errors.email?.message} type='text' variant='outlined' />
            )} />
        </Stack>

        <Stack spacing={0.5}>
          <InputLabel htmlFor="email">Password</InputLabel>
          <Controller control={control} name="password"
            render={({ field }) => (
              <TextField {...field} placeholder='Enter your password' type='password' helperText={errors.password?.message} error={!!errors.password?.message} variant='outlined' />
            )} />
        </Stack>

        <Typography className='content-right' variant='body3'><Link href='/auth/forgot-password'>Forgot password</Link></Typography>
        <Button variant='contained' type='submit' fullWidth>Sign in</Button>

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
  header: false,
  footer: false,
  title: 'Login',
  pageTypes: 'auth',
  isProtectedPage: false
}


export default Login