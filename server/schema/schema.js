import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"


const schema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
})

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin,'user')

const User=mongoose.model('user',schema)
export default User