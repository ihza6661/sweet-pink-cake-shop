
import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface FeaturedProductsProps {
  products: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-100 dark:bg-pink-900 dark:text-pink-300 rounded-full">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-gray-100">
            Featured Cakes
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most popular handcrafted cakes, made with premium ingredients and designed to make your special moments even sweeter.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              View All Cakes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
