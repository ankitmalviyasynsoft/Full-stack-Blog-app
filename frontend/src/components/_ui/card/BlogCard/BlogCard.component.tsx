import React from 'react'
import { Box, Card, Chip, Stack, Typography } from '@mui/material'
import { BlogCardProps } from './BlogCard.type'
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from 'next/router';
import { convertHtmlToText } from '@/utils';
import moment from 'moment';
import Image from 'next/image';
import ImageNotFound from '../../imageNotFound/ImageNotFound.component';
import Loader from '../../Loader/Loader.components';



export default function BlogCard(props: BlogCardProps) {
  const { style, data } = props
  const router = useRouter()


  return (
    <Card>
      <Stack spacing={1} direction={{ xs: 'column', md: style.direction }}>

        <Stack className='cursor-pointer' >
          <Box height={{ xs: 248, md: style.imageHeight || 1 }} width={{ xs: 1, md: style.imageWidth || 1 }} onClick={() => router.push(`/blog/detail/${data?._id}`)}>
            {data?.profileURL ? <Image src={data?.profileURL || ''} alt='post' width={500} height={500} style={{ objectFit: 'cover' }} /> : <ImageNotFound />}
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant='body3' fontWeight={600}>• {moment(data?.createdAt).format('DD MMM YYYY')}</Typography>

          <Stack direction='row' justifyContent='space-between' className='cursor-pointer' onClick={() => router.push(`/blog/detail/${data?._id}`)}>
            <Typography variant='h6' fontWeight={600} className='line-1'>{data?.title}</Typography>
            <Box fontSize={24}><MdArrowOutward /></Box>
          </Stack>

          <Stack>
            {data?.content &&
              <Typography variant='body1' className='line-3'>{convertHtmlToText(data?.content as string)}</Typography>
            }
          </Stack>

          <Stack direction='row' gap={1} flexWrap='wrap'>
            {data?.categories?.length && data?.categories.map((item) =>
              <Chip key={item._id} label={item.title} size="medium" variant="outlined" color='info' />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Card >
  )
}
