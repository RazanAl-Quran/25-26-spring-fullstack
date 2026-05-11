import express from "express";

const router = express.Router();

// from DB
let users = [
    {id: 1, username:"Alice", age:27},
    {id: 2, username:"Bob", age:57}
]

// endpoints

// get all users
// localhost:3000/users/
router.get("/",(req,res)=>{
    // get user form DB
    // send res of users
    res.json(users);
})


// get user by id
// localhost:3000/users/2
// return user data with id x
router.get("/:id2",(req,res)=>{

    const user = users.find(user=> user.id == req.params.id2);
    user ? res.json(user) :  res.json({message:"user not found"}); //ternary if

    // const user = users.find((user=>{
    //     if(user.id == req.params.id2) {
    //         return user;
    //     }
    // }))

    // if(user) {
    //     res.json(user);
    // } else {
    //     res.json({message:"user not found"})
    // }
})


// add user
// localhost:3000/users/addUser
router.post("/addUser",(req,res)=>{
    // return user data with id x
})

export default router;