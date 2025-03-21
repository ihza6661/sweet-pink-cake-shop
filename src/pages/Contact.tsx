import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-pink-600 dark:text-pink-400 mb-8 text-center">
          Contact Us
        </h1>
        
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a question or special request? We'd love to hear from you! 
          Fill out the form below or reach out directly through our contact information.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg text-center"
          >
            <div className="mb-4 flex justify-center">
              <Phone className="h-10 w-10 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-pink-600 dark:text-pink-400">Phone</h3>
            <p className="text-gray-700 dark:text-gray-300">(555) 123-4567</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg text-center"
          >
            <div className="mb-4 flex justify-center">
              <Mail className="h-10 w-10 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-pink-600 dark:text-pink-400">Email</h3>
            <p className="text-gray-700 dark:text-gray-300">info@sweetdelights.com</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg text-center"
          >
            <div className="mb-4 flex justify-center">
              <MapPin className="h-10 w-10 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-pink-600 dark:text-pink-400">Address</h3>
            <p className="text-gray-700 dark:text-gray-300">123 Baker Street, Cake City, CA 90210</p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-serif text-pink-600 dark:text-pink-400 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-pink-600 dark:text-pink-400 mb-6">Visit Our Bakery</h2>
            
            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg mb-6">
              <h3 className="flex items-center text-lg font-medium text-pink-600 dark:text-pink-400 mb-3">
                <Clock className="mr-2 h-5 w-5" /> Opening Hours
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 3:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-pink-100 dark:bg-pink-900/40 flex items-center justify-center">
                <p className="text-pink-600 dark:text-pink-400 text-center p-4">
                  Map would be displayed here <br />
                  123 Baker Street, Cake City, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
