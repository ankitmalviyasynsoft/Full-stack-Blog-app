import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function HeroSection() {
  const dataCategoies = ['View all', 'Management', 'Leadership', 'Customer Success', ' Software Development', 'Product', 'Design']

  return (
    <Grid container spacing={4}>
      
      <Grid item xs={12} md={9}>
        <Stack position='relative' className='heading-padding-top'>
          <Box height={500} width={1}>
            <img src='/images/register.jpg' alt='image' style={{ objectFit: 'cover', borderRadius: '20px' }} />
          </Box>


          <Box position='absolute' bottom={0} width={1} className='blurred-content'>
            <Box width={1} p={3}>
              <Typography variant='h4' fontWeight={600}>Improve your design skills: Develop an "eye" for design</Typography>
              <Typography variant='subtitle'>Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.</Typography>

              <Stack direction='row' gap={10} my={2}> 
                <Stack>
                  <Typography variant='body4'>Written by</Typography>
                  <Typography variant='body4'>Amélie Laurent</Typography>
                </Stack>
                <Stack>
                  <Typography variant='body4'>Published on</Typography>
                  <Typography variant='body4'>10 April 2024</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Grid>

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
