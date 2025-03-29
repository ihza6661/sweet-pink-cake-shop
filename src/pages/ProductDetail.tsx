import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Product } from '@/models/Product';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Minus, Plus, ArrowLeft } from 'lucide-react';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { allProducts } from '@/data/products';

// Types for the form
interface ProductOrderForm {
  variant: string;
  notes: string;
}

// Mock data for product variants
const productVariants = {
  "1": ["Classic", "Vegan", "Gluten-Free", "Sugar-Free"],
  "2": ["Dark Chocolate", "Milk Chocolate", "White Chocolate", "Triple Chocolate"],
  "3": ["1 Tier", "2 Tier", "3 Tier", "4 Tier"],
  "4": ["Regular", "Extra Sprinkles", "Gold Sprinkles", "Rainbow Layers"],
  "13": ["Original", "Less Sweet", "Extra Sweet", "With Nuts"]
};

// Mock data for related products
const getRelatedProducts = (currentProductId: number): Product[] => {
  return allProducts
    .filter(product => product.id !== currentProductId)
    .slice(0, 3);
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);
  const { addToCart } = useCart();
  
  // Form definition
  const form = useForm<ProductOrderForm>({
    defaultValues: {
      variant: '',
      notes: ''
    }
  });
  
  // Get available variants based on the product ID
  const availableVariants = productId && productVariants[productId as keyof typeof productVariants] 
    ? productVariants[productId as keyof typeof productVariants] 
    : [];
  
  useEffect(() => {
    // Find product from allProducts
    if (productId) {
      const foundProduct = allProducts.find(p => p.id === Number(productId));
      setProduct(foundProduct || null);
      
      // Reset the form when product changes
      form.reset({
        variant: availableVariants.length > 0 ? availableVariants[0] : '',
        notes: ''
      });
    }
    
    // Reset state when product changes
    setQuantity(1);
    setIsWished(false);
    
    // Scroll to top on new product
    window.scrollTo(0, 0);
  }, [productId, form, availableVariants]);
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sorry, the product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products">
            <Button>
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const toggleWishlist = () => {
    setIsWished(!isWished);
  };
  
  const handleAddToCart = () => {
    const formValues = form.getValues();
    addToCart(product, quantity, formValues.variant, formValues.notes);
  };
  
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img 
              src={product.image} 
              alt={product.name} 
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-100 dark:bg-pink-900 dark:text-pink-300 rounded-full">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-pink-600 dark:text-pink-400 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>
            
            <Form {...form}>
              <form className="space-y-6">
                {availableVariants.length > 0 && (
                  <FormField
                    control={form.control}
                    name="variant"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium text-gray-900 dark:text-white">Variant</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value || availableVariants[0]}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 dark:border-gray-700">
                              <SelectValue placeholder="Select a variant" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white dark:bg-gray-900">
                            {availableVariants.map((variant) => (
                              <SelectItem key={variant} value={variant}>
                                {variant}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-gray-900 dark:text-white">Special Instructions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add any special instructions or requests..."
                          className="border-gray-300 dark:border-gray-700 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            
            <div className="my-8">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Quantity
              </h2>
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md w-max">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart}
                className="bg-pink-600 hover:bg-pink-700 text-white"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline">
                Buy Now
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Dietary
                  </h3>
                  <p className="text-gray-900 dark:text-white">Available upon request</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Delivery
                  </h3>
                  <p className="text-gray-900 dark:text-white">2-3 business days</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Made Fresh
                  </h3>
                  <p className="text-gray-900 dark:text-white">Day of delivery</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Returns
                  </h3>
                  <p className="text-gray-900 dark:text-white">Not accepted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white mb-8">
            You Might Also Like
          </h2>
          <FeaturedProducts products={getRelatedProducts(product?.id || 0)} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
