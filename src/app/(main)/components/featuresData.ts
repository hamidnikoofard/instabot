import { MessageSquare, Zap, BarChart3, ShoppingBag, Users, Bell } from 'lucide-react';

export interface FeatureData {
  id: string;
  icon: typeof MessageSquare;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

export const featuresData: FeatureData[] = [
  {
    id: 'instagram-management',
    icon: MessageSquare,
    title: 'مدیریت سفارش از دایرکت اینستاگرام',
    description:
      'پردازش سریع سفارش‌ها، پاسخ و تغییر وضعیت مستقیم از داخل پنل لینکزا. مدیریت کامل مکالمات و سفارشات در یک مکان.',
    color: 'primary',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'اتوماسیون هوشمند',
    description:
      'پاسخ‌های خودکار، ارسال پیام‌های زمان‌بندی شده و مدیریت هوشمند مشتریان برای افزایش بهره‌وری کسب‌وکار شما.',
    color: 'secondary',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'گزارش‌گیری پیشرفته',
    description:
      'تحلیل کامل عملکرد، آمار فروش، گزارش‌های تفصیلی و نمودارهای تعاملی برای تصمیم‌گیری بهتر در کسب‌وکار.',
    color: 'accent',
  },
  {
    id: 'smart-storefront',
    icon: ShoppingBag,
    title: 'فروشگاه هوشمند و اختصاصی',
    description:
      'ساخت صفحه فروش اختصاصی متصل به اینستاگرام، با طراحی حرفه‌ای و لینک‌های قابل اشتراک. تجربه خرید آسان برای مشتریان بدون نیاز به سایت مجزا.',
    color: 'accent',
  },
  {
    id: 'customer-followup',
    icon: Bell,
    title: 'پیگیری هوشمند مشتریان',
    description:
      'هیچ مشتری‌ای را از دست ندهید! با فالوآپ خودکار، یادآوری خرید، و پیام‌های زمان‌بندی‌شده، تعامل مؤثر و فروش تکراری بسازید.',
    color: 'secondary',
  },
  {
    id: 'team-collaboration',
    icon: Users,
    title: 'مدیریت تیم و همکاری',
    description:
      'اعضای تیم خود را به پنل دعوت کنید، وظایف را تقسیم کنید و گفت‌وگوها را به‌صورت سازمان‌یافته پیش ببرید. همه چیز در کنترل شماست.',
    color: 'primary',
  },
];
