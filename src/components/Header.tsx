import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Zap } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = (setter: (v: boolean) => void) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
    setter(true);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setAreasDropdownOpen(false);
    }, 150);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md shadow-navy-900/5'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="hidden bg-navy-900 text-navy-100 lg:block">
        <div className="container-x flex items-center justify-between py-2 text-xs">
          <p className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-electric-400" />
            Licensed Electrical Services in Valley, Alabama
          </p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex items-center gap-2 font-medium text-white transition-colors hover:text-electric-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {business.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" aria-label="Bausley Electrical Services Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900">
              <Zap className="h-6 w-6 text-electric-400" />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="font-display text-lg font-bold leading-tight text-navy-900">
                Bausley
              </span>
              <span className="text-xs font-medium leading-tight text-charcoal-500">
                Electrical Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" className={({ isActive }) => `nav-link rounded-lg px-4 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              Home
            </NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter(setServicesDropdownOpen)}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-electric-500 ${
                  isActive('/services') || servicesDropdownOpen ? 'text-electric-500' : 'text-navy-700'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full w-64 pt-2 animate-fade-in-down">
                  <div className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-xl shadow-navy-900/10">
                    <Link
                      to="/services"
                      className="block border-b border-navy-50 bg-navy-50/50 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
                    >
                      All Services →
                    </Link>
                    <div className="max-h-[28rem] overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-2.5 text-sm text-charcoal-600 transition-colors hover:bg-navy-50 hover:text-electric-500"
                        >
                          {service.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter(setAreasDropdownOpen)}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-electric-500 ${
                  isActive('/service-areas') || areasDropdownOpen ? 'text-electric-500' : 'text-navy-700'
                }`}
                aria-expanded={areasDropdownOpen}
                aria-haspopup="true"
              >
                Service Areas
                <ChevronDown className={`h-4 w-4 transition-transform ${areasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasDropdownOpen && (
                <div className="absolute left-0 top-full w-56 pt-2 animate-fade-in-down">
                  <div className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-xl shadow-navy-900/10">
                    <Link
                      to="/service-areas"
                      className="block border-b border-navy-50 bg-navy-50/50 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
                    >
                      All Service Areas →
                    </Link>
                    <div className="max-h-[24rem] overflow-y-auto">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.slug}
                          to={`/service-areas/${area.slug}`}
                          className="block px-4 py-2.5 text-sm text-charcoal-600 transition-colors hover:bg-navy-50 hover:text-electric-500"
                        >
                          {area.city}, {area.stateAbbr}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={({ isActive }) => `nav-link rounded-lg px-4 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/faqs" className={({ isActive }) => `nav-link rounded-lg px-4 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              FAQs
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link rounded-lg px-4 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* Desktop phone CTA */}
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden btn btn-primary lg:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>

          {/* Mobile menu button */}
          <button
            className="rounded-lg p-2 text-navy-900 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-x max-h-[80vh] overflow-y-auto py-4">
            <nav className="flex flex-col gap-1">
              <Link to="/" className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">
                Home
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="ml-4 border-l border-navy-100 pl-2">
                    <Link to="/services" className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-50">
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block rounded-lg px-4 py-2.5 text-sm text-charcoal-600 hover:bg-navy-50"
                      >
                        {service.shortName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas accordion */}
              <div>
                <button
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50"
                  onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                  aria-expanded={areasDropdownOpen}
                >
                  Service Areas
                  <ChevronDown className={`h-4 w-4 transition-transform ${areasDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasDropdownOpen && (
                  <div className="ml-4 border-l border-navy-100 pl-2">
                    <Link to="/service-areas" className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-50">
                      All Service Areas
                    </Link>
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        to={`/service-areas/${area.slug}`}
                        className="block rounded-lg px-4 py-2.5 text-sm text-charcoal-600 hover:bg-navy-50"
                      >
                        {area.city}, {area.stateAbbr}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">
                About Us
              </Link>
              <Link to="/faqs" className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">
                FAQs
              </Link>
              <Link to="/contact" className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">
                Contact
              </Link>

              <a
                href={`tel:${business.phoneRaw}`}
                className="btn btn-primary mt-3 w-full"
              >
                <Phone className="h-4 w-4" />
                Call {business.phone}
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
