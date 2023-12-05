import { Button, Stack, TextField, InputLabel, Box, Container, Grid, Avatar } from '@mui/material'
import React from 'react'


function Register() {

  return (
    <Container className='section-padding'>
      <Grid container spacing={4} >
        <Grid item xs={12} md={3} >
          <img src='/images/login.jpg' style={{ objectFit: 'cover' }} />
        </Grid>

        <Grid item xs={12} md={9}>
          {/* Form */}
          <Grid container spacing={3} >
            <Grid item xs={12} md={6} >
              <InputLabel htmlFor='name'>Name</InputLabel>
              <TextField id='name' placeholder='Enter your name' type='text' variant='outlined' />
            </Grid>

            <Grid item xs={12} md={6} >
              <InputLabel htmlFor='email'>Email</InputLabel>
              <TextField id='email' placeholder='Enter your email' type='text' variant='outlined' />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='mobile'>Mobile</InputLabel>
              <TextField id='mobile' placeholder='Enter your mobile' type='text' variant='outlined' />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='dob'>Date of birth</InputLabel>
              <TextField id='dob' placeholder='Enter your date of birth' type='text' variant='outlined' />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='country'>Country</InputLabel>
              <TextField id='country' placeholder='Enter your country' type='text' variant='outlined' />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='state'>State</InputLabel>
              <TextField id='state' placeholder='Enter your state' type='text' variant='outlined' />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='city'>City</InputLabel>
              <TextField id='city' placeholder='Enter your city' type='text' variant='outlined' />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='address'>Address</InputLabel>
              <TextField id='address' placeholder='Enter your Address...' type='text' variant='outlined' />
            </Grid>

            <Grid item xs={12}>
              <Button variant='contained' fullWidth>Update</Button>
            </Grid>

          </Grid>


        </Grid>
      </Grid>



    </Container>

  )
}


Register.layoutProps = {
  isProtectedPage: false,
  title: 'Profile',
  header: true,
  footer: true
}


export default Register