import React from 'react'
import { Button, TextField, InputLabel, Grid, Stack, Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useUpdateUserMutation } from '@/redux/api/auth.api'
import { FormData, schema } from './ProfileForm.config'
import { ProfileProps } from './ProfileForm.type'
import { theme } from '@/utils'



export default function ProfileForm(props: ProfileProps) {
  const { data, mode } = props
  console.log(data)
  const [updateUser] = useUpdateUserMutation()

  const { handleSubmit, control, reset, watch, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: data?.username || '',
      email: data?.email || '',
      mobile: data?.mobile || '',
      address: data?.address || '',
      // city: data?.city || '',
      // country: data?.country || '',
      // state: data?.state || ''
    }
  })

  const onSubmit = async (formData: FormData) => {
    await updateUser({ _id: data?._id as string, ...formData })
  }



  return (
    <>
      <Grid container rowGap={4} component='form' onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={3} >
          <Stack display='flex' justifyContent='center' alignItems='center' width={1} height={1} >
            <Box borderRadius={100} overflow='hidden' height={200} width={200}>
              <img src='/images/login.jpg' style={{ objectFit: 'cover' }} />
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={9}>
          {/* Form */}
          <Grid container spacing={4} >
            <Grid item xs={12} md={6} >
              <InputLabel htmlFor='username'>Name</InputLabel>
              <Controller control={control} name="username"
                render={({ field }) => (
                  <TextField placeholder='Enter your name' type='text' variant='outlined' {...field}
                    error={!!errors.username?.message} helperText={errors.username?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12} md={6} >
              <InputLabel htmlFor='email'>Email</InputLabel>
              <Controller control={control} name="email"
                render={({ field }) => (
                  <TextField {...field} placeholder='Enter your email' type='text' variant='outlined'
                    error={!!errors.email?.message} helperText={errors.email?.message}
                  />
                )} />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='mobile'>Mobile</InputLabel>
              <Controller control={control} name="mobile"
                render={({ field }) => (
                  <TextField id='mobile' {...field} placeholder='Enter your mobile' type='number' variant='outlined'
                    error={!!errors.mobile?.message} helperText={errors.mobile?.message}
                  />
                )} />
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <InputLabel htmlFor='dob'>Date of birth</InputLabel>
              <TextField id='dob' placeholder='Enter your date of birth' type='text' variant='outlined' />
            </Grid> */}

            {/* 
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
            </Grid> */}

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
    </>
  )
}
