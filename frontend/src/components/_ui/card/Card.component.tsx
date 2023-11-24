import { Box, Card, Chip, Grid, Stack, Typography } from '@mui/material'
import { CardProps } from './Card.type'
import React from 'react'



export default function BlogCard(props:CardProps) {
  const {style } = props

  return (
    <Card>
      <Stack spacing={1} direction={style.direction}>
        <Stack height={style.imageHeight} width={1}>
          <img src='/images/login.jpg' alt='images' style={{ objectFit: 'cover' }} />
        </Stack>

        <Stack spacing={1}>
          <Typography variant='body3' fontWeight={600}>Olivia Rhye • 20 Jan 2024</Typography>
          <Typography variant='h5' fontWeight={600}>UX review presentations</Typography>
          <Typography variant='body1'>How do you create compelling presentations that wow your colleagues and impress your managers?</Typography>

          <Stack direction='row' gap={2}>
            <Chip label="Design" size="medium" variant="outlined" color='error' />
            <Chip label="Research" size="medium" variant="outlined" color='info' />
            <Chip label="Presentation" size="medium" variant="outlined" color='warning' />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
