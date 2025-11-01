import React from 'react';

interface FeaturesHeaderProps {
  title: string;
  description: string;
}

export function FeaturesHeader({ title, description }: FeaturesHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
