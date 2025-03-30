
// Product variants data
export const productVariants: Record<string, string[]> = {
  "1": ["Regular Round", "Large Rectangle", "Superior Rectangle", "Small Rectangle"],
  "2": ["Regular Round", "Regular Square", "Small Rectangle"],
  "3": ["Regular Round", "Large Rectangle", "Small Rectangle"],
  "4": ["Regular Round", "Large Rectangle", "Superior Rectangle"],
};

// Variant image mapping for each product ID
export const variantImageMapping: Record<string, Record<string, string>> = {
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
  "3": {
    "Regular Round": "/products/Tiramisu-Regular-Round.webp",
    "Large Rectangle": "/products/Tiramisu-Large-Rectangle.webp",
    "Small Rectangle": "/products/Tiramisu-Small-Rectangle.webp"
  },
  "4": {
    "Regular Round": "/products/Blueberry-Cheesecake-Regular-Round.webp",
    "Large Rectangle": "/products/Blueberry-Cheesecake-Large-Rectangle.webp",
    "Superior Rectangle": "/products/Blueberry-Cheesecake-Superior-Rectangle.webp",
  },
};

// Variant price mapping for each product ID
export const variantPriceMapping: Record<string, Record<string, number>> = {
  "1": {
    "Regular Round": 32.99,
    "Large Rectangle": 42.99,
    "Superior Rectangle": 52.99,
    "Small Rectangle": 28.99
  },
  "2": {
    "Regular Round": 40.99,
    "Regular Square": 45.99,
    "Small Rectangle": 36.99
  },
  "3": {
    "Regular Round": 32.99,
    "Large Rectangle": 42.99,
    "Small Rectangle": 36.99
  },
 "4": {
    "Regular Round": 36.99,
    "Large Rectangle": 46.99,
    "Superior Rectangle": 56.99,
  },
};
