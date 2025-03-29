
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
