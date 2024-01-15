import { Controller, useForm } from 'react-hook-form'
import { FormData, schema } from './profile.config'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField, InputLabel, Container, Grid } from '@mui/material'
import { useUpdateUserMutation } from '@/redux/api/auth.api'


function Profile() {
  const [updateUser] = useUpdateUserMutation()
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })


  const onSubmit = async (data: FormData) => {
    await updateUser({ _id: "65a28f8dead280dba87e32be", ...data })
    console.log(data)
  }


  return (
    <Container className='section-padding'>
      <Grid container spacing={4} component='form' onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={4} >
          <img src='/images/login.jpg' style={{ objectFit: 'cover' }} />
        </Grid>

        <Grid item xs={12} md={8}>
          {/* Form */}
          <Grid container spacing={3} >
            <Grid item xs={12} md={6} >
              <InputLabel htmlFor='username'>Name</InputLabel>
              <Controller control={control} name="username"
                render={({ field }) => (
                  <TextField id='username' {...field} placeholder='Enter your name' type='text' variant='outlined'
                    error={!!errors.username?.message} helperText={errors.username?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12} md={6} >
              <InputLabel htmlFor='email'>Email</InputLabel>
              <Controller control={control} name="email"
                render={({ field }) => (
                  <TextField id='email' {...field} placeholder='Enter your email' type='text' variant='outlined'
                    error={!!errors.email?.message} helperText={errors.email?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='mobile'>Mobile</InputLabel>
              <Controller control={control} name="mobile"
                render={({ field }) => (
                  <TextField id='mobile' {...field} placeholder='Enter your mobile' type='text' variant='outlined'
                    error={!!errors.mobile?.message} helperText={errors.mobile?.message}
                  />
                )} />
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <InputLabel htmlFor='dob'>Date of birth</InputLabel>
              <TextField id='dob' placeholder='Enter your date of birth' type='text' variant='outlined' />
            </Grid> */}

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='country'>Country</InputLabel>
              <Controller control={control} name="country"
                render={({ field }) => (
                  <TextField id='country' {...field} placeholder='Enter your country' type='text' variant='outlined'
                    error={!!errors.country?.message} helperText={errors.country?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='state'>State</InputLabel>
              <Controller control={control} name="state"
                render={({ field }) => (
                  <TextField id='state' {...field} placeholder='Enter your state' type='text' variant='outlined'
                    error={!!errors.state?.message} helperText={errors.state?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='city'>City</InputLabel>
              <Controller control={control} name="city"
                render={({ field }) => (
                  <TextField id='city' {...field} placeholder='Enter your city' type='text' variant='outlined'
                    error={!!errors.city?.message} helperText={errors.city?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='address'>Address</InputLabel>
              <Controller control={control} name="address"
                render={({ field }) => (
                  <TextField id='address' {...field} placeholder='Enter your address' type='text' variant='outlined'
                    error={!!errors.address?.message} helperText={errors.address?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12}>
              <Button variant='contained' type='submit' fullWidth>Update</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}


Profile.layoutProps = {
  isProtectedPage: false,
  pageTypes: 'protected',
  title: 'Profile',
  header: true,
  footer: true
}


export default Profile