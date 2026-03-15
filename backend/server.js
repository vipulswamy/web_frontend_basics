import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(cors()); // allow frontend to call backend
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// the current backend  endpoints
// get --> /api/students
// post --> /api/students
// put --> /api/students/:id
// delete --> /api/students/:id