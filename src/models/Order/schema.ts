import { z } from "zod";
import { itemSchema, itemSizeSchema } from "../Item/schema";

export const orderCreateSchema = z.object({
  items: z.array(
    z.object({
      id: itemSchema.shape.id,
      size: itemSizeSchema,
      quantity: z.number(),
    })
  ),
});

export type OrderCreate = z.infer<typeof orderCreateSchema>;
