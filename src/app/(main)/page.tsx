import React from 'react';
import { HeroSection, Features, HowItWorks, Faq } from './components';

function page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Features />
      <HowItWorks />
      <Faq />
    </main>
  );
}

export default page;
