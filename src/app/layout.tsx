import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/header';
const inter = Inter({ subsets: ['latin'], weight: ['400'] });
export const metadata: Metadata = {
  title: 'Galaxy films',
  description: 'The best place to watch movies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  flex items-center flex-col bg-gray-900`}>
        <div className="w-full max-w-[1250px] mx-auto  ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
