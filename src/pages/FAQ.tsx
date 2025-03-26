
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How far in advance should I order my cake?",
      answer: "We recommend placing your order at least 48-72 hours in advance for standard cakes. For custom or special occasion cakes, we suggest ordering 1-2 weeks ahead to ensure availability."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer delivery within a 15-mile radius of our shop for a small fee. Delivery fees vary based on distance. For more information, please visit our Delivery page."
    },
    {
      question: "Are your cakes suitable for people with allergies?",
      answer: "We offer several options for common allergies, including gluten-free and nut-free cakes. However, all of our cakes are prepared in a kitchen that processes common allergens. Please inform us of any allergies when placing your order."
    },
    {
      question: "How should I store my cake?",
      answer: "Our cakes are best stored in a cool, dry place away from direct sunlight. Refrigeration is recommended for cakes with cream cheese frosting or fresh fruit fillings. Cakes are best enjoyed at room temperature, so we suggest removing them from the refrigerator 1-2 hours before serving."
    },
    {
      question: "Can I request a custom design?",
      answer: "Absolutely! We love creating custom designs for our customers. Please contact us with your ideas, and we'll work with you to create the perfect cake for your special occasion."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cash on delivery. For custom orders, we require a 50% deposit at the time of ordering."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be modified or canceled up to 48 hours before the scheduled pickup or delivery time. For custom cakes, changes may be limited depending on the stage of preparation."
    },
    {
      question: "How long will my cake stay fresh?",
      answer: "Our cakes are made fresh and without preservatives. They are best enjoyed within 2-3 days of purchase. Some flavors may stay fresh longer when properly stored."
    }
  ];

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Find answers to common questions about our cakes, ordering process, and services.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`faq-${index}`} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl text-center">
            <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're here to help! Contact us for any additional questions or special requests.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <a 
                href="/contact" 
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
