import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Zap } from 'lucide-react';
import { business } from '@/data/business';

interface CtaBannerProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
}

export default function CtaBanner({
  title = 'Ready to Get Started?',
  description = 'Call Bausley Electrical Services today to discuss your electrical project or schedule a service visit in Valley, Alabama.',
  ctaLabel = 'Call Now',
}: CtaBannerProps) {
  return (
    <section className="bg-navy-900 py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-navy-800 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-navy-grid opacity-30" />
          <div className="absolute -top-4 -right-4 text-electric-400/10">
            <Zap className="h-32 w-32" />
          </div>
          <div className="relative">
            <h2 className="text-balance font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-navy-200">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`tel:${business.phoneRaw}`} className="btn btn-primary text-base">
                <Phone className="h-5 w-5" />
                {ctaLabel}: {business.phone}
              </a>
              <Link to="/contact" className="btn btn-outline border-navy-600 text-white hover:border-electric-400 hover:bg-electric-400 hover:text-navy-900">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
