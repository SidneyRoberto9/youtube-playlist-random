import '@/styles/globals.css';

import { Geist, Geist_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { cn } from '@/lib/utils';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'YouTube Playlist Random',
  description: 'Get a random YouTube video from any playlist',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, 'antialiased m-auto max-w-4xl')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
