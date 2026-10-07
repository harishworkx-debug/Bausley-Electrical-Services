import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, Mail, Clock } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* Main footer */}
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Bausley Electrical Services Home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-400">
                <Zap className="h-6 w-6 text-navy-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white">Bausley</span>
                <span className="text-xs font-medium text-navy-300">Electrical Services</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              Reliable electrical installation, repair, and safety services for homeowners in Valley, Alabama, and the surrounding area.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-lg border border-navy-800 bg-navy-900 px-4 py-3">
              <Clock className="h-5 w-5 flex-shrink-0 text-electric-400" />
              <div>
                <p className="text-xs font-semibold text-white">By Appointment</p>
                <p className="text-xs text-navy-300">Call to schedule a visit</p>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/${service.slug}`}
                    className="text-sm text-navy-300 transition-colors hover:text-electric-300"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm font-semibold text-electric-300 transition-colors hover:text-electric-200"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceAreas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/${area.slug}`}
                    className="text-sm text-navy-300 transition-colors hover:text-electric-300"
                  >
                    {area.city}, {area.stateAbbr}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm font-semibold text-electric-300 transition-colors hover:text-electric-200"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-start gap-3 text-sm text-navy-300 transition-colors hover:text-electric-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                  <span>{business.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                <span>{business.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                <span>Contact us by phone for service requests</span>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary mt-6 w-full">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-navy-400">
            © {year} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-xs text-navy-400 transition-colors hover:text-electric-300">
              About
            </Link>
            <Link to="/faqs" className="text-xs text-navy-400 transition-colors hover:text-electric-300">
              FAQs
            </Link>
            <Link to="/contact" className="text-xs text-navy-400 transition-colors hover:text-electric-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
