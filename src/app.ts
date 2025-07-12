import express from "express";
import cors from "cors";
import { config } from "./config/config";
import { errorHandler } from "./middleware/error.middleware";

// Import routes
// import authRoutes from "./routes/auth.routes";
// import userRoutes from "./routes/user.routes";
// import productRoutes from "./routes/product.routes";
// import orderRoutes from "./routes/order.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use(errorHandler);

export default app;
