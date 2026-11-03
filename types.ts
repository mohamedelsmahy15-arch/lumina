import React from 'react';

export interface Product {
  id: number;
  name: string;
  tagline: string;
  price: number;
  image: string;
  isNew?: boolean;
  rating?: number;
}

export interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}