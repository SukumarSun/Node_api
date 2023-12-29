require('dotenv').config()
const express = require("express") 
const app = express()
const mongoose= require("mongoose")
const productRoute=require('./routes/productRoute')
const errorMiddleware=require('./middlewares/errorMiddleware')
const cors=require("cors")

const front_end=process.env.FRONTEND
const mongo_url=process.env.URL
const port=process.env.PORT || 3000

const corsOptions={
    origin: front_end,
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/products', productRoute)


app.get('/',(req,res)=>{
    // res.send("hello world")
    throw new Error("fake error")
})

app.use(errorMiddleware)



app.get('/blog',(req,res)=>{
    res.send("this is blog")
})



mongoose.connect(mongo_url)
.then(()=>{
    app.listen(port,()=>{
        console.log("app is running")
    })
    
    console.log(`mongodb is connected to port ${port}`)
})
.catch((err)=>{
    console.log(err)
})