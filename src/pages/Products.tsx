import React, { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/context/CartContext';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for products
const allProducts: Product[] = [
  {
    id: 1,
    name: "Strawberry Delight",
    description: "Light vanilla sponge with fresh strawberry filling and cream cheese frosting.",
    price: 32.99,
    image: "/placeholder.svg",
    category: "Bestseller"
  },
  {
    id: 2,
    name: "Chocolate Dream",
    description: "Rich chocolate cake with ganache filling and chocolate buttercream.",
    price: 34.99,
    image: "/placeholder.svg",
    category: "Bestseller"
  },
  {
    id: 3,
    name: "Wedding Elegance",
    description: "Three-tier vanilla cake with buttercream and edible flowers.",
    price: 89.99,
    image: "/placeholder.svg",
    category: "Wedding"
  },
  {
    id: 4,
    name: "Birthday Funfetti",
    description: "Colorful vanilla cake with sprinkles and vanilla buttercream.",
    price: 28.99,
    image: "/placeholder.svg",
    category: "Birthday"
  },
  {
    id: 5,
    name: "Red Velvet",
    description: "Classic red velvet cake with cream cheese frosting.",
    price: 30.99,
    image: "/placeholder.svg",
    category: "Popular"
  },
  {
    id: 6,
    name: "Lemon Blueberry",
    description: "Tangy lemon cake with blueberry compote and lemon buttercream.",
    price: 32.99,
    image: "/placeholder.svg",
    category: "Seasonal"
  },
  {
    id: 7,
    name: "Carrot Cake",
    description: "Spiced carrot cake with walnuts and cream cheese frosting.",
    price: 29.99,
    image: "/placeholder.svg",
    category: "Popular"
  },
  {
    id: 8,
    name: "Tiramisu Cake",
    description: "Coffee-soaked sponge with mascarpone cream and cocoa.",
    price: 35.99,
    image: "/placeholder.svg",
    category: "Specialty"
  },
  {
    id: 9,
    name: "Black Forest",
    description: "Chocolate cake with cherries, whipped cream, and chocolate shavings.",
    price: 33.99,
    image: "/placeholder.svg",
    category: "Popular"
  },
  {
    id: 10,
    name: "Cookies & Cream",
    description: "Vanilla cake with cookie pieces and cookies & cream frosting.",
    price: 31.99,
    image: "/placeholder.svg",
    category: "Kids"
  },
  {
    id: 11,
    name: "Anniversary Gold",
    description: "Elegant vanilla cake with gold accents and champagne buttercream.",
    price: 45.99,
    image: "/placeholder.svg",
    category: "Anniversary"
  },
  {
    id: 12,
    name: "Gluten-Free Chocolate",
    description: "Rich chocolate cake made with gluten-free flour and chocolate ganache.",
    price: 36.99,
    image: "/placeholder.svg",
    category: "Dietary"
  }
];

const categories = [
  "All",
  "Bestseller",
  "Popular",
  "Wedding",
  "Birthday",
  "Anniversary",
  "Seasonal",
  "Specialty",
  "Kids",
  "Dietary"
];

const Products: React.FC = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const categoryFromUrl = urlParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  
  useEffect(() => {
    let filtered = [...allProducts];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        // Keep original order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, priceRange, sortBy]);
  
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mb-4">
            Our Cake Collection
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Browse our delicious selection of handcrafted cakes for every occasion. From birthdays to weddings, we have the perfect cake for your celebration.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search cakes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
              </button>
            )}
          </div>
          
          <div className="flex gap-2">
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-3 pr-8 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant="outline"
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            className={`md:col-span-3 md:block ${isFilterOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm sticky top-24 h-fit`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsFilterOpen(false)}
                className="md:hidden"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                    />
                    <span className={`ml-2 text-sm ${selectedCategory === category ? 'text-pink-600 dark:text-pink-400 font-medium' : 'text-gray-600 dark:text-gray-400'}`}>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Price Range</h4>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-md appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            <Button 
              onClick={() => {
                setSelectedCategory('All');
                setPriceRange([0, 100]);
                setSearchTerm('');
                setSortBy('featured');
              }}
              variant="outline"
              className="w-full"
            >
              Reset Filters
            </Button>
          </motion.div>
          
          <div className="md:col-span-9">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No cakes found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your filters or search term</p>
                <Button onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange([0, 100]);
                  setSearchTerm('');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
