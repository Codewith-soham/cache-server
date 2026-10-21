import express from "express"
import cacheServer from "./cache.js"
import e from "express"
const app = express()

const port = 3000 
const cache = new cacheServer()

app.use(express.json())

//store a value
app.post("/cache/:key", (req,res) => {
    const { key } = req.params;
    const { value } = req.body;

    if(!Object.hasOwn(req.body, "value")){
         return res.status(400).json(
            {
                error: "Request body must contain a value"
            }
         )
    }

    cache.set(key, value);

    res.json({
        message: "Value stored",
        key,
        value
    })
})

//retrival of data
app.get("/cache/:key", (req,res) => {
    const { key } = req.params;

    if(!cache.has(key)){
        return res.status(404).json({
            error: "Cache miss",
            key
        })
    }

    cache.get(key, value)

    res.json({
        status: "HIT",
        key,
        value: cache.get(key)
    })
})

app.delete("/cache/:key", (req,res) => {
    const deleted = cache.delete(req.paramss.key)


    res.json({
        deleted
    })
})

app.delete("/cache", (req,res) => {
    cache.clear()

    res.json({
        messaage: "cache cleared"
    })
})


app.listen(port, () => {
    console.log(`Cache-Server listening on ${port}`);
    
})