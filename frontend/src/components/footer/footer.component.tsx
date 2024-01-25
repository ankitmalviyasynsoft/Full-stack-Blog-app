import React from 'react'
import { PageFooterProps } from './footer.type'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { FaInstagram, FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";



export default function Footer(props: PageFooterProps) {


  return (
    <Box bgcolor='primary'>
      <Container>
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={6} flexWrap='wrap'>

          <Stack maxWidth={{ xs: 1, md: 300 }}>
            <Box height={100} width={150}>
              <img src='/images/logo-svg/logo-no-background.svg' alt='footer image' />
            </Box>

            <Typography variant='body2' fontWeight={400}>Design amazing digital experiences that create more happy in the world.</Typography>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} flex={1} gap={6} justifyContent='space-between'>
            {
              footerData.map((item, index) => (
                <Stack spacing={1} key={index}>
                  <Typography variant='body4'>{item.heading}</Typography>
                  {item.subTitle.map((item, index) => (
                    <Typography key={index} variant='body2' fontWeight={600}>{item.title}</Typography>
                  ))}
                </Stack>
              ))
            }
          </Stack>
        </Stack>
      </Container>

      <Divider sx={{ my: 4 }} />

      <Container>
        <Stack px={{ xs: 1, md: 4 }} my={3} spacing={3} direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems='center'>
          <Typography>© 2077 Untitled UI. All rights reserved.</Typography>
          <Stack direction='row' spacing={4} fontSize={24}>
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
            <FaGithub />
          </Stack>
        </Stack>
      </Container>
    </Box>

  )
}


let footerData = [
  {
    heading: 'product',
    subTitle: [
      {
        title: 'Overview',
        link: ''
      },
      {
        title: 'Features',
        link: ''
      },
      {
        title: 'Solutions',
        link: ''
      },
      {
        title: 'Tutorials',
        link: ''
      },
      {
        title: 'Pricing',
        link: ''
      },
      {
        title: 'Releases',
        link: ''
      },
    ]
  },
  {
    heading: 'Resources',
    subTitle: [
      {
        title: 'Blog',
        link: ''
      },
      {
        title: 'Newsletter',
        link: ''
      },
      {
        title: 'Events',
        link: ''
      },
      {
        title: 'Help centre',
        link: ''
      },
      {
        title: 'Tutorials',
        link: ''
      },
      {
        title: 'Support',
        link: ''
      },
    ]
  },
  {
    heading: 'Company',
    subTitle: [
      {
        title: 'About us',
        link: ''
      },
      {
        title: 'Careers',
        link: ''
      },
      {
        title: 'Press',
        link: ''
      },
      {
        title: 'News',
        link: ''
      },
      {
        title: 'Media kit',
        link: ''
      },
      {
        title: 'Contact',
        link: ''
      },
    ]
  },
  {
    heading: 'Social',
    subTitle: [
      {
        title: 'Twitter',
        link: ''
      },
      {
        title: 'LinkedIn',
        link: ''
      },
      {
        title: 'Facebook',
        link: ''
      },
      {
        title: 'GitHub',
        link: ''
      },
      {
        title: 'AngelList',
        link: ''
      },
      {
        title: 'Dribbble',
        link: ''
      },
    ]
  },
  {
    heading: 'Legal',
    subTitle: [
      {
        title: 'Terms',
        link: ''
      },
      {
        title: 'Privacy',
        link: ''
      },
      {
        title: 'Cookies',
        link: ''
      },
      {
        title: 'Licenses',
        link: ''
      },
      {
        title: 'Settings',
        link: ''
      },
      {
        title: 'Contact',
        link: ''
      },
    ]
  },
]