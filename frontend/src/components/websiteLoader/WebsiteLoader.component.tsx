import { CircularProgress, Backdrop, Theme, Stack } from '@mui/material'
import { style } from './WebsiteLoader.style'
import Logo from '../_ui/logo/Logo.component'



export default function WebsiteLoader() {

  return (
    <Backdrop sx={style.root} open={true}>
      <Stack direction='column' sx={style.progressContainer} className='center'>
        <CircularProgress color="inherit" />
        <Stack justifyContent='center' alignItems='center' height={150} width={250} >
          <Logo />
        </Stack>
      </Stack>
    </Backdrop>
  )
}
