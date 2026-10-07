import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100 rounded-xl border border-navy-100 bg-white">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-navy-50/50"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-content-${i}`}
          >
            <span className="font-display text-base font-semibold text-navy-900">
              {faq.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 text-electric-500 transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === i && (
            <div
              id={`faq-content-${i}`}
              className="animate-fade-in px-5 pb-5 text-sm leading-relaxed text-charcoal-600"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
