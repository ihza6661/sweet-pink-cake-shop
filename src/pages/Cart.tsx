
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };
  
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mb-8">
          Your Cart
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              Looks like you haven't added any cakes to your cart yet. Check out our delicious collection and treat yourself!
            </p>
            <Link to="/products">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white">
                    Item Summary
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearCart}
                    className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500"
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <AnimatePresence>
                  {cartItems.map(item => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-gray-200 dark:border-gray-800 last:border-0"
                    >
                      <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link 
                          to={`/product/${item.product.id}`}
                          className="shrink-0"
                        >
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </Link>
                        
                        <div className="flex-grow">
                          <Link 
                            to={`/product/${item.product.id}`}
                            className="text-lg font-medium text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            ${item.product.price.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md">
                            <button 
                              onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1 font-medium text-gray-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <span className="font-medium text-gray-900 dark:text-white min-w-[70px] text-right">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm sticky top-24">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Shipping</span>
                      <span>$5.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Tax</span>
                      <span>${(subtotal * 0.07).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-3 flex justify-between font-medium text-lg text-gray-900 dark:text-white">
                      <span>Total</span>
                      <span>${(subtotal + 5 + subtotal * 0.07).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <Button 
                    onClick={() => setIsCheckingOut(true)}
                    disabled={isCheckingOut}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white mb-4"
                  >
                    {isCheckingOut ? 'Processing...' : 'Checkout'}
                  </Button>
                  
                  <Link to="/products">
                    <Button 
                      variant="outline" 
                      className="w-full"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                  
                  <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    <p className="mb-2">We accept:</p>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
