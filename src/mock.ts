import { Item } from "./models/Item/Item";
import { Order } from "./models/Order/order";

export const mockedItems: Item[] = [
  {
    id: "1",
    name: "Espresso",
    price: 100,
    sizes: ["sm", "md", "lg"],
  },
  {
    id: "2",
    name: "Latte",
    price: 200,
    sizes: ["sm", "md", "lg"],
  },
  {
    id: "3",
    name: "Iced Americano",
    price: 300,
    sizes: ["sm", "md", "lg"],
  },
  {
    id: "4",
    name: "Cappuccino",
    price: 400,
    sizes: ["sm", "md", "lg"],
  },
  {
    id: "5",
    name: "Orange Juice",
    price: 500,
    sizes: ["lg"],
  },
];

export const mockedOrders: Order[] = [
  {
    id: "1",
    items: [
      { id: "1", size: "sm", quantity: 1 },
      { id: "2", size: "md", quantity: 2 },
      { id: "3", size: "lg", quantity: 3 },
    ],
    totalPrice: 1400,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    items: [
      { id: "1", size: "sm", quantity: 2 },
      { id: "2", size: "md", quantity: 1 },
      { id: "3", size: "lg", quantity: 1 },
    ],
    totalPrice: 700,
    createdAt: new Date(
      new Date().setHours(new Date().getHours() - 1)
    ).toISOString(),
  },
];
