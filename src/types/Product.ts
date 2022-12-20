export interface Product {
  id: string;
  name: string;
  imgURL: string;
  category: string;
  description: string;
  price: number;
  discountPrice: number;
  pieces: number;
  createdAt: Date;
}

export interface CartProduct extends Product {
  amount: number;
}
