import { useParams, Navigate, Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle2, Navigation, AlertTriangle, HelpCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import FaqAccordion from '@/components/FaqAccordion';
import { business, images } from '@/data/business';
import { serviceAreas, getAreaBySlug } from '@/data/serviceAreas';
import { services, getServiceBySlug } from '@/data/services';
import { breadcrumbSchema, faqSchema } from '@/data/structuredData';
import { testimonials } from '@/data/testimonials';
import { Star } from 'lucide-react';

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
      { name: `${area.city}, ${area.stateAbbr}`, url: `/${area.slug}` },
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
      url: `${business.domain}/${area.slug}`,
    },
    area.faqs && area.faqs.length > 0 ? faqSchema(area.faqs) : {},
  ];

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <Seo
        title={area.metaTitle}
        description={area.metaDescription}
        canonicalPath={`/${area.slug}`}
        ogImage={images.residentialHome}
        structuredData={structuredData.filter(Boolean)}
      />

      <PageHero
        title={area.h1}
        description={area.description}
        breadcrumbs={breadcrumbs}
        image={images.residentialHome}
        showCta={true}
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
                Serving {area.city} Homes & Neighborhoods
              </h3>
              <p className="mt-3 text-charcoal-600">
                {area.localContext}
              </p>
              {area.neighborhoods && area.neighborhoods.length > 0 && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {area.neighborhoods.map((hood) => (
                    <li key={hood} className="flex items-center gap-2 text-sm text-navy-800 bg-navy-50 px-3 py-2 rounded-md">
                      <MapPin className="h-4 w-4 text-electric-500" />
                      {hood}
                    </li>
                  ))}
                </ul>
              )}

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
                    to={`/${primaryService.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-700 hover:text-electric-600"
                  >
                    Learn About {primaryService.shortName}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
              
              {/* Common problems */}
              {area.commonProblems && area.commonProblems.length > 0 && (
                <>
                  <h3 className="mt-10 font-display text-xl font-bold text-navy-900">
                    Common Electrical Problems in {area.city}
                  </h3>
                  <p className="mt-2 text-charcoal-600">
                    Many homeowners in this area encounter specific electrical issues due to the age of the housing stock and local weather patterns. We frequently resolve:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {area.commonProblems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3">
                        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warning-500" />
                        <span className="text-charcoal-700">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {/* Why choose us */}
              {area.whyChooseUs && (
                <>
                  <h3 className="mt-10 font-display text-xl font-bold text-navy-900">
                    Why Choose Us in {area.city}?
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-charcoal-600 bg-navy-50 p-5 rounded-xl border-l-4 border-electric-500">
                    {area.whyChooseUs}
                  </p>
                </>
              )}

              {/* What we offer in this area */}
              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">
                Other Electrical Services Available in {area.city}
              </h3>
              <p className="mt-2 text-charcoal-600">
                While our primary focus in {area.city} is {area.primaryService.title.toLowerCase()}, we also provide these additional electrical services to local homeowners:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services
                  .filter((s) => s.slug !== area.primaryService.slug)
                  .map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}`}
                      className="flex items-center justify-between rounded-lg border border-navy-100 bg-white p-4 transition-colors hover:border-electric-200 hover:bg-electric-50"
                    >
                      <span className="text-sm font-medium text-navy-800">{service.shortName}</span>
                      <ArrowRight className="h-4 w-4 text-electric-500" />
                    </Link>
                  ))}
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
                        to={`/${a.slug}`}
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
            </aside>
          </div>
        </div>
      </section>

      {/* Customer Proof Section */}
      <section className="section bg-white border-t border-navy-50">
        <div className="container-x">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Trusted in {area.city}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal-600">
              See what local homeowners are saying about our electrical services.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <div key={i} className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-navy-50/50 p-6 shadow-sm">
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning-400 text-warning-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-charcoal-700 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="mt-6 border-t border-navy-100 pt-4">
                  <p className="font-display text-sm font-bold text-navy-900">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      {area.faqs && area.faqs.length > 0 && (
        <section className="bg-navy-50 section">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                  <HelpCircle className="h-4 w-4" />
                  {area.city} FAQs
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-charcoal-600">
                  Answers to common electrical questions from homeowners in {area.city}.
                </p>
              </div>
              <div>
                <FaqAccordion faqs={area.faqs} />
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title={`Electrician in ${area.city}, ${area.stateAbbr}`}
        description={`Call Bausley Electrical Services at ${business.phone} for reliable electrical service in ${area.city}.`}
        ctaLabel="Call"
      />
    </>
  );
}
