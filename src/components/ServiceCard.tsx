import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { ServiceData } from '@/data/services';

interface ServiceCardProps {
  service: ServiceData;
  compact?: boolean;
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.Zap;

  return (
    <Link
      to={`/${service.slug}`}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.shortName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-electric-400 shadow-lg">
          <IconComponent className="h-5 w-5 text-navy-900" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-navy-900 transition-colors group-hover:text-electric-600">
          {service.shortName}
        </h3>
        <p className={`mt-2 text-sm text-charcoal-600 ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors group-hover:text-electric-500">
          Explore {service.shortName}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
