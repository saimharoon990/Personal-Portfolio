import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saim Haroon — Academic Portfolio',
  description:
    'A-Level student at Roots Ivy International School under the Cambridge International curriculum, specializing in Computer Science, Mathematics, and Physics. Focused on software architecture, robotics, and climate resilience.',
  openGraph: {
    title: 'Saim Haroon — Academic Portfolio',
    description: 'Academic Portfolio',
    url: 'https://saimharoon.com',
    type: 'website',
    images: [
      {
        url: 'https://saimharoon.com/page_preview.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saim Haroon — Academic Portfolio',
    description: 'Academic Portfolio',
    images: ['https://saimharoon.com/page_preview.png'],
  },
  verification: {
    google: '2GYzLjAA2sQ2-PvS5bxdybCQbhlbHBbipUtScfsIR7Q',
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
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GX66CL7RZE"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GX66CL7RZE');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
