export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;

    count: number;
    description: string;
    icon: string;
    weight:string
  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }