import { Product } from '@/models/Product';

// Products data
export const allProducts: Product[] = [
  {
    id: 1,
    name: "Strawberry Cheesecake",
    description: "Light vanilla sponge with fresh strawberry filling and cream cheese frosting.",
    price: 32.99,
    image: "/products/Strawberry-Cheesecake.jpg",
    category: "Bestseller"
  },
  {
    id: 2,
    name: "Red Velvet",
    description: "Our Red Velvet cake is a moist and decadent dessert that's perfect for any occasion. The rich, velvety texture of the cake is complemented by the creamy, tangy sweetness of the cream cheese frosting.",
    price: 40.99,
    image: "/products/Red-Velvet-Regular-Round.webp",
    category: "Bestseller"
  },
  {
    id: 3,
    name: "Tiramisu Cake",
    description: "Craving a taste of Italian heaven? Our legendary Tiramisu Cake is the perfect treat. It's a decadent blend of coffee, cocoa, and creamy mascarpone that's sure to satisfy your sweet tooth. With its layers of ladyfingers soaked in coffee and the light and airy mascarpone cream, it's a taste sensation that will leave you wanting more.",
    price: 89.99,
    image: "/products/Tiramisu-Regular-Round.webp",
    category: "Bestseller"
  },
  {
    id: 4,
    name: "Blueberry Cheesecake",
    description: "Imagine a cloud-like cheesecake, topped with a vibrant swirl of sweet and tangy blueberry compote. Our Blueberry Cheesecake is a decadent dessert that will satisfy your cravings for both creamy and fruity flavors.",
    price: 90.99,
    image: "/products/Blueberry-Cheesecake-Regular-Round.webp",
    category: "Birthday"
  },
  {
    id: 5,
    name: "Lapis Signature",
    description: "A combination of popular local delicacy, made with the highest quality ingredients, creating a dense and tasty cake for everyone to enjoy.",
    price: 40.99,
    image: "/products/Lapis-Signature.webp",
    category: ["Traditional Cake", "Bestseller"]
  },
  // {
  //   id: 5,
  //   name: "Red Velvet",
  //   description: "Classic red velvet cake with cream cheese frosting.",
  //   price: 30.99,
  //   image: "/placeholder.svg",
  //   category: "Popular"
  // },
  // {
  //   id: 6,
  //   name: "Lemon Blueberry",
  //   description: "Tangy lemon cake with blueberry compote and lemon buttercream.",
  //   price: 32.99,
  //   image: "/placeholder.svg",
  //   category: "Seasonal"
  // },
  // {
  //   id: 7,
  //   name: "Carrot Cake",
  //   description: "Spiced carrot cake with walnuts and cream cheese frosting.",
  //   price: 29.99,
  //   image: "/placeholder.svg",
  //   category: "Popular"
  // },
  // {
  //   id: 8,
  //   name: "Tiramisu Cake",
  //   description: "Coffee-soaked sponge with mascarpone cream and cocoa.",
  //   price: 35.99,
  //   image: "/placeholder.svg",
  //   category: "Specialty"
  // },
  // {
  //   id: 9,
  //   name: "Black Forest",
  //   description: "Chocolate cake with cherries, whipped cream, and chocolate shavings.",
  //   price: 33.99,
  //   image: "/placeholder.svg",
  //   category: "Popular"
  // },
  // {
  //   id: 10,
  //   name: "Cookies & Cream",
  //   description: "Vanilla cake with cookie pieces and cookies & cream frosting.",
  //   price: 31.99,
  //   image: "/placeholder.svg",
  //   category: "Kids"
  // },
  // {
  //   id: 11,
  //   name: "Anniversary Gold",
  //   description: "Elegant vanilla cake with gold accents and champagne buttercream.",
  //   price: 45.99,
  //   image: "/placeholder.svg",
  //   category: "Anniversary"
  // },
  // {
  //   id: 12,
  //   name: "Gluten-Free Chocolate",
  //   description: "Rich chocolate cake made with gluten-free flour and chocolate ganache.",
  //   price: 36.99,
  //   image: "/placeholder.svg",
  //   category: "Dietary"
  // },
  
];
