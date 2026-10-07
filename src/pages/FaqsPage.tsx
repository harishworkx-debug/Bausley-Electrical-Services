import { Link } from 'react-router-dom';
import { HelpCircle, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import FaqAccordion from '@/components/FaqAccordion';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { faqSchema, breadcrumbSchema } from '@/data/structuredData';

const generalFaqs = [
  {
    question: 'What electrical services does Bausley Electrical Services offer?',
    answer:
      'We offer a full range of residential electrical services including electrical installation, repair and troubleshooting, panel upgrades, circuit breaker services, wiring and rewiring, outlet and switch installation, lighting installation, ceiling fan installation, grounding and safety improvements, and power restoration and diagnostics.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Valley, Alabama, and serve the surrounding area including Lanett, West Point, La Fayette, Opelika, Auburn, Phenix City, Salem, Cusseta, and communities throughout Chambers County and Lee County. If you are not sure whether we cover your area, call us at 334-497-0921.',
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
  {
    question: 'How do I know if my electrical panel needs an upgrade?',
    answer:
      'Common signs include frequent breaker trips, flickering lights, a warm panel, or a panel rated below 200 amps for a modern household. We can inspect your panel and recommend whether an upgrade is needed. See our Electrical Panel Repair & Upgrades page for more information.',
  },
  {
    question: 'Do you install ceiling fans and light fixtures?',
    answer:
      'Yes, we install ceiling fans and light fixtures of all types. This includes recessed lighting, pendant lights, outdoor lighting, and ceiling fans with proper fan-rated support boxes. See our Lighting Installation and Ceiling Fan Installation pages for details.',
  },
  {
    question: 'What is the difference between GFCI and AFCI protection?',
    answer:
      'GFCI (Ground Fault Circuit Interrupter) protection guards against electric shock in wet areas like kitchens, bathrooms, and outdoors. AFCI (Arc Fault Circuit Interrupter) protection detects dangerous electrical arcs that can cause fires. Both are required by current electrical codes in specific areas of the home.',
  },
  {
    question: 'Can you add additional outlets to my home?',
    answer:
      'Yes. We install new outlets in any room, including GFCI outlets for wet areas, USB outlets for convenient charging, and smart outlets. We assess your existing wiring and recommend a safe layout that meets your needs and local code requirements.',
  },
  {
    question: 'How often should I have my electrical system inspected?',
    answer:
      'For homes over 30 years old, a safety inspection every 3-5 years is recommended. We also recommend an inspection before purchasing an older home, after major renovations, or if you notice any warning signs of electrical problems such as flickering lights or tripping breakers.',
  },
  {
    question: 'Do you provide whole-house surge protection?',
    answer:
      'Yes. We install whole-house surge protectors at the electrical panel to protect your home from voltage spikes caused by lightning, grid switching, or other external surges. This supplements but does not replace point-of-use surge protectors for sensitive electronics.',
  },
];

export default function FaqsPage() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'FAQs', path: '/faqs' },
  ];

  const structuredData = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'FAQs', url: '/faqs' },
    ]),
    faqSchema(generalFaqs),
  ];

  return (
    <>
      <Seo
        title="FAQs | Bausley Electrical Services - Valley, AL"
        description="Frequently asked questions about electrical services in Valley, Alabama. Get answers about installation, repair, panel upgrades, wiring, safety, and more."
        canonicalPath="/faqs"
        structuredData={structuredData}
      />
      <PageHero
        title="Frequently Asked Questions"
        description="Answers to common questions about our electrical services, safety, and what to expect when you work with Bausley Electrical Services."
        breadcrumbs={breadcrumbs}
        image={images.multimeterTools}
      />

      {/* General FAQs */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
                <HelpCircle className="h-4 w-4" />
                General Questions
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Common Questions
              </h2>
              <p className="mt-4 text-charcoal-600">
                Here are answers to the questions we hear most often from homeowners in Valley and the surrounding area. If you do not find your question here, call us at {business.phone}.
              </p>

              {/* Service-specific FAQ links */}
              <div className="mt-8 card p-5">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                  Service-Specific FAQs
                </h3>
                <ul className="mt-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-electric-600"
                      >
                        {service.shortName}
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <FaqAccordion faqs={generalFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-navy-50 py-16">
        <div className="container-x">
          <div className="rounded-xl border border-navy-100 bg-white p-8 text-center sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
              <MessageSquare className="h-7 w-7 text-electric-400" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-charcoal-600">
              We are happy to answer any questions you have about your electrical project or our services. Give us a call or send a message.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`tel:${business.phoneRaw}`} className="btn btn-primary">
                <Phone className="h-5 w-5" />
                {business.phone}
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Form
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
