import { ThemeProvider } from '@mui/material';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import theme from './theme';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'MEME',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistSans.variable} ${geistMono.variable}`}>
        <div id="root">
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}