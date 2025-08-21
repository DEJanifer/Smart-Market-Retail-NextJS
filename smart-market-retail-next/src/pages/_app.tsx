import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { SitemapProvider } from '../contexts/SitemapContext';
import '../styles/globals.css';

// Swiper CSS imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <SitemapProvider>
        <Component {...pageProps} />
      </SitemapProvider>
    </HelmetProvider>
  );
}