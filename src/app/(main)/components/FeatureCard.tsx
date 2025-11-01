import React from 'react';
import { LucideIcon, ArrowLeft } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

const colorClasses = {
  primary: {
    icon: 'text-primary',
    bg: 'bg-primary/10',
    text: 'text-primary',
    hover: 'group-hover:text-primary/80',
    border: 'border-primary/20',
  },
  secondary: {
    icon: 'text-secondary',
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    hover: 'group-hover:text-secondary/80',
    border: 'border-secondary/20',
  },
  accent: {
    icon: 'text-accent',
    bg: 'bg-accent/10',
    text: 'text-accent',
    hover: 'group-hover:text-accent/80',
    border: 'border-accent/20',
  },
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  const classes = colorClasses[color];

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-border">
      <CardHeader className="pb-6">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 ${classes.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`w-7 h-7 ${classes.icon}`} />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </CardContent>
      <CardFooter className="pt-6">
        <div
          className={`flex items-center ${classes.text} font-medium ${classes.hover} transition-colors duration-300 cursor-pointer group-hover:translate-x-1`}
        >
          <span>ادامه مطلب</span>
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </CardFooter>
    </Card>
  );
}
