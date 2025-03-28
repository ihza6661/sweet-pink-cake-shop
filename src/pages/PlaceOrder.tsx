
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { ArrowLeft, CreditCard, Truck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Form validation schema
const orderFormSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  zipCode: z.string().min(5, { message: "Zip code must be at least 5 characters." }),
  paymentMethod: z.enum(["credit-card", "paypal", "cash-on-delivery"], {
    required_error: "Please select a payment method.",
  }),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

const PlaceOrder: React.FC = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Redirect if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
      toast.error('Your cart is empty. Add items before checkout.');
    }
  }, [cartItems, navigate]);

  // Pre-fill form with user data if authenticated
  const defaultValues: Partial<OrderFormValues> = {
    fullName: user?.name || '',
    email: user?.email || '',
    paymentMethod: "credit-card",
  };

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: OrderFormValues) => {
    setIsProcessing(true);
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send this data to your backend
      console.log('Order data:', {
        customer: {
          fullName: data.fullName,
          email: data.email,
        },
        shipping: {
          address: data.address,
          city: data.city,
          zipCode: data.zipCode,
        },
        payment: {
          method: data.paymentMethod,
        },
        items: cartItems,
        total: {
          subtotal,
          shipping: 5,
          tax: subtotal * 0.07,
          total: subtotal + 5 + (subtotal * 0.07)
        }
      });
      
      // Clear cart and redirect to success page
      clearCart();
      navigate('/');
      toast.success('Your order has been placed successfully!');
    } catch (error) {
      toast.error('There was an error processing your order. Please try again.');
      console.error('Order error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Calculate totals
  const shippingCost = 5.00;
  const taxAmount = subtotal * 0.07;
  const totalAmount = subtotal + shippingCost + taxAmount;

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mb-8">
          Checkout
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-pink-100 dark:bg-pink-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                      </span>
                      Customer Information
                    </CardTitle>
                    <CardDescription>
                      Enter your contact details for order updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-pink-100 dark:bg-pink-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <Truck className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                      </span>
                      Shipping Information
                    </CardTitle>
                    <CardDescription>
                      Enter where you'd like your order delivered
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="New York" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip Code</FormLabel>
                            <FormControl>
                              <Input placeholder="10001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-pink-100 dark:bg-pink-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <CreditCard className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                      </span>
                      Payment Method
                    </CardTitle>
                    <CardDescription>
                      Select how you'd like to pay
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="credit-card" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Credit Card
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="paypal" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  PayPal
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="cash-on-delivery" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Cash on Delivery
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing Order...' : `Complete Order: $${totalAmount.toFixed(2)}`}
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </Form>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={`${item.product.id}-${item.variant || 'default'}`} className="flex gap-4">
                      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.product.name}</p>
                        {item.variant && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Variant: {item.variant}
                          </p>
                        )}
                        <div className="flex justify-between mt-1">
                          <p className="text-sm">{item.quantity} × ${item.product.price.toFixed(2)}</p>
                          <p className="font-medium">${(item.quantity * item.product.price).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (7%)</span>
                    <span>${taxAmount.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
