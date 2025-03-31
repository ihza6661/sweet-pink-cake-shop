
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/models/Product';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  
  // Get the primary category to display (first one if it's an array)
  const displayCategory = Array.isArray(product.category) 
    ? product.category[0] 
    : product.category;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-pink-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-5">
          <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-gray-100">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-medium text-pink-600 dark:text-pink-400">${product.price.toFixed(2)}</span>
            <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">{displayCategory}</span>
          </div>
        </div>
      </Link>
      
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button 
          size="sm" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Instead of adding to cart directly, redirect to product detail page
            // for selecting variants and adding notes
            window.location.href = `/product/${product.id}`;
          }}
          className="bg-pink-600 hover:bg-pink-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ShoppingBag size={16} />
        </Button>
      </div>
    </motion.div>
  );
};
