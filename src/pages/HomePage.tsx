import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Zap,
  ShieldCheck,
  Wrench,
  Clock,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  MapPin,
  Search,
  ClipboardCheck,
  ThumbsUp,
  House,
  Cable,
  Fan,
  LayoutGrid,
} from 'lucide-react';
import Seo from '@/components/Seo';
import CtaBanner from '@/components/CtaBanner';
import ServiceCard from '@/components/ServiceCard';
import FaqAccordion from '@/components/FaqAccordion';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { localBusinessSchema, faqSchema } from '@/data/structuredData';

const homeFaqs = [
  {
    question: 'What electrical services does Bausley Electrical Services offer?',
    answer:
      'We offer a full range of residential electrical services including electrical installation, repair and troubleshooting, panel upgrades, circuit breaker services, wiring and rewiring, outlet and switch installation, lighting installation, ceiling fan installation, grounding and safety improvements, and power restoration and diagnostics.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Valley, Alabama, and serve the surrounding area including Lanett, West Point, La Fayette, Opelika, Auburn, Phenix City, Salem, Cusseta, and communities throughout Chambers County and Lee County.',
  },
  {
    question: 'How do I schedule an electrical service visit?',
    answer:
      'The fastest way to schedule a visit is to call us at 334-497-0921. You can also use our contact form on the Contact page to send us a message, and we will get back to you to arrange a time.',
  },
  {
    question: 'Do you work on older homes that need wiring updates?',
    answer:
      'Yes. We have experience working with older homes that need wiring inspection, repair, or full rewiring. If your home has original wiring that is decades old, we can assess its condition and recommend the appropriate updates for safety and capacity.',
  },
  {
    question: 'Can you help with electrical emergencies like power loss?',
    answer:
      'Yes. We provide power restoration and diagnostic services to identify the cause of partial or complete power loss and restore safe electrical service. Call us at 334-497-0921 if you are experiencing a power issue.',
  },
  {
    question: 'What should I do if I notice a burning smell from an outlet or switch?',
    answer:
      'A burning smell from an outlet or switch can indicate a serious electrical hazard. Turn off the power at your breaker panel if possible and do not use the affected outlet or switch. Call us immediately at 334-497-0921 to have the issue inspected and repaired.',
  },
];

const warningSigns = [
  'Flickering or dimming lights',
  'Outlets that feel warm to the touch',
  'Breakers that trip repeatedly',
  'Burning smell near outlets or switches',
  'Discolored or sparking outlets',
  'Lights that buzz or hum',
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Bausley Electrical Services | Reliable Electrician in Valley, AL"
        description="Bausley Electrical Services provides reliable electrical installation, repair, panel upgrades, wiring, and lighting services in Valley, Alabama. Call 334-497-0921."
        canonicalPath="/"
        structuredData={localBusinessSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img
            src={images.heroElectrician}
            alt="Professional electrician working on an electrical panel"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/40" />
        </div>
        <div className="absolute inset-0 bg-navy-grid opacity-20" />

        <div className="container-x relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-2 text-sm font-medium text-electric-300">
              <MapPin className="h-4 w-4" />
              Serving Valley, Alabama & Surrounding Areas
            </div>
            <h1 className="animate-fade-in-up mt-6 text-balance font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Electrical Services in{' '}
              <span className="text-electric-400">Valley, Alabama</span>
            </h1>
            <p className="animate-fade-in-up mt-6 max-w-2xl text-balance text-lg text-navy-200 sm:text-xl">
              From installation and repair to panel upgrades and safety improvements — Bausley Electrical Services delivers dependable electrical workmanship for your home.
            </p>
            <div className="animate-fade-in-up mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${business.phoneRaw}`} className="btn btn-primary text-base animate-pulse-glow">
                <Phone className="h-5 w-5" />
                Call {business.phone}
              </a>
              <Link to="/services" className="btn btn-outline border-navy-600 text-white hover:border-electric-400 hover:bg-electric-400 hover:text-navy-900">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-navy-200">
                <ShieldCheck className="h-5 w-5 text-electric-400" />
                Safety-Conscious Service
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-200">
                <Wrench className="h-5 w-5 text-electric-400" />
                Professional Workmanship
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-200">
                <MessageSquare className="h-5 w-5 text-electric-400" />
                Clear Communication
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="h-12 w-full sm:h-16">
            <path d="M0 80L1440 80L1440 0C1140 30 900 50 720 60C540 70 300 70 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <Zap className="h-4 w-4" />
                About Bausley Electrical Services
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                Your Local Electrical Service in Valley, Alabama
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                Bausley Electrical Services provides electrical installation, repair, and safety services to homeowners in Valley and the surrounding communities. We focus on doing the job right — with careful workmanship, clear communication, and dependable service you can count on.
              </p>
              <p className="mt-4 text-charcoal-600">
                Whether you need a new outlet installed, a panel upgraded, wiring inspected, or a complex electrical problem diagnosed, we approach every project with the same commitment to quality and safety.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/about" className="btn btn-secondary">
                  Learn About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
                <img
                  src={images.fuseBox}
                  alt="Electrician examining a residential electrical panel"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-navy-100 bg-white p-5 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-400">
                    <House className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-900">Residential Focus</p>
                    <p className="text-xs text-charcoal-500">Homes in Valley, AL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-navy-50 section">
        <div className="container-x">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
              <Zap className="h-4 w-4" />
              Our Services
            </div>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Complete Electrical Services for Your Home
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-charcoal-600">
              From simple repairs to full installations, we handle the electrical work your home needs — safely and professionally.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn btn-secondary">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <ShieldCheck className="h-4 w-4" />
                Why Choose Us
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                Workmanship, Communication, and Dependable Service
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                We believe that good electrical work is about more than just fixing a problem — it is about doing the job properly, communicating clearly, and being someone you can rely on.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900">
                    <Wrench className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">Careful Workmanship</h3>
                    <p className="mt-1 text-sm text-charcoal-600">
                      Every installation, repair, and upgrade is done with attention to detail and a commitment to doing the job right — not just quickly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900">
                    <MessageSquare className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">Clear Communication</h3>
                    <p className="mt-1 text-sm text-charcoal-600">
                      We explain what we are doing, why it matters, and what your options are — so you can make informed decisions about your home's electrical system.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900">
                    <Clock className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">Dependable Service</h3>
                    <p className="mt-1 text-sm text-charcoal-600">
                      When we say we will be there, we show up. We stand behind our work and are here when you need electrical service in Valley.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img src={images.electricianDrill} alt="Electrician using a drill on an electrical panel" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg sm:mt-8">
                  <img src={images.electricianSafety} alt="Electrician in safety gear working on a rooftop" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg sm:-mt-4">
                  <img src={images.electricianWiring} alt="Electrician working on wiring indoors" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img src={images.outletInstall} alt="Electrician adjusting an electrical outlet" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Electrical Section */}
      <section className="bg-navy-900 section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={images.residentialHome} alt="Contemporary residential home" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-2 text-sm font-semibold text-electric-300">
                <House className="h-4 w-4" />
                Residential Electrical
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl font-bold text-white sm:text-4xl">
                Electrical Installation & Repair for Your Home
              </h2>
              <p className="mt-4 text-lg text-navy-200">
                Your home's electrical system powers everything you do. Whether you need new wiring for a renovation, a panel upgrade to handle modern appliances, or a repair for an outlet that stopped working, we provide the residential electrical services you need.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'New wiring and fixture installation',
                  'Panel upgrades and circuit additions',
                  'Outlet, switch, and lighting installation',
                  'Wiring inspection and rewiring for older homes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-100">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-electric-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services/electrical-installation" className="btn btn-primary mt-8">
                Explore Installation Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Safety & Troubleshooting Section */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-error-50 px-4 py-2 text-sm font-semibold text-error-600">
                <AlertTriangle className="h-4 w-4" />
                Safety & Troubleshooting
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                Warning Signs You Should Not Ignore
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                Electrical problems can be more than just an inconvenience — they can be a safety hazard. If you notice any of these warning signs in your home, it is time to call a professional.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {warningSigns.map((sign) => (
                  <div key={sign} className="flex items-center gap-3 rounded-lg border border-navy-100 bg-white p-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-warning-500" />
                    <span className="text-sm font-medium text-navy-800">{sign}</span>
                  </div>
                ))}
              </div>
              <Link to="/services/electrical-repair-troubleshooting" className="btn btn-secondary mt-8">
                View Repair & Troubleshooting
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={images.multimeterRepair} alt="Electrician using a multimeter to diagnose an electrical issue" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-navy-50 section">
        <div className="container-x">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
              <ClipboardCheck className="h-4 w-4" />
              Our Process
            </div>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              How We Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-charcoal-600">
              A straightforward, three-step process to get your electrical project done right.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-white">
                <Search className="h-8 w-8 text-electric-400" />
              </div>
              <div className="mx-auto mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-electric-400 text-sm font-bold text-navy-900">
                1
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-900">Discuss Your Project</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-charcoal-600">
                Call us to discuss what you need — whether it is an installation, a repair, or an upgrade. We listen to your needs and answer your questions.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-white">
                <ClipboardCheck className="h-8 w-8 text-electric-400" />
              </div>
              <div className="mx-auto mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-electric-400 text-sm font-bold text-navy-900">
                2
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-900">Assess the Work</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-charcoal-600">
                We evaluate the scope of the job, identify any safety concerns, and provide a clear explanation of what the work involves and what it will take.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-white">
                <ThumbsUp className="h-8 w-8 text-electric-400" />
              </div>
              <div className="mx-auto mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-electric-400 text-sm font-bold text-navy-900">
                3
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-900">Complete the Service</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-charcoal-600">
                We perform the work with care and attention to detail, ensuring everything is safe, functional, and meets code — then clean up when we are done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section">
        <div className="container-x">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
              <MapPin className="h-4 w-4" />
              Service Area
            </div>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Serving Valley, Alabama & Beyond
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-charcoal-600">
              Based in Valley, we provide electrical services to homeowners throughout the surrounding area in Alabama and nearby Georgia.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="card card-hover flex items-center justify-between p-4 group"
              >
                <div>
                  <p className="font-display text-sm font-bold text-navy-900 group-hover:text-electric-600">
                    {area.city}
                  </p>
                  <p className="text-xs text-charcoal-500">{area.stateAbbr} · {area.distance}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-electric-500 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/service-areas" className="btn btn-outline">
              View All Service Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-navy-50 section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <MessageSquare className="h-4 w-4" />
                FAQs
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-charcoal-600">
                Have a question about our electrical services? Here are answers to some of the questions we hear most often.
              </p>
              <Link to="/faqs" className="btn btn-secondary mt-6">
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <FaqAccordion faqs={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBanner
        title="Need an Electrician in Valley, Alabama?"
        description="Call Bausley Electrical Services today to discuss your electrical project, schedule a repair, or get answers to your questions."
        ctaLabel="Call"
      />

      {/* Map & Contact Section */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <MapPin className="h-4 w-4" />
                Find Us
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold text-navy-900">
                Contact & Location
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-navy-100 bg-white p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <Phone className="h-5 w-5 text-electric-400" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-900">Phone</p>
                    <a href={`tel:${business.phoneRaw}`} className="text-lg font-semibold text-electric-600 hover:text-electric-500">
                      {business.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-navy-100 bg-white p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <MapPin className="h-5 w-5 text-electric-400" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-900">Address</p>
                    <p className="text-charcoal-600">{business.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-navy-100 bg-white p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <Clock className="h-5 w-5 text-electric-400" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-900">Hours</p>
                    <p className="text-charcoal-600">By appointment — call to schedule</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-secondary mt-6">
                Visit Contact Page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-lg">
                <iframe
                  title="Bausley Electrical Services location map"
                  src={business.mapsEmbedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
