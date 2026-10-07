import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Zap } from 'lucide-react';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | Bausley Electrical Services"
        description="The page you are looking for could not be found. Please visit our homepage or contact us for assistance."
        canonicalPath="/404"
      />
      <section className="flex min-h-[60vh] items-center justify-center bg-navy-950 px-4">
        <div className="absolute inset-0 bg-navy-grid opacity-20" />
        <div className="relative text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-electric-400">
            <Zap className="h-8 w-8 text-navy-900" />
          </div>
          <h1 className="mt-8 font-display text-6xl font-bold text-white sm:text-7xl">404</h1>
          <p className="mt-4 text-xl text-navy-200">Page Not Found</p>
          <p className="mx-auto mt-2 max-w-md text-navy-300">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn btn-primary">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link to="/services" className="btn btn-outline border-navy-600 text-white hover:border-electric-400 hover:bg-electric-400 hover:text-navy-900">
              View Services
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
