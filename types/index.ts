export type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  cart?: Cart;
};

export type Cart = {
  cartItems: string;
  total: number;
};

export type Store = {
  id: string;
  userId: string;
  name: string;
  description: string;
  username: string;
  address: string;
  status: "approved";
  isActive: boolean;
  logo: string;
  email: string;
  contact: string;
  updatedAt: string;
  user?: User;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  mrp: number;
  price: number;
  images: string[];
  storeId: string;
  inStock: boolean;
  store: Store[];
  category: string;
  rating: Rating[];
  createdAt: string;
  updatedAt: string;
};

export type Rating = {
  id: string;
  rating: number;
  review: string;
  user: Pick<User, "name" | "image">;
  productId: "prod_1";
  createdAt: string;
  updatedAt: string;
  product: Pick<Product, "name" | "category" | "id">;
};

export type Address = {
  id: string;
  userId: string;
  name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  createdAt: string;
};

export type Coupon = {
  code: string;
  description: string;
  discountPercent: number;
  forNewUser: boolean;
  forMember: boolean;
  isPublic: boolean;
  expiresAt: string;
  createdAt: string;
};
