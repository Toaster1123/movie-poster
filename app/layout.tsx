import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { Footer, Header, Providers } from '../shared/components/shared';

import './globals.css';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });
export const metadata: Metadata = {
  title: 'Афиша — Кинотеатр «Проекторий»',
  description: 'The best place to watch movies',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center flex-col bg-gray-900`}>
        <div className="flex flex-col w-full min-h-screen max-w-[1250px] mx-auto">
          <Providers>
            <Suspense fallback={<div>Загрузка...</div>}>
            <Header />
            </Suspense>
            {children}
          </Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
