import './styles/globals.scss';
import { Inter } from 'next/font/google';
import Footer from './components/layout/footer';
import Header from './components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Speedy Pals Store',
  description: 'Created by Michael Hofer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
