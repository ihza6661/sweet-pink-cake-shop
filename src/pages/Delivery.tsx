
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Clock, AlertCircle } from 'lucide-react';

const Delivery: React.FC = () => {
  const deliveryZones = [
    {
      zone: "Zone 1 (0-5 miles)",
      fee: "$5.00",
      time: "Same-day delivery available"
    },
    {
      zone: "Zone 2 (5-10 miles)",
      fee: "$8.00",
      time: "Next-day delivery available"
    },
    {
      zone: "Zone 3 (10-15 miles)",
      fee: "$12.00",
      time: "48-hour notice required"
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
            Delivery Information
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            We offer convenient delivery options to bring our delicious cakes right to your doorstep.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-pink-600 dark:text-pink-400" />
                Delivery Zones & Fees
              </h2>
              
              <div className="space-y-6">
                {deliveryZones.map((zone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-gray-200 dark:border-gray-800 last:border-0 pb-4 last:pb-0"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">{zone.zone}</h3>
                    <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 block">Delivery Fee</span>
                        <span className="text-gray-900 dark:text-white font-medium">{zone.fee}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 block">Estimated Time</span>
                        <span className="text-gray-900 dark:text-white font-medium">{zone.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-pink-600 dark:text-pink-400" />
                Delivery Hours
              </h2>
              
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-pink-600 dark:text-pink-400" />
                Important Information
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>• Delivery times are approximate and may vary based on traffic and weather conditions.</p>
                <p>• Someone 18 years or older must be present to receive the delivery.</p>
                <p>• Orders must be placed at least 48 hours in advance for standard delivery.</p>
                <p>• Rush delivery may be available for an additional fee, subject to availability.</p>
                <p>• Special delivery instructions can be added during checkout.</p>
                <p>• We cannot guarantee specific delivery times, but will provide a 2-hour window.</p>
              </div>
            </div>
            
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6">
              <h2 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-pink-600 dark:text-pink-400" />
                Outside Our Delivery Area?
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you're located outside our standard delivery zones, please contact us directly to discuss options for your cake delivery.
              </p>
              
              <div className="flex flex-col space-y-2">
                <a 
                  href="tel:+11234567890" 
                  className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
                >
                  (123) 456-7890
                </a>
                <a 
                  href="mailto:info@yulitacakes.com" 
                  className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
                >
                  info@yulitacakes.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
