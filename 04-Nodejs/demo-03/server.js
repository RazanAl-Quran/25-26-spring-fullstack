import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import pgClient from "./db.js";

const app = express();
dotenv.config();
app.use(express.json());


const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("home route");
})

app.use("/users", userRoutes);



pgClient.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    })
})
