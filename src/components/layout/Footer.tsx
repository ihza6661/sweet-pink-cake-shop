
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-pink-600 dark:text-pink-400">
              Sweet Delights
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Delicious, handcrafted cakes for every occasion. Made with love and the finest ingredients.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-gray-900 dark:text-gray-100">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">All Cakes</Link></li>
              <li><Link to="/products?category=birthday" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">Birthday Cakes</Link></li>
              <li><Link to="/products?category=wedding" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">Wedding Cakes</Link></li>
              <li><Link to="/products?category=custom" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">Custom Cakes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-gray-900 dark:text-gray-100">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">FAQ</Link></li>
              <li><Link to="/delivery" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">Delivery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-gray-900 dark:text-gray-100">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Sign up for our newsletter to receive special offers and promotions.
            </p>
            <div className="mt-3 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
