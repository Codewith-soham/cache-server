import express from "express"
import cacheServer from "./cache.js"

const app = express()

const port = 3000 
const cache = new cacheServer()

app.use(express.json())

//store a value
app.post("/cache/:key", (req,res) => {
    const { key } = req.params;

    if(!Object.hasOwn(req.body, "value")){
         return res.status(400).json(
            {
                error: "Request body must contain a value"
            }
         )
    }

    const { value, ttl } = req.body;

    let ttlMs;
    if(ttlMs !== undefined){
        if(typeof ttl !== "number" || Number.isFinite(ttl) || ttl <= 0){
            return res.status(400).json({error: "ttl must be a postive number of seconds"})
        }

        ttlMs = ttl * 1000;
    }
    cache.set(key, value, ttlMs);

    res.json({
        message: "Value stored",
        key,
        value,
        ttl: ttl ?? cache.defaultTtlMs / 1000
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

    res.json({
        status: "HIT",
        key,
        value: cache.get(key)
    })
})

app.delete("/cache/:key", (req,res) => {
    const deleted = cache.delete(req.params.key)


    res.json({
        deleted
    })
})

app.delete("/cache", (req,res) => {
    cache.clear()

    res.json({
        message: "cache cleared"
    })
})

app.get("/cache/stat", (req,res) => {
    const size = cache.size

    res.json({
        message: "The size of the cache is",
        size
    })
})


app.listen(port, () => {
    console.log(`Cache-Server listening on ${port}`);
    
})