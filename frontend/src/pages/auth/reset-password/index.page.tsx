import { Button, Stack, TextField, Typography, InputLabel, Box } from '@mui/material'
import React from 'react'
import AuthLayout from '@/layout/auth/AuthLayout.layout'
import Link from 'next/link'



function ResetPassword() {

  const heading = 'Create new password'
  const subTitle = `Your new password must be different from previous used passwords`
  const imageLink = '/images/reset.jpg'


  return (
    <AuthLayout heading={heading} subTitle={subTitle} sideImage={imageLink} isHeadingCenter={true}>
      {/* Form */}
      <Stack gap={3} component='form'>
        <Stack spacing={0.5}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField id="password" placeholder='Enter password' type='password' variant='outlined' />
        </Stack>

        <Stack spacing={0.5}>
          <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
          <TextField id="confirmPassword" placeholder='Enter confirm password' type='password' variant='outlined' />
        </Stack>

        <Button variant='contained' fullWidth>Reset Password</Button>

      </Stack>

      {/* Sign up Link*/}
      <Box className='center' gap={0.5}>
        <Typography variant='body2'>If you won't to change password</Typography>
        <Typography variant='body3'><Link href='/auth/login'>Click Here</Link></Typography>
      </Box>
    </AuthLayout>
  )
}

export default ResetPassword