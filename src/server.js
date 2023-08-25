import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import router from './routes/index';
import bodyParser from 'body-parser';


const app=express();
dotenv.config()
app.use(bodyParser.json())
app.use("/api/v1",router)
const database=process.env.DATABASE
const port=process.env.PORT

//configure port

app.listen(port,()=>{
    console.log(`Port running on ${port}`)
})
mongoose.connect(database).then(()=>{
    console.log(`Datase successfuly connected`)
}).catch((err)=>{
    console.log(`datase error....${err}`)
})

export default app