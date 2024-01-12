import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import AuthLayout from '@/layout/auth/AuthLayout.layout'
import { FormData, schema } from './register.config'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { IRegister, useAuthRegisterMutation } from '@/redux/api/auth.api'


function Register() {

  const heading = 'Sign Up'
  const subTitle = `Enter your detail below to create your account and get started`
  const imageLink = '/images/register.jpg'
  const [authRegister, { isLoading }] = useAuthRegisterMutation()

  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    let payload: IRegister = {
      ...data, role: 'user'
    }
    await authRegister(payload)
  }


  return (
    <AuthLayout heading={heading} subTitle={subTitle} sideImage={imageLink}>

      {/* Form */}
      <Stack gap={2} component='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={0.5}>
          <InputLabel htmlFor='username'>Name</InputLabel>
          <Controller control={control} name="username"
            render={({ field }) => (
              <TextField {...field} id='username' placeholder='Enter your name' helperText={errors.username?.message} error={!!errors.username?.message} type='text' variant='outlined' />
            )} />
        </Stack>

        <Stack spacing={0.5}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Controller control={control} name="email"
            render={({ field }) => (
              <TextField {...field} id='email' placeholder='Enter your email' type='text' helperText={errors.email?.message} error={!!errors.email?.message} variant='outlined' />
            )} />
        </Stack>

        <Stack spacing={0.5}>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Controller control={control} name="password"
            render={({ field }) => (
              <TextField {...field} id='password' placeholder='Create a password' type='password' helperText={errors.password?.message} error={!!errors.password?.message} variant='outlined' />
            )} />
        </Stack>

        <Button variant='contained' type='submit' fullWidth>Get started</Button>
      </Stack>

      {/* Sign In Link*/}
      <Box className='center' gap={0.5}>
        <Typography variant='body2'>Already have an account? </Typography>
        <Typography variant='body3'><Link href='/auth/login'>Login </Link></Typography>
      </Box>

    </AuthLayout>
  )
}


Register.layoutProps = {
  isProtectedPage: false,
  title: 'Sign Up',
  header: false,
  footer: false
}


export default Register