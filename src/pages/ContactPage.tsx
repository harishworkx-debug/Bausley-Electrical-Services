import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { breadcrumbSchema, localBusinessSchema } from '@/data/structuredData';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
  ];

  const structuredData = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
    localBusinessSchema,
  ];

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe what you need';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (at least 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('error');
    }, 1200);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <>
      <Seo
        title="Contact Us | Bausley Electrical Services - Valley, AL"
        description="Contact Bausley Electrical Services at 334-497-0921. Located at 53 Lee Rd 2129, Valley, AL 36854. Call for electrical installation, repair, and safety services."
        canonicalPath="/contact"
        structuredData={structuredData}
      />
      <PageHero
        title="Contact Us"
        description="Call us at 334-497-0921 or send a message using the form below. We are here to help with your electrical needs in Valley, Alabama."
        breadcrumbs={breadcrumbs}
        image={images.electricianWiring}
      />

      {/* Contact info + form */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact info sidebar */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <Phone className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-900">Phone</h3>
                    <p className="mt-1 text-sm text-charcoal-500">Call us directly</p>
                    <a href={`tel:${business.phoneRaw}`} className="mt-1 block text-lg font-semibold text-electric-600 hover:text-electric-500">
                      {business.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <MapPin className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-900">Address</h3>
                    <p className="mt-1 text-sm text-charcoal-500">Our location</p>
                    <p className="mt-1 text-charcoal-600">{business.address.full}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <Clock className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-900">Hours</h3>
                    <p className="mt-1 text-sm text-charcoal-500">Service availability</p>
                    <p className="mt-1 text-charcoal-600">By appointment</p>
                    <p className="text-sm text-charcoal-500">Call to schedule a visit</p>
                  </div>
                </div>
              </div>

              {/* Quick call CTA */}
              <div className="rounded-xl bg-navy-900 p-6">
                <h3 className="font-display text-lg font-bold text-white">Need Service Now?</h3>
                <p className="mt-2 text-sm text-navy-200">
                  The fastest way to reach us is by phone. Call to schedule a visit or ask a question.
                </p>
                <a href={`tel:${business.phoneRaw}`} className="btn btn-primary mt-4 w-full">
                  <Phone className="h-5 w-5" />
                  Call {business.phone}
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-electric-500" />
                <h2 className="font-display text-2xl font-bold text-navy-900">Send Us a Message</h2>
              </div>
              <p className="mt-2 text-sm text-charcoal-600">
                Fill out the form below and we will get back to you. For urgent needs, please call us directly.
              </p>

              {status === 'success' && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-success-100 bg-success-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                  <div>
                    <p className="font-semibold text-success-700">Message sent successfully</p>
                    <p className="mt-1 text-sm text-success-600">Thank you for reaching out. We will contact you soon.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-error-100 bg-error-50 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-error-600" />
                  <div>
                    <p className="font-semibold text-error-700">We could not send your message</p>
                    <p className="mt-1 text-sm text-error-600">
                      Our contact form is not currently accepting submissions. Please call us at{' '}
                      <a href={`tel:${business.phoneRaw}`} className="font-semibold underline">
                        {business.phone}
                      </a>{' '}
                      and we will be happy to help you.
                    </p>
                  </div>
                </div>
              )}

              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900">
                      Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`input-field mt-1.5 ${errors.name ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : ''}`}
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1 text-sm text-error-600">{errors.name}</p>}
                  </div>

                  {/* Phone + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-900">
                        Phone <span className="text-error-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`input-field mt-1.5 ${errors.phone ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : ''}`}
                        placeholder="334-555-0100"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-error-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
                        Email <span className="text-error-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`input-field mt-1.5 ${errors.email ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : ''}`}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="mt-1 text-sm text-error-600">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service needed */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-navy-900">
                      Service Needed <span className="text-error-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={`input-field mt-1.5 ${errors.service ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : ''}`}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.shortName}>
                          {service.shortName}
                        </option>
                      ))}
                      <option value="Other">Other / Not sure</option>
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-error-600">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-900">
                      Message <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      className={`input-field mt-1.5 resize-none ${errors.message ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : ''}`}
                      placeholder="Tell us about your electrical project or issue..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mt-1 text-sm text-error-600">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-charcoal-400">
                    By submitting this form, you agree to be contacted about your request. We do not share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-navy-50 py-16">
        <div className="container-x">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-2 text-sm font-semibold text-electric-700">
              <MapPin className="h-4 w-4" />
              Find Us
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-navy-900">
              Our Location
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-charcoal-600">
              {business.address.full}
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100 shadow-lg">
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
      </section>
    </>
  );
}
