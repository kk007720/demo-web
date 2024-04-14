import type { Metadata } from 'next';
import './globals.css';
import { Roboto_Mono as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

import { AboutMe } from './sections/about-me';

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Chia Ming's Demo WebSite`,
  description: 'Personal Portfolio and Resume Presentation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background dark:opacity-80 font-sans antialiased',
          fontSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="Dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-end w-full p-2">
            <ThemeToggle></ThemeToggle>
          </div>

          <section className="sm:container sm:flex sm:justify-center">
            {children}
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
