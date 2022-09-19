import express from "express";
import Connection from "./database/db.js";
import router from "./routes/route.js";
import cors from 'cors'
import bodyParser from "body-parser";


const app=express();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())
app.use('/',router)

const PORT=8000

Connection()

app.listen(PORT,()=>console.log(`this port is running at ${PORT} `))