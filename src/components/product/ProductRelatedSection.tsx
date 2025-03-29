
import React from 'react';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Product } from '@/models/Product';

interface ProductRelatedSectionProps {
  relatedProducts: Product[];
}

export const ProductRelatedSection: React.FC<ProductRelatedSectionProps> = ({ 
  relatedProducts 
}) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white mb-8">
        You Might Also Like
      </h2>
      <FeaturedProducts products={relatedProducts} />
    </div>
  );
};
