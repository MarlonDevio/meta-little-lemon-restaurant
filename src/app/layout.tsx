import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/ui/components/navigationBar/navbar';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Little Lemon',
  description: 'Little Lemon is a restaurant in the heart of the city.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
