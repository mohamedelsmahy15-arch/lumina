import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Lumina Hub X1",
    tagline: "Central Intelligence for your home",
    price: 299,
    image: "https://picsum.photos/600/600?random=1",
    isNew: true,
    rating: 5
  },
  {
    id: 2,
    name: "AeroPurify Pro",
    tagline: "AI-driven air quality control",
    price: 450,
    image: "https://picsum.photos/600/600?random=2",
    rating: 4.8
  },
  {
    id: 3,
    name: "Vision Cam 360",
    tagline: "See everything, anywhere",
    price: 129,
    image: "https://picsum.photos/600/600?random=3",
    rating: 4.9
  },
  {
    id: 4,
    name: "Sonic Bass 9",
    tagline: "Immersive spatial audio",
    price: 399,
    image: "https://picsum.photos/600/600?random=4",
    isNew: true,
    rating: 5
  },
  {
    id: 5,
    name: "ThermaSense",
    tagline: "Climate adaptive thermostat",
    price: 199,
    image: "https://picsum.photos/600/600?random=5",
    rating: 4.7
  },
  {
    id: 6,
    name: "Lumina Lock Bolt",
    tagline: "Biometric security redefined",
    price: 249,
    image: "https://picsum.photos/600/600?random=6",
    rating: 4.6
  }
];

export const bestSellers: Product[] = [
  products[0],
  products[3],
  products[2]
];