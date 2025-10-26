'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Admin sayfalarında navbar'ı gösterme
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return <Navbar />;
}
