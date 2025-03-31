
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-gradient-to-b from-pink-200 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 text-center md:text-left"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-100 dark:bg-pink-900 dark:text-pink-300 rounded-full">
              Premium Quality
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 dark:text-white leading-tight">
              Artisanal Cakes for <span className="text-pink-600 dark:text-pink-400">Special Moments</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            Enjoy our handmade cakes made with premium ingredients. Perfect for birthdays, weddings, and all your celebrations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <Button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="w-full sm:w-auto dark:text-gray-300 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-100">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6"
          >
            <div className="relative">
              <img 
                src="/hero-cake.avif" 
                alt="Delicious cake" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <p className="text-sm font-medium">Fresh baked daily</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-5 w-12 h-12 rounded-full bg-pink-200 dark:bg-pink-800 opacity-60 blur-xl"></div>
      <div className="absolute bottom-1/3 right-10 w-20 h-20 rounded-full bg-pink-300 dark:bg-pink-700 opacity-70 blur-2xl"></div>
      <div className="absolute top-2/3 left-1/3 w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900 opacity-50 blur-xl"></div>
    </section>
  );
};
