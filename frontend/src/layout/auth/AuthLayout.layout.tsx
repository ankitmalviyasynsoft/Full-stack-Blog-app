import { AuthLayoutProps } from './AuthLayout.type'
import { Stack, Typography } from '@mui/material'
import { style } from './AuthLayout.config'
import { useTheme } from '@mui/material'



export default function AuthLayout({ children, sideImage = '', heading = '', subTitle = '', isHeadingCenter = false }: AuthLayoutProps) {
  const theme = useTheme()


  return (
    <Stack direction='row' mt={{ xs: 3, md: 0 }}>
      <Stack flex={1}>
        <Stack direction='row' justifyContent='center' alignItems='center' height={1}>

          <Stack gap={4} sx={style.formRoot}>

            {/* Page Heading */}
            <Stack gap={1}>
              <Typography variant='h3' textAlign={isHeadingCenter ? 'center' : 'left'}>{heading}</Typography>
              <Typography variant='body2' textAlign={isHeadingCenter ? 'center' : 'left'}>{subTitle}</Typography>
            </Stack>

            {children}
          </Stack>

        </Stack>
      </Stack>

      {/* ==Image==  */}
      <Stack display={{ xs: 'none', md: 'flex' }} sx={style.image} flex={1}>
        <img src={sideImage} alt='side image' style={{ objectFit: 'cover' }} />
      </Stack>
    </Stack>

  )
}
