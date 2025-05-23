export class Order {
  id: string;
  items: { id: string; size: "sm" | "md" | "lg"; quantity: number }[];
  totalPrice: number;
  createdAt: string;
}
