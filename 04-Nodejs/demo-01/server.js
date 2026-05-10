import express from "express";

const app = express();

const PORT = 3001;

// ENDPOINTS
// localhost:3001/
app.get("/",(req,res)=>{
    res.send('welcome to the home route')
})

// localhost:3001/test
app.get("/test",(req,res)=>{
    res.json({test:"test test"})
})

app.use((req,res)=>{
    res.status(404).send('not found');
})


app.listen(PORT,()=>{
console.log(`Server is ALIVE on PORT ${PORT}`);

})