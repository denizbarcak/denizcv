'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PlanViaPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check access from localStorage and validate with backend
    const checkAccess = async () => {
      try {
        const storedData = localStorage.getItem('planvia_access');

        if (!storedData) {
          // No access data found
          router.push('/portfolio/software-web');
          return;
        }

        const data = JSON.parse(storedData);

        // Check if access has expired (local check first for better UX)
        if (data.expiresAt) {
          const expiryDate = new Date(data.expiresAt);
          const now = new Date();

          if (now > expiryDate) {
            // Access expired
            localStorage.removeItem('planvia_access');
            alert(language === 'en'
              ? 'Your access has expired. Please request a new code.'
              : 'Erişiminiz sona erdi. Lütfen yeni bir kod talep edin.');
            router.push('/portfolio/software-web');
            return;
          }
        }

        // Validate with backend to check if code still exists and is active
        if (data.username && data.code) {
          try {
            const response = await fetch('http://localhost:3001/api/auth/validate-access', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: data.username,
                code: data.code,
              }),
            });

            const result = await response.json();

            if (!result.valid) {
              // Code has been deleted or deactivated by admin
              localStorage.removeItem('planvia_access');
              alert(language === 'en'
                ? 'Your access has been revoked. Please contact the administrator.'
                : 'Erişiminiz iptal edildi. Lütfen yönetici ile iletişime geçin.');
              router.push('/portfolio/software-web');
              return;
            }
          } catch (backendError) {
            console.error('Backend validation error:', backendError);
            // If backend is down, allow access but log the error
            // You can change this behavior to deny access if preferred
          }
        }

        // Access is valid
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking access:', error);
        localStorage.removeItem('planvia_access');
        router.push('/portfolio/software-web');
      }
    };

    checkAccess();
  }, [router, language]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <main className="bg-primary relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 min-h-screen pt-16">
        {/* Main Content */}
        <div className="flex items-center justify-center px-4 py-12 min-h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl w-full"
          >
            <div className="bg-secondary/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700/50">
              {/* PlanVia Logo/Title */}
              <div className="text-center mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{
                  background: 'linear-gradient(135deg, #9333ea 0%, #e879f9 50%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                }}>
                  PlanVia
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  {language === 'en' ? 'Project Presentation' : 'Proje Sunumu'}
                </p>
              </div>

              {/* Placeholder Content */}
              <div className="bg-primary/30 rounded-xl p-8 border border-gray-700/30">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  {language === 'en' ? 'Coming Soon' : 'Çok Yakında'}
                </h2>
                <p className="text-gray-300 leading-relaxed text-center text-lg">
                  {language === 'en'
                    ? 'The detailed project presentation content will be available here soon. This page will showcase comprehensive information about the PlanVia project, including features, architecture, and implementation details.'
                    : 'Detaylı proje sunum içeriği yakında burada mevcut olacaktır. Bu sayfa PlanVia projesi hakkında özellikler, mimari ve uygulama detayları dahil olmak üzere kapsamlı bilgileri sergileyecektir.'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-secondary/30 backdrop-blur-xl border-t border-gray-700/50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400 text-sm">
              {language === 'en'
                ? '© 2025 Deniz Barçak. All rights reserved.'
                : '© 2025 Deniz Barçak. Tüm hakları saklıdır.'}
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
