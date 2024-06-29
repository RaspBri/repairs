import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Providers from '@/app/providers';

const nunito = Nunito({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'O(1) Software Network',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-16 ${nunito.className}`}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}