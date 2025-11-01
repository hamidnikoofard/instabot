import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  description: string;
  faqData: FaqItem[];
  defaultOpenItem?: string;
}

function FaqSection({
  title,
  description,
  faqData,
  defaultOpenItem = 'item-1',
}: FaqSectionProps) {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl">
          {description}
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-5xl mx-auto bg-gray-200 dark:bg-gray-700">
        <div className="p-6 sm:p-8">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={defaultOpenItem}
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={index === faqData.length - 1 ? 'border-b-0' : ''}
              >
                <AccordionTrigger className="text-right cursor-pointer p-2 text-base sm:text-lg font-semibold text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-7 text-base pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export { FaqSection };
