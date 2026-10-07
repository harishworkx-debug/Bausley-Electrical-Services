import { useParams, Navigate, Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle2, Navigation } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { business, images } from '@/data/business';
import { serviceAreas, getAreaBySlug } from '@/data/serviceAreas';
import { services, getServiceBySlug } from '@/data/services';
import { breadcrumbSchema } from '@/data/structuredData';

export default function ServiceAreaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getAreaBySlug(slug) : undefined;

  if (!area) {
    return <Navigate to="/service-areas" replace />;
  }

  const primaryService = getServiceBySlug(area.primaryService.slug);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: `${area.city}, ${area.stateAbbr}` },
  ];

  const structuredData = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Service Areas', url: '/service-areas' },
      { name: `${area.city}, ${area.stateAbbr}`, url: `/service-areas/${area.slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${area.primaryService.title} in ${area.city}, ${area.stateAbbr}`,
      description: area.metaDescription,
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
        name: `${area.city}, ${area.stateAbbr}`,
      },
      url: `${business.domain}/service-areas/${area.slug}`,
    },
  ];

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <Seo
        title={area.metaTitle}
        description={area.metaDescription}
        canonicalPath={`/service-areas/${area.slug}`}
        ogImage={images.residentialHome}
        structuredData={structuredData}
      />

      <PageHero
        title={area.h1}
        description={area.description}
        breadcrumbs={breadcrumbs}
        image={images.residentialHome}
      />

      {/* Main content */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              {/* Location info */}
              <div className="flex flex-wrap items-center gap-4 rounded-xl border border-navy-100 bg-navy-50 p-5">
                <div className="flex items-center gap-2 text-sm text-navy-800">
                  <MapPin className="h-5 w-5 text-electric-500" />
                  <span className="font-semibold">{area.city}, {area.stateAbbr}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-800">
                  <Navigation className="h-5 w-5 text-electric-500" />
                  <span>{area.distance} from Valley, AL</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-800">
                  <CheckCircle2 className="h-5 w-5 text-electric-500" />
                  <span>{area.county}</span>
                </div>
              </div>

              {/* Overview */}
              <h2 className="mt-8 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                About Our {area.city} Electrical Services
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-600">
                {area.overview}
              </p>

              {/* Local context */}
              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                Serving {area.city} Homes
              </h3>
              <p className="mt-3 text-charcoal-600">
                {area.localContext}
              </p>

              {/* Primary service focus */}
              <div className="mt-8 rounded-xl border border-electric-200 bg-electric-50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Our {area.primaryService.title} in {area.city}
                </h3>
                <p className="mt-2 text-charcoal-600">
                  {area.serviceFocus}
                </p>
                {primaryService && (
                  <Link
                    to={`/services/${primaryService.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-700 hover:text-electric-600"
                  >
                    Learn About {primaryService.shortName}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              {/* What we offer in this area */}
              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                Electrical Services Available in {area.city}
              </h3>
              <p className="mt-2 text-charcoal-600">
                While our primary focus in {area.city} is {area.primaryService.title.toLowerCase()}, we also provide these additional electrical services to local homeowners:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services
                  .filter((s) => s.slug !== area.primaryService.slug)
                  .slice(0, 6)
                  .map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center justify-between rounded-lg border border-navy-100 bg-white p-4 transition-colors hover:border-electric-200 hover:bg-electric-50"
                    >
                      <span className="text-sm font-medium text-navy-800">{service.shortName}</span>
                      <ArrowRight className="h-4 w-4 text-electric-500" />
                    </Link>
                  ))}
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-xl bg-navy-900 p-6 sm:p-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {area.ctaLabel}
                    </h3>
                    <p className="mt-1 text-sm text-navy-200">
                      Serving {area.city} and the surrounding area.
                    </p>
                  </div>
                  <a href={`tel:${business.phoneRaw}`} className="btn btn-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact card */}
              <div className="card p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Get in Touch</h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  Serving {area.city}, {area.stateAbbr} and nearby areas.
                </p>
                <a href={`tel:${business.phoneRaw}`} className="btn btn-primary mt-4 w-full">
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </a>
                <Link to="/contact" className="btn btn-outline mt-3 w-full">
                  Contact Form
                </Link>
              </div>

              {/* Other service areas */}
              <div className="card p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Other Service Areas</h3>
                <ul className="mt-4 space-y-2">
                  {otherAreas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        to={`/service-areas/${a.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-electric-600"
                      >
                        {a.city}, {a.stateAbbr}
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/service-areas" className="mt-4 inline-block text-sm font-semibold text-electric-600 hover:text-electric-500">
                  View All Areas →
                </Link>
              </div>

              {/* All services */}
              <div className="card p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">All Services</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="rounded-lg bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors hover:bg-electric-50 hover:text-electric-700"
                      >
                        {service.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Electrician in ${area.city}, ${area.stateAbbr}`}
        description={`Call Bausley Electrical Services at ${business.phone} for reliable electrical service in ${area.city}.`}
        ctaLabel="Call"
      />
    </>
  );
}
