import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deniz Barcak - Portfolio',
  description: 'Personal portfolio website of Deniz Barcak',
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