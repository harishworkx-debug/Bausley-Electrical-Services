import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Wrench,
  MessageSquare,
  Clock,
  Zap,
  Phone,
  ArrowRight,
  CheckCircle2,
  House,
  MapPin,
} from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { breadcrumbSchema } from '@/data/structuredData';

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
  ];

  const structuredData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  return (
    <>
      <Seo
        title="About Us | Bausley Electrical Services - Valley, AL"
        description="Learn about Bausley Electrical Services, a local electrical service provider in Valley, Alabama focused on workmanship, safety, and clear communication."
        canonicalPath="/about"
        structuredData={structuredData}
      />
      <PageHero
        title="About Bausley Electrical Services"
        description="A local electrical service provider in Valley, Alabama, focused on careful workmanship, safety-conscious service, and clear communication."
        breadcrumbs={breadcrumbs}
        image={images.electricianDrill}
      />

      {/* Main about content */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <Zap className="h-4 w-4" />
                Our Story
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                Local Electrical Service You Can Depend On
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                Bausley Electrical Services provides electrical installation, repair, and safety services to homeowners in Valley, Alabama, and the surrounding communities. We are a local business that takes pride in doing quality electrical work for our neighbors.
              </p>
              <p className="mt-4 text-charcoal-600">
                Our approach is straightforward: do the job right, communicate clearly, and treat every home with the care and respect it deserves. Whether we are installing a new fixture, upgrading an electrical panel, or troubleshooting a complex issue, we bring the same level of attention and professionalism to every project.
              </p>
              <p className="mt-4 text-charcoal-600">
                We understand that electrical work is about more than just wires and panels — it is about the safety and comfort of your home and family. That is why we focus on safety-conscious service in everything we do.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={images.electricianPanel} alt="Electrician working on an electrical panel" className="w-full object-cover" loading="lazy" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img src={images.wiringCutting} alt="Technician organizing electrical wires" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img src={images.outletGloved} alt="Electrician installing an outlet with gloved hands" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50 section">
        <div className="container-x">
          <div className="text-center">
            <h2 className="text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-charcoal-600">
              The values that guide every electrical project we take on.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="card card-hover p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                <Wrench className="h-7 w-7 text-electric-400" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy-900">Workmanship</h3>
              <p className="mt-3 text-sm text-charcoal-600">
                We take pride in the quality of our electrical work. Every installation, repair, and upgrade is done with care, precision, and attention to detail — not rushed or cut short.
              </p>
            </div>
            <div className="card card-hover p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                <ShieldCheck className="h-7 w-7 text-electric-400" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy-900">Safety</h3>
              <p className="mt-3 text-sm text-charcoal-600">
                Electrical work carries real risks. We approach every job with a safety-first mindset — for your home, your family, and everyone who relies on your electrical system.
              </p>
            </div>
            <div className="card card-hover p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                <MessageSquare className="h-7 w-7 text-electric-400" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy-900">Communication</h3>
              <p className="mt-3 text-sm text-charcoal-600">
                We believe you deserve to understand what is happening with your home's electrical system. We explain our work clearly and answer your questions honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={images.fuseBox} alt="Electrician examining a residential fuse box" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <House className="h-4 w-4" />
                What We Do
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold text-navy-900">
                Residential Electrical Services
              </h2>
              <p className="mt-4 text-charcoal-600">
                We focus on residential electrical work — the wiring, panels, outlets, lights, and safety systems that keep your home running. From small repairs to full installations, we handle the electrical needs of homeowners throughout the Valley area.
              </p>
              <ul className="mt-6 space-y-3">
                {services.slice(0, 5).map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/${service.slug}`}
                      className="flex items-center justify-between rounded-lg border border-navy-100 bg-white p-4 transition-colors hover:border-electric-200 hover:bg-electric-50"
                    >
                      <span className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-electric-500" />
                        <span className="font-medium text-navy-800">{service.shortName}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-electric-500" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="btn btn-secondary mt-6">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-navy-900 section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-2 text-sm font-semibold text-electric-300">
                <MapPin className="h-4 w-4" />
                Where We Work
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
                Based in Valley, Serving the Surrounding Area
              </h2>
              <p className="mt-4 text-lg text-navy-200">
                We are based in Valley, Alabama, and provide electrical services to homeowners in the surrounding communities. Being local means we can respond quickly and provide the kind of personal service that matters when you have an electrical issue.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Valley, AL', 'Lanett, AL', 'West Point, GA', 'La Fayette, AL', 'Opelika, AL', 'Auburn, AL'].map((city) => (
                  <span key={city} className="rounded-lg border border-navy-700 bg-navy-800 px-4 py-2 text-sm font-medium text-navy-100">
                    {city}
                  </span>
                ))}
              </div>
              <Link to="/service-areas" className="btn btn-primary mt-8">
                View All Service Areas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={images.residentialHome} alt="Residential home in the Valley, Alabama area" className="w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's Talk About Your Electrical Project"
        description="Call Bausley Electrical Services to discuss what you need or schedule a service visit."
      />
    </>
  );
}
