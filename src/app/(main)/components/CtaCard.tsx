import Link from 'next/link';
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface CtaCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  icon?: React.ReactNode;
}

function CtaCard({
  title = 'هنوز سوالی دارید؟',
  description = 'تیم پشتیبانی ما آماده پاسخگویی به شماست',
  buttonText = 'تماس با پشتیبانی',
  buttonHref = '/contact',
  icon,
}: CtaCardProps) {
  const defaultIcon = <MessageCircle className="w-6 h-6 text-primary" />;

  return (
    <div className="text-center mt-12 max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
            {icon || defaultIcon}
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-base">{description}</p>
        </div>

        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export { CtaCard };
