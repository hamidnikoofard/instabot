import SmoothScrollProvider from '@/hooks/SmoothScrollProvider';
import { Footer, Header } from './components';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </SmoothScrollProvider>
  );
}
