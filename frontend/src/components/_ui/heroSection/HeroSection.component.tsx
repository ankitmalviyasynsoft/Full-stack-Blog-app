import React from 'react'
import { Box, Chip, CircularProgress, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useGetBannerIsTrueQuery } from '@/redux/api/banners.api';
import AlertBox from '../alerts/AlertBox.components';
import Loader from '../Loader/Loader.components';
import Image from 'next/image';
import moment from 'moment';



export default function HeroSection() {
  const { data, isLoading, isError } = useGetBannerIsTrueQuery('')

  const theme = useTheme()
  const isSmallScreenUp = useMediaQuery(theme.breakpoints.up('md'))


  if (isLoading) return <Loader />;

  if (isError) return <AlertBox variant='error'>Something went wrong</AlertBox>;

  return (
    <Grid container spacing={4}>
      <Grid item xs>

        {/* == hero section Image == */}
        <Stack position='relative' >

          <Box height={{ xs: 200, sm: 350, md: 500 }} width={1} borderRadius={3} overflow='hidden'>
            <Image src={data?.bannerImageUrl} alt='image' width={1920} height={1080} priority
              style={{ objectFit: 'cover' }} quality={100} sizes="100vw" />
          </Box>


          {/* == blur section == */}
          <Box className={isSmallScreenUp ? 'blurred-content' : ''} position={{ xs: 'relative', md: 'absolute' }} bottom={0} width={1} color={isSmallScreenUp ? 'var(--text-white)}' : ''} >
            {/* <Stack width={1} p={{ md: 4 }} mt={{ xs: 2, md: 0 }} spacing={2}>
              <Typography variant='h4' fontWeight={600}>{data?.title}</Typography>
              <Typography variant='subtitle' >{data?.content}</Typography>


              <Stack direction='row' flexWrap='wrap' gap={{ xs: 4, md: 8 }}>
                <Stack>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>Written by</Typography>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>{data?.author}</Typography>
                </Stack>

                <Stack>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>Published on</Typography>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>{moment(data?.createdAt).format('LL')}</Typography>
                </Stack>
              </Stack>

            </Stack> */}
          </Box>

        </Stack>
      </Grid>
    </Grid >
  )
}
