import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { Footer, Header } from '../shared/components/shared';

import './globals.css';

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
        <div className="flex flex-col w-full min-h-screen max-w-[1250px] mx-auto  ">
          <Header />

          <NextTopLoader color="#65a30d" showSpinner={false} />
          {/* <ChooseSpotPopup /> */}

          <main className="flex-grow flex bg-gray-200 flex-col ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
