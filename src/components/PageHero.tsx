import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
}

export default function PageHero({ title, description, breadcrumbs, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/60" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-navy-grid opacity-20" />
      )}
      <div className="container-x relative py-14 sm:py-16 lg:py-20">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="text-navy-300 transition-colors hover:text-electric-300"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-electric-300">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-navy-500" />
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-balance text-lg text-navy-200">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
