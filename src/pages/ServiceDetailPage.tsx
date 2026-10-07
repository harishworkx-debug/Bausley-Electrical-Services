import { useParams, Navigate, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, ArrowLeft, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import FaqAccordion from '@/components/FaqAccordion';
import ServiceCard from '@/components/ServiceCard';
import { business } from '@/data/business';
import { services, getServiceBySlug } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/data/structuredData';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.Zap;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: service.shortName },
  ];

  const relatedServices = service.relatedServices
    .map((r) => services.find((s) => s.slug === r.slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const structuredData = [
    serviceSchema({ name: service.title, description: service.metaDescription, url: `/${service.slug}` }),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.shortName, url: `/${service.slug}` },
    ]),
    faqSchema(service.faqs),
  ];

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
        ogImage={service.heroImage}
        structuredData={structuredData}
      />

      <PageHero
        title={service.h1}
        description={service.shortDescription}
        breadcrumbs={breadcrumbs}
        image={service.heroImage}
      />

      {/* Overview section */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <IconComponent className="h-4 w-4" />
                {service.shortName}
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-600">
                {service.overview}
              </p>

              {/* What We Do */}
              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">
                What We Do
              </h3>
              <ul className="mt-4 space-y-3">
                {service.whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-500" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Content image */}
              <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.contentImage}
                  alt={service.shortName}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Warning Signs */}
              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">
                Warning Signs & When to Call
              </h3>
              <p className="mt-2 text-charcoal-600">
                Watch for these signs that indicate it is time to call a professional:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.warningSigns.map((sign) => (
                  <div key={sign} className="flex items-start gap-3 rounded-lg border border-warning-100 bg-warning-50 p-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warning-600" />
                    <span className="text-sm font-medium text-navy-800">{sign}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">
                Benefits
              </h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-10 rounded-xl bg-navy-900 p-6 sm:p-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Need {service.shortName}?
                    </h3>
                    <p className="mt-1 text-sm text-navy-200">
                      Call us today to discuss your project or schedule a visit.
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
              {/* Quick contact card */}
              <div className="card p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Get in Touch</h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  Call now to discuss your electrical needs.
                </p>
                <a href={`tel:${business.phoneRaw}`} className="btn btn-primary mt-4 w-full">
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </a>
                <Link to="/contact" className="btn btn-outline mt-3 w-full">
                  Contact Form
                </Link>
              </div>

              {/* Related services */}
              <div className="card p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Related Services</h3>
                <ul className="mt-4 space-y-2">
                  {service.relatedServices.map((related) => (
                    <li key={related.slug}>
                      <Link
                        to={`/${related.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-electric-600"
                      >
                        {related.label}
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service areas - Full list for SEO */}
              <div className="card p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Service Areas</h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  We provide {service.shortName} across these communities:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        to={`/${area.slug}`}
                        className="rounded-lg bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors hover:bg-electric-50 hover:text-electric-700"
                        title={`${service.shortName} in ${area.city}, ${area.stateAbbr}`}
                      >
                        {area.city}, {area.stateAbbr}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Internal Linking / Areas Served block for SEO */}
      <section className="bg-white section border-t border-navy-50">
        <div className="container-x text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            Providing {service.title} Across East Alabama & West Georgia
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-charcoal-600">
            At Bausley Electrical Services, we are proud to offer our comprehensive {service.title.toLowerCase()} to homeowners and businesses throughout the region. Click on any of the locations below to learn more about our specific localized services in your city.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={`footer-${area.slug}`}
                to={`/${area.slug}`}
                className="group flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50 px-5 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-electric-500 hover:bg-electric-50"
              >
                <MapPin className="h-4 w-4 text-electric-500 transition-transform group-hover:scale-110" />
                {service.shortName} in {area.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-navy-50 section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <Icons.HelpCircle className="h-4 w-4" />
                FAQs
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {service.shortName} FAQs
              </h2>
              <p className="mt-4 text-charcoal-600">
                Common questions about our {service.shortName.toLowerCase()} services.
              </p>
            </div>
            <div>
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Related services grid */}
      {relatedServices.length > 0 && (
        <section className="section">
          <div className="container-x">
            <h2 className="text-center font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Related Services
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} service={s} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title={`Ready for ${service.shortName}?`}
        description={`Call Bausley Electrical Services at ${business.phone} to ${service.ctaLabel.toLowerCase()}.`}
        ctaLabel={service.ctaLabel}
      />
    </>
  );
}
