
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/models/Product';
import { allProducts } from '@/data/products';
import { ProductImageSection } from '@/components/product/ProductImageSection';
import { ProductInfoSection } from '@/components/product/ProductInfoSection';
import { ProductVariantForm } from '@/components/product/ProductVariantForm';
import { ProductSpecifications } from '@/components/product/ProductSpecifications';
import { ProductRelatedSection } from '@/components/product/ProductRelatedSection';
import { productVariants, variantImageMapping, variantPriceMapping } from '@/data/productVariants';

// Get related products
const getRelatedProducts = (currentProductId: number): Product[] => {
  return allProducts
    .filter(product => product.id !== currentProductId)
    .slice(0, 3);
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<number | undefined>(undefined);
  
  // Get available variants based on the product ID
  const availableVariants = productId && productVariants[productId] 
    ? productVariants[productId] 
    : [];
  
  useEffect(() => {
    // Find product from allProducts
    if (productId) {
      const foundProduct = allProducts.find(p => p.id === Number(productId));
      setProduct(foundProduct || null);
      
      // Set initial variant
      if (foundProduct && availableVariants.length > 0) {
        setSelectedVariant(availableVariants[0]);
        
        // Set initial image - if variant images exist for this product, use the first variant's image
        if (variantImageMapping[productId]) {
          const images = variantImageMapping[productId];
          setCurrentImage(images[availableVariants[0]] || foundProduct.image);
        } else {
          setCurrentImage(foundProduct.image);
        }
        
        // Set initial price - if variant prices exist for this product, use the first variant's price
        if (variantPriceMapping[productId]) {
          const prices = variantPriceMapping[productId];
          setCurrentPrice(prices[availableVariants[0]]);
        } else {
          setCurrentPrice(foundProduct.price);
        }
      }
    }
    
    // Scroll to top on new product
    window.scrollTo(0, 0);
  }, [productId, availableVariants]);
  
  // Handle variant change
  const handleVariantChange = (variant: string) => {
    setSelectedVariant(variant);
    
    // Update image if this product has variant images
    if (productId && variantImageMapping[productId]) {
      const images = variantImageMapping[productId];
      setCurrentImage(images[variant] || (product?.image || ""));
    }
    
    // Update price if this product has variant prices
    if (productId && variantPriceMapping[productId]) {
      const prices = variantPriceMapping[productId];
      setCurrentPrice(prices[variant]);
    }
  };
  
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
  
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ProductImageSection image={currentImage || product.image} name={product.name} />
          
          <div>
            <ProductInfoSection product={product} currentPrice={currentPrice} />
            <ProductVariantForm 
              product={product} 
              availableVariants={availableVariants} 
              onVariantChange={handleVariantChange}
              currentPrice={currentPrice}
            />
            <ProductSpecifications />
          </div>
        </div>
        
        <ProductRelatedSection relatedProducts={getRelatedProducts(product.id)} />
      </div>
    </div>
  );
};

export default ProductDetail;
