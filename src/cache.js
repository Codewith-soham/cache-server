//JS's inbuilt function to store data in key-value pair


const cache = new Map()

//store data
cache.set("username", "Soham")
cache.set("username", "Rahul")
cache.set('age', 20)



//get data
console.log(cache.get("username"));

//has -> checks key weather it exsists or not
console.log(cache.has("username"));

console.log(cache.get("name"))
console.log(cache.size);


cache.delete("username")

console.log(cache.size);


