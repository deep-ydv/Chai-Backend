/* FIRST APPROACH --------------------------
import mongoose from "mongoose"
import { DB_NAME } from "./constants"

import express from "express"

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
    console.log("ERROR: ", error);
    throw error;
  }
})() //call immediate function
------------------------------------------------------------------------------------- */ 