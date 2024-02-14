import React from 'react'
import { Box, Card, Chip, Stack, Typography } from '@mui/material'
import { BlogCardProps } from './BlogCard.type'
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from 'next/router';
import { convertHtmlToText } from '@/utils';
import moment from 'moment';



export default function BlogCard(props: BlogCardProps) {
  const { style, data } = props
  const router = useRouter()

  return (
    <Card>
      <Stack spacing={1} direction={{ xs: 'column', md: style.direction }}>

        <Stack className='cursor-pointer' onClick={() => console.log('sad')}>
          <Box height={{ xs: 248, md: style.imageHeight || 1 }} width={{ xs: 1, md: style.imageWidth || 1 }} >
            <img src={data?.profileURL} alt='images' style={{ objectFit: 'cover', borderRadius: 8 }} />
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant='body3' fontWeight={600}>Olivia Rhye • {moment(data?.createdAt).format('DD MMM YYYY')}</Typography>

          <Stack direction='row' justifyContent='space-between' className='cursor-pointer' onClick={() => router.push(`/blog/detail/${data?._id}`)}>
            <Typography variant='h5' fontWeight={600} className='line-1'>{data?.title}</Typography>
            <Box fontSize={24}><MdArrowOutward /></Box>
          </Stack>

          {/* <Typography variant='body1'>How do you create compelling presentations that wow your colleagues? How do you create compelling presentations that wow your colleagues and impress your managers?</Typography> */}

          <Typography variant='body1' className='line-3'>
            {convertHtmlToText(data?.content as string)}
          </Typography>
          <Stack direction='row' gap={2}>
            {data?.categories?.length && data?.categories.map((item) => <Chip key={item._id} label={item.title} size="medium" variant="outlined" color='info' />)}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
