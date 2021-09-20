import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import  "../styles/swiper.css";
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
