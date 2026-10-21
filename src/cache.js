class cacheServer {
    constructor(){
        this.store = new Map()  
    }

    //will set data in the cache according to proper key
    set(key, value){
        this.store.set(key, value);
        return true
    }

    //will get the key where data is stored in the cache
    get(key){
        if(!this.store.key(key)){
            return undefined
        }

        return this.store.get(key)
    }

    //will checks weather key exists in the cache
    has(key){
        return this.store.has(key);
    }

    delete(key){
        this.store.delete(key)
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