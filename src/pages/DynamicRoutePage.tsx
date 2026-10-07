import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '@/data/services';
import { getAreaBySlug } from '@/data/serviceAreas';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreaDetailPage from '@/pages/ServiceAreaDetailPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function DynamicRoutePage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (slug && getServiceBySlug(slug)) {
    return <ServiceDetailPage />;
  }
  
  if (slug && getAreaBySlug(slug)) {
    return <ServiceAreaDetailPage />;
  }
  
  return <NotFoundPage />;
}
