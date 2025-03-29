
import React from 'react';

export const ProductSpecifications: React.FC = () => {
  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Dietary
          </h3>
          <p className="text-gray-900 dark:text-white">Available upon request</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Delivery
          </h3>
          <p className="text-gray-900 dark:text-white">2-3 business days</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Made Fresh
          </h3>
          <p className="text-gray-900 dark:text-white">Day of delivery</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Returns
          </h3>
          <p className="text-gray-900 dark:text-white">Not accepted</p>
        </div>
      </div>
    </div>
  );
};
