import React from 'react';
import { Button } from '@/components';
import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';

interface HeroActionsProps {
  className?: string;
}

export function HeroActions({ className = '' }: HeroActionsProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up ${className}`}
      style={{ animationDelay: '0.8s' }}
    >
      <Button variant="outline" size="lg" className="w-full sm:w-auto">
        <Link href="/login" className="flex items-center gap-3 px-6 py-3">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">شروع تست رایگان</span>
        </Link>
      </Button>

      <Button variant="default" size="lg" className="w-full sm:w-auto">
        <Link href="/login" className="flex items-center gap-3 px-6 py-3">
          <Instagram className="w-5 h-5" />
          <span className="font-semibold">اتصال پیج اینستاگرام</span>
        </Link>
      </Button>
    </div>
  );
}
