
import React from 'react';
import { Hero } from '@/components/Hero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Product } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Cake, Gift, Clock, Award } from 'lucide-react';

// Mock data for featured products
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Strawberry Delight",
    description: "Light vanilla sponge with fresh strawberry filling and cream cheese frosting.",
    price: 32.99,
    image: "/placeholder.svg",
    category: "Bestseller"
  },
  {
    id: 2,
    name: "Chocolate Dream",
    description: "Rich chocolate cake with ganache filling and chocolate buttercream.",
    price: 34.99,
    image: "/placeholder.svg",
    category: "Bestseller"
  },
  {
    id: 3,
    name: "Wedding Elegance",
    description: "Three-tier vanilla cake with buttercream and edible flowers.",
    price: 89.99,
    image: "/placeholder.svg",
    category: "Wedding"
  },
  {
    id: 4,
    name: "Birthday Funfetti",
    description: "Colorful vanilla cake with sprinkles and vanilla buttercream.",
    price: 28.99,
    image: "/placeholder.svg",
    category: "Birthday"
  }
];

const features = [
  {
    icon: <Cake className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
    title: "Handcrafted",
    description: "Each cake is carefully made by hand with attention to every detail."
  },
  {
    icon: <Gift className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
    title: "Custom Orders",
    description: "Create personalized cakes for any occasion, just the way you want them."
  },
  {
    icon: <Clock className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
    title: "Fresh Daily",
    description: "We bake fresh every day using only the highest quality ingredients."
  },
  {
    icon: <Award className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
    title: "Award Winning",
    description: "Our cakes have won multiple awards for taste and presentation."
  }
];

const testimonials = [
  {
    quote: "The birthday cake was absolutely stunning and tasted even better! Everyone at the party was impressed.",
    author: "Emma Thompson",
    role: "Happy Customer"
  },
  {
    quote: "Our wedding cake was a dream come true. The design was exactly what we envisioned and the flavor was perfection.",
    author: "Michael & Sarah",
    role: "Newlyweds"
  },
  {
    quote: "I've ordered multiple cakes for special occasions and they never disappoint. The quality and taste are consistently excellent.",
    author: "David Chen",
    role: "Repeat Customer"
  }
];

const Index: React.FC = () => {
  return (
    <div className="page-transition">
      <Hero />
      
      <FeaturedProducts products={featuredProducts} />
      
      {/* Features Section */}
      <section className="section-padding bg-pink-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-100 dark:bg-pink-900 dark:text-pink-300 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white">
              Our Sweet Promises
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We take pride in creating the most delicious and beautiful cakes for your special moments.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-100 dark:bg-pink-900 dark:text-pink-300 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white">
              What Our Customers Say
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
              >
                <div className="mb-4 text-pink-500 dark:text-pink-400">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-serif italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-pink-100 dark:bg-pink-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mb-6">
              Ready to Order Your Dream Cake?
            </h2>
            <p className="text-lg text-gray-600 dark:text-pink-100 max-w-2xl mx-auto mb-8">
              Browse our collection of handcrafted cakes or request a custom design for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Shop Now
              </a>
              <a href="/contact" className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-pink-600 dark:text-pink-300 px-6 py-3 rounded-md font-medium transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
