import { PageHeaderProps } from '@/components/header/Header.type'
import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'



export default function PageHeader(props: PageHeaderProps) {
  const { heading, buttonText, isButton, callBack } = props

  return (
    <Stack flexDirection='row' justifyContent='space-between' mb={5} alignItems='center'>
      <Typography variant='h2'>{heading}</Typography>
      {
        isButton &&
        <Box>
          <Button variant='outlined' onClick={callBack}>{buttonText}</Button>
        </Box>
      }
    </Stack>

  )
}
