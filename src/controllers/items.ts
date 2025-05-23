import { Request, Response } from "express";
import { handleCatchError } from "../utils/error";
import { mockedItems } from "../mock";

const items = [...mockedItems];

export class ItemsController {
  static async getItems(_req: Request, res: Response): Promise<void> {
    try {
      res.status(200).send(items);
    } catch (err) {
      handleCatchError(res, err);
    }
  }
}
