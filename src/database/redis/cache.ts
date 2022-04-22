import * as redis from "redis"

const client = redis.createClient()

client.on("connect", ()=>{
    console.log("connected to redis")
})
client.on("error", (error)=>{
    console.log("There was an error on  redis", error)
});

export const putIntoCache=async(key:string, data:any)=>{
    try{
        await client.set(key, JSON.stringify(data))
    }
    catch(error){
        console.error(error)
        return Promise.reject(error)
    }
}

