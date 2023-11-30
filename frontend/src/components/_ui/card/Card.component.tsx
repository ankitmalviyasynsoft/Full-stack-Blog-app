import React from 'react'
import { Box, Card, Chip, Stack, Typography } from '@mui/material'
import { CardProps } from './Card.type'
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from 'next/router';



export default function BlogCard(props: CardProps) {
  const { style } = props
  const router = useRouter()


  return (
    <Card>
      <Stack spacing={1} direction={{ xs: 'column', md: style.direction }}>

        <Stack className='cursor-pointer' onClick={() => router.push('/blog/detail/1')}>
          <Box height={style.imageHeight || 1} width={style.imageWidth || 1} >
            <img src='/images/login.jpg' alt='images' style={{ objectFit: 'cover', borderRadius:8 }} />
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant='body3' fontWeight={600}>Olivia Rhye • 20 Jan 2024</Typography>

          <Stack direction='row' justifyContent='space-between' className='cursor-pointer' onClick={() => router.push('/blog/detail/1')}>
            <Typography variant='h5' fontWeight={600}>UX review presentations</Typography>
            <Box fontSize={24}><MdArrowOutward /></Box>
          </Stack>

          <Typography variant='body1'>How do you create compelling presentations that wow your colleagues? How do you create compelling presentations that wow your colleagues and impress your managers?</Typography>

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
