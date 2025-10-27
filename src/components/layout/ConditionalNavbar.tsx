'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Admin sayfalarında navbar'ı gösterme
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Check if we're on PlanVia page
  const isPlanViaPage = pathname === '/portfolio/planvia';

  return <Navbar showPlanViaExtension={isPlanViaPage} />;
}
