import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YHPPNPENCT"></script>
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
        <link rel="icon" type="image/png" href="/Logo - Website.png" />
        <link rel="apple-touch-icon" href="/Logo - Website.png" />
        <meta name="description" content="Experience the future of unattended retail with Smart Market Retail. Modern vending solutions with a tech-forward approach." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link 
          rel="preload" 
          as="style" 
          onLoad="this.onload=null;this.rel='stylesheet'" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        </noscript>
        <link rel="preload" as="image" href="/Logo - Website_medium.webp" type="image/webp" />
      </Head>
      <body className="font-['Inter',sans-serif] pattern-grid">
        {/* Animated Background */}
        <div id="animated-background" className="fixed inset-0 z-0 overflow-hidden">
          <div className="flowing-waves"></div>
        </div>
        
        {/* Hidden form for Netlify form detection */}
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
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}