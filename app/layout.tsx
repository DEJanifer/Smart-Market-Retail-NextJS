import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SitemapProvider } from './contexts/SitemapContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SMART MARKET RETAIL - A Smarter Way to Vend',
  description: 'Transform your workspace with Smart Market Retail\'s AI-powered vending machines and micro markets. Serving Carroll & Baltimore County Maryland with 24/7 unattended retail solutions.',
  keywords: 'smart vending machines, micro markets, unattended retail, office vending, Carroll County MD, Baltimore County MD',
  icons: {
    icon: '/Logo - Website.png',
    apple: '/Logo - Website.png',
  },
  openGraph: {
    title: 'SMART MARKET RETAIL - A Smarter Way to Vend',
    description: 'Transform your workspace with Smart Market Retail\'s AI-powered vending machines and micro markets.',
    url: 'https://smartmarketretail.com',
    siteName: 'Smart Market Retail',
    images: [
      {
        url: '/Logo - Website_large.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMART MARKET RETAIL - A Smarter Way to Vend',
    description: 'Transform your workspace with Smart Market Retail\'s AI-powered vending machines and micro markets.',
    images: ['/Logo - Website_large.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YHPPNPENCT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YHPPNPENCT');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className={`${inter.className} font-['Inter',sans-serif] pattern-grid`}>
        <div id="animated-background" className="fixed inset-0 z-0 overflow-hidden">
          <div className="flowing-waves"></div>
        </div>
        
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
          <input type="text" name="location" />
          <input type="text" name="solutions" />
          <input type="text" name="helpWith" />
          <input type="text" name="businessName" />
          <input type="text" name="subject" />
          <input type="text" name="bot-field" />
        </form>
        
        <SitemapProvider>
          {children}
        </SitemapProvider>
      </body>
    </html>
  );
}