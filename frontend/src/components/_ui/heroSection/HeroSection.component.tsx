import { Box, Chip, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import React from 'react'



export default function HeroSection() {
  const dataCategoies = ['View all', 'Management', 'Leadership', 'Customer Success', ' Software Development', 'Product', 'Design']
  const theme = useTheme()
  const isSmallScreenUp = useMediaQuery(theme.breakpoints.up('md'))
  
  
  return (
    <Grid container spacing={4}>

      <Grid item xs>

        {/* == hero section Image == */}
        <Stack position='relative' className='heading-padding-top'>

          <Box height={{ xs: 200, sm: 350, md: 500 }} width={1}>
            <img src='/images/hero.jpg' alt='image' style={{ objectFit: 'cover', borderRadius: '20px' }} />
          </Box>


          {/* == blur section == */}
          <Box className={isSmallScreenUp ? 'blurred-content' : ''} position={{ xs: 'relative', md: 'absolute' }} bottom={0} width={1} color={isSmallScreenUp ? 'var(--text-white)}' : ''} >
            <Stack width={1} p={{md: 4}} mt={{xs:2, md:0}} spacing={2}>
              <Typography variant='h4' fontWeight={600}>Improve your design skills: Develop an &apos eye &apos for design</Typography>
              <Typography variant='subtitle' >Tools and trends change, but good design is timeless. Learn how to quickly develop an &aposeye&apos for design.</Typography>


              <Stack direction='row' flexWrap='wrap' gap={{ xs: 4, md: 8 }}>
                <Stack>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>Written by</Typography>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>Amélie Laurent</Typography>
                </Stack>

                <Stack>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>Published on</Typography>
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)' : ''}>10 April 2024</Typography>
                </Stack>

                <Stack ml={{ md: 'auto' }} >
                  <Typography variant='body4' color={isSmallScreenUp ? 'var(--text-white)}' : ''} mb={1}>File under</Typography>
                  <Stack direction='row' gap={2} flexWrap='wrap'>
                    <Chip label="Small" size="medium" onClick={() => { console.log('asdkla') }} variant="outlined" sx={{ color: isSmallScreenUp ? 'white' : '' }} />
                    <Chip label="Small" size="medium" onClick={() => { console.log('asdkla') }} variant="outlined" sx={{ color: isSmallScreenUp ? 'white' : '' }} />
                    <Chip label="Small" size="medium" onClick={() => { console.log('asdkla') }} variant="outlined" sx={{ color: isSmallScreenUp ? 'white' : '' }} />
                  </Stack>
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
