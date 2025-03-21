
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-pink-600 dark:text-pink-400 mb-8">
          About Sweet Delights
        </h1>
        
        <div className="prose prose-pink dark:prose-invert lg:prose-lg max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Sweet Delights has been creating artisanal cakes and desserts since 2010. 
            What started as a small family passion has grown into a beloved bakery 
            known for quality, creativity, and delicious flavors.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-pink-600 dark:text-pink-400 mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We believe that every celebration deserves something sweet and special. 
                Our mission is to create memorable desserts using only the finest ingredients, 
                crafted with care and attention to detail.
              </p>
            </div>
            
            <div className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-pink-600 dark:text-pink-400 mb-4">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To be the premier destination for custom cakes and desserts, 
                bringing joy and sweetness to all of life's special moments while 
                maintaining our commitment to quality and innovation.
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-serif text-pink-600 dark:text-pink-400 mt-8 mb-6">
            Our Story
          </h2>
          
          <p className="mb-4">
            Sweet Delights began in the kitchen of our founder, Emma Thompson. 
            What started as baking for friends and family quickly grew as word 
            spread about her incredible cakes. Within a year, Emma opened our 
            first small bakery.
          </p>
          
          <p className="mb-4">
            Over the years, we've expanded our team with talented pastry chefs 
            and cake decorators who share our passion for creating beautiful and 
            delicious desserts. Today, we serve customers both locally and nationwide 
            through our online ordering and delivery service.
          </p>
          
          <p className="mb-8">
            While we've grown, our commitment to quality has never wavered. 
            We still use Emma's original recipes, locally-sourced ingredients when 
            possible, and ensure every cake is made with the utmost care and attention.
          </p>
          
          <h2 className="text-3xl font-serif text-pink-600 dark:text-pink-400 mt-8 mb-6">
            Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-pink-200 dark:bg-pink-800 flex items-center justify-center">
                <span className="text-3xl text-pink-600 dark:text-pink-400">ET</span>
              </div>
              <h3 className="text-xl font-medium text-pink-600 dark:text-pink-400">Emma Thompson</h3>
              <p className="text-gray-600 dark:text-gray-400">Founder & Head Baker</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-pink-200 dark:bg-pink-800 flex items-center justify-center">
                <span className="text-3xl text-pink-600 dark:text-pink-400">JL</span>
              </div>
              <h3 className="text-xl font-medium text-pink-600 dark:text-pink-400">James Lee</h3>
              <p className="text-gray-600 dark:text-gray-400">Master Pastry Chef</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-pink-200 dark:bg-pink-800 flex items-center justify-center">
                <span className="text-3xl text-pink-600 dark:text-pink-400">SR</span>
              </div>
              <h3 className="text-xl font-medium text-pink-600 dark:text-pink-400">Sofia Rodriguez</h3>
              <p className="text-gray-600 dark:text-gray-400">Cake Designer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
