import { Router } from "express";
import { OrdersController } from "../controllers/orders";

const router = Router();

router.get("/orders", OrdersController.getOrders);

router.post("/orders", OrdersController.createOrder);

export default router;
