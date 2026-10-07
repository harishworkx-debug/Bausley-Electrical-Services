import { business } from '@/data/business';
import type { ServiceFaq } from '@/data/services';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: business.name,
  telephone: business.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: 'US',
  },
  areaServed: ['Valley, AL', 'Lanett, AL', 'West Point, GA', 'La Fayette, AL', 'Chambers County, AL'],
  url: business.domain,
  priceRange: '$$',
};

export const faqSchema = (faqs: ServiceFaq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${business.domain}${item.url}`,
  })),
});

export const serviceSchema = (data: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: data.name,
  description: data.description,
  provider: {
    '@type': 'Electrician',
    name: business.name,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Valley, Alabama',
  },
  url: `${business.domain}${data.url}`,
});
