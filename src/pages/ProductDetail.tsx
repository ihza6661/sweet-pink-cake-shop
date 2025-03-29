
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

// Mock data for product variants
const productVariants = {
  "1": ["Regular Round", "Large Rectangle", "Superior Rectangle", "Small Rectangle"],
  "2": ["Regular Round", "Regular Square", "Small Rectangle"],
  "3": ["1 Tier", "2 Tier", "3 Tier", "4 Tier"],
  "4": ["Regular", "Extra Sprinkles", "Gold Sprinkles", "Rainbow Layers"],
  "13": ["Original", "Less Sweet", "Extra Sweet", "With Nuts"],
  "14": ["Regular Size", "Large Size", "Mini Size", "Gift Box"]
};

// Variant image mapping for product ID 1
const variantImageMapping = {
  "1": {
    "Regular Round": "/products/Strawberry-Cheesecake.jpg",
    "Large Rectangle": "/products/Strawberry-Cheesecake-Large.webp",
    "Superior Rectangle": "/products/Strawberry-Cheesecake-Superior-Rectangle.webp",
    "Small Rectangle": "/products/Strawberry-Cheesecake-Small.webp"
  },
  "2": {
    "Regular Round": "/products/Red-Velvet-Regular-Round.webp",
    "Regular Square": "/products/Red-Velvet-Regular-Square.webp",
    "Small Rectangle": "/products/Red-Velvet-Small-Rectangle.webp"
  },
};

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
  
  // Get available variants based on the product ID
  const availableVariants = productId && productVariants[productId as keyof typeof productVariants] 
    ? productVariants[productId as keyof typeof productVariants] 
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
        if (variantImageMapping[productId as keyof typeof variantImageMapping]) {
          const images = variantImageMapping[productId as keyof typeof variantImageMapping];
          setCurrentImage(images[availableVariants[0] as keyof typeof images] || foundProduct.image);
        } else {
          setCurrentImage(foundProduct.image);
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
    if (productId && variantImageMapping[productId as keyof typeof variantImageMapping]) {
      const images = variantImageMapping[productId as keyof typeof variantImageMapping];
      setCurrentImage(images[variant as keyof typeof images] || (product?.image || ""));
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
            <ProductInfoSection product={product} />
            <ProductVariantForm 
              product={product} 
              availableVariants={availableVariants} 
              onVariantChange={handleVariantChange} 
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
