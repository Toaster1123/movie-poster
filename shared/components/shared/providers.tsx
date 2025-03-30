'use client';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextTopLoader color="#65a30d" showSpinner={false} />
      <Toaster />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};
