import { Category } from "./category.model";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  imageUrls?: string[];
  category?: Category;
  soldCount: number;
  discountPercentage: number;
  rate?: { averageValue: number; rateCount: number };
}
