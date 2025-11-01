import { MobileHowItWorks } from './MobileHowItWorks';
import { DesktopHowItWorks } from './DesktopHowItWorks';
import { Container } from '@/components';

function HowItWorks() {
  return (
    <section className="w-full bg-background py-20">
      <Container size="lg">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            فقط چند قدم تا هوشمند شدن فروش!
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            از ورود تا فعال‌سازی ربات، همه‌چیز توی لینکزا ساده و سریع پیش می‌ره.
            تو فقط به رشد برندت فکر کن، ما بقیه کارا رو مدیریت می‌کنیم
          </p>
        </div>

        <MobileHowItWorks />
        <DesktopHowItWorks />
      </Container>
    </section>
  );
}

export { HowItWorks };
