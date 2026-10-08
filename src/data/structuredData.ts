import { business } from '@/data/business';
import type { ServiceFaq } from '@/data/services';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: business.name,
  logo: 'https://www.bausleyelectricalservices.com/logo.png',
  image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  description: 'Expert electrical installation, repair, and troubleshooting in Valley, Alabama. Fully licensed and insured residential and commercial electricians.',
  telephone: '+1-334-848-0075',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7342296,
    longitude: -85.1349214,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: 'Emergency service by appointment',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '17',
  },
  sameAs: [
    // Placeholder links for Google Business Profile, Facebook, etc.
    'https://www.google.com/maps?cid=YOUR_GBP_CID_HERE',
    'https://www.facebook.com/YOUR_FACEBOOK_PAGE'
  ],
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
    telephone: '+1-334-848-0075',
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
