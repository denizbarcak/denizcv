import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#0A192F', // Dark blue background color
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Deniz Barçak - Portfolio | 3D Designer & Software Developer',
  description: 'Portfolio of Deniz Barçak - showcasing 3D design projects, software development work, and web applications. Explore my creative and technical projects.',
  keywords: ['Deniz Barçak', 'portfolio', '3D design', 'software developer', 'web developer', 'designer'],
  authors: [{ name: 'Deniz Barçak' }],
  openGraph: {
    title: 'Deniz Barçak - Portfolio',
    description: 'Portfolio showcasing 3D design and software development projects',
    type: 'website',
  },
  icons: {
    icon: '/images/Others/favicon_final.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<LoadingScreen />}>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}