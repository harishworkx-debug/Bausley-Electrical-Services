import { Helmet } from 'react-helmet-async';
import { business, images } from '@/data/business';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function Seo({
  title,
  description,
  canonicalPath = '/',
  ogImage = images.heroElectrician,
  structuredData,
}: SeoProps) {
  const canonicalUrl = `${business.domain}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
