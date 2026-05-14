import express, { Router } from "express";
import pgClient from "../db.js";


const userRoutes = express.Router();

// routes

// http://localhost:3000/users
// method: GET
userRoutes.get("/",async (req,res)=>{
    const allusers = await pgClient.query("SELECT * FROM users;");
    res.json(allusers.rows);
});

// localhost:3000/users/
// method: post
// {
//   "name":"sherry",
//   "age": 8
// }
userRoutes.post("/",async (req,res)=>{
    const {name,age} = req.body;
    // const name = req.body.name;
    // const age = req.body.age;
    const result = await pgClient.query("INSERT INTO users (name, age) VALUES ($1, $2)  RETURNING *",[name, age]);
    res.json(result.rows);
});


// localhost:3000/users/1
// method: get
userRoutes.get("/:id", async (req, res) => {
  try {
    const result = await pgClient.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

userRoutes.delete("/:id", async (req, res) => {
  try {
    const result = await pgClient.query("DELETE FROM users WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


export default userRoutes;