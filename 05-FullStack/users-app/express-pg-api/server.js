import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import pgclient from "./db.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("🚀 PostgreSQL + Express API is running!");
});

pgclient.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })