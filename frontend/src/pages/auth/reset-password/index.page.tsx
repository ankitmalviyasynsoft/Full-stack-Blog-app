import { Button, Stack, TextField, Typography, InputLabel } from '@mui/material'
import React from 'react'
import { style } from './resetPassword.style'



function ResetPassword() {
  return (
    <Stack direction='row'>
      <Stack flex={1}>
        <Stack direction='row' justifyContent='center' alignItems='center' height={1}>
          <Stack gap={2} sx={style.formRoot}>

            {/* Heading */}
            <Stack gap={2} justifyContent='left'>
              <Typography variant='h3'>Reset Password</Typography>
              <Typography variant='body1'>Enter your email address and we'll send you an email with instructions to reset your password.</Typography>
            </Stack>

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

              <Button variant='contained' fullWidth>Send Link</Button>

            </Stack>

            {/* Sign up Link*/}
            <Typography className='center' variant='body1'>Don’t have an account? </Typography>
          </Stack>
        </Stack>
      </Stack>


      {/* ==Image==  */}
      <Stack sx={style.image} flex={1}>
        <img src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </Stack>
    </Stack >
  )
}

export default ResetPassword