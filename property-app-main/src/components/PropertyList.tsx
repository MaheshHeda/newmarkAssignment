import { useQuery } from '@tanstack/react-query';
import PropertyCard from './PropertyCard';
import { fetchProperties } from '../services/properties';

export default function PropertyList() {
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.propertyId} property={property} />
      ))}
    </div>
  );
}
