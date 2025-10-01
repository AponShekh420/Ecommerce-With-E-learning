export type ProductType = {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  sku: string;
  stock: number;
  price: string;
  status: string;
  rating: number[];
  slug: string;
  images: string[];
};

interface Customer {
  name: string;
  avatar: string;
}

export interface ProductReviewType {
  id: string;
  product: { name: string; category: string; thumbnail: string };
  review: string;
  customer: Customer;
  status: string | undefined;
  rating: number;
  createdAt: Date;
}
