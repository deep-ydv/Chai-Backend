import mongoose from "mongoose"
import DB_NAME from "constants"

const connectDB= async()=>{
  try {
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
    // mongoose.connect -> return a OBJECT so we store in a variable

    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB Conncection ERROR: ",error);
    process.exit(1); // throw err altrnative
  }
}

export default connectDB;