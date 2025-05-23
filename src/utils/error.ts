import { Response } from "express";

export const handleCatchError = (res: Response, err: unknown) => {
  console.error(err);
  return res.status(500).json({ error: "Internal server error" });
};
