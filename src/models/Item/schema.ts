import { z } from "zod";

export const itemSizeSchema = z.enum(["sm", "md", "lg"]);

export const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  sizes: z.array(itemSizeSchema),
});

export type Item = z.infer<typeof itemSchema>;
