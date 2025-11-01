import React from 'react';
import { Container } from '@/components';
import {
  HeroTitle,
  HeroDescription,
  HeroActions,
  AnimatedBackground,
} from '@/app/(main)/components';
import { ArrowDown } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative overflow-hidden  from-background via-background to-muted/30 min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      <Container size="lg">
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-12">
          <div className="space-y-6">
            <HeroTitle />
          </div>

          <HeroDescription />
          <HeroActions />

          <div className="mt-16">
            <ArrowDown className="w-8 h-8 animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
