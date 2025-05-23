import { Router } from "express";
import { ItemsController } from "../controllers/items";

const router = Router();

router.get("/items", ItemsController.getItems);

export default router;
