'use client';
import React from 'react';
import { UserPlus, Instagram, Link2, Bot, LucideIcon } from 'lucide-react';

interface ProgressStep {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  threshold: number;
}

const steps: ProgressStep[] = [
  {
    id: 1,
    icon: UserPlus,
    title: 'ثبت‌نام در لینکزا',
    description:
      'یک حساب کاربری بسازید تا پنل مدیریت دایرکت‌ها و ربات خود را فعال کنید.',
    threshold: 0.1,
  },
  {
    id: 2,
    icon: Instagram,
    title: 'ورود با حساب اینستاگرام',
    description:
      'با حساب اینستاگرام خود وارد شوید تا لینکزا به‌صورت امن به پیج شما متصل شود.',
    threshold: 0.35,
  },
  {
    id: 3,
    icon: Link2,
    title: 'اتصال پیج بیزنسی',
    description:
      'پیج کاری خود را انتخاب و متصل کنید تا ربات لینکزا دایرکت‌ها را مدیریت کند.',
    threshold: 0.65,
  },
  {
    id: 4,
    icon: Bot,
    title: 'فعال‌سازی ربات هوشمند',
    description:
      'ربات پاسخ‌گوی خودکار را فعال کنید تا بدون دردسر، فروش و ارتباطتان رشد کند.',
    threshold: 0.9,
  },
];

const CompletedStep = ({ step }: { step: ProgressStep }) => {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center group">
      <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-accent shadow-sm shadow-accent/20 transition-all duration-500">
        <Icon className="w-7 h-7 text-accent-foreground" />
      </div>
      <h3 className="mt-4 text-center font-bold text-base w-32 text-foreground">
        {step.title}
      </h3>
      <div className="absolute top-full mt-6 bg-card border border-border shadow-md rounded-2xl p-4 w-64 text-center z-10">
        <p className="text-sm text-card-foreground leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

function DesktopHowItWorks() {
  return (
    <div className=" w-full h-[50vh] py-16 hidden md:block">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="relative w-full">
          <div className="absolute top-8 left-8 right-8 h-1.5 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-muted" />
            <div className="absolute top-0 left-0 h-full rounded-full bg-primary w-full" />
          </div>
          <div className="relative flex flex-row-reverse justify-between items-start">
            {steps.map((step) => (
              <CompletedStep key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { DesktopHowItWorks };
