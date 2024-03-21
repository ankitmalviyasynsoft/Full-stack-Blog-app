import React from 'react'
import { PageFooterProps } from './footer.type'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { FaInstagram, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from 'next/image';
import { useRouter } from 'next/router';



export default function Footer(props: PageFooterProps) {
  const router = useRouter()

  return (
    <Box bgcolor='primary' >
      <Container>
        <Stack direction={{ xs: 'column', sm: 'row' }} py={2} gap={6} flexWrap='wrap' justifyContent='space-between' alignItems={{ xs: 'start', md: 'center' }}>

          <Stack maxWidth={{ xs: 1, md: 300 }}>
            <Box height={180} width={250} onClick={() => router.push('/')}>
              <Image src='/images/logo-svg/logoFooter.png' alt='footer image' width={1000} height={1000} quality={100} />
            </Box>

            <Typography variant='body2' fontWeight={400}>E-Hack: Your Cybersecurity Learning Hub. Read, Learn, Hack, Repeat.</Typography>
          </Stack>

          <Stack gap={2}>
            <Typography variant='h2'>Follow Us</Typography>
            <Stack direction='row' spacing={4} fontSize={24}>
              <FaInstagram />
              <FaFacebook />
              <FaXTwitter />
              <FaYoutube />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Divider />

      <Container >
        <Stack className='center' p={2}>
          <Typography>©2024 E-Hack. All rights reserved.</Typography>
        </Stack>
      </Container>
    </Box>

  )
}

