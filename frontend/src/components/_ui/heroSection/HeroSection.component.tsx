import React from 'react'
import { Box, Chip, CircularProgress, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useGetBannerIsTrueQuery } from '@/redux/api/banners.api';
import AlertBox from '../alerts/AlertBox.components';



export default function HeroSection() {
  const { data, isLoading, isError, isUninitialized } = useGetBannerIsTrueQuery('')
  console.log(data)
  const theme = useTheme()
  const isSmallScreenUp = useMediaQuery(theme.breakpoints.up('md'))


  if (isLoading) return <CircularProgress />;
  if (isError) return <AlertBox variant='error'>Something went wrong</AlertBox>;


  return (
    <Grid container spacing={4}>
      <Grid item xs>

        {/* == hero section Image == */}
        <Stack position='relative'>

          <Box height={{ xs: 200, sm: 350, md: 500 }} width={1}>
            <img src={data?.bannerImageUrl} alt='image' style={{ objectFit: 'cover', borderRadius: '20px' }} />
          </Box>


          {/* == blur section == */}
          <Box className={isSmallScreenUp ? 'blurred-content' : ''} position={{ xs: 'relative', md: 'absolute' }} bottom={0} width={1} color={isSmallScreenUp ? 'var(--text-white)}' : ''} >
            <Stack width={1} p={{ md: 4 }} mt={{ xs: 2, md: 0 }} spacing={2}>
              <Typography variant='h4' fontWeight={600}>{data?.title}</Typography>
              <Typography variant='subtitle' >{data?.content}</Typography>


              <Stack direction='row' flexWrap='wrap' gap={{ xs: 4, md: 8 }}>
                <Stack>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>Written by</Typography>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>{data?.author}</Typography>
                </Stack>

                <Stack>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>Published on</Typography>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>{data?.createdAt}</Typography>
                </Stack>


              </Stack>

            </Stack>
          </Box>

        </Stack>
      </Grid>


      {/*  == Category Section == */}
      {/* <Grid item xs={12} md={3} order={{xs:-1, md:0}}>
        <Typography variant='body3' className='heading-padding'>Blog categories</Typography>
        <Stack direction={{ xs: 'row', md: 'column' }} className={!isSmallScreenUp ? 'scroll-X' : '' }spacing={2} ml={{md:2}} pb={{xs:2, md:0}}>
          {
            dataCategoies.map((item, index) => (
              <Typography variant='body2' className='text-nowrap' width={1} key={index}>{item}</Typography>
            ))
          }
        </Stack>
      </Grid> */}
    </Grid >
  )
}
