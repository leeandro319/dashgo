import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrwaerProvider } from '../contexts/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrwaerProvider>
        <Component {...pageProps} />
      </SidebarDrwaerProvider>
    </ChakraProvider>
  )
}

export default MyApp
