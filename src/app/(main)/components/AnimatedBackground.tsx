import React from 'react';

interface AnimatedElementProps {
  className: string;
  style?: React.CSSProperties;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  className,
  style,
}) => <div className={className} style={style} />;

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden max-w-8xl">
      <AnimatedElement
        className="absolute top-40 left-4 w-12 h-12 bg-primary/10 rounded-full animate-bounce"
        style={{ animationDelay: '0s', animationDuration: '4s' }}
      />
      <AnimatedElement
        className="absolute bottom-40 left-6 w-8 h-8 bg-accent/20 rounded-full animate-bounce"
        style={{ animationDelay: '2s', animationDuration: '5s' }}
      />
      <AnimatedElement
        className="absolute top-1/2 left-2 w-4 h-4 bg-muted/30 rotate-45 animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <AnimatedElement
        className="absolute top-32 right-4 w-14 h-14 bg-secondary/15 rounded-full animate-bounce"
        style={{ animationDelay: '1s', animationDuration: '3.5s' }}
      />
      <AnimatedElement
        className="absolute bottom-48 right-6 w-10 h-10 bg-primary/8 rounded-full animate-bounce"
        style={{ animationDelay: '1.5s', animationDuration: '6s' }}
      />
      <AnimatedElement
        className="absolute top-1/2 right-1/4 w-6 h-6 bg-primary/15 rotate-45 animate-pulse"
        style={{ animationDelay: '2.5s' }}
      />
      <AnimatedElement
        className="absolute top-1/2 right-1/2 w-6 h-6 bg-primary/15 rotate-45 animate-pulse"
        style={{ animationDelay: '2.5s' }}
      />

      <AnimatedElement className="absolute top-1/4 left-1/4 w-1/4 h-px from-transparent via-primary/15 to-transparent animate-pulse" />
      <AnimatedElement
        className="absolute bottom-1/4 right-0 w-1/4 h-px from-transparent via-secondary/15 to-transparent animate-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      <AnimatedElement
        className="absolute top-1/3 left-1/6 w-2 h-2 bg-primary/25 rounded-full animate-ping"
        style={{ animationDelay: '0.8s' }}
      />
      <AnimatedElement
        className="absolute top-1/4 left-1/8 w-2 h-2 bg-primary/25 rounded-full animate-ping"
        style={{ animationDelay: '1.2s' }}
      />
      <AnimatedElement
        className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-secondary/30 rounded-full animate-ping"
        style={{ animationDelay: '2.2s' }}
      />
      <AnimatedElement
        className="absolute bottom-1/5 right-1/8 w-2 h-2 bg-secondary/30 rounded-full animate-ping"
        style={{ animationDelay: '2.5s' }}
      />
    </div>
  );
}
