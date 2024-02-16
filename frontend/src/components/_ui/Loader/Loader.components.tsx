import { CircularProgress, Stack } from '@mui/material'
import React from 'react'


type LoaderProps = {
  minHeight?: number
}


export default function Loader(props: LoaderProps) {


  return (
    <Stack minHeight={props?.minHeight || 250} direction='row' justifyContent='center' alignItems='center'>
      <CircularProgress />
    </Stack>
  )
}
