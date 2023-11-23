
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from './_app.type'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/store'
import { theme } from '@/utils'
import { Toaster } from 'react-hot-toast'
import CssVariables from '@/components/_ui/cssVariable/cssVariable.component'
import Layout from '@/layout/globalLayout/Layout.page'



export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const layoutProps = Component.layoutProps
  

  return <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssVariables />
        <CssBaseline enableColorScheme />
        <Toaster position='bottom-left' />
        <Layout {...layoutProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  </>
}
