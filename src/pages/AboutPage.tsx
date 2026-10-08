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
                Rooted in Valley, Alabama
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                Bausley Electrical Services wasn't built overnight. We started with a simple premise: homeowners in East Alabama and West Georgia deserve an electrical contractor who actually shows up on time, explains the problem clearly, and fixes it safely without cutting corners.
              </p>
              <p className="mt-4 text-charcoal-600">
                With years of hands-on experience navigating the unique structural challenges of both historic Southern homes and modern new builds, our team has grown into one of the most trusted names in the Valley area. We don't just work here; we live here, and we treat every client's home exactly how we would treat our own.
              </p>
              
              {/* Credentials Block */}
              <div className="mt-8 rounded-xl border border-navy-100 bg-navy-50 p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900">Licenses & Credentials</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                    <span className="text-sm font-medium text-navy-800">Fully Licensed in Alabama & Georgia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                    <span className="text-sm font-medium text-navy-800">Comprehensive General Liability Insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                    <span className="text-sm font-medium text-navy-800">Bonded for Customer Protection</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-2xl shadow-lg relative group">
                <img src={images.electricianPanel} alt="Electrician performing a comprehensive panel upgrade in Valley, AL" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute bottom-4 left-4 rounded-lg bg-navy-900/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  Recent Panel Upgrade
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl shadow-lg relative group">
                  <img src={images.wiringCutting} alt="Precision wiring installation by Bausley Electrical" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-navy-900/90 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    Safety First
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg relative group">
                  <img src={images.outletGloved} alt="Professional outlet replacement" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-navy-900/90 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    Detailed Work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Proof */}
      <section className="bg-navy-50 section border-y border-navy-100">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                Why Homeowners Choose Bausley
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                It is easy to say we do good work, but our reputation proves it. With a flawless 5.0-star rating across highly competitive local markets, our service philosophy revolves around complete transparency.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-navy-100">
                    <CheckCircle2 className="h-6 w-6 text-electric-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">First-Hand Proof</h3>
                    <p className="mt-1 text-sm text-charcoal-600">
                      Our clients consistently highlight our ability to diagnose complex issues that other contractors missed. We document our work and walk you through every repair step.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-navy-100">
                    <Clock className="h-6 w-6 text-electric-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">Punctuality & Respect</h3>
                    <p className="mt-1 text-sm text-charcoal-600">
                      We know your time is valuable. We arrive when scheduled, protect your floors and furniture, and clean up our workspace entirely before leaving.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-navy-100">
                    <MessageSquare className="h-6 w-6 text-electric-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">No Upfront Surprises</h3>
                    <p className="mt-1 text-sm text-charcoal-600">
                      We believe in upfront, transparent communication regarding pricing and timelines. You will never be caught off guard by hidden fees on your final invoice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reputation Badge */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-sm rounded-2xl bg-white p-8 shadow-xl border border-navy-50 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-8 w-8 text-warning-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-display text-4xl font-bold text-navy-900">5.0</p>
                <p className="mt-2 font-medium text-charcoal-700">Perfect Rating</p>
                <p className="mt-2 text-sm text-charcoal-500">
                  Based on verified reviews from homeowners in Valley, Lanett, and West Point.
                </p>
                <Link to="/contact" className="btn btn-outline mt-6 w-full">
                  Read Our Reviews
                </Link>
              </div>
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
