import React, { useEffect, useState } from 'react'
import { Box, Card, Chip, Stack, Typography } from '@mui/material'
import { BlogCardProps } from './BlogCard.type'
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from 'next/router';
import { convertHtmlToText } from '@/utils';
import { styled } from './BlogCard.style'
import moment from 'moment';
import Image from 'next/image';
import ImageNotFound from '../../imageNotFound/ImageNotFound.component';
import Link from 'next/link';
import ChipCard from '../chip/ChipCard.component';


export default function BlogCard(props: BlogCardProps) {
  const { style, data } = props
  const router = useRouter()
  const [content, setContent] = useState('')

  useEffect(() => {
    let content = convertHtmlToText(data?.content as string)
    setContent(content)
  }, [])


  return (
    <Card>
      <Stack spacing={1} direction={{ xs: 'column', md: style.direction }}>

        <Stack className='cursor-pointer' >
          {/* height={{ xs: 248, md: style.imageHeight || 1 }} width={{ xs: 1, md: style.imageWidth || 1 }} */}
          <Stack sx={styled.thumbnailBox} height={{ xs: 248, md: style.imageHeight || 1 }} width={{ xs: 1, md: style.imageWidth || 1 }} onClick={() => router.push(`/blog/detail/${data?._id}`)}>
            {data?.profileURL ? <Image src={data?.profileURL || ''} alt='post' width={500} height={500} /> : <ImageNotFound />}
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Typography variant='body3' fontWeight={600}>• {moment(data?.createdAt).format('DD MMM YYYY')}</Typography>

          <Stack direction='row' justifyContent='space-between' className='cursor-pointer' onClick={() => router.push(`/blog/detail/${data?._id}`)}>
            <Typography variant='h6' fontWeight={600} className='line-1'>{data?.title}</Typography>
            <Box fontSize={24}><MdArrowOutward /></Box>
          </Stack>

          <Stack>
            <Typography variant='body1' className='line-3'>{content}</Typography>
          </Stack>

          <Stack direction='row' gap={1} flexWrap='wrap'>
            {data?.categories?.length && data?.categories.map((item) =>
              <ChipCard categoryData={item} key={item._id} />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Card >
  )
}
