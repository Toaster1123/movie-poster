import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ChooseSpotPopup from '@/components/choose-spot-in-hall';
import { Register } from '@/components/register';
const inter = Inter({ subsets: ['latin'], weight: ['400'] });
export const metadata: Metadata = {
  title: 'Афиша — Кинотеатр «Проекторий»',
  description: 'The best place to watch movies',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  flex items-center flex-col bg-gray-900`}>
        <div className="flex flex-col w-full min-h-screen max-w-[1250px] mx-auto  ">
          <NextTopLoader color="#65a30d" showSpinner={false} />
          <ChooseSpotPopup />
          <Register />

          <Header />
          <main className="flex-grow flex bg-gray-200 flex-col ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
