'use client';
import { useState, useEffect } from 'react';
import {
  LogInIcon,
  MenuIcon,
  XIcon,
  Home,
  DollarSign,
  Info,
  Phone,
} from 'lucide-react';
import { Button } from '@/components';
import { navMenuList } from './NavMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const getMenuIcon = (href: string) => {
    switch (href) {
      case '/':
        return <Home className="w-5 h-5" />;
      case '/prices':
        return <DollarSign className="w-5 h-5" />;
      case '/about':
        return <Info className="w-5 h-5" />;
      case '/contact':
        return <Phone className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        const nav = document.querySelector('[data-mobile-nav]');
        const button = document.querySelector('[data-menu-button]');

        if (nav && !nav.contains(target) && !button?.contains(target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden ">
      <div className="flex items-center justify-between py-4 px-4 bg-background backdrop-blur-lg border-b border-border/40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="relative w-10 h-10 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 group"
          data-menu-button
        >
          <MenuIcon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
        </Button>
        <div />
        <Button variant={'outline'} size={'sm'} className="text-sm">
          <Link href="/login">ثبت نام | ورود</Link>
        </Button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        data-mobile-nav
        className={cn(
          'fixed top-0 right-0  w-80 max-w-[85vw] bg-background/95 h-screen backdrop-blur-xl z-50 shadow-lg border-l border-border/40 transform transition-all duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex flex-col h-[calc(100vh-12rem)]">
          <div className="flex items-center justify-between p-6 border-b border-border/40  from-background to-background/80">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 group"
            >
              <XIcon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
            </Button>
            <span className="font-bold text-lg text-primary">منو</span>
            <div className="w-10 h-10" />
          </div>

          <div className="flex-1 flex flex-col p-6 space-y-2">
            {navMenuList.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'group relative flex items-center gap-4 p-4 rounded-2xl font-medium transition-all duration-300 transform hover:bg-primary/5',
                  isActive(item.href) &&
                    'bg-primary/10 text-primary border border-primary/20',
                )}
              >
                <div
                  className={cn(
                    'transition-colors duration-300',
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-muted-foreground group-hover:text-primary',
                  )}
                >
                  {getMenuIcon(item.href)}
                </div>
                <span
                  className={cn(
                    'text-lg font-medium transition-all duration-300 flex-1',
                    isActive(item.href) && 'font-semibold',
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-border/40 bg-background">
            <Button
              variant="outline"
              size={'lg'}
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Link
                href="/login"
                className="flex items-center justify-center gap-3 w-full"
              >
                <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-all duration-300">
                  ثبت نام | ورود
                </span>
                <LogInIcon className="w-5 h-5 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { MobileNav };
