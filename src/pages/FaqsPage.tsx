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
    question: 'How quickly can an electrician come to my Valley home?',
    answer:
      'We understand that electrical issues can disrupt your day. For our neighbors in Valley, Lanett, and the immediate surrounding areas, we prioritize prompt scheduling. While standard service calls are typically scheduled within a few days, we also offer emergency troubleshooting by appointment. Call us directly at 334-848-0075 for the fastest response time.',
  },
  {
    question: 'Why does my breaker keep tripping?',
    answer:
      'A breaker trips to protect your home from an electrical fire. It usually indicates one of three things: an overloaded circuit (too many appliances running at once), a short circuit (wires touching that shouldn\'t be), or a ground fault. Do not simply tape the breaker or force it to stay on. Give us a call, and we will use diagnostic tools to safely locate and resolve the underlying fault.',
  },
  {
    question: 'When should an electrical panel be upgraded?',
    answer:
      'You should strongly consider a panel upgrade if your home is over 30-40 years old, still has a fuse box, or utilizes an outdated Federal Pacific or Zinsco panel (known safety hazards). Other signs include flickering lights when the AC turns on, a panel that feels warm to the touch, or insufficient capacity (you need more breakers for a renovation, EV charger, or new appliances).',
  },
  {
    question: 'Do you handle electrical troubleshooting?',
    answer:
      'Yes, advanced troubleshooting is one of our core specialties. Whether you have half of your house losing power unexpectedly, a single dead outlet, or mysterious flickering lights, we use professional testing equipment to isolate the problem at its source rather than just guessing. This saves you time and ensures a permanent fix.',
  },
  {
    question: 'Do you install ceiling fans?',
    answer:
      'Yes. Installing a ceiling fan is more complex than a standard light fixture because it requires a specialized, heavy-duty support box securely anchored to the ceiling joists. We ensure your new fan is mounted safely, wired correctly, and perfectly balanced to prevent wobbling or noise.',
  },
  {
    question: 'Can you add outlets or switches?',
    answer:
      'Absolutely. We can add new standard outlets, upgrade older two-prong receptacles to grounded three-prong (or GFCI) outlets, install convenient USB charging ports, and add dimmer or smart switches. We carefully route the new wiring to minimize any disruption to your drywall.',
  },
  {
    question: 'Do you provide electrical inspections?',
    answer:
      'Yes. We highly recommend a thorough electrical inspection if you are purchasing a new home, living in a property older than 40 years, or planning major renovations. We check the integrity of your panel, verify grounding systems, test smoke detectors, and ensure your home meets current National Electrical Code (NEC) safety standards.',
  },
  {
    question: 'Which areas around Valley do you serve?',
    answer:
      'Our home base is Valley, Alabama, but we regularly serve the surrounding East Alabama and West Georgia communities. This includes Lanett, West Point (GA), LaFayette, Opelika, Auburn, Phenix City, Salem, Cusseta, and throughout Chambers County. As fully licensed contractors in both AL and GA, we legally handle all cross-border permitting.',
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
                        to={`/${service.slug}`}
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
