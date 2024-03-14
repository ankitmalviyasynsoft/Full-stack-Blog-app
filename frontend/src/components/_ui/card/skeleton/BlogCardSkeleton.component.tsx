import { Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

export default function BlogCardSkeleton(props: BlogCardSkeletonProps) {

  if (props.direction === 'row') {
    return (
      <Stack gap={1} width={1} direction={{ xs: 'column', md: 'row' }} alignItems='flex-start' >
        <Skeleton width='100%' variant="rectangular" height={200} />
        <Stack width={1} >
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
        </Stack>
      </Stack>
    )
  }


  return (
    <Stack gap={1} width={1}>
      <Skeleton width='100%' variant="rounded" height={240} />

      <Stack width={1}>
        <Skeleton width="100%" height={30} />
        <Skeleton width="100%" height={30} />
        <Skeleton width="100%" height={30} />
      </Stack>
    </Stack>
  )

}
