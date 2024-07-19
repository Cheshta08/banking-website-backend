const express=require('express')
const app=express()
const cors=require("cors");

require('dotenv').config();
const PORT=5000||process.env.PORT;
const connectDB=require('./db/connect');
const router=require("./router/user-router")

const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH",
    credentials:true,
}
app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}));
connectDB()
app.use("/",router);


app.listen(PORT,()=>{
    console.log("server is running on 5000 port")
});

