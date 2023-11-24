import { Box, Chip, Grid, Stack, Typography } from '@mui/material'
import React from 'react'



export default function HeroSection() {
  const dataCategoies = ['View all', 'Management', 'Leadership', 'Customer Success', ' Software Development', 'Product', 'Design']


  return (
    <Grid container spacing={4}>

      <Grid item xs={12} md={9}>

        {/* hero section Image */}
        <Stack position='relative' className='heading-padding-top'>
          <Box height={500} width={1}>
            <img src='/images/hero.jpg' alt='image' style={{ objectFit: 'cover', borderRadius: '20px' }} />
          </Box>


          {/* blur section */}
          <Box className='blurred-content' position='absolute' bottom={0} width={1} color='var(--text-white)' >
            <Stack width={1} p={4} spacing={2}>
              <Typography variant='h4'  fontWeight={600}>Improve your design skills: Develop an "eye" for design</Typography>
              <Typography variant='subtitle' >Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.</Typography>


              <Stack direction='row' gap={8}>
                <Stack>
                  <Typography variant='body4' color='var(--text-white)'>Written by</Typography>
                  <Typography variant='body4' color='var(--text-white)'>Amélie Laurent</Typography>
                </Stack>

                <Stack>
                  <Typography variant='body4' color='var(--text-white)'>Published on</Typography>
                  <Typography variant='body4' color='var(--text-white)'>10 April 2024</Typography>
                </Stack>

                <Stack ml='auto'>
                  <Typography variant='body4' color='var(--text-white)' mb={1}>File under</Typography>
                  <Chip label="Small" size="medium" variant="outlined" color='warning'/>
                </Stack>
              </Stack>

            </Stack>
          </Box>
          
        </Stack>
      </Grid>


      {/* Category Section */}
      <Grid item xs={12} md={3}>
        <Typography variant='body3' className='heading-padding'>Blog categories</Typography>
        {
          dataCategoies.map((item, index) => (
            <Typography variant='body2' mb={2} ml={2}>{item}</Typography>
          ))
        }
      </Grid>

    </Grid >
  )
}
