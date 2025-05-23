import { Request, Response } from "express";
import { handleCatchError } from "../utils/error";
import { Order } from "../models/Order/order";
import { mockedItems, mockedOrders } from "../mock";
import { v4 as uuidv4 } from "uuid";
import { orderCreateSchema } from "../models/Order/schema";

const orders: Order[] = [...mockedOrders];
const items = [...mockedItems];

export class OrdersController {
  static async getOrders(_req: Request, res: Response): Promise<void> {
    try {
      const ordersWithItems = orders.map((order) => ({
        ...order,
        items: order.items.map((item) => {
          const itemData = items.find((i) => i.id === item.id);

          return {
            id: item.id,
            name: itemData?.name,
            price: itemData?.price,
            size: item.size,
            quantity: item.quantity,
          };
        }),
      }));

      res.status(200).send(ordersWithItems);
    } catch (err) {
      handleCatchError(res, err);
    }
  }

  static async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const order = req.body;
      const validatedOrder = orderCreateSchema.parse(order);
      const totalPrice = validatedOrder.items.reduce((acc, item) => {
        const itemPrice = items.find((i) => i.id === item.id)?.price;
        if (!itemPrice) {
          throw new Error(`Item with id ${item.id} not found`);
        }
        return acc + (itemPrice || 0) * item.quantity;
      }, 0);

      const createdAt = new Date().toISOString();

      const newOrder: Order = {
        id: uuidv4(),
        items: validatedOrder.items.map((item) => ({
          id: item.id,
          size: item.size,
          quantity: item.quantity,
        })),
        totalPrice,
        createdAt,
      };

      orders.push(newOrder);
      res.json(newOrder);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
}
