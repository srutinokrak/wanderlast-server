import express from 'express'
import {MongoClient} from 'mongodb'
import 'dotenv/config'
const app = express()

const PORT = 8000





// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
     console.log('You successfully connected to mongoDB');
     return client;
}
  catch(err){
    console.dir(err);
  }
}

connectToMongoDB()
app.get('/', (req,res)=>{
    res.send({message: "Server is running fine!"})
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT} `);
})