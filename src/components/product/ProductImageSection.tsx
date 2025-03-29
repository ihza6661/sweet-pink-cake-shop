
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ProductImageSectionProps {
  image: string;
  name: string;
}

export const ProductImageSection: React.FC<ProductImageSectionProps> = ({ image, name }) => {
  const [isWished, setIsWished] = useState(false);
  
  const toggleWishlist = () => {
    setIsWished(!isWished);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-auto object-cover aspect-square"
      />
      <button 
        onClick={toggleWishlist}
        className={`absolute top-4 right-4 p-2 rounded-full ${
          isWished 
            ? 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-400' 
            : 'bg-white/70 text-gray-600 dark:bg-gray-900/70 dark:text-gray-400'
        } transition-colors`}
      >
        <Heart className={`w-5 h-5 ${isWished ? 'fill-current' : ''}`} />
      </button>
    </motion.div>
  );
};
