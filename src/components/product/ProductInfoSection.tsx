
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/models/Product';

interface ProductInfoSectionProps {
  product: Product;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-100 dark:bg-pink-900 dark:text-pink-300 rounded-full">
        {product.category}
      </span>
      <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mb-4">
        {product.name}
      </h1>
      <p className="text-2xl font-medium text-pink-600 dark:text-pink-400 mb-6">
        ${product.price.toFixed(2)}
      </p>
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Description
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};
