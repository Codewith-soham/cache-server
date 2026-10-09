import express from "express";

const app = express();

const port = 5000

//req.params 
app.get('/cache/:key', (req,res) => {
    console.log(req.params);
    
})

app.get("/hello", (req,res) => {
    res.status(200).json({
        message: "hello from server"
    })
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})