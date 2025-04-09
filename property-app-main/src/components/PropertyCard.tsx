import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import SpaceList from './SpaceList';
import { ChevronUpIcon } from '@heroicons/react/16/solid';
import { Property } from '../interfaces';

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg my-2">
          <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-lg font-medium text-white bg-blue-600 rounded-lg focus:outline-none">
            <span>{property.propertyName}</span>
            <ChevronUpIcon className={`w-5 h-5 ${open ? 'rotate-180' : ''}`} />
          </DisclosureButton>
          <DisclosurePanel className="p-4 text-gray-700">
            <p>
              <strong>Features:</strong> {property.features.join(', ')}
            </p>
            <p>
              <strong>Highlights:</strong> {property.highlights.join(', ')}
            </p>
            <p>
              <strong>Transportation:</strong>{' '}
              {property.transportation.map(
                (t) => `${t.type}: ${t.line || t.station} (${t.distance})`
              ).join(', ')}
            </p>
            <SpaceList spaces={property.spaces} />
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};
export default PropertyCard;
