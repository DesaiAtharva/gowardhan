import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gowardhan Developers | Premium Luxury Real Estate in Pune',
  description: 'Gowardhan Developers - Building Dreams, Creating Landmarks. Discover premium residential and commercial projects in Pune with a commitment to quality and excellence.',
  keywords: 'Gowardhan Developers, Luxury Real Estate Pune, Premium Apartments Baner, Commercial Spaces Wakad, Real Estate Builder Pune',
  openGraph: {
    title: 'Gowardhan Developers | Premium Luxury Real Estate',
    description: 'Transforming landscapes with quality and luxury. Explore our premium projects.',
    url: 'https://gowardhandevelopers.com',
    siteName: 'Gowardhan Developers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Gowardhan Developers',
              image: 'https://gowardhandevelopers.com/logo.png',
              '@id': 'https://gowardhandevelopers.com',
              url: 'https://gowardhandevelopers.com',
              telephone: '+91-XXXX-XXXXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sample Office Address',
                addressLocality: 'Pune',
                postalCode: '411045',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingActions />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
