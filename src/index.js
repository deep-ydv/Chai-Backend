import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
  path:'./env'
})

connectDB();
















/* FIRST APPROACH --------------------------NOT WORKING YET 
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"

import express from "express"

dotenv.config({
  path:'./env'
})

const app=express()

//using immediate function we can connect database
( async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // syntax to connect databse
    app.on("error",(error)=>{
      console.log("ERRR: ", error);
      throw error;
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.log("ERROR in catch : ", error);
    throw error;
  }
})() //call immediate function
// ------------------------------------------------------------------------------------- */ 