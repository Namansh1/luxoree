export const fragrances = [
  { id: 1, name: "Marine Addiction", price: 99, image: "/images/marine.jpg" },
  { id: 2, name: "Velvet Oud", price: 99, image: "/images/oud.jpg" },
  { id: 3, name: "Citrus Noir", price: 99, image: "/images/citrus.jpg" },
  { id: 4, name: "Amber Rose", price: 99, image: "/images/rose.jpg" },
  { id: 5, name: "Ocean Mist", price: 99, image: "/images/ocean.jpg" },
  { id: 6, name: "Midnight Musk", price: 99, image: "/images/musk.jpg" },
  { id: 7, name: "Golden Saffron", price: 99, image: "/images/saffron.jpg" },
  { id: 8, name: "White Jasmine", price: 99, image: "/images/jasmine.jpg" }
];

// 👇 THIS IS THE FIX (MOST IMPORTANT)
export const products = fragrances;
