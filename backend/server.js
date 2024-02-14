import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongo from "./database/connection.js";
import { app, server } from "./socket/socket.js";

config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
    credentials: true, // Enable credentials (cookies, authorization headers, etc)
  })
);

app.get("/", (req, res) => {
  res.send("This is the root route!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongo();
  console.log(`Server running on http://localhost:${PORT}`);
});
