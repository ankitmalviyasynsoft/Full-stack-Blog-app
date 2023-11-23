import { Button, Stack, TextField, Typography, InputLabel } from '@mui/material'
import React from 'react'
import { style } from './forgotPassword.style'



function ForgotPassword() {
  return (
    <Stack direction='row'>
      <Stack flex={1}>
        <Stack direction='row' justifyContent='center' alignItems='center' height={1}>
          <Stack gap={2} sx={style.formRoot}>

            {/* Heading */}
            <Stack gap={2} justifyContent='left'>
              <Typography variant='h3'>Forgot Password</Typography>
              <Typography variant='body1'>Enter your email address and we'll send you an email with instructions to reset your password.</Typography>
            </Stack>

            {/* Form */}
            <Stack gap={3} component='form'>
              <Stack spacing={0.5}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField id="email" placeholder='Enter your email' type='text' variant='outlined' />
              </Stack>

              <Button variant='contained' fullWidth>Send Link</Button>

            </Stack>

            {/* Sign up Link*/}
            <Typography className='center' variant='body1'>Don’t have an account? Sign up</Typography>
          </Stack>
        </Stack>
      </Stack>


      {/* ==Image==  */}
      <Stack sx={style.image} flex={1}>
        <img src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </Stack>
    </Stack >
  )
}

export default ForgotPassword