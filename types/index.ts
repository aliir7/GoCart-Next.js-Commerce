import { StaticImageData } from "next/image";

export type User = {
  id: string;
  name: string;
  email: string;
  image?: string | StaticImageData;
  cart?: Cart | null | undefined;
};

export type Store = {
  id: string;
  userId: string;
  name: string;
  description: string;
  username: string;
  address: string;
  status: "pending" | "rejected" | "approved" | string;
  isActive: boolean;
  logo: string | StaticImageData;
  email: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  mrp?: number;
  price: number;
  images: string[] | string | StaticImageData[];
  storeId?: string;
  inStock?: boolean;
  store: Store;
  category: string;
  rating: Rating[];
  createdAt?: string;
  updatedAt?: string;
};

export type Cart = Product & {
  quantity: number;
};

export type Rating = {
  id: string;
  rating: number;
  review: string;
  user: Pick<User, "name" | "image">;
  productId: string;
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

export type Order = {
  id: string;
  total: number;
  status: string;
  userId: string;
  storeId: string;
  addressId: string;
  isPaid: false;
  paymentMethod: string;
  createdAt: string;
  updatedAt?: string;
  isCouponUsed: boolean;
  coupon: Coupon;
  orderItems: OrderItem[];
  address: Address;
  user: User;
};

export type OrderItem = {
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product: Product;
};
