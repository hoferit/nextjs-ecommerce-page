import './styles/globals.scss';
import { Open_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from './components/layout/footer';
import Header from './components/layout/header';

const nunito = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Speedy Pals Store | Speedy Pals',
    template: '%s | Speedy Pals',
  },
  description: 'A Pet Pal Toy Store created by Michael Hofer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
