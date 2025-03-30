
// Product variants data
export const productVariants: Record<string, string[]> = {
  "1": ["Regular Round", "Large Rectangle", "Superior Rectangle", "Small Rectangle"],
  "2": ["Regular Round", "Regular Square", "Small Rectangle"],
  "3": ["1 Tier", "2 Tier", "3 Tier", "4 Tier"],
  "4": ["Regular", "Extra Sprinkles", "Gold Sprinkles", "Rainbow Layers"],
  "13": ["Original", "Less Sweet", "Extra Sweet", "With Nuts"],
  "14": ["Regular Size", "Large Size", "Mini Size", "Gift Box"]
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
    "1 Tier": 89.99,
    "2 Tier": 149.99,
    "3 Tier": 199.99,
    "4 Tier": 249.99
  },
  "4": {
    "Regular": 28.99,
    "Extra Sprinkles": 32.99,
    "Gold Sprinkles": 38.99,
    "Rainbow Layers": 34.99
  },
  "13": {
    "Original": 36.99,
    "Less Sweet": 36.99,
    "Extra Sweet": 38.99,
    "With Nuts": 40.99
  },
  "14": {
    "Regular Size": 38.99,
    "Large Size": 48.99,
    "Mini Size": 28.99,
    "Gift Box": 54.99
  }
};
