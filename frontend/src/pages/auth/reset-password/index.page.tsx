import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import AuthLayout from '@/layout/auth/AuthLayout.layout'
import Link from 'next/link'
import { FormData, schema } from './resetPassword.config'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { Page } from '@/types/Page.type'



const ResetPassword: Page = () => {

  const heading = 'Create new password'
  const subTitle = `Your new password must be different from previous used passwords`
  const imageLink = '/images/reset.jpg'


  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <AuthLayout heading={heading} subTitle={subTitle} sideImage={imageLink} isHeadingCenter={true}>
      {/* Form */}
      <Stack gap={3} component='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={0.5}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller control={control} name="password"
            render={({ field }) => (
              <TextField {...field} id="password" placeholder='Enter password' type='password' variant='outlined'
                error={!!errors.password} helperText={errors.password?.message || ''} />
            )} />
        </Stack>

        <Stack spacing={0.5}>
          <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
          <Controller control={control} name="confirmPassword"
            render={({ field }) => (
              <TextField {...field} id="confirmPassword" placeholder='Enter confirm password' type='password' variant='outlined'
                error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message || ''} />
            )} />
        </Stack>

        <Button variant='contained' type='submit' fullWidth>Reset Password</Button>

      </Stack>

      {/* Sign up Link*/}
      <Box className='center' gap={0.5}>
        <Typography variant='body2'>If you won&apost to change password</Typography>
        <Typography variant='body3'><Link href='/auth/login'>Click Here</Link></Typography>
      </Box>
    </AuthLayout>
  )
}


ResetPassword.layoutProps = {
  header: false,
  footer: false,
  title: 'Reset Password',
  pageTypes: 'auth',
  isProtectedPage: false
}


export default ResetPassword