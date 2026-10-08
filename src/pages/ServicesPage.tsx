import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import ServiceCard from '@/components/ServiceCard';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { breadcrumbSchema, serviceSchema } from '@/data/structuredData';

export default function ServicesPage() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  ];

  const structuredData = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ]),
    ...services.map((s) =>
      serviceSchema({ name: s.title, description: s.metaDescription, url: `/${s.slug}` })
    ),
  ];

  return (
    <>
      <Seo
        title="Electrical Services in Valley, AL | Bausley Electrical Services"
        description="Complete electrical services in Valley, Alabama — installation, repair, panel upgrades, wiring, outlets, lighting, ceiling fans, grounding, and diagnostics. Call 334-848-0075."
        canonicalPath="/services"
        structuredData={structuredData}
      />
      <PageHero
        title="Our Electrical Services"
        description="Professional electrical installation, repair, and safety services for homeowners in Valley, Alabama, and the surrounding area."
        breadcrumbs={breadcrumbs}
        image={images.circuitBreaker}
      />

      {/* Services grid */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="bg-navy-900 py-12">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-navy-800 px-6 py-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-electric-400">
                <Zap className="h-6 w-6 text-navy-900" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Not Sure Which Service You Need?</h3>
                <p className="mt-1 text-sm text-navy-200">Call us and we will help you figure it out.</p>
              </div>
            </div>
            <a href={`tel:${business.phoneRaw}`} className="btn btn-primary flex-shrink-0">
              <Phone className="h-5 w-5" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
