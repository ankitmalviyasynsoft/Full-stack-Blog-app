import React from 'react'
import { PageFooterProps } from './footer.type'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { FaInstagram, FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";



export default function Footer(props: PageFooterProps) {

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
    heading:'Company',
    subTitle:[
      {
        title:'About us',
        link:''
      },
      {
        title:'Careers',
        link:''
      },
      {
        title:'Press',
        link:''
      },
      {
        title:'News',
        link:''
      },
      {
        title:'Media kit',
        link:''
      },
      {
        title:'Contact',
        link:''
      },
    ]
  }
  ]

  return (
    <Box bgcolor='primary'>
      <Container>
        <Stack p={2} direction={{ xs: 'column', sm: 'row' }} spacing={6} flexWrap='wrap' justifyContent='space-between'  >
          <Stack>
            <Typography>Logo</Typography>
            <Typography>Logo</Typography>
          </Stack>

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

        <Divider sx={{ my: 3 }} />

        <Stack m={3} spacing={3} direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems='center'>
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
