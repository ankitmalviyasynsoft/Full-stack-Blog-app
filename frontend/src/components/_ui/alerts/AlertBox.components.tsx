import { Alert, Stack } from '@mui/material'
import React from 'react'



export default function AlertBox(props: AlertProps) {
  const { variant, children } = props


  return (
    <Stack sx={{ width: '100%', my: 4 }} spacing={2}>
      <Alert severity={variant}>{children}</Alert>
    </Stack>
  )
}
