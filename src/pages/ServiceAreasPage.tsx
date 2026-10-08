import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, Zap } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { business, images } from '@/data/business';
import { serviceAreas } from '@/data/serviceAreas';
import { breadcrumbSchema } from '@/data/structuredData';

export default function ServiceAreasPage() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
  ];

  const structuredData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
  ]);

  return (
    <>
      <Seo
        title="Service Areas | Bausley Electrical Services"
        description="Bausley Electrical Services serves Valley, Alabama and surrounding communities including Lanett, West Point, La Fayette, Opelika, Auburn, and more. Call 334-848-0075."
        canonicalPath="/service-areas"
        structuredData={structuredData}
      />
      <PageHero
        title="Service Areas"
        description="Based in Valley, Alabama, we provide electrical services to homeowners throughout the surrounding region in Alabama and nearby Georgia."
        breadcrumbs={breadcrumbs}
        image={images.modernHome}
      />

      {/* Areas grid */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.filter(Boolean).map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={images.residentialHome}
                    alt={`Electrical services in ${area.city}, ${area.stateAbbr}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg font-bold text-white">{area.city}</p>
                      <p className="text-xs text-navy-200">{area.county}, {area.stateAbbr}</p>
                    </div>
                    <div className="rounded-full bg-electric-400 px-2.5 py-1 text-xs font-bold text-navy-900">
                      {area.distance}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-semibold text-navy-900">Primary Service:</p>
                  <p className="mt-1 text-sm text-charcoal-600">{area.primaryService.title}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors group-hover:text-electric-500">
                    View {area.city} Page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section className="bg-navy-50 py-12">
        <div className="container-x">
          <div className="rounded-xl border border-navy-100 bg-white p-6 text-center sm:p-8">
            <MapPin className="mx-auto h-10 w-10 text-electric-500" />
            <h2 className="mt-4 font-display text-xl font-bold text-navy-900 sm:text-2xl">
              Don't See Your Area Listed?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-charcoal-600">
              We may still be able to help. Call us at {business.phone} to ask about service availability in your location.
            </p>
            <a href={`tel:${business.phoneRaw}`} className="btn btn-primary mt-6">
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
