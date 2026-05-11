import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js"

const app = express();
dotenv.config();

// const PORT = 3000;
const PORT = process.env.PORT;

// Endpoints

// localhost:3000/
app.get("/",(req,res)=>{
    res.send('home route');
    // fetch("weather/key=process.env.API_KEY")
})

// localhost:3000/test
app.get("/test",(req,res)=>{
    res.send('test route');
})

// user routes /endpoints/requests
// 4 routes
// localhost:3000/users
app.use("/users",userRoutes);


// admoin routes /endpoints/requests
// 7 routes

app.use((req,res)=>{
    res.status(404).json({messgae:"Route not found"})
})


app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);  
})