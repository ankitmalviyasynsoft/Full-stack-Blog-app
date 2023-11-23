
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/store'
import { theme } from '@/utils'



export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  </>
}
