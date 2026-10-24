class cacheServer {
    constructor(defaultTtlMs = 6000){ //ttl value set for 6s for each cache entry
        this.store = new Map() 
        this.defaultTtlMs = defaultTtlMs; 
    }

    //will set data in the cache according to proper key
    set(key, value, ttlMs = this.defaultTtlMs){
        const expiresAt = ttlMs? Date.now() + ttlMs : null //null -> never expires
        this.store.set(key, {value, expiresAt});
        return true
    }

    //will get the key where data is stored in the cache
    get(key){
        const entry = this.store.get(key)
        if(!entry) return undefined;
        if(entry.expiresAt && Date.now() > entry.expiresAt){
            this.store.delete(key);
            return undefined
        }
        return entry.value;
    }

    //will checks weather key exists in the cache
    has(key){
        const entry = this.store.get(key)
        if(!entry) return undefined

        if(entry.expiresAt && Date.now() > entry.expiresAt){
            this.store.delete(key)
        }
        return this.store.has(key);
    }

    delete(key){
        if(!this.store.has(key)){
            return undefined
        }
        return this.store.delete(key)
    }

    
    clear(){
        return this.store.clear()
    }

    //tells total number of entries
    get size(){
        return this.store.size;
    }
}

export default cacheServer;