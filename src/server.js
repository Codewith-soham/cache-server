import express from "express";

const app = express();

const port = 5000

//req.params -> takes params from the url
//req.query -> read url query paramaters
app.get('/cache/:key', (req,res) => {
    const key = req.params.key;
    const ttl = req.query.ttl;

    res.status(200).json({
        key: key,
        ttl: ttl
    })
})


app.get("/hello", (req,res) => {
    res.status(200).json({
        message: "hello from server"
    })
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})