import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'



export default function BlogCard() {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <Stack>
        <img src='/images/login.jpg' alt='images' />
      </Stack>

      <Stack>
        <Typography variant='body4'>Olivia Rhye • 20 Jan 2024</Typography>
        <Typography variant='body1'>UX review presentations</Typography>
        <Typography variant='body2'>How do you create compelling presentations that wow your colleagues and impress your managers?</Typography>
      </Stack>
    </Card>
  )
}
