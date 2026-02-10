
import Nav from '@/components/Nav';
import { Poppins } from 'next/font/google';

import './globals.css'
import Footer from '@/components/Footer';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '700'],
});


export const metadata = {
  title: "Warm My House",
  description: "Certified Gas Engineer providing professional Domestic and Commercial gas, heating, and plumbing services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
