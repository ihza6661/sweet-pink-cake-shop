
import React, { useState, useEffect } from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/models/Product';
import { useCart } from '@/context/CartContext';
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

// Types for the form
interface ProductOrderForm {
  variant: string;
  notes: string;
}

interface ProductVariantFormProps {
  product: Product;
  availableVariants: string[];
  onVariantChange?: (variant: string) => void;
}

export const ProductVariantForm: React.FC<ProductVariantFormProps> = ({ 
  product, 
  availableVariants,
  onVariantChange
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Form definition
  const form = useForm<ProductOrderForm>({
    defaultValues: {
      variant: availableVariants.length > 0 ? availableVariants[0] : '',
      notes: ''
    }
  });
  
  // Call onVariantChange when the variant changes
  useEffect(() => {
    if (availableVariants.length > 0 && onVariantChange) {
      onVariantChange(form.getValues().variant);
    }
  }, [form.getValues().variant, onVariantChange, availableVariants]);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    const formValues = form.getValues();
    addToCart(product, quantity, formValues.variant, formValues.notes);
  };
  
  const handleVariantChange = (variant: string) => {
    if (onVariantChange) {
      onVariantChange(variant);
    }
  };
  
  return (
    <div>
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
                    onValueChange={(value) => {
                      field.onChange(value);
                      handleVariantChange(value);
                    }} 
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
    </div>
  );
};
