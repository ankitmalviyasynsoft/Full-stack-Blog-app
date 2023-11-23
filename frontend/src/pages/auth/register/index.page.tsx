import { Button, Stack, TextField, Typography, InputLabel } from '@mui/material'
import React from 'react'
import { style } from './register.style'



function Register() {
  return (
    <Stack direction='row'>
      <Stack flex={1}>
        <Stack direction='row' justifyContent='center' alignItems='center' height={1}>
          <Stack gap={2} sx={style.formRoot}>

            {/* Heading */}
            <Stack gap={1} justifyContent='left'>
              <Typography variant='h3'>Sign up</Typography>
              <Typography variant='body1'>Start your free trial.</Typography>
            </Stack>

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

              <Typography className='content-right' variant='body1'>Forgot password</Typography>
              <Button variant='contained' fullWidth>Get started</Button>

            </Stack>

            {/* Sign up Link*/}
            <Typography className='center' variant='body1'>Already have an account? Login</Typography>
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

export default Register