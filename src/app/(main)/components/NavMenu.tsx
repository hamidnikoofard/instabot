'use client';
import { Button, Container } from '@/components';
import { LogInIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const navMenuList = [
  {
    label: 'صفحه اصلی',
    href: '/',
  },
  {
    label: 'تعرفه ها',
    href: '/prices',
  },
  {
    label: 'درباره ما',
    href: '/about',
  },
  {
    label: 'تماس با ما',
    href: '/contact',
  },
];

function NavMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <Container>
      <nav className="hidden md:flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
        >
          <Image src="/logo.png" alt="Insta Bot" width={50} height={50} />
        </Link>

        <div className="flex items-center space-x-8">
          {navMenuList.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 hover:bg-accent/10',
                isActive(item.href)
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button variant="outline" size="sm">
          <Link href="/login" className="flex items-center gap-2">
            <span className="font-medium">ثبت نام | ورود</span>
            <LogInIcon className="w-4 h-4 rotate-180" />
          </Link>
        </Button>
      </nav>
    </Container>
  );
}

export { NavMenu };
