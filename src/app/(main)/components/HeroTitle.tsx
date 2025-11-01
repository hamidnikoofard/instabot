import React from 'react';

interface HeroTitleProps {
  className?: string;
}

export function HeroTitle({ className = '' }: HeroTitleProps) {
  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up text-foreground ${className}`}
    >
      <span
        className="block animate-fade-in-up mb-2"
        style={{ animationDelay: '0.2s' }}
      >
        ما دایرکتو مدیریت می‌کنیم،
      </span>
      <span
        className="block text-primary animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        تو برندتو رشد بده!
      </span>
    </h1>
  );
}
