import mongoose from "mongoose";

const Connection=async()=>{
    const URL=`mongodb://vivek:vivekHcs@ac-8tlk49c-shard-00-00.kx4llzj.mongodb.net:27017,ac-8tlk49c-shard-00-01.kx4llzj.mongodb.net:27017,ac-8tlk49c-shard-00-02.kx4llzj.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-z8fz5o-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true}) 
        console.log("database is connected") 
    } catch (error) {
        console.log(error);
    }
   
}

export default Connection