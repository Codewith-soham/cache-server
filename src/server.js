import express from "express";

const app = express();

const port = 5000

app.use(express.json(0)) //enables json parsing (converting raw json string into native data objects)

//custome middleware 
app.use((req, res, next) => {
    console.log(req.method, req.url); //logs the incoming request
    next();
}) 


//req.params -> takes params from the url
//req.query -> read url query paramaters
//ttl -> how much time should a value live before it get's expired
app.post('/cache/:key', (req,res) => {
    const key = req.params.key 
    const value = req.body.value //takes request from user
    
    if(!value){
        res.status(400).json({
            error: "Value is required"
        })
    }

    res.status(201).json({
        key: key,
        value: value
    })
})


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