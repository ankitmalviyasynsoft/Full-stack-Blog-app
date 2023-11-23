
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/store'
import { theme } from '@/utils'
import { Toaster } from 'react-hot-toast'
import CssVariables from '@/components/_ui/cssVariable/cssVariable.component'



export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssVariables />
        <CssBaseline enableColorScheme />
        <Toaster position='bottom-left' />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  </>
}
