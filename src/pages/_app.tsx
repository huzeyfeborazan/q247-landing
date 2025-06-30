import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
