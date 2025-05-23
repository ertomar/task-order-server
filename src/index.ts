import express from "express";
import cors from "cors";

import ordersRoutes from "./routes/ordersRoutes";
import itemsRoutes from "./routes/itemsRoutes";

const app = express();
const PORT = 5137;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", [ordersRoutes, itemsRoutes]);

app.listen(PORT, (error?: Error) => {
  if (!error) {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`
    );
  } else {
    console.error("Error occurred, server can't start:", error);
  }
});
