import { Button, Stack, TextField, Typography, InputLabel } from '@mui/material'
import React from 'react'
import { style } from './login.style'



function Login() {
  return (
    <Stack direction='row'>
      <Stack flex={1}>
        <Stack direction='row' justifyContent='center' alignItems='center' height={1}>
          <Stack gap={2} sx={style.formRoot}>

            {/* Heading */}
            <Stack gap={1} className='center'>
              <Typography variant='h3'>Welcome back</Typography>
              <Typography variant='body1'>Welcome back! Please enter your details.</Typography>
            </Stack>

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

              <Typography className='content-right' variant='body1'>Forgot password</Typography>
              <Button variant='contained' fullWidth>Sign in</Button>

            </Stack>

            {/* Sign up Link*/}
            <Typography className='center' variant='body1'>Don’t have an account? Sign up</Typography>
          </Stack>
        </Stack>
      </Stack>


      {/* ==Image==  */}
      <Stack sx={style.image} flex={1}>
        <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" />
      </Stack>
    </Stack >
  )
}

export default Login