import express from "express";

const app = express();

const port = 5000

app.get("/hello", (req,res) => {
    res.status(200).json({
        message: "hello from server"
    })
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})