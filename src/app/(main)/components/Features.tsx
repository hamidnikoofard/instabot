import React from 'react';
import { featuresData } from './featuresData';
import { FeatureCard, FeaturesHeader } from './index';
import { Container } from '@/components';

function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <Container size="lg">
        <div className="flex flex-col items-center justify-center">
          <FeaturesHeader
            title="قابلیت‌ها"
            description="با مجموعه‌ای از ابزارهای پیشرفته ما دایرکت‌ها رو مدیریت کن، فروش رو ساده‌تر کن و برندت رو حرفه‌ای‌تر بساز."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl w-full">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Features };
