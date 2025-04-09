import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/16/solid';
import { Space } from '../interfaces';

const SpaceList = ({ spaces }: { spaces: Space[] }) => {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <div>
          <DisclosureButton className="mt-2 flex justify-between w-full px-4 py-2 text-left font-medium text-blue-600 bg-gray-100 rounded-lg">
            <span>Spaces</span>
            <ChevronUpIcon className={`w-5 h-5 ${open ? 'rotate-180' : ''}`} />
          </DisclosureButton>
          <DisclosurePanel className="p-4">
            {spaces.map((space) => (
              <Disclosure key={space.spaceId}>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-gray-800 bg-gray-200 rounded-lg my-1">
                      <span>{space.spaceName}</span>
                      <ChevronUpIcon
                        className={`w-5 h-5 ${open ? 'rotate-180' : ''}`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="pl-6 pt-2 text-gray-600">
                      {space.rentRoll.map((rent, index) => (
                        <p key={index}>
                          {rent.month}: ${rent.rent}
                        </p>
                      ))}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            ))}
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};
export default SpaceList;
