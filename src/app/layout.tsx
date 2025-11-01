import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Insta Bot - ربات اینستاگرام',
  description: 'پلتفرم حرفه‌ای برای مدیریت و رشد حساب‌های اینستاگرام',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
